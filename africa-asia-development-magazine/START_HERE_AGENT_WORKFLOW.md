# Start Here — Agent Workflow

Use this document every time you restart work on the Africa–Asia Development Magazine. It explains which agent to start first, where every prompt lives, how agents record progress, and how completed work is reviewed.

You do not need earlier chat history. The files in this repository are the project memory.

## The short version

Every work session follows this loop:

```text
1. Start Roadmap Controller
2. Controller checks checklist, status, logs, and real files
3. Controller selects ready tasks and prepares prompts
4. Specialist agents complete separate tasks and write logs
5. Controller reviews the actual deliverables
6. Controller updates checklist and status
7. Repeat until final audit passes
```

Always start with the Roadmap Controller. Do not start random research agents before checking whether their task is ready, already active, blocked, or completed.

## Quick start for every new session

### Step 1 — Open the correct project folder

Open:

`africa-asia-development-magazine/`

The root should contain `AGENTS.md`, `SCOPE_LOCK.md`, and this file.

### Step 2 — Start the Roadmap Controller

Create a new agent/session in the project folder and paste this prompt:

> Resume this project as the Roadmap Controller. Read `START_HERE_AGENT_WORKFLOW.md`, `AGENTS.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/ROADMAP.md`, `project-control/ROADMAP_CONTROLLER_AGENT.md`, and all new task logs. Inspect the real deliverables before changing any status. Reconcile the checklist and status board, then give me the highest-priority ready tasks and their copy-ready prompts. If multi-agent delegation is available, delegate only independent tasks with non-overlapping output files, up to the available concurrency limit. Wait for their results, review them against their acceptance criteria, update the control files, and report what was accepted, rejected, blocked, and next.

The controller's full permanent instructions are in `project-control/ROADMAP_CONTROLLER_AGENT.md`.

### Step 3 — Launch the approved specialist tasks

The current copy-ready assignments are in `project-control/NEXT_AGENT_PROMPTS.md`.

You can run them in either of two ways:

#### Option A — One controller with subagents

Ask the controller to delegate the ready tasks. Independent agents may work concurrently because they have separate output files. The controller must respect the environment's available concurrency; if only three subagent slots exist, run three and start the fourth when a slot opens.

#### Option B — Separate agent sessions

Open one new session per task and paste exactly one prompt from `project-control/NEXT_AGENT_PROMPTS.md` into each session. Do not paste two tasks into the same specialist session unless the controller explicitly combines them.

Before launching, confirm that no other active agent owns the same output file.

### Step 4 — Require every specialist to log its work

Every prompt must require a task-specific log such as:

- `project-control/logs/SRC-001.md`
- `project-control/logs/DATA-002.md`
- `project-control/logs/VIS-001.md`

The log format is in `project-control/logs/LOG_TEMPLATE.md`.

Specialists normally finish with `REVIEW`. They do not update the master checklist or declare themselves `DONE` when independent checking remains.

### Step 5 — Run the controller again

After specialist agents finish, start or resume the Roadmap Controller and paste:

> Review the newest task logs and their claimed deliverables. Check each deliverable against its prompt and acceptance criteria. Do not trust the log alone. Update `project-control/REPORT_CHECKLIST.md` and `project-control/STATUS.md` only for work you verify. Record the reconciliation in `project-control/logs/controller.md`. Then prepare the next non-overlapping agent prompts.

This review step is mandatory. A completed agent response does not automatically mean the report item is complete.

## Which file answers which question?

| Question | File |
|---|---|
| What does the report require, and what is missing? | `project-control/REPORT_CHECKLIST.md` |
| What tasks are ready, active, blocked, or done? | `project-control/STATUS.md` |
| What order should the project follow? | `project-control/ROADMAP.md` |
| What must every agent obey? | `AGENTS.md` |
| Which countries, years, and owners are locked? | `SCOPE_LOCK.md` |
| What must citations and graphs look like? | `project-control/SOURCE_APA_AND_CHART_RULES.md` |
| What should the Roadmap Controller do? | `project-control/ROADMAP_CONTROLLER_AGENT.md` |
| Where are the current ready-to-run prompts? | `project-control/NEXT_AGENT_PROMPTS.md` |
| How are new prompts constructed? | `project-control/AGENT_PROMPTS.md` |
| What did earlier agents do? | `project-control/logs/` |

## Agent roster

