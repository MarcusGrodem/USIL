# Six-country comparability review and chart-input freeze

**Task:** DATA-006  
**Status:** REVIEW  
**Countries:** Ghana (`GHA`), South Korea (`KOR`), Botswana (`BWA`), Mauritius (`MUS`), Malaysia (`MYS`), Philippines (`PHL`)  
**Locked requested years:** 1960, 1990, 2020  
**Freeze date:** 2026-10-06

## Decision in brief

The six accepted country files contain enough matched evidence for six chart families: GDP per capita, labour productivity, employment by sector, manufacturing share (with exclusions), urbanisation, electricity access (with missing anchors), and 2020 WGI governance estimates. Adult literacy is usable only as partial matched panels. A common export-composition chart, firm-size/informality chart, direct-trust chart, and a seamless Philippines manufacturing trajectory are blocked.

The frozen values safe for chart production are in `data/master/six_country_chart_inputs.csv`. That file contains only `APPROVED_FOR_DIRECT_COMPARISON` and `APPROVED_WITH_VISIBLE_CAVEAT` rows. It does not turn missing or incompatible observations into numbers. The companion dictionary, `data/master/six_country_indicator_dictionary.csv`, controls definitions, transformations, rounding, and missing-value display.

## Freeze method and release reconciliation

1. Every candidate in the six country files was checked against its stated definition, unit, requested year, actual year, source locator, geographic coverage, and method break.
2. Nine WDI series were re-pulled for all six countries in one batch on **2026-10-06**: `NY.GDP.PCAP.KD`, `SL.GDP.PCAP.EM.KD`, the three ILO-modelled employment shares, `NV.IND.MANF.ZS`, `SE.ADT.LITR.ZS`, `SP.URB.TOTL.IN.ZS`, and `EG.ELC.ACCS.ZS`. The API metadata reported source 2 and `lastupdated=2026-07-13`. The returned values match the accepted files except Malaysia manufacturing is frozen at the current exact 2020 return, **22.2320858423886**, rather than the file's rounded 22.28 from an earlier distribution/vintage.
3. WGI was not taken from the older WDI-style endpoints used in four country files. All six countries were re-read from the official **Worldwide Governance Indicators 2026 update**, workbook `wgidataset_with_sourcedata-2026.xlsx`, sheets `rl` and `ge`, year 2020. Estimates and 90% confidence bounds in the frozen CSV therefore come from one release. This changes Mauritius to RL **0.9487347** / GE **0.9564112** and the Philippines to RL **-0.6230015** / GE **0.1340562**. Ghana, Korea, Botswana, and Malaysia are also frozen from that same workbook.
4. No interpolation, back-casting, or silent anchor replacement was used. `proxy_distance_years = actual_year - requested_year`; blank values remain absent rather than becoming zero.
5. The 2020 anchor is retained because it is scope-locked, but GDP, productivity, employment, manufacturing, firm, and trade captions must identify it as a pandemic year.

### DATA-008 gate repair and validation record (2026-10-06)

