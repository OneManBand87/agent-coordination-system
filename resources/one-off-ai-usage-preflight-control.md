# One-Off AI Usage Preflight and Utility-Cost Gate

Status: Mandatory operating control

Last verified: 2026-07-21

Canonical source: [NEURO-DIV - Agentic Communication Scaffold (ACS) - Shared Agent Brief - Current](https://docs.google.com/document/d/1luvRe6aZBdCIuJYC6PlGQjBe_u1yxiAWUS5y5EpfQ_Q/edit)

Decision analysis: [NEURO-DIV - AI Usage Preflight and Utility-Cost Analysis - v1 - 2026-07-21](https://docs.google.com/document/d/1SS04mfOXWlPKo4dv-MSOtAWLzv_h8kDzpI10xEjE7K8/edit)

## Purpose

Before substantive one-off Codex or Claude execution could materially consume a hard plan allowance or paid overage, estimate the bounded completion cost and compare it with production utility. This control complements the recurring-automation cost control; it does not replace it.

The preflight is deterministic and invokes no model. It controls substantive execution after intake. A prompt already submitted directly to an AI platform necessarily incurs at least the platform's intake and interpretation cost; running the CCS preflight before dispatch avoids that start cost.

## Required inputs

- platform: Codex/OpenAI or Claude;
- work type;
- production-importance rank from one through four;
- bounded scope: small, medium, or large;
- context state: fresh, established, long, or saturated;
- reasoning level;
- maximum completion passes;
- selected model when known; and
- most recent input, cached-input, and output token mix when available.

## Estimate output

Return all of the following before execution:

- likely (`p50`), conservative (`p80`), and stress-case (`p95`) usage;
- unit and provider-rate basis;
- calibration confidence and sample size;
- cost rank;
- utility score and normalized utility-to-usage ratio;
- allow, bounded-cost-decision, or block status; and
- lower-cost alternatives considered first.

Each estimate must also return a compact structured calculation trace conforming to the [Calculation Provenance and Audit Control](calculation-provenance-and-audit-control.md): stable calculation ID; estimator and calibration versions; normalized inputs; base calibration band and sample size; scope, context, reasoning, and pass factors; combined multiplier; recent-usage floor and rate-card basis when used; unrounded and rounded outputs; formulas; thresholds; uncertainty; and the resulting decision. The trace is the canonical calculation-level record; other narratives should link to or summarize it rather than duplicate it.

Codex reports credits under the current provider token rate for input, cached input, and output. Claude reports API-equivalent overage exposure. Claude values must not be described as a percentage of the Pro allowance because Anthropic does not publish a stable token-to-plan conversion.

## Active gates

Codex cost ranks:

- low: no more than 20 credits;
- medium: above 20 through 100 credits;
- high: above 100 through 400 credits; and
- extreme: above 400 credits.

Claude API-equivalent cost ranks:

- low: no more than $0.25;
- medium: above $0.25 through $0.75;
- high: above $0.75 through $2.00; and
- extreme: above $2.00.

Decision rules:

- Block when adjusted cost rank exceeds importance rank.
- Block when normalized utility-to-usage ratio is below 20.
- Require a bounded cost decision when cost and importance are equal, cost is high or extreme, or the ratio is below 40.
- Allow automatically only when the task is bounded, cost is below importance, and the ratio is at least 40.
- Unknown or unbounded scope is not low cost and blocks execution.

Before escalating a bounded cost decision, the agent must attempt the cheaper viable design: fresh focused task, concise handoff, smaller decision-producing scope, medium or lower reasoning, deterministic connector or native action, one completion pass, and an explicit stop condition.

## Calibration and evidence

Initial Codex calibration uses 74 non-fork local task records. Fork snapshots and inherited history are excluded to avoid double counting. Initial Claude calibration uses four locally available task records and is therefore low confidence.

Post-run actual token and cost evidence must update calibration by platform, model, work type, context state, and completion scope. Provider rate changes require a calibration-version update before new estimates are treated as current.

## Capacity-aware job-cost gate

Utility remains the first gate. Available capacity does not make low-value work worthwhile, and high utility does not make an unbounded or deficit-producing plan feasible. After the utility gate passes, the agent must assess whether the task fits inside the active provider window without consuming protected capacity for already committed work, unplanned productive work, or system-failure risk.

Use deterministic provider telemetry already available to the client whenever possible: current used or remaining percentage, reset time, any provider-supported reset, observed rate-card-equivalent consumption, current project commitments, and task estimates. Do not create recurring LLM polling. When automatic read-back is unavailable, request a current usage-menu screenshot or a bounded screen-share read and stop substantive execution until the capacity effect can be assessed.

Use these calculations:

- `Implied_Window_Capacity = Observed_Consumed_Credits / Used_Fraction`, expressed as a range when the displayed percentage is rounded;
- `Allocatable_Capacity = Remaining_Capacity - Committed_Work_Reserve - Unplanned_Production_Reserve - Reliability_Reserve`;
- `Allocation_Coverage = Allocatable_Capacity / Planned_Commitments`; and
- `Administrative_Overhead_Ratio = Administrative_And_Control_Credits / Total_Window_Capacity`.

Normal committed work is reserved at `p80`; critical, deadline-sensitive, or high-variance work is reserved at `p95`. Until prospective calibration replaces these policy choices, preserve 15% of total weekly capacity for unplanned productive work and 10% for estimation error, system failure, or newly integrated components. Cap ordinary administrative, monitoring, control-application, and budget-management overhead at 5% of total weekly capacity. These percentages are provisional risk parameters, not empirically validated thresholds. A required remediation or explicit user exception may exceed the administrative cap only with a bounded scope and exact capacity disclosure.

Capacity is feasible only when the applicable `p80` or `p95` estimate fits inside allocatable capacity and does not breach a protected reserve or the administrative-overhead cap. If it does not fit, reduce scope or model cost, defer to the next reset, or present one bounded user decision. Purchased credits or overage exposure must never be presumed.

## CCS decision metrics

The CCS capacity view should expose only decision-producing metrics:

- usable weekly headroom after reserves;
- committed `p80` or `p95` allocation by project;
- allocation coverage and actual-versus-planned burn;
- administrative-overhead ratio;
- current reset date and available provider reset; and
- project-level and aggregate deficit status.

Green means commitments and reserves are covered with at least `1.5x` allocation coverage. Amber means `1.0x` through less than `1.5x`. Red means commitments exceed allocatable capacity or any protected reserve is breached. Collection must be deterministic, event-driven, consolidated, silent on no change, and must not create a task per observation.

## Positive operating evidence — clipboard workflow

On 2026-07-21 the gate stopped the clipboard-text-to-file administrative task before substantive execution. A subsequent account-status read showed 96% of the weekly allowance remaining, a July 28 reset, and one available reset. Local rate-limit telemetry showed 4% used and approximately 984.4 provider-rate-equivalent credits consumed. The exact audit record is `usage-capacity-2026-07-21-clipboard-shortcut-v1` in the Calculation Provenance and Audit Control. Its point implied capacity is `984.4 / 0.04 = 24,610 credits`; treating the displayed 4% as rounded to the nearest percentage point yields an inferred interval of `21,875.56–28,125.71 credits`. Against the task estimate of 41 credits likely, 121 conservative, and 230 stress case, point effects are `0.1666%`, `0.4917%`, and `0.9346%`; interval effects are `0.1458%–0.1874%`, `0.4301%–0.5531%`, and `0.8178%–1.0514%`, respectively.

This is positive evidence that the gate interrupted execution and enabled an informed bounded decision. It is not proof of sustained effectiveness. The source directive and capacity-design request were read back from CCS intake item `intake-3f7b92bf-5fc7-4d65-9a8d-32528269323d`.

## Implementation boundary

The control design and documentation are current. Automatic telemetry collection and the CCS allocation dashboard remain a separate bounded implementation step. Production activation must preserve no-model event-driven collection, no-op suppression, no task churn, protected reserves, and direct read-back verification.

## Implementation

- CCS form: `apps/acs-command-center/app/UsageEstimator.tsx`
- deterministic API: `apps/acs-command-center/app/api/usage/estimate/route.ts`
- estimator: `apps/acs-command-center/lib/usage-estimator.ts`
- calibration: `apps/acs-command-center/lib/usage-calibration.ts`
- agent tool: `estimate_task_usage`
- verification: `apps/acs-command-center/tests/usage-estimator.test.mjs`
