# Next Agent Prompts

**Last reconciled by the Roadmap Controller:** 2026-10-05

**Current stage:** All six country evidence files are checked; comparison harmonisation, registry expansion, and thematic research are next.

**Estimated progress:** 38%

**Final report ready:** No

The previous prompts for `SRC-001`, `DATA-002`, and `DATA-003` have been retired because those tasks are `DONE`. The controller also accepted `DATA-001`, `DATA-004`, and `DATA-005` as `DONE` in `CTRL-007`.

The four prompts below are the next non-overlapping batch. They may run in parallel because their editable output paths do not overlap. If only three specialist slots are available, start `VIS-001`, `DATA-006`, and `SRC-002` first, then start `RES-001` when a slot opens.

After the agents finish, run the prompt in `project-control/ROADMAP_CONTROLLER_AGENT.md` again. Do not mark any specialist task `DONE` before controller review.

## 1. VIS-001 — Comparison system and verified proof graph

You are the **Charts & Maps Agent** for the Africa–Asia Development Magazine. Complete **VIS-001: Define the fixed comparison-chart system and build one verified Ghana–South Korea GDP proof graph**.

Before working, read:

- `AGENTS.md`
- `PRODUCT.md`
- `SCOPE_LOCK.md`
- `project-control/REPORT_CHECKLIST.md`
- `project-control/STATUS.md`
- `project-control/SOURCE_APA_AND_CHART_RULES.md`
- `design/DESIGN_GUIDE.md`
- `design/africa_asia_colour_palette.md`
- `data/ghana.md`
- `data/south_korea.md`
- `research/source_registry.csv`
- `research/claim_registry.csv`
- `research/ghana_korea_source_audit.md`
- `project-control/logs/charts_maps.md`

You may create or edit only:

- `design/figures/COMPARISON_SYSTEM.md`
- `data/charts/ghana_korea_gdp_per_capita.csv`
- `design/figures/ghana_korea_gdp_per_capita.svg`
- `project-control/logs/VIS-001.md`

Required deliverable: a reusable six-country chart standard plus one editable, publication-oriented SVG comparing Ghana and South Korea GDP per capita in constant 2015 US dollars for 1960, 1990, and 2020.

Acceptance criteria:

- Lock one distinct colour and one non-colour marker for each of the six countries. Explain the logical role of the colours and keep the mapping stable.
- Define when to use paired trajectories, dot/slope charts, small multiples, 100% composition charts, mirrored dashboards, and maps.
- Use only the controller-approved GDP observations in the current Ghana and South Korea files. Record the precise values and source IDs in the CSV.
- Show only the three observed anchor years. Do not smooth, interpolate, or imply an annual series between them.
- Use one genuinely shared axis and the same unit, years, geometry, and scale for both countries.
- Use a finding-led title, factual subtitle, direct labels, visible values, unit, years, and a concise “what this cannot prove” note.
- Include a complete APA-style figure note linked to the registered World Bank source.
- The CSV must contain country, year, value, unit, indicator code, source ID, retrieval/release information, and notes.
- The SVG must remain understandable in grayscale, use colour-independent markers, include accessible `<title>` and `<desc>` elements, and avoid legend hunting.
- Verify text contrast and legibility at A4 print size. Do not use the tiny 7–10 px source and chart text found in the old HTML prototypes.
- Record a five-second comprehension check. If no independent reader is available, mark independent testing as pending rather than claiming a pass.
- Explicitly note that the old Ghana and South Korea HTML charts are prototypes with mismatched axes and are not approved evidence graphics.

Before stopping, write `project-control/logs/VIS-001.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`.

Stop after the comparison standard, CSV, SVG, and task log are complete. Do not redesign the full magazine, repair the old HTML spreads, or create unassigned charts.

## 2. DATA-006 — Six-country comparability review and data freeze

You are the **Country Data and Comparability Agent** for the Africa–Asia Development Magazine. Complete **DATA-006: Reconcile all six country evidence files and freeze the approved chart inputs**.

Before working, read:

