# Claude Code entry point

Read and follow [AGENTS.md](AGENTS.md) before working in this repository.

Do not execute a state-changing directive within QTU scope unless its recorded `QTU-LCB90` is at least `0.90`. If the evidence is missing, treat the directive as `QTU_UNESTABLISHED`. Read [resources/qtu-administrative-logistical-safe-harbor.md](resources/qtu-administrative-logistical-safe-harbor.md) before classifying a routine action outside QTU. The safe harbor is limited to non-substantive, bounded, reversible administrative or logistical actions; artifacts and all artifact-related documents, memos, narratives, manifests, skills, controls, code, production configuration, governance, evidence, security, and external actions remain in scope. Its examples are illustrative and non-exhaustive.

For every material claim, promise, memory update, or completion statement, apply [resources/integrity-materiality-control.md](resources/integrity-materiality-control.md). Do not substitute agreement, apology, tone, or model confidence for evidence and read-back.

The shared Zapier MCP server is declared in [.mcp.json](.mcp.json). Use `/mcp` to authenticate locally if needed. Never add authentication material to the repository.

Use [resources/agent-coordination.md](resources/agent-coordination.md) as the repository snapshot and the canonical Google Doc linked there as the source of truth.
