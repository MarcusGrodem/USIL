# Mauritius — second African case

Data verified 2026-10-04. This file follows the Ghana/South Korea ten-indicator structure while recording definitions, units, actual years, exact locators, confidence, and limitations at observation level. No value is interpolated.

Anchor years: **1960 · 1990 · 2020**.

Legend: **H** = high confidence · **M** = medium confidence · **L** = low confidence/context only · **n/a** = no comparable observation found. A proxy is always printed under its actual year.

## Starting position and historical inheritance

Mauritius was a French and then British colony. Sugar cultivation expanded under colonial rule; after slavery was abolished, British authorities brought indentured labourers—principally from India—to the cane fields. The plantation economy shaped land, ownership, labour, demography, and export dependence well beyond independence (Government of Mauritius, n.d.; UNESCO World Heritage Centre, 2006). The island became independent on 12 March 1968 (National Archives Department, n.d.).

This inheritance was not a neutral “starting point.” Immediately before independence, sugar generated more than 95% of export earnings, while unemployment and rapid population growth were major concerns (National Archives Department, n.d., “The Economy”). A contemporary profile likewise placed sugar and by-products at about 95% of export revenue and recorded severe cyclone damage in 1960 (Xenos, 1970, p. 1). Mauritius therefore began with export infrastructure and commercial institutions, but also with a highly concentrated plantation economy, inherited inequality, a small domestic market, and exposure to weather and preferential-market decisions abroad.

The later transformation should not be narrated as a clean break. Sugar rents, skills, capital, and external preferences helped finance or support new sectors; export-processing-zone (EPZ) textiles, tourism, and later offshore finance and business services were successive adaptations. The World Bank’s historical comparison records sugar falling from 86% of exports in 1970 to 24% in 1996 while EPZ employment rose from zero to 80,000 and tourist arrivals from negligible to 487,000 (World Bank, 1997, Executive Summary, p. 1). IMF research identifies duty-free imported inputs, tax incentives, segmented labour markets, sugar/textile preferences, human-capital investment, and the 1983 India tax treaty as important mechanisms—not a single cultural cause (Svirydzenka & Petri, 2014, pp. 6–8).

---

## 1. GDP per capita

**Definition:** GDP earned through production within the economy divided by population, adjusted to 2015 prices. **Unit/basis:** constant 2015 US dollars; this is real market-price output, not PPP income.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | 1960 | US$1,419.40 | WDI `NY.GDP.PCAP.KD`; Mauritius API query `date=1960:2022`; row `date=1960` | H | Revised national-accounts series; do not compare its level with PPP series. |
| 1990 | 1990 | US$3,846.41 | Same query; row `date=1990` | H | Same definition and price basis as the other two anchors. |
| 2020 | 2020 | US$9,533.60 | Same query; row `date=2020` | H | COVID-19 outcome year; 2019 was US$11,111.34, so 2020 understates the pre-pandemic level. |

- Source and reproducible query: World Bank (2026), `https://api.worldbank.org/v2/country/MUS/indicator/NY.GDP.PCAP.KD?date=1960:2022&format=json&per_page=100`.
- Interpretation: real GDP per person was about **6.7 times** its 1960 level by 2020, despite the pandemic-year fall. This is descriptive, not causal.

## 2. Labour productivity

**Definition:** GDP divided by total employment. **Unit/basis:** constant 2021 PPP international dollars per employed person.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | WDI `SL.GDP.PCAP.EM.KD`; query begins at 1960 but first non-null row is 1991 | n/a | No comparable 1960 observation; no estimate is inserted. |
| 1990 | **1991 proxy** | Intl$24,152.36 | WDI `SL.GDP.PCAP.EM.KD`; Mauritius API row `date=1991` | H | Nearest observation, one year late. It is PPP-based and must not be plotted on the GDP-per-capita dollar scale. |
| 2020 | 2020 | Intl$52,304.87 | Same query; row `date=2020` | H | Modelled from GDP, PPP, and employment inputs; COVID-19 affected both output and employment. |

