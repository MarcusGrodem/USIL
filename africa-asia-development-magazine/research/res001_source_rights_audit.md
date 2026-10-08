# SRC-003 audit: RES-001 sources, claims, map rights, and geometry

**Task:** SRC-003  
**Audit date:** 2026-10-07  
**Status:** REVIEW  
**Scope:** Approved RES-001 claims A1-A12 and proposed visuals H1-MAP, H5-ROUTE, and H6-MAP. No photograph was proposed or approved in RES-001.

## Outcome

All 12 approved RES-001 claims now have unique shared-registry IDs (`RES001-A01` through `RES001-A12`), planned-page mappings, exact locators, source links, evidence types, confidence ratings, counterevidence, limitations, review dates, and honest `APPROVED` statuses at the wording and scope accepted in RES-001. Twelve complete source rows were added or reconciled. Every nonblank claim-source link resolves to a registered source ID.

The visual audit produces a usable route for each proposed visual:

- **1914 colonial control:** adapt the Library of Congress historical sheet, with its date, original category meanings, requested credit, and uncertainty visible.
- **Ghana railway:** do not reproduce, crop, trace, or closely adapt Jedwab and Moradi's maps without permission. Draw an original, explicitly schematic route sequence from the documented facts and named nodes.
- **Ghana-Togo border:** adapt the article's Figure 7d under CC BY 4.0. Do not publish a fresh redraw from the Harvard Dataverse layers unless the authors/repository clarify that the custom terms permit the derivative publication.

## Registry integration

### Claim coverage

| Shared claim ID | RES-001 claim | Planned page | Confidence | Status | Main limitation retained |
|---|---|---:|:---:|---|---|
| `RES001-A01` | Colonial sequences and transitions differed across the six cases. | 11-12 | H | APPROVED | A 1914 map cannot encode later transitions or establish downstream causality. |
| `RES001-A02` | Ghana inherited export dependence and usable public/transport assets. | 13-14 | H | APPROVED | Inventory does not estimate colonial rule's net effect or distribution. |
| `RES001-A03` | British rule varied across Ghana, Botswana, Mauritius, and Malaya/Malaysia. | 13-14 | H | APPROVED | Variation does not isolate colonizer effects from prior conditions or later policy. |
| `RES001-A04` | British indirect rule was heterogeneous and often involved councils. | 13-14 | H | APPROVED | A council was not necessarily democratic, inclusive, or growth-enhancing. |
| `RES001-A05` | British/French colonial finances had differences and important similarities. | 15 | H | APPROVED | The sample is a comparative check, not an empire ranking or locked seventh case. |
| `RES001-A06` | Investment varied within French West Africa and had persistent local effects/associations. | 15 | H | APPROVED | The design does not explain the six-country income ranking. |
| `RES001-A07` | Korea's colonial inheritance has competing scholarly interpretations. | 16 | H | APPROVED | Colonial coercion was not shown necessary for growth; rupture and post-1961 policy matter. |
| `RES001-A08` | Philippine formal-institution expansion coexisted with elite/land concentration. | 16 | H | APPROVED | Does not establish a direct line to present services or unchanged elite structures. |
| `RES001-A09` | Ghana railway construction, authority, purpose, and later use must be separated. | 17-18 | H | APPROVED | Segment operators remain unresolved; route effects are not national net benefits. |
| `RES001-A10` | Partitioned homelands can matter, but borders did not universally ignore prior geography. | 19 | H | APPROVED | Reconstructed polygons are generalized; borders alone do not explain national paths. |
| `RES001-A11` | One Ghana-Togo detail shows Dagomba accommodation and Ewe partition. | 19 | H | APPROVED | The Ewe layer is a mid-century reconstruction, not an exact timeless identity boundary. |
| `RES001-A12` | The same inherited systems could contain both assets and liabilities. | 20 | M | APPROVED | Comparative synthesis, not a standalone causal estimate or commensurable score. |

### Source reconciliation

Twelve source rows were added. Ten previously registered country sources were reused where their existing records already covered the required material: `SRC-MAIPOSE08-001`, `SRC-HILLBOM14-001`, `SRC-GOVMU-HIST-001`, `SRC-MUS-ARCH-001`, `SRC-UNESCO-MUS06-001`, `SRC-XENOS70-001`, `SRC-IMF-MUS14-001`, `SRC-WB-MYS24-001`, `SRC-DOLAN93-001`, and `SRC-WB-PHL87-001`. The dynamic Malaysia metadata component of A1 also links to `SRC-WDI-001`.

New historical rows are:

