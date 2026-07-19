# QTU Administrative and Logistical Safe Harbor

Status: Mandatory scope amendment to the QTU execution gate

Last verified: 2026-07-19

Canonical source: [NEURO-DIV - Agentic Communication Scaffold (ACS) - Shared Agent Brief - Current](https://docs.google.com/document/d/1luvRe6aZBdCIuJYC6PlGQjBe_u1yxiAWUS5y5EpfQ_Q/edit)

## Purpose

The QTU gate protects substantive production, documentation, governance, evidence, and consequential execution. It is not intended to block routine administrative or logistical actions that have no substantive or protected effect. This amendment defines that boundary without weakening QTU for artifacts or anything related to their production.

The safe harbor is an applicability rule, not a waiver. An action that fails any safe-harbor condition remains subject to QTU. Security, privacy, authorization, platform-policy, external-communication, destructive-action, and other independent hard gates remain applicable whether or not QTU applies.

## Controlling applicability rule

QTU applies whenever a state-changing action creates, changes, interprets, approves, validates, publishes, or materially affects an artifact or anything used to define, produce, govern, track, verify, reproduce, or communicate that artifact.

The file type, storage location, apparent effort, and label assigned to the action do not determine applicability. Agents must evaluate the action's substance, purpose, target, and reasonably foreseeable downstream effects.

## Artifact-related documentation remains in scope

The following remain within QTU scope whenever they relate to an artifact or its production:

- documents, memoranda, narratives, notes, reports, briefs, and README files;
- manifests, registries, inventories, indexes, metadata, and schemas;
- provenance, evidence, implementation, status, and verification records;
- methodology documents, workflow definitions, agent instructions, and skills;
- control narratives, policies, examples, templates, and decision rules;
- acceptance criteria, production criteria, accessibility requirements, and tests;
- code, shared or production configuration, dependencies, deployments, and automations; and
- canonical, published, committed, pushed, uploaded, or externally communicated state.

Storage in Google Drive, a repository, a local computer, a browser, or another system does not create an exemption. Characterizing a record as supporting documentation, a memo, a narrative, a manifest, or an administrative file does not create an exemption.

## Safe-harbor conditions

QTU does not apply to a routine administrative or logistical action only when every applicable condition below is satisfied:

1. The action is non-substantive.
2. The action is precisely bounded and readily reversible.
3. The action does not create or change an artifact or artifact-related documentation.
4. The action does not affect production criteria, methodology, workflow behavior, code, shared or production configuration, governance, evidence, provenance, verification, or completion status.
5. The action does not affect security, privacy, credentials, authentication, permissions, or sharing.
6. The action does not communicate externally, publish, deploy, purchase, commit, push, or destructively alter state.
7. The action has no reasonably foreseeable material downstream consequence.

An agent using the safe harbor must:

1. identify the action as administrative or logistical;
2. confirm every applicable condition before acting;
3. keep the mutation to the minimum necessary scope;
4. preserve any required recovery path; and
5. perform direct read-back afterward.

If applicability remains genuinely uncertain after examination, QTU applies.

## Non-exhaustive illustrative examples

The examples below are illustrative only. They are not comprehensive, exhaustive, exclusive, or automatic precedents. An action does not need to appear on either list to be classified. Similarity to an exempt example does not create an exemption when the actual action has a substantive or protected effect. Agents must apply the controlling criteria to the real action and current environment.

### Illustrative examples where QTU does not apply

Subject to every safe-harbor condition, examples include:

- creating an empty local project directory;
- creating empty organizational subdirectories;
- adding a content-free `.gitkeep` solely to preserve an otherwise empty directory;
- opening a local file;
- closing a local file;
- navigating to a webpage;
- rearranging application windows;
- rearranging editor panels;
- reordering browser tabs;
- changing local zoom;
- changing local font size;
- changing a local color theme;
- changing local contrast display;
- enabling display-only spellcheck;
- performing a read-only repository search;
- inspecting a file without editing it;
- generating a non-mutating inventory;
- comparing files read-only;
- running a non-mutating dry run;
- previewing a proposed folder structure;
- renaming an unreferenced temporary, noncanonical file;
- moving an unreferenced temporary, noncanonical file;
- creating a disposable temporary directory outside production and canonical locations;
- checking whether software is installed;
- checking whether a folder exists;
- listing connector capabilities through a read-only call;
- calculating a proposed QTU score;
- simulating a workflow without executing it;
- drafting possible policy language in conversation without installing it; and
- inspecting local preference values without changing them.

### Illustrative examples where QTU applies

Examples include:

- creating or editing a substantive artifact;
- editing an artifact README;
- creating or updating a manifest;
- editing `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, Copilot instructions, or another agent instruction;
- creating or modifying an agent skill;
- changing a control narrative;
- adding accessibility production requirements;
- recording a feature as implemented;
- changing an artifact index;
- adding acceptance tests or verification procedures;
- changing an artifact schema;
- changing a workflow definition;
- modifying production code;
- changing shared build settings;
- changing deployment configuration;
- committing artifact-related changes;
- pushing repository changes;
- renaming a canonical artifact;
- changing permissions or sharing;
- changing authentication configuration;
- changing security or privacy settings;
- sending an external communication;
- making a purchase;
- uploading or publishing an artifact;
- editing a Google Drive memo about an artifact;
- editing an artifact implementation narrative;
- changing provenance or evidence records;
- changing methodology documentation;
- changing an artifact status memo; and
- installing an extension with production, permission, privacy, or security effects.

## Boundary examples

- Creating an empty local `accessibility/` directory may qualify for the safe harbor.
- Adding an accessibility README, feature manifest, implementation narrative, WCAG requirement, acceptance criterion, evidence record, or implemented-status claim does not qualify.
- A purely visual formatting correction may qualify only when a semantic comparison verifies that content, meaning, identifiers, structure, and machine behavior are unchanged.
- Rewording a control for clarity remains within QTU because interpretation may change.
- Moving a temporary, unreferenced draft may qualify; moving a canonical or indexed document does not.
- Changing browser zoom may qualify; installing an extension with new permissions or production effects does not.

## Decision procedure

Evaluate the proposed action across these nine irreducible dimensions:

1. substantive content;
2. artifact relationship;
3. documentation or governance;
4. production behavior;
5. security, privacy, credentials, authentication, permissions, or sharing;
6. external state or communication;
7. destructive effect;
8. canonical or published state; and
9. evidence, provenance, verification, or completion status.

If any dimension is present, QTU applies. Only an action with none of the nine dimensions may enter the safe harbor, and it must still satisfy the safe-harbor conditions and independent hard gates.

## Directive-specific authorization record

- Directive ID: `NDV-QTU-SH-2026-07-19-A`
- Directive hash: `e5bff6940282f4bc6c9632ca43476bdb45e6a4fbba0e135bd869a7a3c53c5f17`
- Scope: install, synchronize, verify, commit, and push this reversible safe-harbor amendment without changing the QTU formula or threshold.
- Target repository state: commit `63a609e` before amendment.
- Target canonical-brief revision before amendment: `ALtnJHyb7CRjcr03kTMULKqW6r9RkLFdjWqHtOY6ZnLlez009jbzJpDzk6AAtIyfWh_YFGBAO9HgYPa2WJmOBnbg0x40UlirE3bn8neirw`.
- `A_OOD` evidence: 60 of 60 classification cases passed.
- `A_CF` evidence: 60 of 60 paired counterfactual cases passed.
- Interval method: independent uniform `Beta(1,1)` component priors; conservative product of exact one-sided 90% component lower credible bounds.
- Component lower bounds: `0.962956` for OOD and `0.962956` for counterfactual performance.
- `L_min`: the nine irreducible applicability dimensions explicitly required by the user.
- `L(M)`: the same nine dimensions implemented without additional decision dimensions.
- Complexity ratio: `L_min/L(M) = 1.0`.
- Normalized posterior-mean point estimate: `0.968002`.
- `QTU-LCB90`: `0.927285`.
- Gate status: `QTU_AUTHORIZED`.
- Evaluator: deterministic property classifier executed in Python; expected outcomes derived from the user-approved scope boundary.
- Evaluated timestamp: `2026-07-19T20:04:27.404015+00:00`.
- Evidence expiry: any material change to scope, target state, security conditions, or requested destinations.
- Post-execution verification: canonical Drive read-back; repository semantic searches; JSON parsing; local verifier; Git diff; commit and remote-push confirmation.

### Reperformance catalogue

The 60 OOD cases are the 30 safe-harbor examples and 30 in-scope examples listed above. For each case, set the nine decision dimensions according to the described action and apply the decision procedure.

The 60 counterfactual cases are paired transformations of the OOD catalogue:

- for each safe-harbor case, add an artifact-related or other protected effect and expect QTU to apply; and
- for each in-scope case, remove every protected effect so that the action becomes non-substantive, bounded, reversible, and internal, then expect the safe harbor to apply.

An independent reperformance must reproduce all 120 classifications, the two `Beta(61,1)` component posteriors, their exact 0.10 quantiles, the complexity ratio, and the conservative product. The authorization proves design conformance for this reversible amendment only; it does not establish production effectiveness.