- Source and reproducible query: World Bank (2026), `https://api.worldbank.org/v2/country/MUS/indicator/SL.GDP.PCAP.EM.KD?date=1960:2022&format=json&per_page=100`.
- Interpretation: the matched series more than doubled from 1991 to 2020, but it cannot establish which policy or sector caused the gain.

## 3. Employment by sector

**Definition:** employed people of working age in agriculture, industry, or services as percentages of total employment; sectors follow ILO/ISIC groupings. **Unit:** percent of total employment, modelled ILO estimates.

| Anchor | Actual year | Agriculture | Industry | Services | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | n/a | n/a | WDI/ILOEST series first become non-null in 1991 | n/a | No matched 1960 series; historical census categories must not be merged silently. |
| 1990 | **1991 proxy** | 19.65% | 34.99% | 45.36% | WDI rows `date=1991` for `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS` | M | One-year proxy; modelled rather than a direct census tabulation. Rounded components sum to 100%. |
| 2020 | 2020 | 5.32% | 23.40% | 71.28% | Same indicators; rows `date=2020` | M | COVID-19 changed sector activity and labour-force attachment; modelled estimates. |

- Reproducible queries: replace `{IND}` in `https://api.worldbank.org/v2/country/MUS/indicator/{IND}?date=1960:2022&format=json&per_page=100` with the three indicator codes above (World Bank, 2026).
- Interpretation: between 1991 and 2020, employment shifted strongly out of agriculture and toward services; industry’s share also declined. “Services” combines activities with very different productivity levels.

## 4. Manufacturing share of GDP

**Definition:** manufacturing value added—output less intermediate consumption in ISIC manufacturing—as a share of GDP. **Unit:** percent of GDP at current-price shares.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | WDI `NV.IND.MANF.ZS`; first non-null row is 1976 | n/a | No anchor observation. |
| 1960 context | **1976 distant proxy** | 13.24% | Same query; row `date=1976` | M | Sixteen years late and post-independence; context only, not a 1960 substitute. |
| 1990 | 1990 | 20.37% | Same query; row `date=1990` | H | Direct anchor observation. |
| 2020 | 2020 | 10.67% | Same query; row `date=2020` | H | COVID-19 disturbed sector shares; value-added share is not manufacturing employment. |

- Source and reproducible query: World Bank (2026), `https://api.worldbank.org/v2/country/MUS/indicator/NV.IND.MANF.ZS?date=1960:2022&format=json&per_page=100`.
- Interpretation: manufacturing’s GDP share was about twice as high in 1990 as in 2020. This is consistent with a textile-led industrial phase followed by a service shift, but the endpoints alone cannot date or explain the transition.

## 5. Export composition

**Definition:** composition of merchandise exports by recorded FOB value. **Unit:** percentage of the stated merchandise-export denominator; classifications and coverage differ across rows.

| Anchor | Actual year / period | Composition | Exact source locator | Confidence | Limitation / comparability warning |
|---|---|---|---|:---:|---|
| 1960 | **1970 distant proxy** | Sugar 86% of total exports | World Bank (1997), “Economic Transformation 1970–1996,” Executive Summary, p. 1 | M | Ten years late; not a 1960 observation. Contemporary evidence says sugar and by-products were about 95% of export revenue around independence (Xenos, 1970, p. 1). |
| 1990 | **Jan–Jun 1990 period proxy** | Miscellaneous manufactured articles 64.3%; food/live animals 25.7%; manufactured goods by material 6.5% | Central Statistical Office (1990), Table 6, p. 5: first-two-quarter values divided by total exports (Rs7,529m) | M | Half-year, not annual. SITC sections; includes domestic exports, re-exports, and ships’ stores/bunkers. Do not compare as if HS categories. |
| 2020 | 2020 | Food/live animals 38.4%; miscellaneous manufactured articles 34.1%; manufactured goods by material 14.2% | Statistics Mauritius (2022), Table 3, pp. 10–11: Rs23,175m, Rs20,589m, Rs8,603m divided by Rs60,427m | H | SITC sections; denominator excludes ships’ stores/bunkers. Apparel alone was Rs15,417m. Merchandise data omit tourism and financial/business-service exports. |

