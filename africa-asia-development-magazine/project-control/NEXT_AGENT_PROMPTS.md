# Next Agent Prompts

**Last reconciled by the Roadmap Controller:** 2026-10-08
**Current stage:** Three-theory matrix accepted; figure production and photography-source integration next.
**Estimated progress:** 66%
**Final report ready:** No

THEORY-001/002 and PHOTO-001 are accepted. MAP-001 is blocked because the approved Library of Congress item raster and original legend could not be retrieved; its production specification is not finished artwork. The three assignments below have non-overlapping outputs and may run in parallel.

## 1. SRC-005 — Integrate the accepted photography sources

You are the **Sources & APA Agent** for the Africa–Asia Development Magazine. Complete **SRC-005: Integrate the accepted PHOTO-001 sources into the shared source registry**.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `research/asset_rights_register.csv`, `research/country_photography_audit.md`, `research/source_registry.csv`, `project-control/logs/PHOTO-001.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `research/source_registry.csv`
- `research/photo_source_registry_audit.md`
- `project-control/logs/SRC-005.md`

Required deliverable: twelve complete source-registry rows matching the twelve `SRC-PHOTO-COMMONS-*` IDs already assigned to the accepted PHOTO-001 asset rows, plus an integration audit.

Acceptance criteria:

- Preserve every existing source row exactly and append one unique row for each of the twelve provisional photo source IDs; do not rename asset/source IDs or change PHOTO-001 rights decisions.
- Open each item page and rights statement. Record creator, date/period, title/description, Wikimedia Commons or original container, stable item URL, access date, source type/tier, complete APA 7 image reference, narrative/parenthetical citation, exact item/file locator, honest verification status, owner, and rights/attribution/ShareAlike/model-release notes.
- Match creator, date, title, URLs, and licence terms to the accepted asset row. Report and stop on any material conflict rather than silently repairing another task's file.
- Confirm 97 unique source IDs after the append (85 existing + 12 new), zero malformed CSV rows, and zero PHOTO-001 asset source IDs missing from the registry.
- End the audit with `Approved`, `Revision required`, `Unresolved`, and `Rejected` sections. Approval is source-registry integration only, not final crop/page selection.

Before stopping, create `project-control/logs/SRC-005.md` using `project-control/logs/LOG_TEMPLATE.md` and mark the handoff `REVIEW`.

Stop after the registry append, audit, and log exist. Do not edit the asset register, claim registry, photographs, page copy, checklist, status board, roadmap, or controller log.

## 2. VIS-005 — Build the accepted theory evidence matrix visual

You are the **Charts & Editorial Design Agent** for the Africa–Asia Development Magazine. Complete **VIS-005: Build the accepted three-theory evidence matrix visual**.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `research/THEORY_EVIDENCE_MATRIX.md`, `research/claim_registry.csv`, `research/source_registry.csv`, `design/DESIGN_GUIDE.md`, `design/SELECTED_COMPARISON_SYSTEM.md`, `design/PAGE_RHYTHM_PLAN.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `data/charts/theory_evidence_matrix.csv`
- `design/figures/theory_evidence_matrix.svg`
- `design/figures/THEORY_EVIDENCE_MATRIX_SPEC.md`
- `project-control/logs/VIS-005.md`

Required deliverable: one editable A4 theory-test visual for page 18 that lets a reader compare the three bounded verdicts, strongest support, strongest challenge, limitation, and revision condition without reading the full research matrix.

Acceptance criteria:

- Use only the accepted THEORY-001/002 wording and `APPROVED` registered claims. The tidy CSV must preserve theory, country/case role, bounded verdict, claim IDs, source IDs, limitation, and revision/rejection condition.
- Do not convert qualitative verdicts into numeric scores, imply causal magnitude, rank cultures/countries, merge trust constructs, or omit the inconclusive Radius of Trust result.
- Make `supported-with-exceptions` and `inconclusive` understandable without colour; use direct text, distinct symbols/patterns, and explicit exception/cannot-prove language.
- Give the page one five-second question, a clear reading order, concise labels, 11 pt minimum essential A4 text, a source/limitations band, and no legend hunting or essay-like blocks.
- Include a complete figure/source note referencing the accepted matrix and shared registries. State that the theories are original group hypotheses, not established academic theories or causal estimates.
- Validate SVG/XML, CSV parsing, every claim/source ID, grayscale identity, and digital A4 geometry. Mark `REVIEW`; physical/human/final-type checks remain under VIS-004.

Before stopping, create `project-control/logs/VIS-005.md` using `project-control/logs/LOG_TEMPLATE.md`.

Stop after the CSV, SVG, specification, and log exist. Do not edit the theory matrix, registries, design system, page copy, checklist, status board, roadmap, or controller log.

## 3. VIS-006 — Build the six-country GDP anchor dashboard family

You are the **Charts & Maps Agent** for the Africa–Asia Development Magazine. Complete **VIS-006: Build the six-country GDP-per-capita anchor dashboard family**.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `data/master/six_country_chart_inputs.csv`, `data/master/six_country_indicator_dictionary.csv`, `research/six_country_comparability_review.md`, `research/source_registry.csv`, `design/DESIGN_GUIDE.md`, `design/SELECTED_COMPARISON_SYSTEM.md`, `design/figures/COMPARISON_SYSTEM.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `data/charts/six_country_gdp_anchor_years.csv`
- `design/figures/six_country_gdp_anchor_dashboard.svg`
- `design/figures/six_country_gdp_anchor_dashboard_16x9.svg`
- `design/figures/SIX_COUNTRY_GDP_ANCHOR_SPEC.md`
- `project-control/logs/VIS-006.md`

Required deliverable: a matched A4 and 1280 × 720 dashboard family comparing all six countries at the locked 1960, 1990, and 2020 anchors using the frozen `NY.GDP.PCAP.KD` rows.

Acceptance criteria:

- Copy the 18 approved frozen observations at full precision into the tidy output; preserve country, region, actual year, value, unit, comparison class, source ID, locator, territorial caveat, and display label. Do not query live WDI or substitute a different release.
- Use one identical constant-2015-US-dollar definition and common quantitative scale/geometry across all six countries and three years. State Malaysia's territorial caveat visibly.
- Direct-label all countries and endpoint values; use the selected country markers and provisional colours with colour-independent identification. Do not imply a uniform Africa-versus-Asia race or a causal explanation.
- Provide one five-second message, visible year/unit/source notes, a COVID-affected-2020 note, and “What this comparison cannot prove.” Avoid unnecessary legend hunting, decorative precision, and overpacked labels.
- Include exact coordinate/scale math, source identity, frozen input path, APA figure note, accessibility metadata, and print/projection typography targets in the specification.
- Independently reparse the output CSV and verify all 18 values against the frozen master; validate both SVGs/XML, coordinates, labels, grayscale identity, contrast, and canvas bounds. Mark `REVIEW`; named human/physical release gates remain separate.

Before stopping, create `project-control/logs/VIS-006.md` using `project-control/logs/LOG_TEMPLATE.md`.

Stop after the CSV, two SVGs, specification, and log exist. Do not edit the frozen master, dictionary, registries, selected-system documents, existing figures, page copy, checklist, status board, roadmap, or controller log.

## Blocked tasks — do not dispatch

- `MAP-001`: requires a verified LOC item 2021668660 raster derivative, original legend, direct derivative URL, dimensions, checksum, and human source comparison.
- `VIS-004`: requires named owners/testers for the non-creator back-row test, physical A4 proof, human colour-vision review, and final-typography review.

## After this batch

Run the Roadmap Controller again. Inspect real source rows and visual exports, not only logs. Accept technical prototypes only at their bounded gate; no final figure or magazine-wide system is released until the named human/physical checks pass.
