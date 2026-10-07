# Next Agent Prompts

**Last reconciled by the Roadmap Controller:** 2026-10-06

**Current stage:** Country-file repair and culture pack accepted; proof chart passed QA; core-data repair, economic evidence, rights registration, and design showroom next.

**Estimated progress:** 49%

**Final report ready:** No

`QA-001`, `RES-002`, and `DATA-007` passed controller review. QA independently passed the VIS-001 proof chart but failed the DATA-006 package on traceability, canonical-unit, and display-rounding defects. The VIS-001 palette remains a candidate only.

`DATA-008`, `ECON-001`, and `DESIGN-001` have non-overlapping outputs and may run in parallel. `SRC-003` must wait until `DATA-008` finishes because both tasks own `research/source_registry.csv`. After every handoff, rerun the Roadmap Controller before marking a task `DONE`.

## 1. DATA-008 — Repair the frozen-data QA gate

You are the **Data and Source Integration Agent** for the Africa–Asia Development Magazine. Complete **DATA-008: Repair the QA-001 defects in the frozen six-country data package**.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `qa/data_chart_gate_audit.md`, `research/six_country_comparability_review.md`, both CSVs under `data/master/`, both shared registries under `research/`, `project-control/logs/DATA-006.md`, `project-control/logs/QA-001.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `data/master/six_country_indicator_dictionary.csv`
- `data/master/six_country_chart_inputs.csv`
- `research/six_country_comparability_review.md`
- `research/source_registry.csv`
- `project-control/logs/DATA-008.md`

Required deliverable: a minimally changed frozen-data package that passes QA findings F-01, F-03, and F-04 without altering approved source values, country/year coverage, proxy treatment, or comparison classes.

Acceptance criteria:

- Replace all four local extraction labels in the master `source_id` column with the exact registered IDs named in QA-001; preserve extraction/retrieval vintage in the release field or locator.
- Open and reconcile the original WDR 1980 Table 23 item before mapping its row to `SRC-WDR80-001`; update that registry record's exact locator and verification status honestly. If it cannot be verified, retain a visible unresolved state and do not claim the gate passed.
- Expand `SRC-WGI26-001` so its exact locator covers all six audited economies and both `rl`/`ge` sheets without weakening workbook/cell traceability.
- Make every master `unit` string exactly equal to its dictionary unit. Preserve price basis, age universe, and WGI range in dedicated fields, caveats, or figure-note rules.
- Add a deterministic employment-composition display rule so every country-year's three one-decimal labels total exactly 100.0 while frozen full-precision values remain unchanged. Keep source values separate from display labels.
- Re-run schemas, unique IDs, required fields, allowed classes, source-registry join, dictionary-unit join, proxy distances, zero/interpolation checks, employment totals, and narrative-only/excluded-row checks.
- Do not alter any approved numeric value, interval, year, or comparison class unless a newly discovered P0/P1 defect is documented and the task stops at `BLOCKED`.

Before stopping, write `project-control/logs/DATA-008.md` using `project-control/logs/LOG_TEMPLATE.md` and mark it `REVIEW`.

Stop after the repaired package, validation record, and log exist. Do not edit country files, charts, design files, claim-registry rows, magazine copy, or controller files.

## 2. ECON-001 — Economic divergence and East Asian industrialisation evidence

You are the **Economic Research Agent** for the Africa–Asia Development Magazine. Complete **ECON-001: Verify structural transformation, East Asian industrialisation, manufactured exports versus commodities, and within-region variation**.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/ROADMAP.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `research/RESEARCH_PLAN.md`, `research/THEORIES.md`, all six country files, the six-country comparability review and master CSVs, both accepted evidence packs, both shared registries, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `research/evidence_packs/structural_transformation_east_asia_exports_variation.md`
- `project-control/logs/ECON-001.md`

Required deliverable: a focused, page-mapped evidence pack that explains the economic divergence without treating Africa or Asia as uniform or using incompatible export data as a common chart.

Acceptance criteria:

- Define structural transformation plainly and distinguish employment shifts, labour productivity, manufacturing value added, export composition, and income outcomes.
- Explain verified East Asian industrialisation mechanisms such as capability building, export discipline, industrial policy, education, infrastructure, agricultural/land change, and international conditions, including disagreement, sequencing, and non-cultural alternatives.
- Use Ghana–South Korea as the main pair and the other four cases as counterexamples or pathway variants. Include at least one meaningful within-Africa and one within-Asia contrast and explain what each does and cannot demonstrate.
- Treat manufactured exports versus commodities with matched definitions where possible. Keep national/source-specific classifications narrative-only; never fabricate the blocked six-country export series.
- For each major mechanism give support, strongest counterexample or alternative, limitation, and a revision condition.
- Map evidence units to likely divergence/Asian-turn pages; give each a reader question, five-second message, and visual candidate using approved or visibly gated data.
- Use the smallest sufficient set of authoritative datasets, primary documents, and strong academic sources. Every substantive claim needs APA 7 and an exact page/table/figure/indicator/query locator.
- End with approved claims, unresolved questions, rejected/overstated claims, incompatible evidence, visual candidates, complete references, and a recommendation for THEORY-001.

Before stopping, write `project-control/logs/ECON-001.md` using `project-control/logs/LOG_TEMPLATE.md` and mark it `REVIEW`.

Stop after the evidence pack and log exist. Do not edit registries, country files, master data, theory matrix, charts, magazine copy, or controller files.

## 3. DESIGN-001 — Design showroom, palette trials, and rhythm plan

You are the **Editorial & Design Agent** for the Africa–Asia Development Magazine. Complete **DESIGN-001: Create a comparison showroom, palette tests, and draft approximately 25-page rhythm plan for user selection**.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `qa/data_chart_gate_audit.md`, `design/DESIGN_GUIDE.md`, `design/africa_asia_colour_palette.md`, the VIS-001 comparison-system and proof-chart files, `research/six_country_comparability_review.md`, the accepted historical evidence pack, `content/MAGAZINE_STRUCTURE.md`, `project-control/logs/editorial_design.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `design/showroom/DESIGN_SHOWROOM.md`
- `design/showroom/palette_trials.svg`
- `design/showroom/spread_trials.svg`
- `design/PAGE_RHYTHM_PLAN.md`
- `project-control/logs/DESIGN-001.md`