| Agent | Responsibility | Starts when | Main outputs |
|---|---|---|---|
| Roadmap Controller | Checks progress, controls assignments, creates prompts, verifies handoffs | First and after every batch | Checklist, status, next prompts, controller log |
| Sources & APA | Verifies sources, APA 7 references, claims, datasets, images, and maps | Immediately for bounded source sets | Source registry, claim registry, audits |
| Country Data | Researches one country using the common template | When country task is `READY` | One country file and task log |
| History & Theory | Researches colonialism, culture, trust, Hofstede, and tests theories | Evidence-pack task is `READY`; full theory synthesis waits for country data | Evidence packs and theory matrix |
| Charts & Maps | Produces comparable figures from approved data | Standards can start early; final figures wait for verified/frozen data | Figure specification, source data, editable figure, export |
| Editorial & Design | Writes and assembles approved page ranges | Relevant evidence and figures are approved | Page copy, captions, layouts |
| Interactions & Presentation | Builds the selected interactions and teaching/presentation materials | Argument and core evidence are stable | Interactive prototypes, static alternatives, cue sheet |
| QA | Audits work independently | At milestone gates and before submission | Findings with severity and pass conditions |

## Permanent Roadmap Controller prompt

Use the quick-start prompt above for normal sessions. Use this full prompt if a controller needs to be rebuilt from scratch:

> You are the Roadmap Controller for the Africa–Asia Development Magazine. Maintain a simple and accurate checklist of what the report requires and what remains missing. Verify specialist handoffs, create bounded prompts, enforce dependencies, and prevent agents from editing the same files.
>
> At the start, read `START_HERE_AGENT_WORKFLOW.md`, `AGENTS.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/ROADMAP.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, every task log newer than the last reconciliation, and the real deliverables claimed by those logs.
>
> Compare every claimed result with its acceptance criteria. Only you may update the master checklist and status board. Use `[x]` for verified completion, `[-]` for meaningful but incomplete work, `[ ]` for missing work, and `[!]` for work blocked by a named dependency. Use task states `MISSING`, `READY`, `IN PROGRESS`, `REVIEW`, `BLOCKED`, and `DONE`.
>
> Generate prompts with one task ID, exact required reading, exact editable output paths, measurable acceptance criteria, a task-specific log, and a stop condition. Delegate only independent work with non-overlapping files, up to the available concurrency limit.
>
> Enforce APA 7, claim-level traceability, identical definitions/units/years/scales for comparisons, saved graph data, visible proxy notes, image/map credits, and explicit limitations. Never accept the rough storyboard as evidence, a bare URL as a finished citation, or a file's existence as proof of completion.
>
> Treat visual quality as a graded requirement. Require five-second graph comprehension, stable logical colours, direct labels, one dominant idea per spread, varied page rhythm, and concise non-essay writing. Return work that is factually correct but visually dull, repetitive, or difficult to understand.
>
> After each batch, inspect the deliverables, accept or reject the work, update the checklist and status board, append to `project-control/logs/controller.md`, and prepare the next prompts. Report current phase, evidence-based progress, checklist changes, accepted/rejected work, blockers, next assignments, and files changed.

## Universal specialist-agent prompt

The controller uses this structure for every new task:

> You are the **[ROLE] Agent** for the Africa–Asia Development Magazine. Complete **[TASK-ID: TASK NAME]**.
>
> Read `AGENTS.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `[RELEVANT INPUTS]`, and any earlier log for this task.
>
> You may create or edit only `[EXACT OUTPUT PATHS]`. Do not edit the master checklist, status board, or files owned by other active agents.
>
> Required deliverable: `[ONE CLEAR RESULT]`.
>
> Acceptance criteria: `[MEASURABLE CRITERIA]`. Every statistic and substantive claim must have a traceable source and complete APA 7 record. Proxies, missing data, incompatible measures, rejected sources, uncertainty, and limitations must be explicit.
>
> Before stopping, create or append to `project-control/logs/[TASK-ID].md` using `project-control/logs/LOG_TEMPLATE.md`. Use `REVIEW` when controller or independent verification remains.
>
> Stop after the named deliverable and log exist. Do not expand into unrelated research, writing, or design.

## Role-specific prompt requirements

### Sources & APA Agent

The prompt must name a bounded set of claims, countries, sources, or pages. Require the agent to open the original source, create a complete APA 7 record, give the matching in-text form, record exact pages/tables/indicators/queries, link source IDs to claim IDs, and document inaccessible or rejected sources.

The agent may update only the named registry rows, audit file, and task log. Source verification and country-file editing should be separate tasks when running concurrently.

### Country Data Agent

Assign one country per task. Require the same ten indicators used in `data/ghana.md` and `data/south_korea.md`, the locked anchor years 1960/1990/2020, explicit actual years for proxies, confidence ratings, complete APA citations, data gaps, headline findings, and sections explaining what the case supports, challenges, and cannot prove.

### History & Theory Agent

Assign one theme and exact magazine pages. Require claims, counterevidence, exceptions, country examples, complete citations, limitations, and possible visuals. A theory-testing task must include mechanism, measurable predictions, support, strongest challenge, alternatives, revision condition, and a clear decision about whether the theory survives.

