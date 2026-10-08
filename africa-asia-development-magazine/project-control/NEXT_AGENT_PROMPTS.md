# Next Agent Prompts

**Last reconciled by the Roadmap Controller:** 2026-10-08

**Current stage:** Historical claims/rights accepted; thematic registry integration and projection-proof cleanup next.

**Estimated progress:** 59%

**Final report ready:** No

`SRC-003` passed controller review. `VIS-002` delivered the selected system and technically correct 16:9 proof, but remains in `REVIEW` because repeated annotation markers can read as extra observations and the source band is compressed. `SRC-004` and `VIS-003` have non-overlapping outputs and may run in parallel. `THEORY-001` remains blocked until SRC-004 passes controller review.

## 1. SRC-004 — Culture/economic thematic registry integration

You are the **Sources and APA Agent** for the Africa–Asia Development Magazine. Complete **SRC-004: Register the accepted RES-002 and ECON-001 claims and sources**.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `research/evidence_packs/hofstede_critique_trust.md`, `research/evidence_packs/structural_transformation_east_asia_exports_variation.md`, `research/source_registry.csv`, `research/claim_registry.csv`, `project-control/logs/RES-002.md`, `project-control/logs/ECON-001.md`, `project-control/logs/SRC-003.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `research/source_registry.csv`
- `research/claim_registry.csv`
- `research/res002_econ_source_audit.md`
- `project-control/logs/SRC-004.md`

Required deliverable: complete shared-registry coverage for every claim listed under `## Approved claims` in the accepted RES-002 and ECON-001 packs, plus verified APA/source rows for every source those approved claims actually rely on.

Acceptance criteria:

- Give every approved pack claim a unique, stable claim ID, page mapping, exact locator, linked source ID(s), evidence type, confidence, counterevidence/limitation, verification date, and honest status.
- Open the original item for every new source row. Record complete APA 7 metadata, matching in-text forms, exact page/table/figure/indicator/query, verification status, and limitations. Reuse an existing source row when it already covers the exact item; do not create duplicate IDs.
- Preserve the packs' construct boundaries: Hofstede scores are question-generating country-level measures, WGI is not trust, direct-trust snapshots remain mutually incompatible, and narrative-only export evidence may not become a common chart series.
- Preserve every rejected, unresolved, inaccessible, proxy, vintage, classification, pandemic-year, and causal limitation that qualifies an approved claim. Do not upgrade evidence merely because it is cited in an accepted pack.
- Recheck the World Bank (1993), Rodrik (1995), Hofstede (2011), McSweeney (2002), OECD (2017), Nunn and Wantchekon (2011), and official Hofstede-matrix locators used by approved claims. Flag inaccessible full text or abstract-only verification honestly.
- Parse both registries after editing. Report row counts, unique IDs, status totals, source-link totals, zero dangling links, duplicates, and missing required fields in the new rows.
- End the audit with `Approved`, `Revision required`, `Unresolved`, and `Rejected` sections and an explicit verdict on whether registry coverage is sufficient to start THEORY-001.

Before stopping, write `project-control/logs/SRC-004.md` using `project-control/logs/LOG_TEMPLATE.md` and mark it `REVIEW`.

Stop after the two registries, focused audit, and log exist. Do not edit either evidence pack, country files, master data, theory files, charts, magazine copy, checklist, status board, roadmap, or controller files.

## 2. VIS-003 — Projection-proof label and source-band repair

You are the **Charts and Editorial Design Agent** for the Africa–Asia Development Magazine. Complete **VIS-003: Repair the VIS-002 classroom proof without changing its evidence**.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `design/SELECTED_COMPARISON_SYSTEM.md`, `design/figures/COMPARISON_SYSTEM.md`, `design/figures/ghana_korea_gdp_per_capita_16x9.svg`, `data/charts/ghana_korea_gdp_per_capita.csv`, `project-control/logs/VIS-002.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `design/figures/ghana_korea_gdp_per_capita_16x9.svg`
- `project-control/logs/VIS-003.md`

Required deliverable: a cleaner 1280 × 720 classroom proof in which exactly the six plotted observations read as data marks, the 1960 near-parity labels do not tangle, and the source band has a safe bottom inset.

Acceptance criteria:

- Preserve all six approved full-precision values, the 1960/1990/2020 x positions, the shared zero-to-35,000 scale and ticks, the approved y transform, country colours, solid/dashed distinction, source identity, observed-anchor warning, COVID note, and causal limitation.
- Show one circle or diamond at each of the six actual plotted coordinates. Remove marker-shaped label chips that can be mistaken for extra observations; use marker-free text and short, non-crossing leaders where needed.
- Untangle the two 1960 values without moving either data point along the value axis. Keep both rounded values clearly attached to the correct series.
- Increase bottom breathing room so no source text sits precariously near the 720 px edge. Shorten visible URL wording if useful, but preserve the stable destination, source ID, indicator, retrieval date, and frozen CSV path in the SVG text or metadata.
- Keep essential axes, years, and values at least 22 px and supporting notes at least 18 px. Preserve `role="img"`, linked title/description, and a description that accurately summarizes the final encodings.
- Parse the SVG, render it at exactly 1280 × 720, recompute all six coordinates from the approved CSV, inspect colour and grayscale, and record no clipping or collisions. Do not claim human back-row, physical A4, colour-vision, or final typography gates as passed unless named tests actually occurred.

Before stopping, write `project-control/logs/VIS-003.md` using `project-control/logs/LOG_TEMPLATE.md` and mark it `REVIEW`.

Stop after the repaired SVG and log exist. Do not edit research, registries, data, design-system documents, showroom artefacts, the preserved VIS-001 SVG, final pages, checklist, status board, roadmap, or controller files.

## After this batch

Run the Roadmap Controller again. Independently parse the SRC-004 joins and render the VIS-003 proof before changing their states. If SRC-004 passes, move `THEORY-001` to `READY` and generate its bounded prompt. Human classroom/back-row, physical A4, colour-vision, and final typography checks remain release gates even if VIS-003 passes its digital repair.