- Calculations are transparent reproductions from the named tables; displayed percentages are rounded to one decimal.
- The 1990 table is a period proxy because an opened full-year 1990 table was not located. A discovery result for an IMF statistical annex reported an annual sugar share, but the original table could not be opened reliably and is therefore not used as verified evidence.
- Interpretation: Mauritius moved from near-monocrop dependence to a 1990 merchandise basket dominated by manufactured articles, then to a 2020 basket split mainly among food/fish/sugar and manufactured/apparel categories. This table does **not** measure the later importance of tourism or finance because those are services.

## 6. Literacy / education

**Definition for the comparable series:** adults aged 15+ who can read and write with understanding a short, simple statement about everyday life. **Unit:** percent of people aged 15+.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | **1962 context proxy** | 69% literate (derived from 31% illiterate) | Xenos (1970), p. 3, “Literacy,” reporting the 1962 census | L | Population aged 5+, not adults 15+; cannot be graphed as the UNESCO adult-literacy indicator. |
| 1990 | 1990 | 79.87% | WDI/UNESCO UIS `SE.ADT.LITR.ZS`; Mauritius API row `date=1990` | H | Direct adult-literacy anchor; census/survey self-report can differ from tested functional literacy. |
| 2020 | **2021 proxy** | 92.98% | Same indicator; row `date=2021` | H | One year late; no 2020 value. |

- Source and reproducible query for comparable observations: UNESCO Institute for Statistics (2026), as distributed through World Bank (2026), `https://api.worldbank.org/v2/country/MUS/indicator/SE.ADT.LITR.ZS?date=1960:2022&format=json&per_page=100`.
- Interpretation: literacy was already substantial near independence and became near-universal by the 2021 proxy, but the 1962 age base is incompatible with the later adult series.

## 7. Urbanisation

**Definition:** people living in areas classified as urban by the national statistical definition, collected and smoothed by the UN Population Division. **Unit:** percent of total population.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | 1960 | 39.89% | WDI `SP.URB.TOTL.IN.ZS`; Mauritius API row `date=1960` | H | National urban definition; the historical profile notes boundary changes that alter 1962 results (Xenos, 1970, p. 3). |
| 1990 | 1990 | 43.90% | Same query; row `date=1990` | H | Smoothed UN series; not a direct measure of infrastructure quality. |
| 2020 | 2020 | 39.16% | Same query; row `date=2020` | H | A declining share partly reflects classification and settlement patterns; it does not imply people physically “de-urbanised.” |

- Source and reproducible query: World Bank (2026), `https://api.worldbank.org/v2/country/MUS/indicator/SP.URB.TOTL.IN.ZS?date=1960:2022&format=json&per_page=100`.
- Interpretation: unlike many comparison cases, Mauritius does not show a simple rising urban-share story; this makes urbanisation a weak stand-alone explanation of its transformation.

## 8. Electricity / infrastructure

**Definition:** share of the population with access to electricity. **Unit:** percent of population.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | WDI `EG.ELC.ACCS.ZS`; first non-null row is 1990 | n/a | No comparable 1960 observation; no interpolation. |
| 1990 | 1990 | 99.04% | Same query; row `date=1990` | M | WDI value is unusually precise and may combine reported/modelled inputs; round to 99.0% in prose. |
| 2020 | 2020 | 99.50% | Same query; row `date=2020` | H | Access says nothing about cost, reliability, or industrial power quality. |

- Source and reproducible query: World Bank (2026), `https://api.worldbank.org/v2/country/MUS/indicator/EG.ELC.ACCS.ZS?date=1960:2022&format=json&per_page=100`.
- Interpretation: near-universal electricity was already present by 1990. The indicator can support a capability/connectivity argument after 1990 but cannot establish the 1960 baseline or prove electricity caused diversification.

## 9. Firm size / informality

