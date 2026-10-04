# Agent Operating Rules

This is a multi-agent research and magazine-production project. A future agent must be able to understand the work without access to earlier chats.

## Read before working

1. `PRODUCT.md` — audience, purpose, personality, anti-references, and design principles.
2. `SCOPE_LOCK.md` — authoritative countries, years, and section ownership.
3. `project-control/REPORT_CHECKLIST.md` — simple view of what the report needs and what is missing.
4. `project-control/STATUS.md` — active tasks, owners, blockers, and next assignments.
5. `project-control/ROADMAP.md` — phases, dependencies, and quality gates.
6. Your sector log under `project-control/logs/`.
7. `project-control/SOURCE_APA_AND_CHART_RULES.md` for research, writing, data, and visuals.

If an older file conflicts with `SCOPE_LOCK.md`, follow `SCOPE_LOCK.md` and report the conflict in your log.

## Work rules

- Work from one task ID assigned in `project-control/STATUS.md`.
- Use only the output paths in your prompt. Avoid editing a file assigned to another active agent.
- Status values: `MISSING`, `READY`, `IN PROGRESS`, `REVIEW`, `BLOCKED`, and `DONE`.
- Only the Roadmap Controller updates the master checklist and status board.
- A specialist agent updates its own append-only sector log before stopping.
- A file existing does not make a task done. It must pass the listed acceptance check.

## Evidence rules

- Use APA 7 for in-text citations and the reference list.
- Every statistic, chart, map, image, and substantive claim needs a traceable source.
- Record exact indicator, definition, unit, country, year, page/table, URL/DOI, and verification date as applicable.
- Never silently interpolate a value, replace an anchor year, mix definitions, or use a storyboard placeholder as evidence.
- Separate sourced evidence, interpretation, and original group theories.

## Comparison rules

- Direct comparisons use the same indicator definitions, units, years, scales, and chart geometry unless a visible note explains an exception.
- Prefer direct labels, matched panels, and small multiples.
- Do not rely on colour alone.
- Save the data behind every graph.
- State what a major comparison cannot prove.

## Visual and editorial quality

- The professor values visual communication, creativity, and engaging presentation. Treat design quality as a graded requirement, not decoration added after research.
- Every spread needs one dominant idea and a clear visual hierarchy. A reader should understand the main comparison or question within five seconds.
- Use logical, stable colour meanings. Colour must identify a country, region, category, direction, or emphasis consistently; never assign colours merely because they look attractive.
- Avoid dense legend-dependent graphs. Prefer direct labels, visible values, short annotations, and matched scales.
- Avoid repetitive page templates. Alternate charts, maps, timelines, archival imagery, diagrams, quotes, questions, and short analytical text while preserving a coherent grid and type system.
- Body text must be concise and purposeful. Break long explanations into headlines, decks, captions, evidence callouts, or short paragraphs. Do not turn the magazine into an essay with pictures.
- Visual interest must never hide uncertainty, missing data, definitions, APA sources, or comparison limitations.

## Required handoff

Append this information to the correct sector log:

- date, agent name, and task ID;
- status and objective;
- inputs read;
- files created or changed;
- sources added or rejected;
- verification performed;
- limitations and blockers;
- exact next action.

If another review is required, mark the task `REVIEW`, not `DONE`.