### Charts & Maps Agent

Assign one figure or matched figure family and provide the approved data inputs. Require an editable source, publication export, tidy underlying data, figure specification, identical scales/units/years, stable logical colours, direct labels, colour-independent identification, APA figure note, missing-data treatment, “what this cannot prove” note where relevant, a five-second comprehension test, and verifier/date.

### Editorial & Design Agent

Assign a small page range only after evidence and figures are approved. Require one dominant idea per spread, a finding- or tension-led headline, concise body copy, captions, in-text APA citations, figure references, visible qualifications, image/map credits, varied page rhythm, and accessibility review. The agent may condense approved evidence but may not introduce new unsourced claims or fall back to long essay-like paragraphs.

### Interactions & Presentation Agent

Assign one interaction or one bounded presentation component. Require a learning objective, evidence basis, rules, limitations, static/offline alternative, phone/QR test where applicable, and avoidance of one “perfect” development answer. Presentation outputs must be usable by every team member.

### QA Agent

Assign one independent audit area: evidence/APA, data/graphs, editorial/causality, stereotyping/accessibility, rights, or links/export. Each finding must have a severity, exact location, evidence, and pass condition. QA reports issues; repairs require separate fix tasks.

## Current prompts to run

The copy-ready prompts are maintained only in `project-control/NEXT_AGENT_PROMPTS.md`; this runbook records the current task IDs so stale full prompts cannot survive here.

**Current batch after the latest 2026-10-06 controller reconciliation:**

1. `DATA-008` — repair the QA-001 source-ID, unit, and employment display-rounding defects in the frozen data package.
2. `ECON-001` — structural transformation, East Asian industrialisation, manufactured exports, and within-region variation evidence pack.
3. `DESIGN-001` — design showroom, palette trials, and draft approximately 25-page rhythm plan for user selection.
4. `SRC-003` — after DATA-008 releases the shared source registry, register RES-001 claims and verify map/image rights.

Always inspect `project-control/STATUS.md`, newer logs, and real deliverables before dispatching or accepting work. Present DESIGN-001 alternatives to the user before authorising a magazine-wide visual-system lock.

## How an agent finishes correctly

Before stopping, each specialist must:

1. Save its deliverable at the exact path in its prompt.
2. Verify the output against every acceptance criterion.
3. Record sources added and rejected.
4. Record proxies, uncertainties, and unresolved gaps.
5. Write its task-specific log.
6. Mark the handoff `REVIEW` unless independent review has already passed.
7. Tell the controller the exact output and log paths.

Agents must not update their own master-checklist boxes.

## How the controller reviews work

The controller checks:

- the output exists at the assigned path;
- it stayed within scope;
- required sources were opened and recorded in APA 7;
- numbers and definitions match the authoritative source;
- direct comparisons use compatible years, units, definitions, and scales;
- limitations and missing data are visible;
- no other agent's work was overwritten;
- the deliverable meets every acceptance criterion.

Controller outcomes:

- `DONE` — verified and accepted.
- `REVIEW` — delivered but awaiting an independent or specialist check.
- `IN PROGRESS` — useful partial work, with an exact remaining action.
- `BLOCKED` — a named dependency prevents further work.
- Returned for revision — the controller creates a narrow repair prompt.

## If work was interrupted

Start the Roadmap Controller and use this recovery prompt:

> Recover the project after an interrupted agent session. Read `START_HERE_AGENT_WORKFLOW.md`, the master checklist, status board, all task-specific logs, and the actual output files. Identify files that are complete, partial, missing, or inconsistent. Do not delete partial work. Update task states only after inspection, record the recovery in the controller log, and create narrowly scoped continuation prompts for unfinished tasks.

## If two agents edited the same file

Do not discard either version automatically. Stop both tasks, ask the controller to inspect the file and logs, identify each agent's intended changes, preserve valid work, and create one integration task with sole file ownership. Record the conflict and resolution in the controller log.

## If a source or value cannot be verified

Do not fill the gap with a plausible number. Mark it unresolved, preserve the attempted sources in the log, and let the controller decide whether to find another source, use a visibly labelled proxy, redesign the comparison, or omit the indicator.

## End-of-session check

Before closing a work session, confirm:

- [ ] Every active specialist wrote a task log.
- [ ] The controller inspected returned work.
- [ ] The checklist reflects only verified progress.
- [ ] The status board names the next ready tasks and blockers.
- [ ] No two active tasks own the same output file.
- [ ] APA, graph, data-gap, and credit requirements remain attached to every new prompt.
- [ ] The controller log records the session.

If these boxes are satisfied, the next session can restart from this document without relying on memory.
