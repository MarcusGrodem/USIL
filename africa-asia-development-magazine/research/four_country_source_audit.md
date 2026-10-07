# Botswana, Mauritius, Malaysia, and Philippines source and claim audit

**Task:** SRC-002  
**Verification date:** 2026-10-06  
**Files audited:** `data/botswana.md`, `data/mauritius.md`, `data/malaysia.md`, and `data/philippines.md`  
**SRC-002 coverage:** 46 new stable source records and 173 claim records: 134 APPROVED, 25 REVISION_REQUIRED, 10 UNRESOLVED, and 4 REJECTED.  
**Shared-registry totals after expansion:** 63 sources and 262 claims. All 17 SRC-001 source rows and 89 SRC-001 claim rows were preserved without renumbering or rewriting.

## Scope and method

This audit applies the SRC-001 traceability standard to every populated anchor or proxy observation, headline finding, substantive historical assertion, and explicit theory test in the four country files. One claim ID covers a multi-cell row only when the cells share a definition and a reproducible source query, as with the three ILO-modelled employment shares. `n/a` cells are not invented as observations; material gaps are registered as UNRESOLVED records when the country file relies on the absence or when a tempting substitution must remain visible.

Approval required an original report, final journal record, government release, or authoritative dataset; a precise locator; the actual observation year; and a definition/denominator that matches the claim. WDI observations for BWA, MUS, MYS, and PHL were independently re-pulled from the World Bank API on 2026-10-06. The official 2026 WGI workbook was checked at the `rl` and `ge` rows, including 90% confidence intervals. Original PDFs were opened and text-checked for the principal Botswana, Mauritius, Malaysia, and Philippines analytical and statistical reports. When a legacy government URL timed out, returned 404/403, or yielded a malformed PDF during this pass, the source and country-file locator were preserved as PARTIAL and the dependent claim was not silently promoted.

Calculations are registered as calculations rather than source quotations. Proxy years remain in `actual_year`. Current-price shares, PPP productivity, constant-2015-dollar GDP, establishment informality, worker informality, self-employment, and SME size are kept as different constructs. Theory verdicts are approved only as qualified syntheses whose limitations are part of the registered claim; they are not causal estimates.

## Registry and source-level results

- `SRC-WDI-001` now links exact BWA/MUS/MYS/PHL country-indicator-year queries for GDP per capita, productivity, employment, manufacturing, literacy where available, urbanisation, electricity, and Philippine remittances. The re-pull reproduces the country-file values except Malaysia manufacturing in 2020, where the current API returns 22.2321% rather than 22.28%.
- `SRC-WGI25-001` preserves the edition cited in the four files. It is PARTIAL because it is superseded for publication by `SRC-WGI26-001`; historical estimates changed. Every affected WGI claim is REVISION_REQUIRED and records the current 2026 value and interval.
- Botswana's IMF 1998 export table, Statistics Botswana 2020 trade table, Afrobarometer Round 8 report, Maipose working paper, Statistics Botswana literacy and labour reports, and World Bank 2023 diagnostic were opened. The labour report contains competing formal-employment concepts, so the calculated 65.4% share is not an approved informal-employment residual.
- Mauritius's IMF growth paper, World Bank 1997 strategy, World Bank 2019 jobs report, Afrobarometer dispatch, Xenos profile, and government history/archive pages were opened. The official 1990 and 2020 trade PDFs timed out during this pass; their claims remain REVISION_REQUIRED even though DATA-003 recorded an earlier opening.
- Malaysia's World Bank 2016 monitor, 2020 industrialisation box, 2022 SME review, 2024 mixed-methods paper, Mody infrastructure volume, Ipsos report, OpenDOSM literacy page, and DOSM informal-sector page were opened. The legacy DOSM 2020 trade PDF now returns 404 and the IMF eLibrary page blocked automated reopening, so export rows remain REVISION_REQUIRED.
- Philippines's ADB constraints report, BSP BPO survey, Nasution report, World Bank 1980/1987 industry reports, and Yusuf and Nabeshima volume were opened. PSA pages blocked automated reopening and the Library of Congress country-study endpoint returned a malformed PDF; dependent claims remain REVISION_REQUIRED. The IHSN/WVS catalogue was opened and its warning about unweighted displayed counts is preserved.

## Material corrections and comparability flags