**Definitions:** self-employment is a labour-status proxy; an informal firm in the 2007/2013 Census of Economic Activities analysis is an establishment classified as informal by Statistics Mauritius. **Units:** percent of workers (self-employment) or percent of firms/employment (informality). These are not interchangeable.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | No harmonised firm-size or informality observation located | n/a | Gap retained. |
| 1990 | 1990 | 13% self-employed | Svirydzenka and Petri (2014), p. 12, text accompanying labour-share discussion | M | Self-employment is not the same as informal employment or firm size. |
| 2020 | n/a | n/a | Statistics Mauritius (2019), KILM 8, states that informal-economy indicators were not compiled | n/a | COVID rapid surveys discuss losses of informal work but do not supply a comparable annual share. |
| 2020 context | **2013 distant proxy** | Informal firms: 25.3% of firms; 10.5% of employment; 3.5% of value added | World Bank (2019), pp. 14–15, Figures 2.11–2.14 and Box 2.1 | M | Seven years early; establishment concept, not worker-level informality. 58% of informal firms were self-employed, 39% had 2–4 workers, and 3% had 5–9. |

- Interpretation: the evidence shows a sizeable micro/informal business layer alongside large formal export sectors. It weakens any simple claim that strong institutions eliminated informality, but the dated and mixed measures cannot establish a 2020 firm-size distribution.

## 10. Institutional / trust measures

### 10a. Worldwide Governance Indicators

**Definitions:** Rule of Law captures perceptions of contract enforcement, property rights, police, courts, crime, and violence. Government Effectiveness captures perceptions of public services, civil service, policy formulation/implementation, and credibility. **Unit:** standard-normal governance estimate, approximately −2.5 to +2.5; higher is better.

| Anchor | Actual year | Rule of Law | Government Effectiveness | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | n/a | WGI begins in 1996 | n/a | Cannot measure the independence-era institutional baseline. |
| 1990 | n/a | n/a | n/a | WGI begins in 1996 | n/a | No backward substitution. |
| 2020 | 2020 | +0.955 | +0.832 | World Bank API `GOV_WGI_RL_EST` and `GOV_WGI_GE_EST`; Mauritius rows `date=2020` | H | Composite perception estimates with uncertainty; small changes require confidence-interval checks. Revised methodology may change historical values. |

- Reproducible queries: `https://api.worldbank.org/v2/country/MUS/indicator/GOV_WGI_RL_EST?date=1990:2022&format=json&per_page=100` and the same URL with `GOV_WGI_GE_EST` (World Bank, 2025).

### 10b. Direct institutional trust

Afrobarometer’s November 2020 nationally representative survey of 1,200 adults (±3 percentage points at 95% confidence) found that only 41% trusted the prime minister “somewhat” or “a lot,” 31% the president, 40% the National Assembly, 40% the ruling party, and 38% opposition parties (Stuurman & Peeraullee, 2021, pp. 2, 9, Figure 14).

This is a direct trust measure but only for named political institutions. It is **not** a measure of generalized interpersonal trust, trust in strangers, courts, banks, managers, or business counterparties. It therefore cannot, by itself, validate the project’s Radius of Trust mechanism.

---

## Economic transformation: what changed and what persisted

The evidence supports a staged, path-dependent account:

1. **Sugar inheritance and rents.** Colonial land, labour, and export structures produced extreme dependence; preferential access later generated rents that could be saved, invested, and recycled (National Archives Department, n.d.; Svirydzenka & Petri, 2014, pp. 5–7).
2. **EPZ textiles and clothing.** The EPZ used duty exemptions, tax incentives, imported inputs, domestic and foreign networks, and a labour-intensive model. Manufacturing reached 20.37% of GDP in 1990, while first-half 1990 export data were dominated by miscellaneous manufactured articles (Central Statistical Office, 1990, Table 6, p. 5; World Bank, 2026).
3. **Tourism and higher-value services.** Tourism grew alongside EPZ manufacturing; offshore finance/freeport activities and other services were later promoted. The 1997 World Bank assessment already warned that low-wage textile competitiveness and unrestrained tourism growth could not be sustained and called for skills, infrastructure, and service-sector upgrading (World Bank, 1997, Executive Summary, pp. 1–2).
4. **Not a finished success story.** By 2020, services employed 71.28% of workers, but manufacturing’s GDP share was 10.67%. COVID-19 exposed tourism dependence; informal firms remained numerous in the latest establishment evidence; and direct political trust was low. Diversification reduced monocrop risk without eliminating external dependence, uneven productivity, or institutional strain.