- Replaced the four local extraction labels in the master `source_id` field with the registered IDs `SRC-WDI-001`, `SRC-WGI26-001`, `SRC-WDR80-001`, and `SRC-DOSM-LIT24-001`. Release/retrieval vintage remains in `release_or_retrieval_date` and row locators.
- Opened the original World Bank-hosted *World Development Report 1980*. Korea appears on the continuation of Table 23 at **printed p. 155 / PDF p. 165**, where the adult-literacy columns report **71** for 1960 and **93** for 1975. The Table 1 notes at printed p. 158 / PDF p. 168 define the measure as people aged 15+ who can read and write and warn that estimates are generally within two years of the label; the Table 23 note at printed p. 164 / PDF p. 174 repeats the timing warning and identifies the data as mostly UNESCO. This corrects the earlier row locator to p. 155 without changing the approved value or caveat.
- Expanded `SRC-WGI26-001` to record the exact `ge` and `rl` workbook cells for all six economies and updated `SRC-WDI-001` to cover the six-economy, nine-indicator freeze. All 131 master rows now join to exactly one source-registry record.
- Made every master `unit` string exactly equal to its dictionary unit. Manufacturing's current-price basis remains in `price_ppp_basis` and caveats; the WGI range remains in the canonical unit and required notes; literacy retains the age-15+ universe.
- Added `display_value_1dp` only for the 36 employment-composition rows. Within each country–actual-year panel, the labels use largest-remainder allocation to tenths: floor each full-precision share at one decimal, allocate the remaining tenths needed to reach 100.0 to the largest discarded remainders, and break exact ties in agriculture–industry–services order. The original `value` field is unchanged.
- A 31-check rerun passed schemas, row counts, unique IDs, required fields, allowed classes, caveats, source-registry and dictionary joins, exact units, proxy arithmetic, direct/nonzero-proxy rules, zero/interpolation checks, confidence-bound scope, frozen-value/year/class preservation against the pre-repair package, employment coverage/full-precision totals/display totals, registered-source scope, WDR verification, WGI locator coverage, and narrative-only/excluded-row leakage. Result: **31/31 PASS**; 131 rows, 81 direct and 50 caveated; 12 employment panels each display exactly 100.0.

## Classification rule

- `APPROVED_FOR_DIRECT_COMPARISON`: same construct, unit, source series/release, and actual anchor year. Normal dataset qualifications still apply.
- `APPROVED_WITH_VISIBLE_CAVEAT`: traceable and analytically usable, but the visual must print the actual proxy year or a named territorial/source/method warning.
- `NARRATIVE_ONLY`: credible context, but not a cell in a matched quantitative chart because year, denominator, classification, or construct differs materially.
- `EXCLUDED`: unsupported, wrong-year, unreconciled, misleadingly aggregated, or too distant/incompatible for the proposed comparison.

## Cross-country decisions by required indicator

### 1. GDP per capita

**Approved definition:** GDP divided by midyear population, constant 2015 US dollars; WDI `NY.GDP.PCAP.KD`, source 2, release 2026-07-13, retrieved 2026-10-06. This is a real market-exchange-rate measure, not PPP, current dollars, household income, or welfare.

| Country | 1960 | 1990 | 2020 | Geographic/method decision |
|---|---|---|---|---|
| Ghana, Korea, Botswana, Mauritius, Philippines | `APPROVED_FOR_DIRECT_COMPARISON` | `APPROVED_FOR_DIRECT_COMPARISON` | `APPROVED_FOR_DIRECT_COMPARISON` | National WDI series; 2020 pandemic caveat applies to all. Botswana 1960 is pre-independence but refers to the territory that became Botswana. |
| Malaysia | `APPROVED_WITH_VISIBLE_CAVEAT` | `APPROVED_FOR_DIRECT_COMPARISON` | `APPROVED_FOR_DIRECT_COMPARISON` | The 1960 row is a retrospective construction across the 1963 formation of Malaysia and Singapore's 1965 exit. Print a territorial note. |

**Known break:** revised historical national accounts; levels must not be mixed with Maddison 2011 international dollars or PPP productivity. Maddison remains a cross-check, not a chart input here.

### 2. Labour productivity

**Approved definition:** GDP per person employed, constant 2021 PPP international dollars; WDI `SL.GDP.PCAP.EM.KD`, source 2, same release/retrieval vintage. It is not output per hour or wages.

| Requested year | Six-country decision | Actual year / proxy distance | Reason |
|---|---|---|---|
| 1960 | `EXCLUDED` for all | — | Series has no comparable observations; no back-cast. |
| 1990 | `APPROVED_WITH_VISIBLE_CAVEAT` for all six | 1991 / +1 | Same WDI/ILO construct across countries; label the panel **1991 (proxy for 1990)**. |
| 2020 | `APPROVED_FOR_DIRECT_COMPARISON` for all six | 2020 / 0 | Same construct and year; pandemic affected output and employment. Avoid fine rankings unsupported by model precision. |

**Known break:** PPP and employment inputs are modelled/revised. Never plot on the constant-2015-US-dollar GDP-per-capita axis.

### 3. Employment by sector

