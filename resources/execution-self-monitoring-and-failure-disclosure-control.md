# Execution Self-Monitoring and Failure Disclosure Control

Status: Mandatory project-wide control

Effective: 2026-07-22

## Purpose

Agents must actively detect, disclose, and durably record failures they identify during their own work even when the user did not notice, name, or report the problem. User detection is evidence, not a prerequisite for agent accountability.

This control applies to inspectable execution and reasoning-process outputs: assumptions, decisions, tool calls, identifiers, evidence handling, calculations, state transitions, claims, omissions, contradictions, and control compliance. It does not require or permit disclosure of private chain-of-thought. The durable record must explain the externally auditable decision path and evidence needed to understand and reproduce the failure.

## Event-driven monitoring checkpoints

During every active material task, the responsible agent must review for failures:

1. before a material write, external action, approval request, or completion claim;
2. after a tool error, unexpected result, contradiction, partial success, retry, or changed assumption;
3. after compaction, handoff, interruption, or resumption;
4. before reporting synchronization, remediation, verification, or closure; and
5. whenever the agent recognizes that an earlier statement, identifier, calculation, action, or omission lacked support.

This is event-driven work inside the active task. It must not create recurring model polling, scheduled self-review runs, a task per checkpoint, or user-facing noise when no failure is found.

## Required detection questions

At each checkpoint, ask against the observable record:

- Did I state or store a generated identifier before the originating system returned it?
- Did I convert an assumption, inference, plan, configuration, or attempted action into an observed fact?
- Did a tool return an error, partial result, zero changed occurrences, stale revision, unexpected count, or missing object that I have not resolved or disclosed?
- Did I omit contradictory evidence or a device, connector, authentication, environment, synchronization, or production-deployment limitation?
- Did I claim completion from source code, configuration, import, dispatch, or test evidence without live target-state read-back?
- Did I bypass, forget, or misapply a standing control, scope boundary, user preference, or required artifact route?
- Did I create avoidable rework, duplication, context expansion, usage cost, or user dependency?
- Did later evidence invalidate an earlier claim or closure basis?

## Recording and escalation

When a failure is detected, the agent must immediately:

1. stop dependent claims or writes that would propagate it;
2. preserve the incorrect value, statement, or state and the evidence that disproved it;
3. classify observed fact, inference, unknowns, materiality, `Deficiency_Source`, and `NEURO_DIV_Control_Result`;
4. correct the affected artifact or system using only observed identifiers and returned state;
5. verify the correction by read-back;
6. record M2–M4 failures in the canonical System Issue and Corrective-Action Register, its repository snapshot, and CCS;
7. record M0–M1 failures proportionately in source history, tests, or the active task evidence, escalating repeated failures to the system register; and
8. disclose the failure and correction in the final result when it could affect the user's reliance or next action.

The record must state who detected the issue: `agent-self-detected`, `user-detected`, `tool-detected`, `counterpart-detected`, or a combination. A self-detected issue is not downgraded merely because the user did not see it.

## Compact failure record

Use one canonical record with concise linked summaries. Preserve:

- stable issue ID and detection source;
- timestamp and active task/environment;
- expected state versus observed state;
- exact unsupported claim, value, identifier, or action;
- detection evidence and contradictory evidence;
- downstream exposure and whether propagation occurred;
- correction, verification, residual risk, and recurrence link;
- affected code, repository commit, Drive revision, CCS item, and production state; and
- whether the user had to intervene.

Do not log speculative inner monologue, private chain-of-thought, secrets, or every harmless micro-correction. Record the audit-relevant reasoning and evidence necessary to understand the failure without degrading context.

## Anchor incident

`NDV-SYS-2026-07-21-005` is the anchor incident. Codex inserted a fabricated revision identifier—predicted without observing the connector result—into the canonical brief. The identifier was corrected after the actual result returned. This control generalizes the lesson: generated identifiers, completion states, and synchronization claims may enter downstream records only after origin-system read-back.

## Effectiveness boundary

Installation and hook reminders demonstrate control design and availability, not sustained effectiveness. Effectiveness requires future evidence that agents independently detect and record failures before user discovery or downstream propagation. Recurrence reopens the relevant incident and requires root-cause review.
