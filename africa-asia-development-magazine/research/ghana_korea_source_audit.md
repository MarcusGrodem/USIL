# Ghana–South Korea source and claim audit

**Task:** SRC-001  
**Verification date:** 2026-10-04  
**Files audited:** `data/ghana.md` and `data/south_korea.md`  
**Registry coverage:** 17 stable source records and 89 claim records (58 approved, 14 revision required, 14 unresolved, 3 rejected).

## Scope and method

This audit treats each distinct numeric observation, multi-cell row, headline comparison, and material quantitative assertion as a claim. A multi-cell table row has one stable claim ID only where one reproducible query retrieves all cells under the same definition (for example, the three employment-sector shares). The claim registry records actual observation year, unit, locator/query, confidence, limitation, review status, and source ID. `n/a` cells are gaps, not evidence claims.

Approval required opening an original source or authoritative dataset, checking the exact value or assertion, preserving the actual observation year, and recording a reproducible locator. Search results, mirrors, discovery pages, and bare URLs were not approved as evidence. Rounded values were approved only when the underlying unrounded value was independently re-pulled. Interpretation was separated from direct evidence; parallel trends were not accepted as causal proof.

The World Bank Indicators API was queried independently on 2026-10-04 for Ghana and Korea using the country and indicator codes recorded in `research/claim_registry.csv`. The official 2026 WGI workbook and official Maddison Project 2023 workbook were downloaded and checked at cell level. The IMF/Bank of Korea historical export table, ILO Ghana brief, Ghana development plan, WITS/UN Comtrade interfaces, World Bank Korea diagnostic, OECD Korea survey, and census catalog were opened and checked at the locators recorded in `research/source_registry.csv`.

## Source-level results

| Source ID | Result | What was checked | Publication use |
|---|---|---|---|
| `SRC-WDI-001` | Verified | GDP per capita, labour productivity, employment by sector, manufacturing share, literacy observations, urbanisation, electricity access | Approved for the exact country–indicator–year queries in the claim registry; dynamic values must be frozen for figures |
| `SRC-MPD23-001` | Verified with citation condition | Official `mpd2023_web.xlsx`, `Full data` sheet, Ghana/Korea 1960/1990/2020 | Values approved; original country papers listed in the workbook must also be cited when charting this two-country subset |
| `SRC-WGI26-001` | Verified; prior values revised | Official 2026 workbook, `rl` and `ge` sheets | Use the 2026 recalculated estimates and confidence intervals; do not mix old mirrors/releases |
| `SRC-KIM1971-001` | Verified | Table 1, pp. 16–17 | Approves Korea 1960 export split: 86.3% primary and 13.7% manufactured |
| `SRC-GHA-PLAN64-001` | Verified | Foreign Trade and Payments chapter, PDF p. 224 | Contradicts Ghana cocoa “~45%”; plan states roughly 60% of export income |
| `SRC-IMF-GHA00-001` | Verified for broad history | Export-sector discussion | Does not support the exact Ghana 1990 row as written |
| `SRC-ILO-GHA23-001` | Verified | PDF p. 4 | Shows the country file mislabels 2013 all-worker sex rates as youth rates |
| `SRC-KOR-EMP63-001` | Verified | Historical table 3-5 | Shows 1963 split 63.1/8.7/28.2, not 61/9/30 |
| `SRC-WITS-GHA20-001` | Partially verified | 2020 reporter/year/flow interface | Exact commodity aggregation absent; cannot support 83.4% |
| `SRC-WITS-KOR20-001` | Partially verified | 2020 summary and HS6 top products | Product identities confirmed; HS2 percentages need saved aggregation query |
| `SRC-GSS-TRADE24-001` | Verified but wrong year | 2024 trade report | 83.4% belongs to 2024 and cannot be used as 2020 evidence |
| `SRC-GSS-LFS15-001` | Partial | Official report identified; 78.1 corroborated | Exact original table/page still required |
| `SRC-OECD-KOR20-001` | Checked; does not support claim | Full report searched | Reject as evidence for a 22.5% shadow/informal-economy value |
| `SRC-MEDINA18-001` | Partial | IMF paper and annual model series | 22.5 relates to about 2014, not 2020; construct is not informal employment |
| `SRC-WB-KOR-ED23-001` | Corroborating only | Korea diagnostic education passage | Supports 71% secondarily; original statistical table still needed |
| `SRC-WDR80-001` | Candidate original | Bibliographic item and reproduced table identified | Exact original page/table not opened; not yet approved |
| `SRC-GHA-CENSUS60-001` | Catalog only | Census identity and producer | Does not establish the ~25% adult-literacy value |

## Numeric and headline coverage

The claim registry contains a stable ID for every populated anchor/proxy table row and every quantitative headline or intermediate numeric assertion found in the two country files. For multi-value rows, the `indicator_or_query` field enumerates every cell and its unrounded result. Coverage includes:

- Ghana: 43 claims across all ten indicators and four magazine headlines.
- South Korea: 45 claims across all ten indicators, five magazine headlines, and the Maddison cross-check.
- Paired governance comparison: one additional claim.

The dominant approved evidence block is WDI: 1960/1990/2020 GDP, 1991/2020 productivity, 1991/2020 employment, manufacturing observations and peaks, urbanisation, electricity, and available literacy observations all re-match the rounded country-file values. The paired 1960 income starting point is therefore verified on constant-2015-US-dollar WDI terms. It does not demonstrate identical historical starting conditions.