**Approved definition:** agriculture, industry, and services as percentages of total employment; ILO modelled estimates distributed in WDI (`SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS`). Industry includes mining, manufacturing, construction, and utilities.

| Requested year | Six-country decision | Actual year / proxy distance | Reason |
|---|---|---|---|
| 1960 | `EXCLUDED` for all | — | No harmonised WDI/ILO series. Korea 1963 and Philippines 1955 historical tables use different sector concepts and are `NARRATIVE_ONLY`. |
| 1990 | `APPROVED_WITH_VISIBLE_CAVEAT` for all six | 1991 / +1 | One common modelled series; label 1991 visibly. |
| 2020 | `APPROVED_FOR_DIRECT_COMPARISON` for all six | 2020 / 0 | One common series and classification; pandemic caveat. |

**Known break:** national censuses and historical livelihood statements cannot be spliced into ILO modelled shares. Use the frozen `display_value_1dp` labels generated by the deterministic largest-remainder rule; each country-year's three labels total exactly 100.0, while calculations continue to use the unchanged full-precision `value` field.

### 4. Manufacturing share of GDP

**Approved definition:** manufacturing value added as percent of GDP at current-price shares; WDI `NV.IND.MANF.ZS`. It excludes mining and is not a manufacturing-volume or employment measure.

| Country | 1960 decision | 1990 decision | 2020 decision | Break/caveat |
|---|---|---|---|---|
| Ghana | `APPROVED_WITH_VISIBLE_CAVEAT` using 1965 (+5) | `APPROVED_FOR_DIRECT_COMPARISON` | `APPROVED_FOR_DIRECT_COMPARISON` | Print 1965, not 1960. |
| Korea | `APPROVED_FOR_DIRECT_COMPARISON` | `APPROVED_FOR_DIRECT_COMPARISON` | `APPROVED_FOR_DIRECT_COMPARISON` | Same WDI series. |
| Botswana | `APPROVED_WITH_VISIBLE_CAVEAT` using 1965 (+5) | `APPROVED_FOR_DIRECT_COMPARISON` | `APPROVED_FOR_DIRECT_COMPARISON` | Pre-independence proxy; print 1965. |
| Mauritius | `EXCLUDED`; 1976 is +16 | `APPROVED_FOR_DIRECT_COMPARISON` | `APPROVED_FOR_DIRECT_COMPARISON` | 1976 may be narrative context only. |
| Malaysia | `APPROVED_WITH_VISIBLE_CAVEAT` at 1960 | `APPROVED_FOR_DIRECT_COMPARISON` | `APPROVED_FOR_DIRECT_COMPARISON` | Territorial warning at 1960. Current 2020 WDI value is 22.2320858423886. |
| Philippines | `NARRATIVE_ONLY`; historical ~18.9 | `NARRATIVE_ONLY`; historical 24.8 | `APPROVED_FOR_DIRECT_COMPARISON` | 1960 and 1990 use older national-account vintages; current WDI begins in 2000. Do not connect the three points as one series. |

**Known break:** current-price shares move with relative prices. A six-country 1990-to-2020 chart must omit the Philippines 1990 cell or show it in a separately styled narrative annotation outside the comparable series.

### 5. Export composition

There is **no approved common chart series**. All retained source-specific observations are `NARRATIVE_ONLY`; unsupported/wrong-year candidates are `EXCLUDED`.