## Critical test: Radius of Trust Theory

### Evidence consistent with the mechanism

- Mauritius maintained relatively strong rule-of-law and government-effectiveness estimates in 2020, which could allow contracts and administration to substitute for purely personal trust (World Bank, 2025).
- The country scaled formal export manufacturing, tourism, and financial/business activities beyond household production. IMF research argues that power-sharing, vigorous opposition/media, property-rights protection, and cross-group business/social networks helped policy adoption and investment (Svirydzenka & Petri, 2014, pp. 7–8).

### Evidence that challenges or narrows it

- The best direct 2020 survey evidence shows low trust in several political institutions, not a uniformly “wide” radius of trust (Stuurman & Peeraullee, 2021, p. 9).
- Informal firms were 25.3% of firms in 2013 and overwhelmingly self-employed or micro-sized (World Bank, 2019, pp. 14–15). Strong aggregate governance therefore coexisted with relational or small-scale enterprise.
- Mauritius’s large organisations could have scaled through substitutes—law, state capacity, concentrated ownership, ethnic/business networks, foreign capital, and trade preferences—without generalized interpersonal trust.

### Verdict

**Qualified support, not confirmation.** Mauritius is consistent with the narrower claim that credible institutions can extend economic cooperation beyond close ties. It does not show that generalized trust caused firm scaling, and the available evidence does not measure trust in strangers, delegation, courts, or business partners at the historical moments when EPZ firms grew.

## Critical test: Continuity + Adaptation Theory

### Evidence consistent with the mechanism

- Export-oriented diversification persisted across changes of government; even a party that initially opposed the EPZ embraced it after taking power in 1982 (Svirydzenka & Petri, 2014, p. 7, note 5).
- Policy instruments adapted: sugar rents and preferences supported investment; the EPZ promoted textiles; tourism expanded; the 1983 India tax treaty helped offshore finance; and later strategies emphasized higher-value activities (Svirydzenka & Petri, 2014, pp. 6–8; World Bank, 1997, pp. 1–2).
- The sequence fits the theory’s emphasis on a durable direction plus sectoral correction better than a story of one unchanged plan.

### Evidence that challenges or narrows it

- Continuity did not prevent macroeconomic mistakes: the sugar-price boom helped trigger fiscal expansion, followed by large deficits in the early 1980s (Svirydzenka & Petri, 2014, p. 17, note 13).
- Manufacturing’s share later fell sharply, the textile/sugar preference model lost force, and reform implementation did not automatically keep pace with strategy (World Bank, 1997, pp. 1–2; World Bank, 2019, pp. 16–18).
- Stable direction may itself reflect prior success, institutional capacity, trade preferences, and coalition bargains. The case does not isolate continuity as the cause.

### Verdict

**Stronger support for a revised version.** Mauritius supports continuity **through negotiated adaptation**, not continuity alone. The theory should explicitly include external rents/market access, coalition management, implementation capacity, and performance feedback. Periods of policy error and later manufacturing slowdown are evidence against treating consistency as sufficient.

---

## Data-gap list

- No comparable 1960 labour-productivity series.
- No harmonised 1960 employment-by-sector series.
- No 1960 manufacturing-share observation; 1976 is too distant for an anchor chart.
- No opened annual 1960 or annual 1990 product-level merchandise-export table on one consistent classification. The 1970 and Jan–Jun 1990 observations must remain labelled proxies.
- The 1962 literacy context uses ages 5+, not the UNESCO adult (15+) definition.
- No 1960 electricity-access observation and no matched historical reliability/cost series.
- No comparable 2020 worker-level informality or complete firm-size distribution; 2013 is a distant establishment proxy.
- WGI has no 1960/1990 observations; it cannot establish institutional quality before diversification.
- No historical direct measure of generalized trust, trust in strangers, delegation, or business counterparties.
- Merchandise exports omit tourism, finance, and other services; a separate, consistent services-export series is required for a complete transformation graphic.

