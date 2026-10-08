# Next Agent Prompts

**Last reconciled by the Roadmap Controller:** 2026-10-07

**Current stage:** Core data, economic research, and design showroom accepted; historical rights/registry integration and selected-system production next.

**Estimated progress:** 56%

**Final report ready:** No

`DATA-008`, `ECON-001`, and `DESIGN-001` passed controller review. DATA-008 has released `research/source_registry.csv`. The user selected Spread A (Evidence Ledger) and Palette A (Inherited Editorial), with a mandatory Mauritius contrast repair and a separate national-accent layer that must never replace comparative data encodings.

`SRC-003` and `VIS-002` have non-overlapping outputs and may run in parallel. `THEORY-001` remains blocked until historical claim/rights integration and the remaining relevant source review pass.

## 1. SRC-003 — Historical claims and visual-rights registration

You are the **Sources, APA, and Rights Agent** for the Africa–Asia Development Magazine. Complete **SRC-003: Register RES-001 claims and verify proposed map/image rights**.

DATA-008 is controller-accepted and has released `research/source_registry.csv` for this task.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `research/evidence_packs/colonialism_borders_infrastructure_independence.md`, `research/source_registry.csv`, `research/claim_registry.csv`, `project-control/logs/RES-001.md`, `project-control/logs/DATA-008.md`, and `project-control/logs/LOG_TEMPLATE.md`.

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

## 2. VIS-002 — Selected comparison-system production specification

You are the **Charts, Maps, and Editorial Design Agent** for the Africa–Asia Development Magazine. Complete **VIS-002: Formalise the selected Evidence Ledger and Palette A system and create a projection proof**.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `qa/data_chart_gate_audit.md`, `design/showroom/DESIGN_SHOWROOM.md`, `design/showroom/palette_trials.svg`, `design/showroom/spread_trials.svg`, `design/PAGE_RHYTHM_PLAN.md`, `design/DESIGN_GUIDE.md`, `design/africa_asia_colour_palette.md`, `design/figures/COMPARISON_SYSTEM.md`, `design/figures/ghana_korea_gdp_per_capita.svg`, `data/charts/ghana_korea_gdp_per_capita.csv`, `project-control/logs/VIS-001.md`, `project-control/logs/DESIGN-001.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `design/SELECTED_COMPARISON_SYSTEM.md`
- `design/DESIGN_GUIDE.md`
- `design/africa_asia_colour_palette.md`
- `design/figures/COMPARISON_SYSTEM.md`
- `design/figures/ghana_korea_gdp_per_capita_16x9.svg`
- `project-control/logs/VIS-002.md`

Required deliverable: one production-ready specification for the user-selected Spread A (Evidence Ledger) and Palette A, plus an accessible 16:9 classroom proof that preserves the approved GDP data and original VIS-001 review artefact.

Acceptance criteria:

- Record the dated user selection and clearly distinguish the selected production direction from preserved rejected alternatives.
- Remove premature, contradictory, or stale candidate-lock wording from the editable system documents. Do not edit `design/figures/ghana_korea_gdp_per_capita.svg` or any showroom alternative.
- Specify the six selected country colours and markers, direct-label rules, Africa/Asia navigation roles, grayscale behaviour, and the mandatory charcoal keyline or under-stroke for every essential Mauritius ochre mark.
- Specify the separate flag-derived national-accent layer. Limit it to folios, headline details, caption tags, image frames, section tabs, and short rules; it must not recolour data series, imply success/failure, replace direct labels, or become cultural shorthand.
- Formalise the Evidence Ledger grid, hierarchy, provisional typography scale, source/limitation placement, image-rights placeholder treatment, A4 constraints, and reusable chart/page components without creating final magazine pages.
- Create `ghana_korea_gdp_per_capita_16x9.svg` at 1280×720 or an equivalent 16:9 viewBox. Keep the six approved values, shared zero-to-35,000 scale, source note, observed-anchor limitation, country labels, markers, and non-colour line distinction unchanged in meaning.
- Ensure the 16:9 proof has no clipping; essential axes/values are at least 22 px and supporting notes at least 18 px at 1280×720. Parse the SVG, render it, verify all six plotted coordinates from the approved CSV, test contrast and grayscale identification, and record that a human back-row test and physical A4 proof remain outstanding unless actually performed.
- Do not claim typography, physical print reproduction, human colour-vision review, or human classroom readability as passed without the named test.

Before stopping, write `project-control/logs/VIS-002.md` using `project-control/logs/LOG_TEMPLATE.md` and mark it `REVIEW`.

Stop after the selected-system specification, reconciled design documents, 16:9 proof, and log exist. Do not edit research, registries, data, showroom alternatives, the preserved VIS-001 SVG, final magazine pages, checklist, status board, or controller files.

## After this batch

Run the Roadmap Controller again. Review SRC-003's registry/rights joins and VIS-002's rendered proof before changing their states. Then prepare the remaining thematic source integration and THEORY-001 in dependency order. Final copy, factual AI content, and evidence-linked game content must continue to wait for their named evidence and theory gates.
