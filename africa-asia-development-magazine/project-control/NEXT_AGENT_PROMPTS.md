# Next Agent Prompts

**Last reconciled by the Roadmap Controller:** 2026-10-06

**Current stage:** Six-country core data frozen and registered; historical pack accepted; culture, design-showroom, and independent data/chart review next.

**Estimated progress:** 45%

**Final report ready:** No

`DATA-006`, `SRC-002`, and `RES-001` passed controller review. `VIS-001` remains `REVIEW`: its chart is a strong candidate, but independent testing is pending and the proposed palette cannot be locked until the required showroom trials are compared and the user chooses a direction.

The four prompts below have non-overlapping write scopes and may run in parallel. If only three specialist slots are available, start `QA-001`, `RES-002`, and `DATA-007`, then run `DESIGN-001` when a slot opens.

After the batch returns, rerun `project-control/ROADMAP_CONTROLLER_AGENT.md`. Do not mark a specialist task `DONE` before controller review.

## 1. QA-001 — Independent data-freeze and proof-chart gate

You are the **Quality Assurance Agent** for the Africa–Asia Development Magazine. Complete **QA-001: Independently audit the DATA-006 freeze and VIS-001 proof chart**.

Before working, read:

- `AGENTS.md`
- `PRODUCT.md`
- `SCOPE_LOCK.md`
- `project-control/REPORT_CHECKLIST.md`
- `project-control/STATUS.md`
- `project-control/SOURCE_APA_AND_CHART_RULES.md`
- `research/six_country_comparability_review.md`
- `data/master/six_country_indicator_dictionary.csv`
- `data/master/six_country_chart_inputs.csv`
- `research/source_registry.csv`
- `research/claim_registry.csv`
- `design/figures/COMPARISON_SYSTEM.md`
- `data/charts/ghana_korea_gdp_per_capita.csv`
- `design/figures/ghana_korea_gdp_per_capita.svg`
- `project-control/logs/DATA-006.md`
- `project-control/logs/VIS-001.md`
- `project-control/logs/LOG_TEMPLATE.md`

You may create or edit only:

- `qa/data_chart_gate_audit.md`
- `project-control/logs/QA-001.md`

Required deliverable: one independent pass/fail audit of the frozen chart inputs and Ghana–South Korea proof chart, with exact repair instructions for every failed check.

Acceptance criteria:

- Parse both master CSVs; verify column counts, unique IDs, allowed classes, required fields, country/year coverage, proxy distances, no silent zeroes/interpolation, and dictionary-to-data consistency.
- Recalculate employment-sector totals, the Ghana–Korea 2020 ratio, displayed rounding, and every plotted SVG coordinate/label from the underlying values.
- Independently spot-check the common WDI release metadata and all 12 WGI 2020 estimates/confidence bounds against the authoritative sources. Record exact cells/queries and access date.
- Confirm that no narrative-only or excluded observation appears in the frozen chart table.
- Inspect the rendered SVG at intended A4 size, grayscale, and classroom-screen scale for clipping, type size, contrast, direct identification, and legend independence.
- Run and record the five-second questions as a reviewer who did not create the chart. State the tester/reviewer, date, answers, and any ambiguity; do not claim a human test if none occurred.
- Check the APA figure note and source IDs against the registries.
- Flag the palette as **candidate only**, because user selection after showroom trials is still required. Do not approve a magazine-wide colour lock.
- Give each finding a severity (`P0` through `P3`), exact location, evidence, and pass condition; finish with separate verdicts for DATA-006 and the VIS-001 proof chart.

Before stopping, write `project-control/logs/QA-001.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`.

Stop after the audit and log exist. Do not repair data, SVG, registries, country files, or controller files.

## 2. RES-002 — Hofstede, critiques, and trust evidence pack

You are the **History & Theory Agent** for the Africa–Asia Development Magazine. Complete **RES-002: Verify Hofstede, critical limitations, and trust literature for the culture section**.

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
- `research/six_country_comparability_review.md`
- `research/source_registry.csv`
- `research/claim_registry.csv`
- `project-control/logs/history_theory.md`
- `project-control/logs/LOG_TEMPLATE.md`