## Evidence-backed findings

1. **Income rose substantially:** real GDP per capita increased from US$1,419 in 1960 to US$9,534 in pandemic-hit 2020 on one constant-price series (World Bank, 2026).
2. **Structural transformation was staged, not instantaneous:** 1991 employment was already 35.0% industry and 45.4% services; by 2020 services were 71.3% and agriculture 5.3% (World Bank, 2026).
3. **The industrial phase was real but not permanent:** manufacturing was 20.37% of GDP in 1990 and 10.67% in 2020 (World Bank, 2026).
4. **Export dependence changed form:** sugar dominated near independence; manufactured articles dominated the first half of 1990; by 2020 merchandise exports were split mainly between food/fish/sugar and manufactured/apparel groups (World Bank, 1997; Central Statistical Office, 1990; Statistics Mauritius, 2022).
5. **Strong aggregate institutions did not mean uniformly high trust or universal formality:** 2020 WGI estimates were positive, yet direct trust in major political institutions was minority-level and 2013 evidence showed many informal microfirms (World Bank, 2025; Stuurman & Peeraullee, 2021; World Bank, 2019).

## What Mauritius supports

- Development can emerge from a difficult colonial plantation inheritance without culture being treated as destiny.
- Diversification can be cumulative: old-sector rents, skills, networks, and institutions can finance or enable new export activities.
- A durable export-oriented direction can coexist with repeated adaptation across sugar, EPZ textiles, tourism, finance, and other services.
- Formal institutions and negotiated political arrangements may extend cooperation across a diverse society.

## What Mauritius challenges

- A simple “African culture blocks growth” claim.
- A linear urbanisation-equals-industrialisation story; the urban share did not rise monotonically.
- A claim that strong aggregate governance eliminates informality or guarantees high political trust.
- A claim that policy continuity alone is sufficient; macroeconomic errors, preference shocks, and manufacturing decline still occurred.
- A decorative “miracle” narrative that ignores plantation inheritance, external trade preferences, labour segmentation, vulnerability, and incomplete upgrading.

## What Mauritius cannot prove

- That trust caused growth, firm scaling, or policy continuity.
- That any national cultural trait explains Mauritius better than institutions, trade preferences, human capital, geography, coalition bargains, or sector strategy.
- That continuity caused diversification rather than successful sectors and external rents making continuity politically sustainable.
- That the Mauritius sequence can be transplanted to larger or landlocked economies with different market access.
- That endpoint correlations establish causal effects of education, electricity, governance, or sector shares.

---

## References

Central Statistical Office. (1990). *Digest of external trade statistics: First semester 1990*. Government of Mauritius. https://statsmauritius.govmu.org/Documents/Statistics/Digests/External_Trade/Digest_Ext_Trade_1Sem90.pdf

Government of Mauritius. (n.d.). *Republic of Mauritius: History*. Retrieved October 4, 2026, from https://www.govmu.org/EN/Pages/exploremauritius.aspx

National Archives Department. (n.d.). *Pre-independence Mauritius*. Government of Mauritius. Retrieved October 4, 2026, from https://nationalarchives.govmu.org/nationalarchives/?page_id=2284

Statistics Mauritius. (2019). *Key indicators of the labour market, 2011–2019*. Government of Mauritius. https://statsmauritius.govmu.org/Documents/Statistics/By_Subject/Labour/KILM_Yr11-19.pdf

Statistics Mauritius. (2022). *External merchandise trade statistics: 4th quarter and year 2021* [Economic and Social Indicators]. Government of Mauritius. https://statsmauritius.govmu.org/Documents/Statistics/ESI/2022/EI1632/Ext_Trade_4Qtr21_250222.pdf