- `SRC-WB-GHA85-001`
- `SRC-BOLT25-001`
- `SRC-COGNEAU18-001`
- `SRC-HAGGARD97-001`
- `SRC-HUILLERY09-001`
- `SRC-JEDWAB-MORADI12-001`
- `SRC-KOHLI94-001`
- `SRC-LOC-AFRICA14-001`
- `SRC-MICH-PAP16-001`
- `SRC-PAINE25-001`
- `SRC-PAINE-DATA24-001`
- `SRC-CSHAPES22-001`

Each row contains author/responsible organization, date, title, container and publisher, DOI or stable URL, access date, source type/tier, full APA 7 reference, narrative and parenthetical forms, exact locator, verification status, owner, and limitations. No new APA field is a bare URL.

One bibliographic correction is material: RES-001 listed the replication DOI as `10.7910/DVN/9QJVJ`. The article's data-availability statement and Harvard Dataverse metadata identify the valid DOI as **`10.7910/DVN/9QJVJ1`**. The shared registry and rights register use the corrected DOI; the accepted evidence pack was not edited because it is outside SRC-003's allowed paths.

## Original-asset inspection

### H1: *Africa*, 1914

- **Original inspected:** Library of Congress item 2021668660, *Africa*, prepared by Vladimir V. Linde and Wagner & Debes, published by L. Friederichsen & Company in 1914.
- **Exact feature:** the 99 × 77 cm map's colonial-possession colour key and dated operational/planned transport symbols.
- **Rights:** the item-specific statement says the Library is unaware of copyright or other restrictions in the World Digital Library Collection and that, absent restrictions, the material is free to use and reuse. The requested credit line is the original source citation plus World Digital Library; the project should also identify the Library of Congress item.
- **Geometry:** suitable for a dated overview or legible crop, not precision polygon geometry. It generalizes borders and administrative reach, uses German labels, and predates postwar mandates.
- **Decision:** `ADAPT`. Crop and add visibly separate editorial annotations. Preserve the 1914 date and original legend meaning; do not silently recolour categories.
- **Matching note:** stored verbatim in `ASSET-H1-LOC1914`.

CShapes 2.0 was also checked. Its 1914 country-year polygons can audit recognized state/dependency outlines, but they do not encode colonial-control categories or administrative reach. The CRAN package states GPL (>= 2). It is not selected because the cleared historical sheet already serves the visual and avoids unnecessary derivative-data compliance.

### H5: Ghana railway, 1898-1918 and later use

- **Original inspected:** Jedwab and Moradi's 2012 working-paper PDF, especially Figures 1-3 and the Data Appendix railway-data statement.
- **Exact feature:** 1918 railway lines, built/planned/placebo routes, cocoa/province overlays, and 1900 transport/profitability layers.
- **Rights:** the opened paper contains no Creative Commons or other affirmative artwork/geometry reuse licence. The maps are copyrighted expression even though the underlying dates, named destinations, and documented relationships are facts. Online availability is not permission.
- **Geometry:** the figures are analytically useful but too dense for the planned spread. Their railway geometry is said to come from Digital Chart of the World, but the paper does not identify an exact file, edition, extraction, or licence. That source chain is not auditable for new artwork.
- **Decision:** `REDRAW_AS_ORIGINAL_SCHEMATIC`. Do not reproduce or trace Figures 1-3. Compose a non-survey schematic from the cited route sequence and named nodes; distinguish built/opening periods from planned/unbuilt lines; label it schematic. Retain four fields: built by/under, administered by, initial/stated purpose, and later use/effect.
- **Matching note:** stored verbatim in `ASSET-H5-JM-FIGURES`. The unresolved DCW route file is separately marked `REJECTED_UNVERIFIABLE`.

### H6: Ghana-Togo/Dagomba/Ewe boundary detail

- **Originals inspected:** the Cambridge Core article page and publisher Figure 7 image; Figure 7d; Supplementary Appendix A.1.3 and C.3.4; and Harvard Dataverse Version 1 metadata/file list and dataset-specific terms.
- **Exact feature:** the provisional Gold Coast-German Togoland boundary, the line labelled “Border since 1919,” the Dagomba polygon, and the generalized Ewe polygon.
- **Article rights:** the article and included figure are CC BY 4.0, allowing reproduction and adaptation with attribution and an indication of changes.
- **Article geometry:** the publisher image is 1973 × 1776 pixels for four panels; panel d alone is too small for a large A4 feature. The article PDF/vector figure is suitable as the reference for an independently typeset simplification.
- **Dataset rights:** the 330-file Version 1 package is public but uses custom terms: it must not be distributed/posted outside Harvard Dataverse, and downloads must take place there. The terms do not affirmatively authorize publication of a new derivative geometry. Public access is not an open licence.
- **Decision:** `ADAPT` Figure 7d under CC BY 4.0; do not redraw from the replication layers without permission. Use line pattern plus colour for the provisional and final boundaries. Keep the Ewe reconstruction warning. Label the supported boundary timing as 1919/postwar and do not invent a more exact legal demarcation date.
- **Matching note:** stored verbatim in `ASSET-H6-PAINE-FIG7D`. The raw-data route is separately marked `VERIFIED_PERMISSION_REQUIRED`.