| Country | 1960 | 1990 | 2020 | Decision reason |
|---|---|---|---|---|
| Ghana | 1959–62 cocoa context: `NARRATIVE_ONLY` | Broad IMF concentration narrative: `NARRATIVE_ONLY` | `EXCLUDED` | No reproducible same-year product-code aggregation/denominator. The 83.4% figure is 2024, not 2020. |
| Korea | 86.3% primary / 13.7% manufactured: `NARRATIVE_ONLY` | `EXCLUDED` | Product identities only: `NARRATIVE_ONLY`; HS2 shares `EXCLUDED` | 1960 historical commodity grouping cannot be matched to a saved 2020 aggregation; 1990 missing. |
| Botswana | `EXCLUDED` | Principal groups: `NARRATIVE_ONLY` | National principal groups: `NARRATIVE_ONLY` | IMF and Statistics Botswana classifications differ; diamonds/re-exports complicate domestic-value-added inference. |
| Mauritius | 1970 sugar proxy: `NARRATIVE_ONLY` | Jan–Jun 1990 SITC: `NARRATIVE_ONLY` | 2020 SITC: `NARRATIVE_ONLY` | Proxy distance, half-year denominator, coverage changes; merchandise omits tourism/finance. |
| Malaysia | Historical authority groups: `NARRATIVE_ONLY` | Historical authority groups: `NARRATIVE_ONLY` | SITC 3-digit groups: `NARRATIVE_ONLY` | Strong narrative transition, but category levels/classifications differ and gross exports do not equal domestic value added. |
| Philippines | Historical national groups: `NARRATIVE_ONLY` | Mixed aggregation groups: `NARRATIVE_ONLY` | 2015 PSCC groups: `NARRATIVE_ONLY` | Classification changes; electronics gross share includes imported inputs. |

**Release/classification requirement to unblock:** one saved UN Comtrade/WITS extraction for every country/year with reporter, year, export flow, world partner, one classification/revision, included codes and aggregation map, FOB total denominator, returned values, retrieval date, and treatment of re-exports. Until then, no cross-country product-share bars or connected time series.

### 6. Adult literacy / education

**Preferred definition:** ages 15+ able to read and write a short simple statement with understanding; UNESCO UIS `SE.ADT.LITR.ZS` through WDI. National values enter only with an explicit source caveat.

| Country | 1960 | 1990 | 2020 | Decision |
|---|---|---|---|---|
| Ghana | `EXCLUDED` | `EXCLUDED`; 2000 too distant | 2021 (+1) `APPROVED_WITH_VISIBLE_CAVEAT` | WDI/UIS definition at 2021. |
| Korea | 1960 historical 71% `APPROVED_WITH_VISIBLE_CAVEAT` | `EXCLUDED`; 1975 too distant | `EXCLUDED`; 2008 too distant | WDR table uses age 15+ but warns labelled years can differ by up to two years. |
| Botswana | `EXCLUDED` | 1991 (+1) WDI/UIS 68.58 `APPROVED_WITH_VISIBLE_CAVEAT` | 2014 `NARRATIVE_ONLY` | Use WDI 15+ value, not the national 15–65 value, for the 1990 panel. |
| Mauritius | 1962 ages 5+ `EXCLUDED` | 1990 WDI/UIS `APPROVED_FOR_DIRECT_COMPARISON` | 2021 (+1) WDI/UIS `APPROVED_WITH_VISIBLE_CAVEAT` | 1962 denominator incompatible. |
| Malaysia | `EXCLUDED` | 1991 (+1) WDI/UIS `APPROVED_WITH_VISIBLE_CAVEAT` | 2020 DOSM `APPROVED_WITH_VISIBLE_CAVEAT` | 2020 national LFS-based source rather than WDI/UIS; definition aligns but method/source differs. |
| Philippines | `EXCLUDED` | 1990 WDI/UIS `APPROVED_FOR_DIRECT_COMPARISON` | 2020 WDI/UIS `APPROVED_FOR_DIRECT_COMPARISON` | Same series/definition. |

**Known break:** literacy is not learning quality, functional proficiency, enrolment, or advanced skills. Only partial panels are approved; do not manufacture a six-country ranking.

### 7. Urbanisation

**Approved definition:** urban population as percent of total population under national definitions harmonised/smoothed by the UN Population Division, WDI `SP.URB.TOTL.IN.ZS`.

All 18 country-year observations are `APPROVED_FOR_DIRECT_COMPARISON`, except Malaysia 1960 is `APPROVED_WITH_VISIBLE_CAVEAT` because of the territorial break. The values use the same WDI release/retrieval vintage.

**Known break:** national urban definitions, boundaries, and classifications differ and can change. Mauritius's declining share must not be described automatically as physical de-urbanisation. Urban share does not measure density, housing, infrastructure quality, or productive agglomeration.

### 8. Electricity / infrastructure