Stuurman, Z., & Peeraullee, S. (2021, June 10). *Mauritians’ demand for democracy remains high despite waning quality* (Afrobarometer Dispatch No. 457). Afrobarometer. https://www.afrobarometer.org/wp-content/uploads/2022/02/ad457-mauritians_demand_democracy_but_supply_falls_short-afrobarometer_dispatch-10june21.pdf

Svirydzenka, K., & Petri, M. (2014). *Mauritius: The drivers of growth—Can the past be extended?* (IMF Working Paper No. 14/134). International Monetary Fund. https://www.imf.org/external/pubs/ft/wp/2014/wp14134.pdf

UNESCO Institute for Statistics. (2026). *UIS Data Browser* [Data set]. https://databrowser.uis.unesco.org/

UNESCO World Heritage Centre. (2006). *Aapravasi Ghat (Mauritius): Advisory body evaluation* (No. 1227). https://whc.unesco.org/archive/advisory_body_evaluation/1227.pdf

World Bank. (1997). *Mauritius country assistance strategy* (Report No. 16426-MAS). https://documents1.worldbank.org/curated/en/182011468051286347/pdf/multi-page.pdf

World Bank. (2019). *Job creation and labor productivity in Mauritius*. https://documents1.worldbank.org/curated/en/181521561655338668/pdf/Job-Creation-and-Labor-Productivity-in-Mauritius.pdf

World Bank. (2025). *Worldwide Governance Indicators: 2025 revision* [Data set]. https://www.worldbank.org/en/publication/worldwide-governance-indicators

World Bank. (2026). *World Development Indicators* [Data set]. Retrieved October 4, 2026, from https://api.worldbank.org/v2/country/MUS

Xenos, C. (1970, September). *Country profiles: Mauritius*. Population Council & International Institute for the Study of Human Reproduction, Columbia University. https://files.eric.ed.gov/fulltext/ED088665.pdf

## Matching in-text citation forms

| Reference | Parenthetical | Narrative |
|---|---|---|
| Central Statistical Office (1990) | (Central Statistical Office, 1990) | Central Statistical Office (1990) |
| Government of Mauritius (n.d.) | (Government of Mauritius, n.d.) | Government of Mauritius (n.d.) |
| National Archives Department (n.d.) | (National Archives Department, n.d.) | National Archives Department (n.d.) |
| Statistics Mauritius (2019, 2022) | (Statistics Mauritius, 2019, 2022) | Statistics Mauritius (2019, 2022) |
| Stuurman and Peeraullee (2021) | (Stuurman & Peeraullee, 2021) | Stuurman and Peeraullee (2021) |
| Svirydzenka and Petri (2014) | (Svirydzenka & Petri, 2014) | Svirydzenka and Petri (2014) |
| UNESCO Institute for Statistics (2026) | (UNESCO Institute for Statistics, 2026) | UNESCO Institute for Statistics (2026) |
| UNESCO World Heritage Centre (2006) | (UNESCO World Heritage Centre, 2006) | UNESCO World Heritage Centre (2006) |
| World Bank (1997, 2019, 2025, 2026) | (World Bank, year) | World Bank (year) |
| Xenos (1970) | (Xenos, 1970) | Xenos (1970) |

## Verification log

- 2026-10-04 — opened and re-pulled all listed WDI and WGI API series; checked exact non-null start years and anchor rows.
- 2026-10-04 — opened Statistics Mauritius 2020/2021 trade report and recalculated 2020 SITC shares from Table 3 totals.
- 2026-10-04 — opened the scanned 1990 trade digest and recalculated first-semester SITC shares from Table 6; retained it as a period proxy, not an annual value.
- 2026-10-04 — opened the World Bank country strategy, World Bank jobs/productivity report, IMF working paper, National Archives page, UNESCO advisory evaluation, Xenos profile, and Afrobarometer dispatch at the cited locators.
- 2026-10-04 — checked that all ten indicators state definition, unit, actual year, value, locator, confidence, and limitation; all missing anchors and incompatible proxies remain visible.
