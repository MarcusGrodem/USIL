# Next Agent Prompts

These four prompts are ready to dispatch in parallel. Their output files do not overlap. After they finish, run the Roadmap Controller prompt in `ROADMAP_CONTROLLER_AGENT.md` to inspect the work and update the checklist.

## 1. SRC-001 — Ghana and South Korea APA verification

You are the **Sources & APA Agent** for the Africa–Asia Development Magazine. Complete **SRC-001: Verify the Ghana and South Korea sources and create claim-linked APA 7 records**.

Before working, read `AGENTS.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `data/ghana.md`, `data/south_korea.md`, `SOURCES.md`, `research/source_registry.csv`, and `research/claim_registry.csv`.

You may create or edit only:

- `research/source_registry.csv`
- `research/claim_registry.csv`
- `research/ghana_korea_source_audit.md`
- `project-control/logs/SRC-001.md`

Do not edit the country files or `SOURCES.md` in this pass; record proposed corrections in the audit to avoid conflicts with parallel agents.

Required deliverable: a verified APA 7 and claim-traceability audit covering every headline claim and every numeric cell in the Ghana and South Korea files.

Acceptance criteria:

- Every checked source has a stable source ID, complete APA 7 reference, matching in-text form, exact indicator/page/table/query locator, source tier, and verification status.
- Every headline claim and numeric cell receives a claim ID linked to one or more source IDs.
- You open the original source or authoritative dataset; a bare URL or search result is not verification.
- You flag proxies, inaccessible sources, conflicting values, missing publication metadata, and claims not supported by their cited source.
- You do not invent missing metadata or approve a secondary mirror when an authoritative source is reasonably available.
- The audit ends with separate lists: approved, revision required, unresolved, and rejected.

Before stopping, write `project-control/logs/SRC-001.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`; the Roadmap Controller must inspect it before `DONE`.

Stop after the audit, registries, and task log are complete. Do not research the other four countries or write magazine copy.

## 2. DATA-002 — Botswana country evidence

You are the **Country Data Agent** for the Africa–Asia Development Magazine. Complete **DATA-002: Build the Botswana evidence file**.

Before working, read `AGENTS.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `research/RESEARCH_PLAN.md`, `data/ghana.md`, and `data/south_korea.md`.

You may create or edit only:

- `data/botswana.md`
- `project-control/logs/DATA-002.md`

Required deliverable: a Botswana file following the same ten-indicator structure and evidence standard as Ghana and South Korea, using the locked anchor years 1960, 1990, and 2020.

Acceptance criteria:

- Cover GDP per capita, labour productivity, employment by sector, manufacturing share, export composition, literacy/education, urbanisation, electricity/infrastructure, firm size/informality where comparable, and institutional/trust measures where credible.
- State the exact indicator, definition, unit, price/PPP basis, year, value, source locator, confidence, and limitation for each observation.
- Print the actual proxy year when an anchor year is unavailable; never silently interpolate.
- Include Botswana's starting position, historical/colonial inheritance, diamond dependence and governance context without turning the case into a decorative “success story.”
- End with: data-gap list; three to five evidence-backed headline findings; what Botswana supports; what it challenges; and what it cannot prove.
- Include complete APA 7 references and matching in-text citations inside the file.

Before stopping, write `project-control/logs/DATA-002.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`.

Stop after the country file and log exist. Do not edit shared registries, the master checklist, or magazine copy.

## 3. DATA-003 — Mauritius country evidence

You are the **Country Data Agent** for the Africa–Asia Development Magazine. Complete **DATA-003: Build the Mauritius evidence file**.

Before working, read `AGENTS.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `research/RESEARCH_PLAN.md`, `research/THEORIES.md`, `data/ghana.md`, and `data/south_korea.md`.

You may create or edit only:

- `data/mauritius.md`
- `project-control/logs/DATA-003.md`

Required deliverable: a Mauritius file following the same ten-indicator structure and evidence standard as Ghana and South Korea, using the locked anchor years 1960, 1990, and 2020.

Acceptance criteria:

- Cover GDP per capita, labour productivity, employment by sector, manufacturing share, export composition, literacy/education, urbanisation, electricity/infrastructure, firm size/informality where comparable, and institutional/trust measures where credible.
- State the exact indicator, definition, unit, year, value, source locator, confidence, and limitation for each observation.
- Print actual proxy years and explain gaps; do not silently interpolate or mix incompatible series.
- Examine the transition from sugar dependence toward export processing, textiles, tourism, finance, and services with appropriate qualifications.
- Explicitly test Radius of Trust and Continuity + Adaptation rather than assuming Mauritius confirms them.
- End with: data-gap list; three to five evidence-backed headline findings; what Mauritius supports; what it challenges; and what it cannot prove.
- Include complete APA 7 references and matching in-text citations inside the file.

Before stopping, write `project-control/logs/DATA-003.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`.

Stop after the country file and log exist. Do not edit shared registries, the master checklist, or magazine copy.

## 4. VIS-001 — Comparison system and proof graph

You are the **Charts & Maps Agent** for the Africa–Asia Development Magazine. Complete **VIS-001: Define the fixed comparison-chart system and build one Ghana–South Korea proof graph**.

Before working, read `AGENTS.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `design/DESIGN_GUIDE.md`, `design/africa_asia_colour_palette.md`, `data/ghana.md`, and `data/south_korea.md`.

You may create or edit only:

- `design/figures/COMPARISON_SYSTEM.md`
- `data/charts/ghana_korea_gdp_per_capita.csv`
- `design/figures/ghana_korea_gdp_per_capita.svg`
- `project-control/logs/VIS-001.md`

Required deliverable: a reusable six-country chart standard plus one editable, publication-oriented SVG comparing Ghana and South Korea GDP per capita in constant 2015 US dollars for 1960, 1990, and 2020.

Acceptance criteria:

- Lock a distinct colour and marker for all six countries using the existing palette and colour-independent identification.
- Define when to use paired trajectories, dot/slope charts, small multiples, 100% composition charts, mirrored dashboards, and maps.
- The proof graph uses identical axes and the exact values recorded in the current country files; show only observed anchor points and do not imply unobserved smooth annual data.
- Use a message title, factual subtitle, direct labels, visible endpoint values, unit, years, and a “what this cannot prove” note.
- Include an APA-style data note. Mark citation verification as pending `SRC-001` if the registry audit has not finished.
- The CSV includes country, year, value, unit, indicator code, source ID placeholder/reference, and notes.
- The SVG is legible at A4 magazine size and does not rely on colour alone.

Before stopping, write `project-control/logs/VIS-001.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`.

Stop after the standard, CSV, SVG, and task log exist. Do not redesign the full magazine or create unassigned charts.
