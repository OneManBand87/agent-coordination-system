# NEURO-DIV - agentic communication scaffold (ACS)

These instructions apply to every AI agent working in this repository.

## Start here

1. Read [resources/agent-coordination.md](resources/agent-coordination.md).
2. Read [resources/agent-resources.json](resources/agent-resources.json) for machine-readable endpoints, capabilities, and status.
3. Read [resources/theory-branch-integration.md](resources/theory-branch-integration.md), including the mandatory QTU execution gate.
4. Read [resources/qtu-administrative-logistical-safe-harbor.md](resources/qtu-administrative-logistical-safe-harbor.md) before deciding whether a routine state change is outside QTU scope.
5. Read [resources/integrity-materiality-control.md](resources/integrity-materiality-control.md) before making a material claim, commitment, or completion statement.
6. Treat the canonical Google Doc as the source of truth when the authenticated client can access it:
   [NEURO-DIV - Agentic Communication Scaffold (ACS) - Shared Agent Brief - Current](https://docs.google.com/document/d/1luvRe6aZBdCIuJYC6PlGQjBe_u1yxiAWUS5y5EpfQ_Q/edit).
7. Use the repository snapshot when the canonical document is unavailable, and state that limitation.

## Shared architecture

- ACS is a communications subsystem within the larger NEURO-DIV architecture, not the entire framework.
- Parent architecture spine: [NEURO-DIV Core Foundation Document v1](https://docs.google.com/document/d/1DRlYOnp6AGBwRWOYgfh03gxNWxn6kaWSjmkddPa7gdY/edit). Treat it as an incomplete working spine pending multi-version reconstruction.
- ACS responsibilities include agent-to-agent handoffs, shared-state synchronization, narrative and cognitive feedback routing, context continuity, verification routing, and common tool access across ecosystem layers.
- Participating agent surfaces: Codex, Claude Code, GitHub Copilot/VS Code, Gemini through Antigravity, and Perplexity.
- Preferred common action layer: Zapier MCP at `https://mcp.zapier.com/api/v1/connect`.
- Project MCP definitions are versioned in [.mcp.json](.mcp.json) and [.vscode/mcp.json](.vscode/mcp.json). Authentication is always local and must never be committed.
- Reusable Zapier skills are versioned under [.agents/skills](.agents/skills) with [skills-lock.json](skills-lock.json).

## Operating rules

- Mandatory QTU gate: no AI agent may execute a state-changing directive within QTU scope unless the directive-specific normalized Quantitative Theory of Understanding score has a one-sided 90% lower confidence bound of at least `0.90` (`QTU-LCB90 >= 0.90`). Missing evidence is `QTU_UNESTABLISHED` and blocks in-scope execution. Model self-confidence is not evidence. Before authorization, agents may perform only non-state-changing investigation, clarification, calculation, simulation, dry runs, and verification needed to establish the bound.
- Administrative and logistical safe harbor: QTU does not apply only when a routine action satisfies every condition in [resources/qtu-administrative-logistical-safe-harbor.md](resources/qtu-administrative-logistical-safe-harbor.md). The action must be non-substantive, precisely bounded, readily reversible, internal, and unrelated to artifacts or artifact-related documentation, production, methodology, workflow behavior, code, shared or production configuration, governance, evidence, provenance, verification, completion status, security, privacy, credentials, authentication, permissions, sharing, external communication, publication, deployment, purchases, commits, pushes, or destructive effects. If applicability remains uncertain, QTU applies. Examples are illustrative and non-exhaustive.
- Artifact-related documentation remains within QTU scope, including Google Drive documents, memoranda, narratives, README files, manifests, registries, indexes, metadata, schemas, provenance and evidence records, implementation and status records, skills, agent instructions, control narratives, examples, templates, acceptance criteria, production criteria, methodology, workflows, and tests.
- Security, privacy, scope, authentication, external-communication approval, destructive-action controls, and platform policy remain independent hard gates whether or not QTU applies.
- Mandatory integrity and materiality control: for material matters, distinguish observed fact, sourced fact, inference, analogy, proposal, and unknown; evaluate supporting and contradictory evidence; record environment and counterpart limitations; and require durable evidence plus read-back before claiming memory, synchronization, completion, or remediation. An apology, agreement, or future promise is not corrective action.
- Do not create a competing source of truth. Update the canonical brief and then refresh the repository snapshot.
- Do not claim that a connector works unless a real read-only call has been verified.
- Never commit OAuth tokens, API keys, cookies, callback codes, credential files, or exported browser data.
- Before changing shared-agent configuration, preserve a reversible backup or use version control.
- Keep user-facing project artifacts in Google Drive under `My Drive / ChatGPT Projects / [Project Name]` using the standard folders `00 Project Index`, `01 Instructions`, `02 Working Files`, `03 Manifests and Data`, `04 Deliverables`, and `99 Archive`.
- Name artifacts `[Project] - [Artifact] - [Status or Version] - [YYYY-MM-DD]`; stable standing documents may omit the date and use Drive revision history.
- For a client without live MCP or Drive access, use its persistent instruction mechanism to point back to this repository and the canonical brief, and disclose that it is a fallback rather than a live connection.

## Synchronization protocol

When the coordination state changes:

1. Update the canonical Google Doc through Zapier when available.
2. Update `resources/agent-coordination.md` and `resources/agent-resources.json` in the same change.
3. Run `./scripts/verify-agent-resources.sh`.
4. Commit the repository changes with a concise message.
5. Push only to the intended GitHub repository and do not assume repository visibility.
