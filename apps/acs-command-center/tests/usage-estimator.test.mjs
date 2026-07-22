import assert from "node:assert/strict";
import test from "node:test";
import { pathToFileURL } from "node:url";

const moduleUrl = pathToFileURL(new URL("../lib/usage-estimator.ts", import.meta.url).pathname).href;
const { estimateTaskUsage, tokenUsageCost } = await import(moduleUrl);

test("reproduces the GPT-5.6 Sol token rate card", () => {
  const credits = tokenUsageCost("codex", { inputTokens: 2_000_000, cachedInputTokens: 1_000_000, outputTokens: 100_000 }, "gpt-5.6-sol");
  assert.equal(credits, 212.5);
});

test("reproduces Claude Sonnet 5 API-equivalent pricing", () => {
  const dollars = tokenUsageCost("claude", {
    inputTokens: 1_000_000,
    cacheCreationInputTokens: 1_000_000,
    cacheReadInputTokens: 1_000_000,
    outputTokens: 100_000,
  }, "claude-sonnet-5");
  assert.equal(dollars, 5.7);
});

test("blocks low-utility expensive work", () => {
  const estimate = estimateTaskUsage({
    platform: "codex",
    taskClass: "large-corpus-analysis",
    importanceRank: 1,
    scope: "large",
    contextState: "saturated",
    reasoningLevel: "high",
    completionPasses: 4,
  });
  assert.equal(estimate.status, "block");
  assert.equal(estimate.costRank, 4);
  assert.match(estimate.reasons.join(" "), /disproportionate/i);
});

test("allows a fresh bounded high-utility task", () => {
  const estimate = estimateTaskUsage({
    platform: "codex",
    taskClass: "bounded-documentation",
    importanceRank: 3,
    scope: "small",
    contextState: "fresh",
    reasoningLevel: "low",
    completionPasses: 1,
  });
  assert.equal(estimate.status, "allow");
  assert.equal(estimate.costRank, 1);
});

test("recent task usage creates a conservative estimate floor", () => {
  const estimate = estimateTaskUsage({
    platform: "codex",
    taskClass: "quick-response",
    importanceRank: 4,
    scope: "small",
    contextState: "fresh",
    reasoningLevel: "low",
    completionPasses: 2,
    model: "gpt-5.6-sol",
    recentUsage: { inputTokens: 1_000_000, cachedInputTokens: 900_000, outputTokens: 10_000 },
    explicitCostApproval: true,
  });
  assert.ok(estimate.p80 >= 78.1);
  assert.equal(estimate.audit.basis.recentUsageFloor.model, "gpt-5.6-sol");
  assert.equal(estimate.audit.basis.recentUsageFloor.lastPassCost, 31.25);
});

test("emits a reproducible compact calculation audit", () => {
  const input = {
    platform: "codex",
    taskClass: "bounded-documentation",
    importanceRank: 3,
    scope: "small",
    contextState: "fresh",
    reasoningLevel: "low",
    completionPasses: 1,
  };
  const first = estimateTaskUsage(input);
  const second = estimateTaskUsage(input);
  assert.equal(first.audit.calculationVersion, "usage-estimator-v2");
  assert.equal(first.audit.calculationId, second.audit.calculationId);
  assert.deepEqual(first.audit.basis.baseCalibration, { p50: 18, p80: 40, p95: 85, sampleSize: 9, confidence: "medium" });
  assert.equal(first.audit.basis.factors.combined, 0.405);
  assert.ok(Math.abs(first.audit.intermediateValues.calibratedUnrounded.p80 - 16.2) < Number.EPSILON * 20);
  assert.equal(first.audit.output.p80, 16.2);
  assert.match(first.audit.formulas.calibratedBand, /scope factor/);
  assert.match(first.audit.limitations.join(" "), /actual post-run usage/i);
});