- `AGENTS.md`
- `PRODUCT.md`
- `SCOPE_LOCK.md`
- `project-control/REPORT_CHECKLIST.md`
- `project-control/STATUS.md`
- `project-control/SOURCE_APA_AND_CHART_RULES.md`
- all six files under `data/`: `ghana.md`, `south_korea.md`, `botswana.md`, `mauritius.md`, `malaysia.md`, and `philippines.md`
- `research/source_registry.csv`
- `research/claim_registry.csv`
- `research/ghana_korea_source_audit.md`
- `project-control/logs/DATA-001.md` through `project-control/logs/DATA-005.md`

You may create or edit only:

- `research/six_country_comparability_review.md`
- `data/master/six_country_indicator_dictionary.csv`
- `data/master/six_country_chart_inputs.csv`
- `project-control/logs/DATA-006.md`

Do not edit the six accepted country files or the shared source and claim registries.

Required deliverable: an auditable decision on which country observations can be compared directly, which require visible proxy/definition warnings, and which must be excluded, together with a frozen chart-input table.

Acceptance criteria:

- Review the required indicators across all six countries: GDP per capita, labour productivity, employment by sector, manufacturing share, export composition, literacy/education, urbanisation, electricity/infrastructure, firm size/informality, and institutional/trust measures.
- For every indicator, document definition, unit, price/PPP basis, source series, release or retrieval vintage, requested year, actual year, proxy distance, geographic coverage, and known break in method.
- Use the locked comparison years 1960, 1990, and 2020. Never silently replace an anchor year or interpolate a missing value.
- Classify every candidate observation as `APPROVED_FOR_DIRECT_COMPARISON`, `APPROVED_WITH_VISIBLE_CAVEAT`, `NARRATIVE_ONLY`, or `EXCLUDED`, with a short reason.
- Reconcile dynamic WDI/WGI vintages before approving a comparison. Do not mix incompatible WGI releases.
- Treat differing export classifications, Philippines national-account vintages, informality definitions, firm-size constructs, and direct-trust versus governance measures as explicit comparability decisions.
- The indicator dictionary must define each approved indicator and its allowable transformations, rounding, missing-value notation, and display unit.
- The frozen chart table must contain only traceable observations and include country, requested year, actual year, value, unit, indicator code, source locator/ID, comparability class, caveat, release/retrieval date, and verification status.
- The review must end with: approved chart families; blocked chart families; unresolved gaps; and the exact inputs safe for the next Charts & Maps Agent.
- Do not force a complete table. Honest blanks and exclusions are required where evidence is incompatible or unavailable.

Before stopping, write `project-control/logs/DATA-006.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`.

Stop after the review, dictionary, frozen table, and task log exist. Do not create charts, rewrite country research, or edit controller files.

## 3. SRC-002 — Four-country APA and claim-registry integration

You are the **Sources & APA Agent** for the Africa–Asia Development Magazine. Complete **SRC-002: Register and audit the Botswana, Mauritius, Malaysia, and Philippines sources and claims**.

Before working, read:

- `AGENTS.md`
- `PRODUCT.md`
- `SCOPE_LOCK.md`
- `project-control/REPORT_CHECKLIST.md`
- `project-control/STATUS.md`
- `project-control/SOURCE_APA_AND_CHART_RULES.md`
- `data/botswana.md`
- `data/mauritius.md`
- `data/malaysia.md`
- `data/philippines.md`
- `research/source_registry.csv`
- `research/claim_registry.csv`
- `research/ghana_korea_source_audit.md`
- `project-control/logs/SRC-001.md`

You may create or edit only:

- `research/source_registry.csv`
- `research/claim_registry.csv`
- `research/four_country_source_audit.md`
- `project-control/logs/SRC-002.md`

Do not edit any country evidence file. Record corrections and unresolved issues in the audit.

Required deliverable: expand the shared registries so the four newer country files have the same source and claim traceability standard as Ghana and South Korea.

Acceptance criteria:

- Preserve all valid SRC-001 rows, IDs, fields, and status meanings. Do not rewrite or renumber accepted Ghana/South Korea records.
- Give every checked source a unique stable source ID, complete APA 7 reference, narrative and parenthetical in-text forms, exact indicator/page/table/query locator, source tier, stable URL/DOI, and verification status.
- Register every headline finding, numeric anchor, proxy observation, historical claim, and theory-testing claim from the four country files.
- Link each claim to one or more source IDs and record country, section, year/value where applicable, exact locator, and status.
- Open the original source or authoritative dataset. A bibliography entry, search result, secondary mirror, or bare URL is not verification.
- Flag dynamic datasets, conflicting editions, proxy years, inaccessible sources, incomplete APA metadata, weak causal language, and claims not supported by the cited passage.
- Preserve rejected or unresolved evidence as explicitly classified records; do not silently delete it or invent missing metadata.
- Validate the final CSVs for unique IDs, consistent column counts, valid source links, and no dangling claim-to-source references.
- End the audit with separate `APPROVED`, `REVISION_REQUIRED`, `UNRESOLVED`, and `REJECTED` sections plus counts by country.

Before stopping, write `project-control/logs/SRC-002.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`.

Stop after the two expanded registries, audit, and task log are complete. Do not write magazine copy, alter country files, or research the historical-theme pages assigned to `RES-001`.

## 4. RES-001 — Colonialism, borders, infrastructure, and independence evidence pack

You are the **History & Theory Agent** for the Africa–Asia Development Magazine. Complete **RES-001: Verify the historical evidence for colonial rule, borders, infrastructure, and independence inheritance**.

Before working, read:

- `AGENTS.md`
- `PRODUCT.md`
- `SCOPE_LOCK.md`
- `project-control/REPORT_CHECKLIST.md`
- `project-control/STATUS.md`
- `project-control/ROADMAP.md`
- `project-control/SOURCE_APA_AND_CHART_RULES.md`
- `research/RESEARCH_PLAN.md`
- `research/THEORIES.md`
- all six country evidence files under `data/`
- `design/INFOGRAPHICS_AND_INTERACTIONS.md`
- `project-control/logs/history_theory.md`

You may create or edit only:

- `research/evidence_packs/colonialism_borders_infrastructure_independence.md`
- `project-control/logs/RES-001.md`

Required deliverable: a page-mapped historical evidence pack that can support the planned colonial-inheritance section without reducing countries to one colonial explanation.

Acceptance criteria:

- Cover colonial control, British-rule variation, French-rule variation, other colonial models, railway/infrastructure orientation, partitioned borders, and the institutions/assets/liabilities present at independence.
- Include evidence relevant to the six locked countries and at least one meaningful exception or counterexample for each broad colonial claim.
- Distinguish directly documented historical facts, scholarly interpretations, competing explanations, and the group's own theory implications.
- Map each evidence unit to its likely magazine page or spread and specify the single reader question it answers.
- Every substantive claim must have a full APA 7 reference and an exact page, chapter, table, figure, archive item, or dataset locator.
- Proposed maps must state the date represented, geographic boundaries, source, transformation required, and known uncertainty. Do not copy a modern border map as historical evidence.
- Proposed infrastructure visuals must distinguish construction, ownership, route purpose, and later use; avoid claiming that every colonial railway had one purpose.
- Identify what the evidence supports, what it challenges, alternative explanations, and what it cannot prove about later development.
- Propose visually engaging treatments—such as paired maps, annotated routes, archival-document details, or matched timelines—without fabricating assets or using unlicensed images.
- End with an approved-claim list, unresolved questions, rejected/overstated claims, visual candidates, and complete references.

Before stopping, write `project-control/logs/RES-001.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`.

Stop after the evidence pack and task log exist. Do not edit the shared registries, build final maps, test Hofstede/trust literature, or write final magazine pages.

## After this batch

Run the Roadmap Controller prompt in `project-control/ROADMAP_CONTROLLER_AGENT.md`. The controller must inspect the returned files before changing any checklist item.

Expected subsequent order, subject to controller review:

1. `RES-002` — Hofstede, critiques, and trust literature.
2. Additional chart tasks using only the accepted `DATA-006` freeze.
3. `THEORY-001` after `DATA-006`, `RES-001`, and `RES-002` pass review.
4. `DESIGN-001` after the comparison system and page evidence priorities are approved.
5. `WRITE-001` only after its evidence and figure dependencies are approved.