The audit does not treat the following as populated anchor values: `n/a`; an estimate range without an observation; a proxy outside the stated ±3-year window; or a later-year source silently placed under 2020.

## Material conflicts and corrections

1. **Ghana 2020 exports:** the cited Ghana Statistical Service 83.4% figure is from 2024. It must be removed from the 2020 cell. A genuine 2020 UN Comtrade/WITS aggregation with saved product codes and denominator is required.
2. **Ghana 1960 exports:** “cocoa ~45%” conflicts with the 1964 Ghana plan (roughly 60% of export income) and IMF historical synthesis (higher still depending on period/definition). The row needs a single exact original-year table and taxonomy.
3. **Ghana 1990 exports:** the IMF source supports concentration but not the exact ~40/~30/~75 split at 1990. Gold 35% is stated for 1994, not 1990.
4. **Korea 1963 employment:** the checked historical table gives 63.1% agriculture/forestry/fishery, 8.7% mining/quarrying/manufacturing, and 28.2% services. The file's 61/9/30 should not be published under that citation.
5. **Ghana informality:** the ILO brief reports 2013 all-worker rates of 88.8% for men and 95.2% for women; youth rates are 93.4% and 95.1%, with youth total 94.2%. The file's labels and year are wrong.
6. **Korea informality:** 22.5% is not supported by the OECD Korea 2020 report and is not a 2020 observation in the Medina–Schneider series. It is a model-based shadow-economy share around 2014, not an employment share comparable with Ghana.
7. **WGI:** the official 2026 release recalculates history. Ghana 2020 Rule of Law is 0.0931 (90% CI −0.1442 to 0.3304); Korea Rule of Law is 1.1612 (0.9043 to 1.4181); Korea Government Effectiveness is 1.5409 (1.1592 to 1.9226). The file's 1.13 Government Effectiveness and old-release averages/percentiles must not be mixed with the current release.
8. **Literacy:** Ghana 1960 ~25%, Korea 1960 71%, and Korea 1990 ~93–96% do not yet have matched original definitions and exact locators. The dramatic 2.8-fold headline remains unresolved even though 71% is strongly corroborated.
9. **Causal wording:** WDI verifies the urbanisation and manufacturing trajectories, but it cannot by itself prove that Korea urbanised “around industrial jobs” or that Ghana urbanised “without them.” Those phrases need causal/historical evidence or descriptive rewriting.

## APA and in-text readiness

Every source record has a stable source ID, a complete APA 7 reference to the extent permitted by available metadata, and matching narrative and parenthetical citation forms. Records marked `PARTIAL` have a complete citation to the located item but are not approved for the contested claim because the exact table/query, original source, or observation year remains missing. Dataset retrieval dates are included because WDI, WGI, and WITS are designed to change.

For publication, use the exact source version in the registry rather than a mirror. TheGlobalEconomy, OEC public profiles without saved queries, Ghana News Agency summaries, and search snippets are discovery aids only. Chart work must freeze the returned data and retain the API/query details from the claim registry.

## Approved

- 58 claim records are approved. These include the re-pulled WDI numeric observations, derived ratios from those approved observations, Maddison 2023 cell values, Korea's 1960 export split, Korea's broad export transformation, and the current official WGI Rule of Law comparison.
- The GDP-per-capita founding comparison is approved on the stated constant-2015-US-dollar WDI basis: Korea 1,037.729 and Ghana 1,100.763 in 1960.
- The main structural-transformation observations from WDI are approved when framed descriptively and when proxy years are visible.

## Revision required

- 14 claims require narrow revision: Ghana 1960/1990 export composition; Ghana urbanisation/manufacturing headline wording; Ghana 2015 informality locator; Ghana 2020 WGI and historical WGI summary; Korea 1963 employment; Korea/Ghana manufacturing headline proxy disclosure; Korea 2020 HS2 export query; Ghana commodity-transformation headline; Korea 1960 literacy source; Korea urbanisation causal wording; Korea Government Effectiveness; and old-release WGI percentiles.
- Replace the affected values/labels only after recording the exact source table or reproducible query; do not silently repair the country files from this audit.

## Unresolved

- 14 claims remain unresolved: Ghana 1960 employment, Ghana 2019 export shares, Ghana 1960 and 1970 literacy, Ghana 1987/88 and 2020 informality, the six-country electricity-gain ranking, Korea's 1960 productivity backcast, Korea's “few advanced economies” deindustrialisation claim, Korea 1995 export proxy shares, Korea 1990 literacy, the paired 1960 literacy ratio and causal interpretation, and Korea late-1970s rural electrification.
- Maddison publication use still requires the original Ghana and Korea country papers specified by the official workbook because this project uses fewer than 12 countries.
- A true 2020 product-code export aggregation for both countries remains a blocking evidence gap for the export-composition spread.

## Rejected

- `GHA-EXP-2020`: 83.4% from the Ghana Statistical Service is a 2024 value, not 2020.
- `GHA-INF-YOUTH`: 88.8%/95.2% are 2013 all-worker male/female rates, not youth rates.
- `KOR-INF-2020`: 22.5% is neither supported by the cited OECD report nor a 2020 informal-employment observation; it is an older model-based shadow-economy estimate and is not comparable with Ghana's employment measure.
