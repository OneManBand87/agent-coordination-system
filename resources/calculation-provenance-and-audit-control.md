# Calculation Provenance and Audit Control

Status: Mandatory project-wide control

Effective: 2026-07-22

## Purpose

Every calculation that materially informs a NEURO-DIV artifact, status, estimate, threshold, allocation, decision, approval, or completion claim must be reproducible from a compact durable record. The record must explain the basis without forcing future agents to reload an entire task transcript or create recurring AI work.

## Required calculation record

Record the following at the narrowest useful level:

- a stable calculation ID and calculation/version identifier;
- purpose, timestamp or as-of date, authoring system, and target artifact or decision;
- every decision-relevant input, its unit, source, observation date, and whether it is observed, sourced, assumed, inferred, provisional, or unknown;
- the exact formula or deterministic algorithm, including lookup tables, rate cards, factors, thresholds, and policy parameters;
- decision-relevant intermediate values before rounding;
- output values, units, rounding rule, precision, and uncertainty or range treatment;
- validation checks, contradictory evidence, limitations, and unresolved assumptions;
- the resulting decision or downstream use; and
- links or stable identifiers for canonical Drive, CCS, repository code, tests, and superseded versions.

Never backfill a generated identifier, rate, observation, or result from prediction. Read it from the originating system first. Never silently replace a prior result: retain the old record or revision and link the superseding calculation.

## Context and usage proportionality

Use one canonical machine-readable trace plus a short human-readable summary. Code should emit a structured trace with the result; tests should reproduce representative formulas; repository and Drive narratives should link to that trace or formula version instead of duplicating every intermediate value everywhere.

Do not create recurring model runs, a task per calculation, or repeated narrative copies. Deterministic logging, revision history, stable IDs, hashes, database rows, and no-model exports are preferred. Batch related calculations into one ledger or artifact when that improves retrieval without obscuring individual inputs and formulas.

Calculations embedded in implementation mechanics, such as layout pixels or loop indexes, are documented through source code and tests unless they affect a material claim or decision. Any calculation cited to justify cost, capacity, safety, priority, effectiveness, verification, or completion requires the full record above.

## Current usage-capacity example

Calculation ID: `usage-capacity-2026-07-21-clipboard-shortcut-v1`

- Observed inputs: 4% weekly usage displayed; 96% remaining; approximately 984.4 provider-rate-equivalent Codex credits consumed; reset date 2026-07-28; one provider reset shown.
- Display-rounding assumption: a displayed 4% is treated as an actual fraction from 3.5% through less than 4.5%. This is an inference, not provider-published precision.
- Point implied capacity: `984.4 / 0.04 = 24,610 credits`.
- Rounded-display implied-capacity interval: `984.4 / 0.045 = 21,875.56` through `984.4 / 0.035 = 28,125.71 credits`.
- Task estimate: p50 `41`, p80 `121`, p95 `230` credits.
- Point window effects: `41 / 24,610 = 0.1666%`; `121 / 24,610 = 0.4917%`; `230 / 24,610 = 0.9346%`.
- Interval window effects: p50 `0.1458%–0.1874%`; p80 `0.4301%–0.5531%`; p95 `0.8178%–1.0514%`.
- Decision: the user approved a hard ceiling of 230 credits. The approval bounded execution; it did not establish actual post-run usage, which remains unavailable unless provider telemetry supplies it.
- Limitation: provider credits and displayed percentages are provider-controlled; the inferred total is a planning estimate, not a published account entitlement.

## Verification

For code-produced calculations, verification requires deterministic tests covering the formula, trace inputs, intermediate values, rounding, version, and stable calculation ID. For manually derived calculations, independently recompute the arithmetic with a deterministic tool and preserve the command or worksheet formula in the relevant evidence record.