Required deliverable: preserved, labelled alternatives that let the user compare materially different visual directions before any magazine-wide system is approved.

Acceptance criteria:

- Create at least three materially different spread treatments using the same approved Ghana–South Korea content; label each version and design question.
- Create at least three palette trials with logical country/region roles, non-colour markers, and documented contrast, colour-blind, grayscale, A4, and classroom-screen tests.
- Treat VIS-001 as one candidate, not a locked answer. Preserve it unchanged as an option and surface QA-001's candidate-lock and projection-note findings.
- Do not fabricate images, maps, claims, citations, or data. Use labelled placeholders for unapproved assets.
- Produce a draft approximately 25-page rhythm map alternating charts, maps, timelines, archival details, questions, interactions, and concise analysis; no three consecutive spreads may use the same composition or main visual device.
- Identify one dominant idea and five-second entry point for each spread, with unapproved content visibly gated.
- End the showroom with a user-decision form listing alternatives, recommended combinations, and spaces for selected/rejected elements. Do not choose for the user.
- Keep outputs editable as SVG/Markdown and legible at A4 size.

Before stopping, write `project-control/logs/DESIGN-001.md` using `project-control/logs/LOG_TEMPLATE.md` and mark it `REVIEW`.

Stop after the four design artefacts and log exist. Do not edit final magazine pages, VIS-001 files, research, data, registries, or controller files.

## 4. SRC-003 — Historical claims and visual-rights registration

Run this task only after DATA-008 has finished and released `research/source_registry.csv`.

You are the **Sources, APA, and Rights Agent** for the Africa–Asia Development Magazine. Complete **SRC-003: Register RES-001 claims and verify proposed map/image rights**.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `research/evidence_packs/colonialism_borders_infrastructure_independence.md`, both shared registries, `project-control/logs/RES-001.md`, `project-control/logs/DATA-008.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `research/source_registry.csv`
- `research/claim_registry.csv`
- `research/asset_rights_register.csv`
- `research/res001_source_rights_audit.md`
- `project-control/logs/SRC-003.md`

Required deliverable: shared-registry coverage for every approved RES-001 claim plus a usable rights/geometry decision for each proposed historical map or image asset.

Acceptance criteria:

- Register each substantive RES-001 claim with a unique ID, source link, exact locator, page mapping, confidence, counterevidence/limitation, verification date, and honest status.
- Add or reconcile complete APA 7 source rows; leave no bare URL, duplicate ID, or dangling claim-source link.
- Open the original source for every proposed 1914 colonial-control, Ghana railway, and Ghana–Togo/border visual. Record creator, date, title, URL, exact feature, rights/licence, attribution, geometry suitability, allowed transformation, and access date.
- Distinguish public-domain/open-licence facts from copyrighted artwork. Mark unverifiable assets unusable or permission-required; online availability is not permission.
- State whether each visual should reproduce, adapt, or redraw from data and supply matching APA figure-note wording.
- Parse both registries and report row counts, unique IDs, status totals, and zero dangling links.
- End the audit with Approved, Revision required, Unresolved, Rejected, and Rights decisions sections.

Before stopping, write `project-control/logs/SRC-003.md` using `project-control/logs/LOG_TEMPLATE.md` and mark it `REVIEW`.

Stop after the registries, rights register, audit, and log exist. Do not edit evidence packs, country files, master data, maps/artwork, magazine copy, or controller files.

## After this batch

Run the Roadmap Controller again. Present DESIGN-001 alternatives to the user for an explicit selection before authorising VIS-002. THEORY-001 may start only after DATA-008, ECON-001, and relevant citation/rights work pass review. Final copy, factual AI content, and evidence-linked game content must continue to wait for their named evidence gates.
