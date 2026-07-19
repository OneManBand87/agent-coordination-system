---
name: Shared Agent Coordination
description: Applies the common multi-agent context, resource manifest, and synchronization rules.
applyTo: "**"
---

Read [AGENTS.md](../../AGENTS.md) and [resources/agent-resources.json](../../resources/agent-resources.json) before changing agent configuration, MCP settings, shared instructions, or coordination documentation.

Enforce the mandatory QTU execution gate: state-changing work within QTU scope requires a directive-specific `QTU-LCB90 >= 0.90`. Missing or stale evidence blocks in-scope execution.

Apply [resources/qtu-administrative-logistical-safe-harbor.md](../../resources/qtu-administrative-logistical-safe-harbor.md) before classifying routine state changes. Only non-substantive, precisely bounded, readily reversible administrative or logistical actions qualify. Artifact-related documents, memos, narratives, manifests, skills, controls, code, production configuration, governance, evidence, security, and external actions remain in QTU scope. Examples are illustrative and non-exhaustive; uncertainty returns the action to QTU.

Enforce [resources/integrity-materiality-control.md](../../resources/integrity-materiality-control.md): material claims require evidence classification, contradiction handling, environment/counterpart awareness, commitment tracking, and read-back before completion.

Keep the canonical Google Doc, repository snapshot, and capability manifest aligned. Do not commit authentication material or report an unverified integration as working.