**Approved definition:** population with access to electricity, percent; WDI `EG.ELC.ACCS.ZS`. It does not measure price, reliability, capacity, or industrial power quality.

| Country | 1960 | 1990 | 2020 | Decision |
|---|---|---|---|---|
| Ghana | `EXCLUDED` | 1993 (+3) `APPROVED_WITH_VISIBLE_CAVEAT` | `APPROVED_FOR_DIRECT_COMPARISON` | Print 1993. |
| Korea | `EXCLUDED` | `APPROVED_FOR_DIRECT_COMPARISON` | `APPROVED_FOR_DIRECT_COMPARISON` | Rural programme statistics are separate `NARRATIVE_ONLY` evidence. |
| Botswana | `EXCLUDED` | 1991 (+1) `APPROVED_WITH_VISIBLE_CAVEAT` | `APPROVED_FOR_DIRECT_COMPARISON` | Print 1991. |
| Mauritius | `EXCLUDED` | `APPROVED_FOR_DIRECT_COMPARISON` | `APPROVED_FOR_DIRECT_COMPARISON` | Same WDI indicator. |
| Malaysia | `EXCLUDED` | `EXCLUDED`; rural-household 80% is `NARRATIVE_ONLY` | `APPROVED_FOR_DIRECT_COMPARISON` | Rural households are not the national-population denominator. |
| Philippines | `EXCLUDED` | 1993 (+3) `APPROVED_WITH_VISIBLE_CAVEAT` | `APPROVED_FOR_DIRECT_COMPARISON` | Print 1993. |

The 1990 panel is a five-country, mixed-actual-year panel, not a complete six-country anchor chart.

### 9. Firm size / informality

**Common chart decision: blocked.** Every available observation is `NARRATIVE_ONLY` or `EXCLUDED` because constructs and universes differ.

| Candidate | Class | Reason |
|---|---|---|
| Ghana 2013/2015 worker/sector informality | `NARRATIVE_ONLY` | Worker/sector measure; not 2020 and not matched to other countries. |
| Korea shadow economy share of GDP | `EXCLUDED` | Wrong year in inherited claim and different modelled GDP construct. |
| Botswana 2019 formal-sector counts | `NARRATIVE_ONLY` | Two formal-employment concepts in the source; residual must not be called informality. |
| Mauritius 1990 self-employment / 2013 informal establishments | `NARRATIVE_ONLY` | Labour status and firm status differ; 2013 is distant. |
| Malaysia 2019 informal-sector employment / 2020 SME employment | `NARRATIVE_ONLY` | Informality excludes agriculture; SME is a size class, not informality. |
| Philippines 1960 small manufacturing units / 2020 formal establishments | `NARRATIVE_ONLY` | Different eras, universes, definitions, and outcomes; not a trend. |

**Requirement to unblock:** select one construct (preferably ILO harmonised informal employment as percent of employment) with the same coverage, age universe, sector treatment, reference year/window, and survey/model status across all six. A separate firm-size chart would need common employment-size bands and establishment coverage.

### 10. Institutions and trust

#### WGI governance

All 12 2020 WGI rows (Rule of Law and Government Effectiveness for six countries) are `APPROVED_WITH_VISIBLE_CAVEAT` from the **2026 update**. The unit is the standard-normal governance estimate (approximately -2.5 to +2.5); 90% confidence intervals must be displayed or stated. WGI begins in 1996, so 1960 and 1990 are `EXCLUDED` for all six. WGI is perception-based governance, not interpersonal or institutional trust.

#### Direct trust

Botswana court trust (2019), Mauritius political-institution trust (2020), Malaysia institution-specific commercial survey (2020), and Philippines unweighted WVS generalized-trust cases (2019) are all `NARRATIVE_ONLY`. Ghana and Korea have no matched direct measure in the accepted files. These surveys differ in question, institution, sampling/weighting, field year, and construct; none may be graphed as one “trust” scale or projected back to 1960/1990.

## Approved chart families