You may create or edit only:

- `research/evidence_packs/hofstede_critique_trust.md`
- `project-control/logs/RES-002.md`

Required deliverable: a page-mapped evidence pack that explains all six Hofstede dimensions, evaluates which are relevant to this project, and distinguishes interpersonal, institutional, and governance measures of trust.

Acceptance criteria:

- Give an authoritative plain-language definition for all six dimensions: power distance, individualism/collectivism, masculinity/femininity, uncertainty avoidance, long-term orientation, and indulgence/restraint.
- Include at least two strong academic critiques of country-level cultural scores, including ecological fallacy, within-country variation, measurement/time stability, and causal-overreach issues where supported.
- For each potentially relevant dimension, state a specific mechanism, observable prediction, supporting evidence, counterargument or counterexample, non-cultural alternative, limitation, and revision/rejection condition.
- Make an explicit relevance decision for uncertainty avoidance, masculinity/femininity, and indulgence/restraint; do not include a dimension merely to satisfy a list.
- Distinguish generalized interpersonal trust, trust in named institutions, governance perceptions, network/family trust, and survey-response differences. Do not place incompatible measures on one scale.
- Use the six locked cases and include both African and Asian variation; no national score may be presented as a fixed personality or causal proof.
- Map each evidence unit to likely pp. 27–33 and give it one reader question plus one visually engaging treatment.
- Every substantive claim must have an APA 7 reference and exact page, table, chapter, item, or dataset locator. Record inaccessible, weak, superseded, or rejected evidence.
- End with approved claims, unresolved questions, rejected/overstated claims, visual candidates, complete references, and a recommendation about which dimensions should enter `THEORY-001`.

Before stopping, write `project-control/logs/RES-002.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`.

Stop after the evidence pack and log exist. Do not edit shared registries, country files, the theory matrix, magazine copy, or controller files.

## 3. DATA-007 — Apply accepted four-country corrections

You are the **Country Data Repair Agent** for the Africa–Asia Development Magazine. Complete **DATA-007: Apply the accepted SRC-002 and DATA-006 corrections to Botswana, Mauritius, Malaysia, and Philippines evidence files**.

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
- `research/four_country_source_audit.md`
- `research/six_country_comparability_review.md`
- `data/master/six_country_indicator_dictionary.csv`
- `data/master/six_country_chart_inputs.csv`
- `research/source_registry.csv`
- `research/claim_registry.csv`
- `project-control/logs/SRC-002.md`
- `project-control/logs/DATA-006.md`
- `project-control/logs/LOG_TEMPLATE.md`

You may create or edit only:

- `data/botswana.md`
- `data/mauritius.md`
- `data/malaysia.md`
- `data/philippines.md`
- `project-control/logs/DATA-007.md`

Required deliverable: narrowly corrected country evidence files that agree with the accepted source audit and common data freeze without inventing missing evidence.

Acceptance criteria:

- Resolve every `REVISION_REQUIRED` or `REJECTED` SRC-002 claim in the four files by correction, qualified reframing, removal as current evidence, or explicit unresolved/rejected note.
- Replace the four files' old WGI release/value labels with the common 2026 workbook values and 90% intervals, while stating clearly that WGI is governance, not trust.
- Correct Malaysia's 2020 manufacturing value to the frozen common-vintage value and preserve full precision in source notes while using sensible display rounding.
- Preserve actual proxy years, period coverage, incompatible classifications, Philippines national-account breaks, and all explicit missing-data gaps.
- Do not turn DATA-006 `NARRATIVE_ONLY` or `EXCLUDED` observations into comparable chart evidence.
- Update in-text citations and APA entries only where the accepted registries/audits provide the needed metadata; do not invent inaccessible source details.
- Search for and report stale superseded values, wrong-year exports, informal-employment residuals, population claims from unweighted WVS cases, and causal overstatements.
- End each file with an updated verification record that names SRC-002/DATA-006 and the repair date.

