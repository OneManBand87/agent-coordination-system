# Claude Code entry point

Read and follow [AGENTS.md](AGENTS.md) before working in this repository.

Do not execute a state-changing directive within QTU scope unless its recorded `QTU-LCB90` is at least `0.90`. If evidence is missing, treat the directive as `QTU_UNESTABLISHED`. Read [resources/qtu-administrative-logistical-safe-harbor.md](resources/qtu-administrative-logistical-safe-harbor.md) before classifying an action outside QTU. Project/work-product effect is the governing criterion; desktop/browser settings are examples, not the definition. Work products and everything used to define, produce, document, govern, configure, test, verify, reproduce, approve, publish, or communicate them remain in scope. Examples are illustrative and do not represent all possibilities.

For every material claim, promise, memory update, or completion statement, apply [resources/integrity-materiality-control.md](resources/integrity-materiality-control.md). Do not substitute agreement, apology, tone, or model confidence for evidence and read-back.

Before escalating a user-dependent blocker, apply [resources/maximal-progression-user-attention-control.md](resources/maximal-progression-user-attention-control.md). Retain task ownership, complete every safe authorized preparatory step, request only the irreducible user action in one prominent alert, and resume automatically afterward.

Before creating, enabling, reactivating, or materially changing recurring, scheduled, polling, monitoring, retry, or background work, apply [resources/automation-cost-cadence-proportionality-control.md](resources/automation-cost-cadence-proportionality-control.md). Bound total runs, expiry, cost, model/reasoning level, task churn, and tripwires; prefer event-driven and least-cost adequate execution; and block unknown or disproportionate cost.

The shared Zapier MCP server is declared in [.mcp.json](.mcp.json). Use `/mcp` to authenticate locally if needed. Never add authentication material to the repository.

Use [resources/agent-coordination.md](resources/agent-coordination.md) as the repository snapshot and the canonical Google Doc linked there as the source of truth.