## Machine validation

The three registries were parsed as CSV after editing.

| Check | Result |
|---|---:|
| Source rows / unique source IDs | 75 / 75 |
| Claim rows / unique claim IDs | 274 / 274 |
| Rights rows / unique asset IDs | 6 / 6 |
| RES-001 claim rows | 12 |
| Claim-source links tested | 374 |
| Dangling nonblank claim-source links | **0** |
| Duplicate source IDs | **0** |
| Duplicate claim IDs | **0** |
| Duplicate asset IDs | **0** |
| Bare-URL APA references | **0** |
| Missing required fields in new SRC-003 source rows | **0** |
| Missing required fields in RES-001 claim rows | **0** |

Source verification totals: **52 VERIFIED**, **22 PARTIAL**, and **1 VERIFIED_NOT_SUPPORTING**. Claim-status totals: **204 APPROVED**, **39 REVISION_REQUIRED**, **24 UNRESOLVED**, and **7 REJECTED**. All 12 RES-001 rows are `APPROVED` at their bounded wording. The rights register has two directly usable assets, two permission-required routes, one conditional open-source check not selected, and one rejected/unverifiable geometry source.

The source registry contains one pre-existing repeated URL for the separate 2025 and 2026 Worldwide Governance Indicators vintage records; their IDs, titles, years, locators, and release notes are distinct. It is not a duplicate ID or duplicate source record.

`git diff --check` passed for the edited registries and the new rights register.

## Approved

- Approve shared-registry coverage for RES-001 A1-A12 as `RES001-A01` to `RES001-A12` at the exact wording, locators, confidence, counterevidence, and limitations recorded.
- Approve the 12 new/reconciled APA source records and their links to the existing country-source records.
- Approve adaptation of the 1914 Library of Congress map under its item-specific no-known-restrictions/free-to-use statement, with the recorded credit and limitation note.
- Approve adaptation of Paine et al.'s Figure 7d under CC BY 4.0, with attribution, change indication, and the reconstructed-cultural-area warning.
- Approve an original Ghana railway schematic based on cited facts and named nodes, provided no unlicensed map geometry or artwork is traced.

## Revision required

- Correct the replication DOI to `10.7910/DVN/9QJVJ1` wherever the controller later permits updates outside SRC-003's file scope.
- On the final H1 artwork, preserve the original 1914 category meanings and label any present-day locator separately.
- On H5, explicitly print “schematic, not survey geometry,” separate planned/unbuilt from opened segments, and keep authorization purpose separate from later use/effect.
- On H6, use pattern plus colour, state that the panel is simplified/restyled, and retain the Ewe reconstruction limitation.

## Unresolved

- Exact Ghana railway segment-level builder, operator, and ownership names remain unverified. “Colonial government railway” is the maximum approved wording.
- A boundary date more legally precise than “1919/postwar settlement” remains unverified from an official treaty or archival source.
- Publication of a fresh geometry derivative from the Paine et al. replication files remains permission-required under the dataset's custom terms.
- No archival photograph has been proposed, sourced, or rights-cleared. Any later photograph/document facsimile needs a new item-level rights row before use.

## Rejected

- Reject reproduction, cropping, tracing, or close adaptation of Jedwab and Moradi's Figures 1-3 without written permission.
- Reject Digital Chart of the World railway geometry from the current source chain because the exact file, edition, extraction, vintage, and terms are not identified.
- Reject treating the Paine replication package as CC0 or as freely redistributable; its dataset-specific custom terms control.
- Reject using CShapes as evidence of effective colonial control or cultural territory.
- Reject modern boundaries silently back-projected into 1914 or 1898-1918.

## Rights decisions

| Visual | Decision | Publication route |
|---|---|---|
| H1 1914 control map | **ADAPT** | Use `ASSET-H1-LOC1914`; crop/annotate with credit and dated-map limitation. |
| H1 CShapes check | **REDRAW FROM DATA — NOT SELECTED** | Keep only as an optional audit; do not substitute it for control categories. |
| H5 Ghana railway | **REDRAW AS ORIGINAL SCHEMATIC** | Use factual route sequence and named nodes; do not reproduce or trace paper figures. |
| H5 DCW geometry | **REJECT** | Unverifiable source chain and rights; exclude. |
| H6 Ghana-Togo detail | **ADAPT** | Use the CC BY 4.0 article Figure 7d as the licensed source and disclose changes. |
| H6 replication layers | **DO NOT REDRAW FROM DATA WITHOUT PERMISSION** | Use the article adaptation instead; do not distribute or post raw files. |
