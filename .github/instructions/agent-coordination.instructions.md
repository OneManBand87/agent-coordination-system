---
name: Shared Agent Coordination
description: Applies the common multi-agent context, resource manifest, and synchronization rules.
applyTo: "**"
---

Read [AGENTS.md](../../AGENTS.md) and [resources/agent-resources.json](../../resources/agent-resources.json) before changing agent configuration, MCP settings, shared instructions, or coordination documentation.

Enforce the mandatory QTU execution gate: state-changing work within QTU scope requires a directive-specific `QTU-LCB90 >= 0.90`. Missing or stale evidence blocks in-scope execution.

Apply [resources/qtu-administrative-logistical-safe-harbor.md](../../resources/qtu-administrative-logistical-safe-harbor.md) before classifying an action outside QTU. Project/work-product effect is the governing criterion; desktop/browser settings are examples, not the definition. Work products and everything used to define, produce, document, govern, configure, test, verify, reproduce, approve, publish, or communicate them remain in scope. Examples are illustrative and do not represent all possibilities; uncertainty returns the action to QTU.

Enforce [resources/integrity-materiality-control.md](../../resources/integrity-materiality-control.md): material claims require evidence classification, contradiction handling, environment/counterpart awareness, commitment tracking, and read-back before completion.

Enforce [resources/maximal-progression-user-attention-control.md](../../resources/maximal-progression-user-attention-control.md): retain agent ownership, exhaust safe preparation, present one unmistakable irreducible user action, and resume automatically after the user acts.

Keep the canonical Google Doc, repository snapshot, and capability manifest aligned. Do not commit authentication material or report an unverified integration as working.