1. **WGI edition conflict:** use the 2026 workbook, not the four files' 2025 labels/values. Current 2020 replacements are Botswana RL 0.3614 and GE 0.3907; Mauritius RL 0.9487 and GE 0.9564; Malaysia RL 0.3792 and GE 0.9352; Philippines RL -0.6230 and GE 0.1341. Each claim registry row records its 90% interval. Do not mix 2025/API values with 2026 workbook values.
2. **Malaysia WGI labels:** the file's +0.379/+0.935 values are already approximately the recalculated 2026 values, despite being cited as the 2025 revision. Correct the edition as well as the locator.
3. **Malaysia manufacturing revision:** current WDI returns 22.2320858423886 for 2020, not 22.28. Freeze a shared retrieval vintage before chart production.
4. **Export composition:** Botswana's 1990/2020 direction is supported but classifications differ. Mauritius uses a 1970 distant proxy and Jan-June 1990 period proxy. Malaysia mixes authority-defined historical groups with 2020 SITC-3 groups. Philippines mixes historical national groups, a 1990 mixed aggregation, and 2015 PSCC groups. None is ready for a single like-for-like three-anchor chart without DATA-006 classification work.
5. **Historical sources and access:** a prior country-agent opening is documented but is not treated as sufficient independent verification when the source could not be reopened in SRC-002. These records remain traceable and PARTIAL rather than being deleted.
6. **Proxy discipline:** Botswana 1965 manufacturing and 2014 literacy; Mauritius 1970 exports, Jan-June 1990 exports, 2021 literacy, and 2013 informality; Malaysia 1991 employment/productivity/literacy, 1990 rural-household electricity, and 2019 informality; and Philippines 1991 productivity/employment and 1993 electricity all retain their actual years and scope.
7. **Construct mismatches:** Botswana's formal-job count cannot generate an informal-employment rate until internal definitions are reconciled. Mauritius self-employment, informal establishments, and worker informality are not interchangeable. Malaysia's SME employment is not informal employment. Philippine 1960 unorganised manufacturing and 2020 formal-establishment size are not one trend series.
8. **Trust and causality:** Afrobarometer named-institution trust, Ipsos institution-specific trust, WVS generalized-trust case counts, and WGI governance perceptions measure different things. None may be backcast to 1960/1990 or used alone to prove a Radius of Trust mechanism.

## Counts by country

| Country | Sources principally registered | Claims | APPROVED | REVISION_REQUIRED | UNRESOLVED | REJECTED |
|---|---:|---:|---:|---:|---:|---:|
| Botswana | 8 | 40 | 35 | 2 | 2 | 1 |
| Mauritius | 13 | 40 | 33 | 4 | 2 | 1 |
| Malaysia | 14 | 44 | 33 | 7 | 3 | 1 |
| Philippines | 11 | 49 | 33 | 12 | 3 | 1 |
| **Total** | **46** | **173** | **134** | **25** | **10** | **4** |

Shared records such as WDI, WGI, and UIS support more than one country; the source count assigns each newly added record to its principal audit grouping only so the total does not double-count.

## APPROVED

- **134 claims are approved.** These include all independently re-pulled WDI anchor/proxy observations except Malaysia's stale 2020 manufacturing rounding, transparent derived ratios from those observations, source-opened national/report statistics, and qualified theory syntheses whose counterevidence and non-causal limits are explicit.
- Botswana's income, productivity, employment, manufacturing, literacy proxies, urbanisation, electricity, 1990 and 2020 export observations, 2019 court trust, inequality, and multi-causal historical interpretation are approved under their recorded definitions.
- Mauritius's WDI/UIS core, staged industrial/service transition, named political-institution trust, 2013 establishment evidence, and qualified Radius of Trust and Continuity + Adaptation verdicts are approved. Its trade proxy rows are not in this group.
- Malaysia's WDI core apart from the stale 2020 manufacturing value, OpenDOSM 2020 literacy, rural-household electrification context, 2019 informal-sector survey, 2020 SME employment, institutional-trust snapshot, and qualified theory verdicts are approved.
- Philippines's WDI/UIS core, 1990 export row, historical industry evidence from opened World Bank reports, 2010 BPO result, remittance observations, and qualified theory verdicts are approved. PSA-, Lim-, Dolan-, and mixed-vintage-dependent claims remain outside this group.

## REVISION_REQUIRED

- **25 claims require narrow revision or independent reopening:** Botswana 1990-to-2020 export-composition comparison wording and the 2019 formal-employment calculation; Mauritius 1990/2020 trade rows and both WGI values; Malaysia 2020 manufacturing, all three export rows and export headline, and both WGI rows; Philippines three Dolan historical claims, all three manufacturing observations/headline that use mixed vintages, 1960/2020 export rows and export headline, the 2020 ASPBI firm-size row, and both WGI rows.
- Revision means correcting a value/edition, restoring an accessible original, preserving a period/proxy label, or reconciling definitions. It does not authorize silently changing the country files in this task.

## UNRESOLVED

- **10 claims/gaps remain unresolved.** Botswana lacks a verified numeric 1960 product-export table and near-2020 adult-literacy observation. Mauritius lacks a comparable 2020 worker-informality measure and historical generalized/business trust evidence. Malaysia lacks 1960 adult literacy, harmonised 1990 total-population electricity access, and historical generalized-trust evidence. The Philippines lacks matched 1960 adult literacy, a 1990 firm/informality anchor, and a three-anchor BPO/services-export series.
- These are retained as explicit registry records with blank source IDs where no source exists. No metadata or values were invented.

## REJECTED

- **`BWA-INF-RESID`:** reject 34.6% as a derived informal-employment rate because Statistics Botswana uses conflicting formal-employment concepts.
- **`MUS-EXP-1990A`:** reject treating January-June 1990 composition as a full-year statistic.
- **`MYS-ELC-SUB`:** reject substituting 80% of rural households served for national total-population electricity access in 1990.
- **`PHL-WVS-POP`:** reject presenting 5.3% unweighted WVS catalogue cases as a Philippine population estimate.

## Validation

Both CSVs were parsed with Python's standard `csv` reader after editing. `source_registry.csv` has 63 data rows and exactly 18 columns per row; `claim_registry.csv` has 262 data rows and exactly 17 columns per row. Source IDs and claim IDs are unique. All semicolon-delimited claim source links resolve to registered source IDs; there are no dangling references. SRC-001 row counts, IDs, statuses, and field values remain unchanged in the diff. Status counts were recalculated directly from the final claim registry and match the table above.