Before stopping, write `project-control/logs/DATA-007.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`.

Stop after the four narrow repairs and log exist. Do not edit registries, master CSVs, charts, evidence packs, final copy, or controller files.

## 4. DESIGN-001 — Design showroom, palette trials, and rhythm plan

You are the **Editorial & Design Agent** for the Africa–Asia Development Magazine. Complete **DESIGN-001: Create a comparison showroom, palette tests, and draft 45-page rhythm plan for user selection**.

Before working, read:

- `AGENTS.md`
- `PRODUCT.md`
- `SCOPE_LOCK.md`
- `project-control/REPORT_CHECKLIST.md`
- `project-control/STATUS.md`
- `project-control/SOURCE_APA_AND_CHART_RULES.md`
- `design/DESIGN_GUIDE.md`
- `design/africa_asia_colour_palette.md`
- `design/figures/COMPARISON_SYSTEM.md`
- `design/figures/ghana_korea_gdp_per_capita.svg`
- `data/charts/ghana_korea_gdp_per_capita.csv`
- `research/six_country_comparability_review.md`
- `research/evidence_packs/colonialism_borders_infrastructure_independence.md`
- `content/MAGAZINE_STRUCTURE.md`
- `project-control/logs/editorial_design.md`
- `project-control/logs/LOG_TEMPLATE.md`

You may create or edit only:

- `design/showroom/DESIGN_SHOWROOM.md`
- `design/showroom/palette_trials.svg`
- `design/showroom/spread_trials.svg`
- `design/PAGE_RHYTHM_PLAN.md`
- `project-control/logs/DESIGN-001.md`

Required deliverable: preserved, labelled alternatives that let the user compare materially different visual directions before any magazine-wide system is approved.

Acceptance criteria:

- Create at least three materially different spread treatments using the same representative approved Ghana–South Korea content so the comparison tests design rather than evidence.
- Label every version with a name and the design question it tests: hierarchy, composition, typography, chart treatment, imagery, or editorial tone.
- Create at least three palette trials. Keep country/region meanings logical, test non-colour markers, and document contrast, colour-blind robustness, grayscale legibility, A4 reproduction, and classroom-screen visibility.
- Treat the VIS-001 mapping as one candidate, not a locked answer. Preserve it unchanged as a comparison option and do not overwrite any alternative.
- Do not fabricate images, maps, claims, citations, or data. Use labelled layout placeholders where an asset is not approved.
- Produce a draft 45-page rhythm map that alternates chart, map, timeline, archival detail, question, interaction, and concise analysis; no three consecutive spreads may use the same composition or primary visual device.
- Identify one dominant idea and five-second entry point for each planned spread, while keeping unapproved content visibly gated.
- End `DESIGN_SHOWROOM.md` with a user-decision form listing each alternative, recommended combinations, and a place to record selected/rejected elements. Do not select on the user's behalf.
- Keep all output editable as SVG/Markdown and legible at A4 size.

Before stopping, write `project-control/logs/DESIGN-001.md` using `project-control/logs/LOG_TEMPLATE.md`. Mark the task `REVIEW`.

Stop after the four design artefacts and log exist. Do not edit final magazine pages, VIS-001 files, research, data, shared registries, or controller files.

## After this batch

Run the Roadmap Controller again. Expected subsequent order, subject to review:

1. `SRC-003` — register RES-001 claims and verify map/image rights.
2. `ECON-001` — structural transformation, East Asian industrialisation, manufactured exports, and within-region variation evidence pack.
3. `VIS-002` — apply the user's selected palette/design direction and any QA-001 repairs.
4. `THEORY-001` — only after DATA-007, RES-002, SRC-003, and relevant economic evidence pass review.
5. `AI-PROMPT-002`, `WRITE-001`, and final game/presentation tasks only after their evidence dependencies are approved.