1. **GDP per capita, six countries, 1960/1990/2020** — all 18 cells; Malaysia 1960 gets the territorial note; identify constant 2015 US$ and the pandemic endpoint.
2. **Labour productivity, six countries, 1991/2020** — title must say 1991 is the common proxy for requested 1990; constant 2021 PPP international dollars per employed person.
3. **Employment structural transformation, six countries, 1991/2020** — three matched panels or small multiples, one decimal, common scale; no 1960 bars.
4. **Manufacturing share** — (a) five-country 1990/2020 matched panel excluding the Philippines at 1990, or (b) six-country 2020 snapshot. An early baseline may use Korea/Malaysia 1960 and Ghana/Botswana 1965 only if actual years are prominent; Mauritius and Philippines must remain blank.
5. **Urbanisation, six countries, 1960/1990/2020** — all 18 cells; national-definition and Malaysia-territory notes.
6. **Electricity access** — six-country 2020 snapshot; optional five-country 1990/proxy panel with actual years 1990/1991/1993 printed and Malaysia blank.
7. **Adult literacy partial panels** — 1990/1991 for Botswana, Mauritius, Malaysia, Philippines; 2020/2021 for Ghana, Mauritius, Malaysia, Philippines. Never present either as a six-country ranking.
8. **2020 WGI governance** — separate Rule of Law and Government Effectiveness panels with 90% intervals and a prominent “governance, not trust” note.

## Blocked chart families

- Six-country export composition or any connected 1960–1990–2020 export-share series.
- Six-country firm-size/informality comparison.
- Cross-country direct-trust score or historical trust trajectory.
- Six-country 1960 labour-productivity or sector-employment baseline.
- Six-country complete literacy anchor dashboard.
- Seamless Philippines manufacturing 1960–1990–2020 series.
- Complete six-country 1990 electricity panel.
- WGI at 1960/1990 or any chart mixing WGI 2025/API values with the 2026 workbook.

## Unresolved gaps

- A saved common-classification trade extraction at all anchors, including re-export and denominator rules.
- Comparable 1960 employment/productivity for every country.
- Ghana/Korea 1990 and near-2020 adult literacy; Botswana near-2020 adult literacy; 1960 literacy for five countries.
- Harmonised national electricity access for 1960 and Malaysia 1990.
- A common worker-informality series and a separate common firm-size construct.
- Matched direct generalized/institutional trust questions with weights and sampling metadata.
- A reconciled current-national-accounts historical Philippines manufacturing series.

## Exact inputs safe for the next Charts & Maps Agent

Use only rows in `data/master/six_country_chart_inputs.csv`; join definitions and formatting rules from `data/master/six_country_indicator_dictionary.csv`. Use `value` for calculations and `display_value_1dp` only for the three-sector employment labels; that display field is intentionally blank for every other indicator. Filter `comparability_class` as follows:

- `APPROVED_FOR_DIRECT_COMPARISON`: may enter a matched chart under the dictionary definition.
- `APPROVED_WITH_VISIBLE_CAVEAT`: may enter only when `actual_year` and the row's `caveat` are printed in the figure/caption.

Do not infer rows for missing country-years, convert blanks to zero, interpolate, replace requested years, reuse narrative-only observations from this review, or combine WGI with trust survey results. Preserve the exact stored value for calculation; round only at display time according to the dictionary. Every chart must retain the CSV `source_id`, `source_locator`, release/retrieval date, and verification status in its production notes.

## Sources used for the freeze

World Bank. (2026a). *World Development Indicators* [Data set]. Release metadata updated July 13, 2026; retrieved October 6, 2026, through Indicators API v2. https://api.worldbank.org/v2/country/GHA;KOR;BWA;MUS;MYS;PHL

World Bank. (2026b). *Worldwide Governance Indicators: 2026 update* [Data set]. Retrieved October 6, 2026, from https://www.worldbank.org/en/publication/worldwide-governance-indicators

World Bank. (1980). *World Development Report 1980*. Oxford University Press. https://openknowledge.worldbank.org/handle/10986/5963

Country-specific historical and national sources are documented at exact page/table level in the six accepted country files. They are used here only for the source-specific `NARRATIVE_ONLY`, `EXCLUDED`, or explicitly caveated decisions stated above.
