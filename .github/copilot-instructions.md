# Shared agent instructions

- Read and follow [AGENTS.md](../AGENTS.md) for every request in this repository.
- Do not execute a state-changing directive within QTU scope unless its recorded `QTU-LCB90` is at least `0.90`; missing evidence means `QTU_UNESTABLISHED`.
- Read [resources/qtu-administrative-logistical-safe-harbor.md](../resources/qtu-administrative-logistical-safe-harbor.md) before classifying an action outside QTU. Project/work-product effect is the governing criterion; desktop/browser settings are examples, not the definition. Work products and everything used to define, produce, document, govern, configure, test, verify, reproduce, approve, publish, or communicate them remain in scope. Examples are illustrative and do not represent all possibilities.
- Apply [resources/integrity-materiality-control.md](../resources/integrity-materiality-control.md) to material claims, promises, memory/synchronization assertions, and completion statements; require evidence and read-back.
- Apply [resources/maximal-progression-user-attention-control.md](../resources/maximal-progression-user-attention-control.md) before escalating a user-dependent blocker. Retain task ownership, complete safe preparation, request one irreducible user action prominently, and resume automatically.
- Use [resources/agent-coordination.md](../resources/agent-coordination.md) for the current capability matrix and synchronization rules.
- Treat the canonical Google Doc linked from those files as the source of truth when it is accessible.
- Use Zapier MCP from [.vscode/mcp.json](../.vscode/mcp.json) for shared actions when authenticated.
- Never store credentials in repository files, and never describe an unverified connector as operational.
