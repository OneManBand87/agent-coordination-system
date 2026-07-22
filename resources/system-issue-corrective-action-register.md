# NEURO-DIV System Issue and Corrective-Action Register

Status: Current standing register

Canonical source: [NEURO-DIV - System Issue and Corrective Action Register](https://docs.google.com/document/d/1KInHd27pOBMH1TWrop2FK6bF_X-UHazTtpNmNrPp9CA/edit) in `My Drive / ChatGPT Projects / NEURO-DIV - agentic communication scaffold (ACS) / 03 Manifests and Data`

Canonical register revision read back: `ALtnJHzZhdDZTgrLNzr-nuKbPXaKu0kHp3H5I_NAkbIVppOqs0PRP9EHdfC1vGFCumiovyodJQxJeL7n43yw59MFk2I-BHic2VHfBGyehQ`

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

### NDV-SYS-2026-07-21-002 — CCS lacked a one-step native Mac entrance

- Status: `resolved — monitor authentication friction and recurrence`.
- Materiality: M2 ADHD workflow-continuity and access issue.
- Owner: Codex / ACS Command Center implementation.
- Task nature or workstream: direct access to the Central Command Center from the user's Mac desktop, Spotlight, or a bounded spoken open command.
- Affected systems and programs: macOS Finder and Desktop, Launch Services, Siri application launch, default browser, ChatGPT Sites owner authentication, Codex desktop, and the production CCS.
- Creation or detection context: the user reported that CCS had no standalone clickable application. The normal route required opening ChatGPT desktop, navigating into Codex, manually reaching the site, and then completing passkey and confirmation steps, which made idea capture likely to fail before CCS was reached.
- Detected: 2026-07-21.
- Resolved: 2026-07-21 for the native entrance; independent owner-session expiry remains a residual security boundary.
- Observed facts: no CCS or NEURO-DIV Command Center application existed in the user's Applications folders before correction; the production surface was available only as a URL; the default HTTPS handler was Chrome; the user supplied direct testimony about the authentication chain and its cognitive cost.
- `Deficiency_Source`: `NEURO_DIV_ARCHITECTURE` — the system exposed a browser surface without the promised low-friction native entrance.
- `NEURO_DIV_Control_Result`: `CONTROL_DEFICIENCY` — the required CCS visibility layer existed but its primary user entrance did not meet the operational friction requirement.
- Root cause or mechanism: implementation stopped at a private web surface and did not install a durable native launcher or model the launch path as a required production control.
- Corrective actor: Codex, operating in the authorized repository and Mac environment.
- Corrective action: built, ad-hoc signed, installed, and registered `NEURO-DIV Command Center.app` under the user's Applications folder; created a Desktop entry; configured the app to open the production CCS URL directly in the default browser; declared `CCS` as its spoken and alternative app name; and preserved owner authentication rather than storing or bypassing a passkey.
- Verification and read-back: the installed bundle passed `codesign --verify`; its Info.plist passed validation; Launch Services read back bundle identifier `org.neuro-div.command-center`; the Applications bundle and Desktop entry were read back; and an actual app launch successfully dispatched through macOS. Authentication-session reuse is expected browser behavior but was not claimed verified beyond dispatch because an expired owner session may still require identity confirmation.
- Updated system-process narrative: `AGENTS.md`; `resources/universal-intake-implementation.md`; `resources/agent-coordination.md`; `resources/agent-resources.json`; `apps/acs-command-center/native/macos/command-center-launcher/main.swift`; `apps/acs-command-center/native/macos/command-center-launcher/Info.plist`; and `apps/acs-command-center/native/macos/install-command-center-launcher.zsh`.
- CCS reference: production item `intake-61208f7f-d429-4842-9380-4dec4513800c`, read back as `captured`.
- Canonical narrative revision: shared-agent brief revision `AIroW35i4v_emu7Pt6qHCnpNuHM2e9rKvkuqRRPqZuY2OluP1eh7XLcZlNyowhsbFVC_djHAmKJEBDrNxMDCrwSIMfU9zqXa2fHIc9RunQ`, read back with the v0.5 correction and completed Mac Shortcut import.
- Residual boundary: mandatory owner-authentication expiry cannot be bypassed safely. The intended steady-state route is one click with the existing browser session; an expired session may add the minimum platform-required identity confirmation.
- Reuse candidates: treat entry-point friction as a production acceptance criterion for every high-frequency NEURO-DIV surface; distinguish session reuse from authentication bypass; provide a stable native name, Desktop/Spotlight route, and narrowly bounded spoken open command when supported.

### NDV-SYS-2026-07-21-003 — `Send to NEURO-DIV` absent from Mac and iPhone source surfaces

- Status: `partially resolved — Mac native service and Share Sheet registration verified; physical iPhone synchronization and routing await device read-back`.
- Materiality: M2 universal-intake availability and documentation-integrity issue.
- Owner: Codex / ACS Command Center implementation.
- Task nature or workstream: route source files, URLs, text, and media directly from macOS Finder and iOS Share Sheets into CCS.
- Affected systems and programs: macOS Finder context and Services menus, Launch Services, native CCS app, Apple Shortcuts, iCloud Shortcuts synchronization, iOS Share Sheet, local intake staging, LaunchAgent router, iCloud processed archive, and production CCS.
- Creation or detection context: the user right-clicked an iCloud Drive file on Mac and opened an iPhone document Share Sheet. The supplied screenshots show no `Send to NEURO-DIV` or CCS action on either surface even though earlier project records claimed the Shortcut was observed and available.
- Evidence: `/Users/dinamargelovich/Downloads/Your'e very response is indicative of a greater issue progressive….png` shows the iPhone Share Sheet without a NEURO-DIV action; `/var/folders/1j/wzyjvt_s2g5543h_8n9k6bc40000gn/T/codex-clipboard-13d9ec9d-5ca4-48bf-8634-07d8dcd7a94d.png` shows the Mac Finder context menu without the action; `shortcuts list` and read-only Shortcuts database inspection confirmed no installed shortcut named `Send to NEURO-DIV`.
- Detected: 2026-07-21.
- Mac correction completed: 2026-07-21.
- `Deficiency_Source`: `HYBRID` — `NEURO_DIV_ARCHITECTURE` and `AI_NATIVE_EXECUTION` because the user-facing route was not installed and earlier agent records incorrectly claimed observed availability; `EXTERNAL_PLATFORM_OR_ENVIRONMENT` applies only to Apple's mandatory local Shortcut import confirmation and cross-device synchronization behavior.
- `NEURO_DIV_Control_Result`: `CONTROL_DEFICIENCY` for the missing route and unsupported completion claim; `ARCHITECTURE_GAP_OUTSIDE_SUPPLEMENTAL_CONTROL` remains for unverified iOS installation and synchronization until device read-back.
- Root cause or mechanism: the background processor and capture router were implemented, but the named user-facing Shortcut was never installed. Documentation treated an intended configuration as observed production state, and no device-surface acceptance test caught the mismatch.
- Corrective actor: Codex for implementation, installation, evidence correction, and CCS synchronization; the user is required only for Apple's irreducible local `Add Shortcut` confirmation.
- Corrective action on Mac: extended the installed native CCS application with a registered `Send to NEURO-DIV` service accepting file URLs, URLs, and text; used a private staging directory and atomic queue publication; explicitly started the existing LaunchAgent once per share; retained device-token authentication, SHA-256 deduplication, post-acknowledgment archival, and zero model use.
- Mac verification and read-back: Launch Services read back service name `Send to NEURO-DIV`; `NSPerformService` returned success; a real repository fixture routed through the service; pending and staging queues emptied after acknowledgment; the original appeared in the processed archive; production CCS item `intake-e21601a6-4369-4924-afa1-ba3441e38b8a` read back as `captured`, source `apple-share-and-capture`, with original filename, Mac device, and SHA-256 provenance.
- Cross-device Shortcut correction: created and cryptographically signed a versioned `Send to NEURO-DIV` Shortcut accepting common Share Sheet content and targeting the existing iCloud Shortcuts pending folder. The user completed Apple's required `Add Shortcut` confirmation; the Mac Shortcuts library read back the name and workflow ID `6B02D98F-67B8-43F9-A7B7-6BFAF95615E9`, and `ShareSheetState.plist` read back the same workflow with the configured input classes.
- iOS closure boundary: do not claim physical-iPhone synchronization, visibility, or routing until the iPhone Share Sheet and one routed source item are read back. The validation attempt found `iPhone Not Found` in iPhone Mirroring. The signed installer is stored locally under `Library/Application Support/NEURO-DIV/Shortcut Installation` and its source is versioned in the repository.
- Updated system-process narrative: `AGENTS.md`; `resources/universal-intake-implementation.md`; `resources/agent-coordination.md`; `resources/agent-resources.json`; the native launcher/service sources; and `apps/acs-command-center/native/shortcuts/Send to NEURO-DIV.shortcut.plist` plus its preparation script.
- CCS reference: production item `intake-ad49165b-d79b-499a-b594-fbd78c710f32`, read back as `captured`.
- Shortcut-import follow-up: production CCS item `intake-6e45e41a-2bac-4ce6-b465-63d30c28a054`, read back as `captured` with the Mac installation evidence and physical-iPhone limitation.
- Canonical narrative revision: shared-agent brief revision `AIroW35i4v_emu7Pt6qHCnpNuHM2e9rKvkuqRRPqZuY2OluP1eh7XLcZlNyowhsbFVC_djHAmKJEBDrNxMDCrwSIMfU9zqXa2fHIc9RunQ`, read back with the contradictory evidence, Mac verification, completed Mac Shortcut import, Siri launch-only boundary, and open physical-iPhone status.
- Reuse candidates: every claimed user-facing integration must include a surface-level acceptance test on each applicable device; implementation of a background processor is not evidence that the Share Sheet or context-menu entrance exists; preserve a native service fallback on Mac even when cross-device Shortcuts are available.

### NDV-SYS-2026-07-21-004 — One-off usage gate lacked capacity-aware job costing

- Status: `control design corrected — production telemetry and dashboard implementation pending`.
- Materiality: M2 cost continuity and project-capacity issue.
- Owner: Codex / CCS Usage Sentinel implementation.
- Task nature or workstream: one-off AI usage preflight, weekly provider-capacity allocation, project job costing, and ADHD-accessible deficit reporting.
- Affected systems and programs: Codex and Work shared usage, CCS Usage Sentinel, local rate-limit telemetry, provider usage menus, project planning, and canonical Drive controls.
- Creation or detection context: the clipboard-text-to-file administrative task was correctly stopped at the preflight boundary, but the existing control compared absolute estimated credits with utility without incorporating the observed weekly balance, committed work, protective reserves, or administrative-overhead burden.
- Detected: 2026-07-21.
- Observed facts: the account displayed 96% weekly usage remaining, a July 28 reset, and one available reset; local telemetry showed 4% used and approximately 984.4 provider-rate-equivalent credits; the task estimate was 41/121/230 credits; the gate stopped before substantive execution; the user directed that successful applications and capacity context become part of the control.
- `Deficiency_Source`: `NEURO_DIV_ARCHITECTURE` — the existing estimator did not model active-window capacity, planned-work allocations, contingency reserves, administrative overhead, or automatic usage-state intake.
- `NEURO_DIV_Control_Result`: `CONTROL_DEFICIENCY` for the missing capacity layer; `WORKED_AS_DESIGNED` for the bounded preflight interruption itself.
- Root cause or mechanism: a task-level utility-cost model was implemented without a portfolio-level, time-window-constrained capacity ledger.
- Corrective actor and action: Codex added capacity-aware formulas, p80/p95 commitment rules, provisional 15% unplanned-production and 10% reliability reserves, a provisional 5% administrative-overhead cap, deterministic-telemetry preference, screenshot fallback, CCS KPI definitions, and positive-evidence classification.
- Verification and closure basis: canonical shared brief revision `AIroW37brJU8e1TrmOyz4cdmTbNacNsoziW_nMotGzrPZOGBTn9cRxj0TDA8k3y839eSRYVnfI0NTlTeeCTaMg9A7VlxYTaFQOuF75IFnw`; analysis revision `ALtnJHz0gyQ6w0dFItrYJziAF4yNUz2-Q1d4GEMq69W5WJjuAep47FTBuhKPenLfDXodhgE00L9UEUCZhXxRwcb8m33TQjKd1IhokqaDcA`; CCS item `intake-3f7b92bf-5fc7-4d65-9a8d-32528269323d` read back as `captured`.
- Updated system-process narrative: `resources/one-off-ai-usage-preflight-control.md`, `resources/agent-coordination.md`, `resources/agent-resources.json`, the canonical shared brief, and the canonical AI Usage Preflight analysis.
- Residual risk: the percentage display is rounded; provider conversion is not published; thresholds are provisional; CCS does not yet collect and display the capacity ledger automatically.
- Reuse candidates: apply the portfolio-capacity layer to every hard-window AI plan; preserve positive control evidence separately from deficiencies; cap the cost of administering the cost control itself; never create recurring model polling to measure usage.

### NDV-SYS-2026-07-21-005 — Predicted revision identifier written to canonical brief

- Status: `corrected immediately — recurrence monitoring open`.
- Materiality: M2 canonical-reference integrity issue.
- Owner: Codex.
- Context and observed evidence: after appending `NDV-SYS-2026-07-21-004` to the canonical register, Codex wrote a predicted register revision into the shared brief before reading the actual connector response. The actual register revision was `ALtnJHwik686m6Gze_LIgeh5AzzbSjQB-v1dQVyvXKCBYc5pxxgIgB1QlhK329HcRANb6FXHumIStf3h_9XsbK9VwR3EtM0wgMHof2g-qg`. A Google Docs `replaceAllText` operation changed one occurrence, and the corrected shared brief revision was read back as `AIroW371x6BWzjD-X58md3t4WM78AcUnOWdJESHByYWwC5U_Ejs30_QZ1z5O_D-utquOfLRMwSsvZKZNt6O1uJgmy0IkLbmEALHs90fyuA`.
- `Deficiency_Source`: `AI_NATIVE_EXECUTION`.
- `NEURO_DIV_Control_Result`: `CONTROL_DEFICIENCY` because the observed-ID-only rule was violated during canonical synchronization.
- Root cause: the follow-on write was composed before the preceding connector action returned its generated identifier.
- Corrective action: replaced the unsupported identifier with the observed identifier; separated dependent writes; required returned identifiers before composing downstream references.
- Verification and closure basis: `replaceAllText` reported `occurrencesChanged = 1`; final canonical read-back remains required before completion.
- Residual risk: any future chained write can recur if downstream content is composed from an anticipated rather than returned identifier.
- Reuse candidate: never place a revision, URL, file ID, intake ID, commit, or other generated identifier into a downstream canonical record until the originating action completes and the identifier is read back.

### NDV-SYS-2026-07-21-006 — Clipboard text-to-file Shortcut stalls at Apple Notes handoff

- Status: `open — signed Mac candidate installed; physical iPhone and successful attachment creation unverified`.
- Materiality: M2 cross-device workflow availability and completion-integrity issue.
- Owner: Codex / ACS Command Center implementation.
- Task nature or workstream: convert copied text into an embedded file for Apple Notes or another native Apple application on Mac and iPhone.
- Affected systems and programs: macOS Shortcuts, Apple Notes, iCloud Shortcuts synchronization, iOS Shortcuts and Share Sheet behavior, and the ACS Command Center evidence route.
- Creation or detection context: the user requested the Mac workflow on iPhone and approved up to 230 Codex credits after the capacity-aware preflight.
- Detected: 2026-07-21; validation continued into 2026-07-22.
- Observed facts and evidence: multiple signed Shortcut builds imported on Mac; the Make PDF action completed, while subsequent Copy to Clipboard, Share, and Create Note actions stalled or produced no observable file attachment; Notes remained at four notes; unique verification IDs `913742`, `774299`, and `885144` did not appear; command-line runs did not establish success; no physical-iPhone route was available for read-back.
- Evidence classification and uncertainty: the failed Mac test outcomes are observed facts. The likely Notes destination, permission, or Apple file-object handoff boundary is an inference; the exact Apple-platform cause remains unknown.
- `Deficiency_Source`: `HYBRID` — `AI_NATIVE_EXECUTION` for an implementation that has not reached verified behavior, and `EXTERNAL_PLATFORM_OR_ENVIRONMENT` for the unresolved Apple first-run permission/destination and physical-device boundary.
- `NEURO_DIV_Control_Result`: `CONTROL_DEFICIENCY` if the candidate were represented as working; current integrity controls worked by withholding completion.
- Root cause or mechanism: unresolved Apple Shortcuts file-object handoff into Notes; the precise mechanism cannot be established without the platform's local first-run interaction and a successful physical-device read-back.
- Corrective actor and action: Codex fixed stale signed-output reuse by deleting the previous signed artifact before each signing operation; narrowed the candidate to clipboard → PDF → named file → Notes; installed the current signed candidate on Mac; preserved the installer in canonical Drive; and mirrored the blocked status through CCS.
- Verification and closure basis: remain open until one physical Apple device completes any required Notes-folder or permission selection and a newly created note is read back with the PDF attached; iPhone synchronization and routing require separate physical-device read-back.
- Updated system-process narrative: `apps/acs-command-center/native/shortcuts/Text to File Attachment.shortcut.plist`, `apps/acs-command-center/native/shortcuts/prepare-text-to-file-attachment.zsh`, `resources/agent-coordination.md`, and `resources/agent-resources.json`.
- Canonical Drive installer: file `1uNYZakjYP4muUp2kojKqyitrExGgh1ge`, `ACS Command Center - Text to File Attachment Shortcut - Candidate - 2026-07-21.shortcut`.
- CCS reference: production item `intake-ed0a5de3-2b24-4ed5-8d00-291a93a8ae27`, read back as `captured`.
- Canonical register revision: `AIroW34fsLIMR_0nm84zqMwBuyyeAKb1Pq-zBiBko5qzxmoeTeIX24LMazeU4Ol2Pwoxo4gjr3PDJNXZxeM-BPLVvMUil8sapGJx_w9-9w`.
- Residual risk: do not treat the Shortcut as working on Mac or iPhone until attachment creation and cross-device visibility are observed.
- Reuse candidates: remove stale signer output before re-signing; distinguish action-graph installation from behavioral success; require live destination read-back for Apple file handoffs; never infer iPhone synchronization from a Mac install.

### NDV-SYS-2026-07-22-001 — Material calculations lacked a complete reproducible audit trace

- Status: `control and implementation corrected — sustained use remains observational`.
- Materiality: M2 calculation provenance, cost-governance, and context-continuity issue.
- Owner: Codex / ACS Command Center implementation.
- Task nature or workstream: preserve the basis and audit trail for calculations across code, repository controls, canonical Google Drive records, and CCS without creating context or AI-usage overload.
- Affected systems and programs: ACS operating instructions, one-off AI usage preflight, CCS usage estimator and UI, estimator API and MCP output, repository coordination state, canonical shared brief, canonical usage analysis, and CCS intake.
- Creation or detection context: on 2026-07-22 the user directed that every relevant calculation retain its basis and audit trail in the useful system of record. Review found that the usage control preserved headline p50/p80/p95 values and formulas but did not return a stable calculation ID, normalized inputs, complete factor basis, decision-relevant unrounded values, rounding rule, or result-level limitations.
- Observed evidence: the prior `TaskUsageEstimate` output contained percentiles, ranks, ratios, decisions, reasons, reductions, and calibration date but no structured audit object. The positive-evidence narrative rounded the clipboard-workflow effects without preserving the exact denominator interval or intermediate arithmetic.
- `Deficiency_Source`: `NEURO_DIV_ARCHITECTURE` — the calculation-control and estimator result schema lacked required provenance fields.
- `NEURO_DIV_Control_Result`: `CONTROL_DEFICIENCY` for the prior incomplete trace; current integrity controls worked by preserving the correction and its reason rather than overwriting history.
- Root cause or mechanism: result-oriented documentation captured decision outputs but did not define a project-wide calculation-record schema or a context-proportional storage pattern.
- Corrective actor and action: Codex installed the mandatory Calculation Provenance and Audit Control; added it to repository operating instructions; implemented estimator trace version `usage-estimator-v2`; added a compact CCS disclosure; expanded deterministic tests; documented manual audit `usage-capacity-2026-07-21-clipboard-shortcut-v1`; synchronized the shared brief, usage analysis, repository manifest, and CCS.
- Verification and closure basis: six focused estimator tests passed; production build, lint, and MCP type-check passed; independent deterministic recomputation reproduced the point capacity, interval, and task-effect percentages; Drive read-back found the audit ID and point capacity in both canonical documents; CCS item `intake-5de72265-cf3e-4ea8-88aa-3dba617a3b10` read back as `captured`.
- Updated system-process narrative: `AGENTS.md`; `resources/calculation-provenance-and-audit-control.md`; `resources/one-off-ai-usage-preflight-control.md`; `resources/agent-coordination.md`; `resources/agent-resources.json`; `apps/acs-command-center/lib/usage-estimator.ts`; `apps/acs-command-center/app/UsageEstimator.tsx`; and `apps/acs-command-center/tests/usage-estimator.test.mjs`.
- Canonical shared-brief revision: `AIroW34hSS2Dg8ihfu5oRMebHbmmk2SN4CkXfzyEQv3jflme6zrEW7raKcyfk8kCWUVaQbdKOC_BsH0d4_bH7zxX3Vz1-GUm3Xqs5iNBng`.
- Canonical usage-analysis revision: `AIroW37uFhkOwxhLbz97_dv6yjTXCDwIlAK7rUh1cNJwBmxZzjv7QhxMH4mq3_bTs36vVN6a2LAiuRMBIWOjmzumFCrU3BXB4Kq58DlfZA`.
- Canonical system-issue-register revision: `AIroW34m-ZHLR7JZw-fWZZfviW0htBduONQc6KyYp94A_8WE_C64Bf4GuTEyJLCoyAMnJTi387xV0mEz_6d3MmcM0TB7Q87fUwwCalkAuA`.
- Residual risk: provider accounting and displayed-percentage rounding remain external and partly unknown; actual post-run usage cannot be inferred from approval; deterministic calculation IDs are provenance handles, not cryptographic proof of uniqueness.
- Reuse candidates: require trace-bearing result types for every material calculator; store one structured trace plus concise linked summaries; test intermediate values and rounding; never create recurring model logging or duplicate narrative ledgers.

## Linked source registers

- `resources/ai-response-integrity-review-2026-07-17.md` — supplementary adjudicated incident records, including `NDV-INC-ICLOUD-01`, `NDV-INC-EVASION-01`, and `NDV-INC-EVASION-02`.
- `resources/integrity-materiality-control.md` — commitment, evidence, materiality, source-classification, correction, recurrence, and closure requirements.
- `resources/automation-cost-cadence-proportionality-control.md` — mandatory gate before any biweekly review mechanism is activated.
