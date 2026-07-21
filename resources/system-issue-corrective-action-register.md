# NEURO-DIV System Issue and Corrective-Action Register

Status: Current standing register

Canonical source: [NEURO-DIV - System Issue and Corrective Action Register](https://docs.google.com/document/d/1KInHd27pOBMH1TWrop2FK6bF_X-UHazTtpNmNrPp9CA/edit) in `My Drive / ChatGPT Projects / NEURO-DIV - agentic communication scaffold (ACS) / 03 Manifests and Data`

Canonical register revision read back: `AIroW34YBsHn1bHEt2UhvaBTvdN5aGv8gml1bgxR7nOgPLdwpb5EXDGTFbBrvlXRNP3QoegJkanO6OgUeXVqMuQRUWZSZEgM19X4hoMuqA`

## Purpose

Maintain one cross-system record of operational, architectural, control, application, device, connector, and agent-execution issues from detection through verified correction. Existing specialized incident records remain source evidence; this register is the umbrella index and must link to them rather than silently duplicate or renumber them.

## Required record fields

Every material issue record must include:

- stable issue ID, concise title, status, owner, and materiality;
- task nature or workstream;
- affected systems, programs, devices, agents, connectors, and environment;
- creation or detection context, occurrence date when known, detected date, and resolved date when applicable;
- observed facts, sourced facts, inference, unknowns, impact, and contradictory evidence;
- `Deficiency_Source` and `NEURO_DIV_Control_Result` using the controlled values in `integrity-materiality-control.md`;
- root cause or current mechanism classification, including uncertainty when root cause is not established;
- corrective actor or actors and the exact corrective action taken;
- verification, read-back evidence, residual risk, recurrence status, and closure basis;
- the exact system-process narrative, control, configuration, code, or instruction updated as a result;
- durable links or references to CCS records, Google Drive revisions, repository paths, commits, deployments, and related incident IDs; and
- reuse candidates: other controls, workflows, systems, or future designs that may benefit from the resolution.

An apology, intention, configuration change, or unverified test is not a completed corrective action. Status becomes `resolved` only after durable implementation and read-back evidence. Recurrence after resolution reopens the record or creates a linked recurrence record.

## Review and reuse rule

The desired governance cadence is one cross-control learning review every two weeks. The review examines issues resolved or materially updated since the prior review and asks whether the correction should be applied to another control, workflow, system, program, device route, agent instruction, or future design.

No recurring review, reminder, scheduler, or Codex automation is currently created or authorized by this record. Activation requires a separate bounded automation decision under `automation-cost-cadence-proportionality-control.md`. Until then, the cadence is documented as `DESIRED — NOT SCHEDULED`.

## Issue records

### NDV-SYS-2026-07-21-001 — Mac capture routing blocked by background iCloud enumeration

- Status: `resolved — monitor for recurrence`.
- Materiality: M2 operational continuity issue.
- Owner: Codex / ACS Command Center implementation.
- Task nature or workstream: universal intake; automatic macOS screenshot and screen-recording routing into the Central Command Center (CCS).
- Affected systems and programs: macOS Screenshot and Screen Recording, LaunchAgent, Apple Shortcuts, iCloud Drive, local filesystem events, CCS intake API, macOS Keychain, Google Drive canonical records, and GitHub repository synchronization.
- Creation or detection context: the existing intake LaunchAgent was installed but disabled after a background Shortcut could not enumerate the iCloud `Pending` folder. macOS capture destination had fallen back to the Desktop, so new native captures were not entering the managed queue automatically.
- Detected: 2026-07-21.
- Resolved: 2026-07-21.
- Observed facts: Shortcuts background execution logged `Operation not permitted` for the iCloud pending folder; the LaunchAgent was disabled; direct interactive shell access was available; iCloud-folder event delivery did not reliably trigger after file creation; device credentials remained present in Keychain.
- `Deficiency_Source`: `HYBRID` — `EXTERNAL_PLATFORM_OR_ENVIRONMENT` for macOS/Shortcuts privacy and iCloud event behavior, with `NEURO_DIV_ARCHITECTURE` contribution because the automatic path depended on those unverified behaviors.
- `NEURO_DIV_Control_Result`: `ARCHITECTURE_GAP_OUTSIDE_SUPPLEMENTAL_CONTROL` for the original trigger design; preservation, credential separation, bounded metadata, deduplication, and failure tripwires otherwise worked as designed.
- Root cause or mechanism: an automatic background path depended on a Shortcut enumerating a protected iCloud folder and on reliable filesystem events from that iCloud location. Both dependencies were unsuitable for the required native Mac capture trigger.
- Corrective actor: Codex, operating within the ACS Command Center repository and the authorized Mac environment.
- Corrective action: changed the LaunchAgent to invoke the bounded router directly; moved native Mac capture staging to a private local pending folder; retained the iCloud processed archive; restored the global macOS screenshot and screen-recording destination to the local managed queue; preserved `Send to NEURO-DIV` and `Process NEURO-DIV Intake` as cross-application and recovery paths; reinstalled and enabled the agent.
- Verification and read-back: a screenshot and a screen recording triggered automatic runs; the local pending queue emptied only after successful indexing; originals appeared in the iCloud processed archive; production CCS read back `intake-0343035d-398d-4e2e-b5b1-87ed8114700a` as `screenshot` and `intake-b93ca066-da5c-4861-a354-0246fd265c15` as `screen-recording`, both `captured` with Mac device and SHA-256 provenance; repository verification passed; commit `c3a115a` was pushed and remote-head matched.
- Updated system-process narrative: canonical shared-agent brief section `Universal intake v0.4`; `resources/universal-intake-implementation.md`; `resources/agent-coordination.md`; `resources/agent-resources.json`; `apps/acs-command-center/native/macos/install.zsh`; and `apps/acs-command-center/native/macos/org.neuro-div.acs.universal-intake.plist.template`.
- Canonical narrative revision: `AIroW36SCt_uc8APm-92XRaUB8mkGX_s3FQUuPYthepq_UEqynaLmZ8Ung5eep5wJinUggkC5txzOkdMEQpIdnjmlflUNyh2hsC3G43itw`.
- Umbrella-register synchronization: production CCS item `intake-705832fa-0ca3-4ee3-b654-296ba0fe9273` was read back as `captured`; the canonical shared-agent brief was read back at revision `ALtnJHyGEQSNNOeKZRgj0RPneCRS9uVwu8hG-oDgl_jXCTylFNHJ0U4TZR5Q-sODPlfgIPDilhNzxxZcSH4nr63MIaJ14iuG6Uwici70xg` with the register link, standing fields, review status, seeded issue ID, and CCS reference.
- Related records: `resources/universal-intake-implementation.md`; production CCS verification items above.
- Residual boundary: macOS native captures are automatic. Third-party applications that save proprietary captures outside the macOS capture destination still require their supported Share action or a separately verified app-specific route. Physical iPhone microphone capture, assistant-free Vocal Shortcut training, and recorder pause/resume remain separate open validation items.
- Reuse candidates: review every background workflow that watches iCloud or another provider-synchronized folder. Prefer a local event-driven staging queue with post-acknowledgment archival when synchronized-folder events or permissions are not demonstrated reliable. Do not generalize this correction without verifying each platform's privacy, synchronization, data-preservation, and failure behavior.

## Linked source registers

- `resources/ai-response-integrity-review-2026-07-17.md` — supplementary adjudicated incident records, including `NDV-INC-ICLOUD-01`, `NDV-INC-EVASION-01`, and `NDV-INC-EVASION-02`.
- `resources/integrity-materiality-control.md` — commitment, evidence, materiality, source-classification, correction, recurrence, and closure requirements.
- `resources/automation-cost-cadence-proportionality-control.md` — mandatory gate before any biweekly review mechanism is activated.
