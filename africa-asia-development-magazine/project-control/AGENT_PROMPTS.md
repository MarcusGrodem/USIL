# Agent Prompt Templates

The Roadmap Controller creates one bounded prompt per agent. Replace every bracketed field.

## Universal template

You are the **[ROLE] Agent** for the Africa–Asia Development Magazine. Complete **[TASK-ID: TASK NAME]**.

Before working, read `AGENTS.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `[RELEVANT INPUT FILES]`, and `[YOUR SECTOR LOG]`. Follow `project-control/SOURCE_APA_AND_CHART_RULES.md`.

You may create or edit only: `[EXACT OUTPUT PATHS]`.

Required deliverable: `[ONE CLEAR RESULT]`.

Acceptance criteria:

- `[MEASURABLE CHECK 1]`
- `[MEASURABLE CHECK 2]`
- `[MEASURABLE CHECK 3]`
- every statistic and substantive claim has a traceable source and full APA 7 entry;
- proxies, incompatible measures, rejected sources, and uncertainties are explicit.

Before stopping, append a handoff to `[SECTOR LOG]` using `project-control/logs/LOG_TEMPLATE.md`. Use status `REVIEW` if independent checking remains. Do not edit the master checklist or status board.

Stop after the stated deliverable and log entry exist. Do not expand into unrelated research, writing, or design.

## Country Data Agent requirements

Assign one country at a time. Use the same ten-indicator structure as `data/ghana.md` and `data/south_korea.md`; use 1960, 1990, and 2020; include explicit gaps; and end with what the case supports, challenges, and cannot establish.

Output: one `data/<country>.md` file plus a handoff in `project-control/logs/country_data.md`.

## Sources & APA Agent requirements

Assign a bounded set of claims, countries, or pages. Require source opening/verification, complete APA 7 references, matching in-text forms, exact locators, linked source and claim IDs, source tier, and rejected-source notes.

Outputs: relevant `SOURCES.md` sections, `research/source_registry.csv`, `research/claim_registry.csv`, and `project-control/logs/sources_apa.md`.

## History & Theory Agent requirements

Assign one theme and exact magazine pages. Require approved claims, counterevidence, exceptions, case links, APA references, and proposed visuals. Distinguish sourced evidence from group interpretation.

Output: one file under `research/evidence_packs/` plus `project-control/logs/history_theory.md`.

## Charts & Maps Agent requirements

Assign one figure or matched figure family and provide approved data inputs. Require editable source, export, underlying data, graph specification, identical comparison scales/units/years, accessible encoding, APA note, and verification record.

Output: files under `data/charts/` and `design/figures/` plus `project-control/logs/charts_maps.md`.

## Editorial & Design Agent requirements

Assign a small page range only after its evidence and figures are approved. Require headline, concise copy, captions, APA citations, figure references, and a “what this cannot prove” note for major comparisons. Do not introduce new unsourced claims.

Output: files under `content/page_copy/` plus `project-control/logs/editorial_design.md`.

## QA Agent requirements

Assign one audit: evidence/APA, data/chart, editorial/stereotyping/accessibility, or links/export. Each finding needs severity, exact location, evidence, and a clear pass condition. QA agents report problems; fixing them requires a separate task.

Output: one report under `qa/` plus `project-control/logs/qa.md`.

## Prompt check before dispatch

- One task ID and one bounded result.
- Exact required reading.
- Exact editable output paths.
- Observable acceptance criteria.
- Named sector log.
- Explicit out-of-scope work.
- No file collision with another active agent.
