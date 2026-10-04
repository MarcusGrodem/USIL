# Botswana — counterexample evidence file

Data verified **2026-10-04**. This file follows the Ghana/South Korea 10-indicator structure and the locked anchor years **1960 · 1990 · 2020**. It does not interpolate. A substituted observation is printed with its actual year; `n/a` means that no sufficiently comparable observation was verified.

Legend: **H** = high confidence · **M** = medium confidence · **L** = low confidence · **n/a** = unavailable or not comparable.

## Reading the case

Botswana is a counterexample to the claim that an undifferentiated “African culture” prevents growth. Its income, schooling, infrastructure, and state capacity changed dramatically after independence. It is not, however, a decorative success story: diamond-led growth produced a highly concentrated export structure, limited manufacturing depth and job creation, and exceptionally high inequality. The case therefore calls for a joint explanation involving natural-resource rents, policy choices, institutions, geography, and historical inheritance rather than a cultural essence (Hillbom, 2014; World Bank, 2023, pp. xi–xii, 13).

## Starting position and historical/colonial inheritance

Bechuanaland was a British protectorate governed largely through indirect rule. Colonial administration preserved and used chiefly structures while investing little beyond administration and the railway. At independence on 30 September 1966, Botswana had virtually no infrastructure, more than 90% of its population depended on subsistence agriculture, only 22 university graduates were reported, and the country had eight kilometres of tarred road (Maipose, 2008, pp. 3–4). This was both continuity and deprivation: some consultative institutions survived, but so did a cattle-centred, unequal, poorly connected economy.

Diamonds were discovered in 1967. The post-independence state centralized mineral rights, renegotiated customs revenue, formed a 50/50 mining partnership with De Beers, and channelled substantial rents into public investment and saving (Maipose, 2008, pp. 5, 10–11). Those choices matter, but they do not prove that “good institutions” alone caused growth. Hillbom (2014, pp. 155–176) explicitly argues for a multi-causal account that gives weight to institutions, factor endowments, geography, and the precolonial, colonial, and postcolonial periods. Colonial cattle commercialization also entrenched inequality, which complicates any account of an unbroken inclusive institutional inheritance.

---

## 1. GDP per capita

**Definition/unit:** Gross domestic product divided by midyear population, in **constant 2015 US dollars**; this is a real market-exchange-rate series, not PPP.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation/comparability warning |
|---|---:|---:|---|---|---|
| 1960 | 1960 | US$393.86 | WDI indicator `NY.GDP.PCAP.KD`, country `BWA`, API query `date=1960:2020`; observation `date=1960` | **H** | Pre-independence Bechuanaland estimate; early national accounts are less robust than later observations. Do not compare with PPP series. |
| 1990 | 1990 | US$4,039.47 | Same query; observation `date=1990` | **H** | Direct anchor-year observation. |
| 2020 | 2020 | US$6,254.25 | Same query; observation `date=2020` | **H** | COVID-19 outcome year; 2019 was US$6,951.73, so the anchor captures a major temporary contraction. |

Source: World Bank (2026), *World Development Indicators* (WDI). Direct reproducible query: <https://api.worldbank.org/v2/country/BWA/indicator/NY.GDP.PCAP.KD?date=1960:2020&format=json&per_page=100>.

**Interpretation:** Real GDP per person was about 15.9 times its 1960 level by 2020, but the 2020 value was 10.0% below 2019. The long-run transformation is real; the endpoint also exposes sensitivity to shocks.

## 2. Labour productivity

**Definition/unit:** GDP per person employed, **constant 2021 PPP international dollars**. This combines national accounts output with employment estimates.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation/comparability warning |
|---|---:|---:|---|---|---|
| 1960 | — | n/a | WDI `SL.GDP.PCAP.EM.KD`; query returns no observation before 1991 | **n/a** | No comparable series; not estimated. |
| 1990 | **1991** | Int$37,038.69 | WDI `SL.GDP.PCAP.EM.KD`, `date=1960:2022`; observation `date=1991`; 1990 is null | **H** | One-year proxy, printed as 1991. Modelled employment denominator. |
| 2020 | 2020 | Int$50,122.87 | Same query; observation `date=2020` | **H** | COVID-19 affected both output and employment; this is not a normal-cycle endpoint. |

Source: World Bank (2026), WDI. Query: <https://api.worldbank.org/v2/country/BWA/indicator/SL.GDP.PCAP.EM.KD?date=1960:2022&format=json&per_page=100>.

**Interpretation:** Measured output per worker rose about 35% from 1991 to 2020, much more slowly than the earlier surge in GDP per person. The aggregate is also lifted by capital-intensive mining and does not show how gains were distributed across workers.

## 3. Employment by sector

**Definition/unit:** Employment in agriculture, industry, and services as a percentage of total employment; **ILO modelled estimates**, not census counts.

| Anchor | Actual year | Agriculture | Industry | Services | Exact source locator | Confidence | Limitation/comparability warning |
|---|---:|---:|---:|---:|---|---|---|
| 1960 | — | n/a | n/a | n/a | WDI indicators `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS`; series begin 1991 | **n/a** | The historical statement that more than 90% depended on subsistence agriculture is not an employment-share estimate and is not inserted here. |
| 1990 | **1991** | 12.58% | 21.27% | 66.15% | Three WDI queries, country `BWA`, observations `date=1991`; 1990 is null | **M** | One-year proxy; modelled shares. The low agriculture share can be affected by definitions of subsistence activity and should not be equated with rural livelihood dependence. |
| 2020 | 2020 | 19.44% | 15.04% | 65.52% | Same indicators; observations `date=2020` | **M** | Modelled estimates and COVID-affected labour market. Sector shares sum to 100% subject to rounding. |

Sources: World Bank (2026), WDI indicators `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, and `SL.SRV.EMPL.ZS`, using `https://api.worldbank.org/v2/country/BWA/indicator/{indicator}?date=1960:2022&format=json&per_page=100`.

**Interpretation:** Services dominated employment at both measured endpoints, while industry’s share fell. The 2023 diagnostic describes the shift as largely toward low-productivity, non-tradable services rather than a broad industrial transformation (World Bank, 2023, pp. 6–7).

## 4. Manufacturing share of GDP

**Definition/unit:** Manufacturing value added as a percentage of GDP at current prices (`NV.IND.MANF.ZS`). It excludes mining.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation/comparability warning |
|---|---:|---:|---|---|---|
| 1960 | **1965** | 11.59% | WDI `NV.IND.MANF.ZS`, `date=1960:2022`; first non-null observation `date=1965` | **M** | Five-year, pre-independence proxy. No 1960 value; do not plot as 1960. |
| 1990 | 1990 | 4.77% | Same query; observation `date=1990` | **H** | Direct anchor observation. Current-price share can move with diamond prices and relative prices, not only manufacturing volume. |
| 2020 | 2020 | 5.66% | Same query; observation `date=2020` | **H** | Direct anchor observation; COVID-19 changed sectoral relative weights. |

Source: World Bank (2026), WDI. Query: <https://api.worldbank.org/v2/country/BWA/indicator/NV.IND.MANF.ZS?date=1960:2022&format=json&per_page=100>.

**Interpretation:** Botswana’s income growth did not produce a Korea-like manufacturing transformation. The manufacturing share in 2020 remained only modestly above its 1990 level and far below the 1965 proxy.

## 5. Export composition

**Definition/unit:** Named principal merchandise-export commodity groups as percentages of total merchandise exports (free on board where specified). Product classifications differ across the historical sources, so rows show structure but are not a perfectly harmonised time series.

| Anchor | Actual year | Composition/value | Exact source locator | Confidence | Limitation/comparability warning |
|---|---:|---|---|---|---|---|
| 1960 | — | n/a | No verified 1960 product table. Maipose (2008, p. 3) establishes an agriculture-dependent economy at independence; this does not supply product shares. | **L** | Botswana was not independent in 1960. Beef/cattle is valid historical context, not a numeric 1960 export cell. |
| 1990 | 1990 | Diamonds **78.8%** · copper-nickel **8.2%** · textiles **3.4%** | IMF (1998), Table 4: diamonds US$1,405.1m; nondiamond US$379.3m; copper-nickel US$145.8m; textiles US$60.1m; total US$1,784.4m. Shares recomputed from table values. | **H** | IMF table uses principal groups and US-dollar values; shares may differ from later HS-based national tables. |
| 2020 | 2020 | Diamonds **88.2%** · machinery/electrical equipment **3.4%** · salt/soda ash **1.5%** | Statistics Botswana (2021), Table 2.2, p. 14, row `Total_2020` and `% Distribution`: total exports P48,180.3m | **H** | National principal-group classification. “Other goods” was 3.0% but is not a single product group. Diamond imports/re-exports and aggregation complicate interpretation as domestic value added. |

**Interpretation:** Export concentration worsened between the two measured anchors. Even after decades of diversification policy, diamonds were 88.2% of merchandise exports in 2020 (Statistics Botswana, 2021, p. 14). The World Bank (2023, pp. 28–31) concludes that diversification has yet to gain traction, citing limited non-extractive investment, infrastructure and skills gaps, and policy distortions. This is diversification into services without comparable export diversification.

## 6. Literacy/education

**Definition/unit:** Adult literacy means the percentage able to read and write a short, simple statement with understanding. Age ranges vary by source and are therefore printed explicitly.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation/comparability warning |
|---|---:|---:|---|---|---|
| 1960 | — | n/a | No verified comparable national literacy observation; Botswana was a protectorate. | **n/a** | The 22-graduate independence fact documents human-capital scarcity but is not a literacy rate (Maipose, 2008, p. 4). |
| 1990 | **1991** | 67.3% (ages 15–65) | Statistics Botswana (2016), Table 35, p. 69, row 1991, total ages 15–65 | **H** | One-year proxy; upper age cap differs from WDI’s ages-15+ definition. WDI/UIS gives 68.58% for ages 15+ in 1991. |
| 2020 | **2014** | 90.0% (ages 15–65) | Statistics Botswana (2016), Table 35, p. 69, row 2014, total ages 15–65 | **M** | Six-year proxy, outside a ±3-year window; context only, not a 2020 anchor value. No interpolation. |

Sources: Statistics Botswana (2016), Table 35; World Bank (2026), WDI/UNESCO UIS indicator `SE.ADT.LITR.ZS`, <https://api.worldbank.org/v2/country/BWA/indicator/SE.ADT.LITR.ZS?date=1960:2022&format=json&per_page=100>.

**Interpretation:** The verified series shows a major expansion of literacy, but the absence of a near-2020 adult-literacy observation means the 2014 value must not be plotted at 2020.

## 7. Urbanisation

**Definition/unit:** Population living in urban areas as a percentage of total population, using the national urban definition harmonised in the UN/World Bank series.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation/comparability warning |
|---|---:|---:|---|---|---|
| 1960 | 1960 | 3.00% | WDI `SP.URB.TOTL.IN.ZS`, `date=1960:2020`; observation `date=1960` | **H** | Modelled/harmonised historical estimate; national urban classifications can change. |
| 1990 | 1990 | 43.65% | Same query; observation `date=1990` | **H** | Direct anchor observation. |
| 2020 | 2020 | 66.45% | Same query; observation `date=2020` | **H** | Direct anchor observation. |

Source: World Bank (2026), WDI. Query: <https://api.worldbank.org/v2/country/BWA/indicator/SP.URB.TOTL.IN.ZS?date=1960:2020&format=json&per_page=100>.

**Interpretation:** Botswana shifted from an overwhelmingly rural society to a two-thirds urban one. Urbanisation alone did not guarantee manufacturing depth: the 2023 diagnostic reports small, low-density cities and a shift toward low-productivity non-tradable services (World Bank, 2023, p. 6).

## 8. Electricity/infrastructure

**Definition/unit:** Share of the population with access to electricity, percent.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation/comparability warning |
|---|---:|---:|---|---|---|
| 1960 | — | n/a | WDI `EG.ELC.ACCS.ZS`; no observation | **n/a** | No national access series. |
| 1990 | **1991** | 10.1% | WDI `EG.ELC.ACCS.ZS`, `date=1960:2022`; 1990 null, observation `date=1991` | **M** | One-year proxy. Historical estimates combine survey and modelled information. |
| 2020 | 2020 | 71.8% | Same query; observation `date=2020` | **H** | National average hides rural/urban disparities and does not measure reliability or affordability. |

Source: World Bank (2026), WDI. Query: <https://api.worldbank.org/v2/country/BWA/indicator/EG.ELC.ACCS.ZS?date=1960:2022&format=json&per_page=100>. The World Bank (2023, p. xi) independently reports the 2020 72% rounded value and notes expansion from under 10% in the 1980s.

**Interpretation:** Infrastructure access expanded dramatically. Yet access is not productive transformation by itself; electricity reliability, cost, firm capabilities, and market scale affect whether infrastructure supports tradable industry.

## 9. Firm size/informality proxy

**Definition/unit:** Statistics Botswana’s “formal sector employment” count and share of total employment for people aged 15+, Q4 2019. This is a labour-status proxy, not a firm-size distribution.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation/comparability warning |
|---|---:|---:|---|---|---|
| 1960 | — | n/a | No comparable survey | **n/a** | Not estimated. |
| 1990 | — | n/a | No comparable harmonised observation verified | **n/a** | Not estimated. |
| 2020 | **2019 Q4** | 485,524 formal-sector jobs; **65.4%** of 742,378 employed | Statistics Botswana (2020), Table 1.0, p. 4 (PDF p. 8): formal-sector employment and employed population; share calculated | **M** | One-quarter proxy. Report later gives 373,644 under a narrower “formal employment/jobs” concept (pp. 33–35); do not infer a 34.6% informal-employment rate without reconciling definitions. |

Source: Statistics Botswana (2020), *Quarterly multi-topic survey: Labour force module report, quarter 4: 2019*. The report defines informal establishments using non-registration, fewer than five employees, informal/no accounts, inseparable household expenditure, or casual hiring (p. 64; PDF p. 68), but it does not provide a single directly comparable headline informal-employment share.

**Interpretation:** A substantial formal sector coexists with many micro- and small firms. The World Bank (2023, pp. 6, 30–31) describes much recent structural change as entry into low-productivity non-tradable micro and small services, limiting the inference that formality or firm scale alone explains growth.

## 10. Institutional/trust measure

**Definition/unit:** Weighted share of adults reporting that they trust courts of law “somewhat” or “a lot” in Afrobarometer Round 8. Nationally representative face-to-face sample of 1,200 adults; fieldwork 26 July–10 August 2019; country-level margin of error ±3 percentage points at 95% confidence.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation/comparability warning |
|---|---:|---:|---|---|---|
| 1960 | — | n/a | Afrobarometer did not exist | **n/a** | No retrospective score. |
| 1990 | — | n/a | Afrobarometer Botswana series begins 1999 | **n/a** | No retrospective score. |
| 2020 | **2019** | **65%** trust courts somewhat/a lot (21% + 44%) | Afrobarometer (2021), Q41I, p. 50; total column | **H** | One-year proxy; survey perception, not court performance. “Don’t know” was 5%. Trust varies by institution and cannot be generalized to strangers, firms, or all government. |

Source: Afrobarometer (2021), *Botswana Round 8: Summary of results*.

**Interpretation:** The measure supports a claim of meaningful institutional trust, but not a timeless national “trust culture.” In the same survey, 49% said officials often or always go unpunished and 49% said people are often or always treated unequally under law (Afrobarometer, 2021, pp. 40, 50). This internal variation is precisely why governance should be measured rather than assumed.

---

## Diamond dependence and diversification: critical assessment

Botswana converted diamond rents into public goods unusually effectively. GDP per person, literacy, urbanisation, and electricity access all rose, and the state avoided the macroeconomic collapse associated with many resource booms. These outcomes are consistent with capable fiscal management and institutional continuity (Maipose, 2008, pp. 8–11; World Bank, 2023, pp. 2–3).

But the production and export structure remained narrow. Diamonds rose from 78.8% of exports in 1990 to 88.2% in 2020, while manufacturing was only 5.7% of GDP in 2020. The World Bank (2023, pp. 28–31) finds limited progress on an export-oriented private sector and points to state-owned-enterprise dominance, weak competition, infrastructure and skills gaps, and fragmented inward-oriented policies. Diamond mining is capital intensive, and the wider economy has not generated enough productive jobs. Consumption inequality remained exceptionally high, with an official Gini of 54.9 in 2016 (World Bank, 2023, p. 13).

## Governance and institutional explanations: what survives scrutiny

Institutional explanations have real evidence behind them: mineral rights were centralized; diamond agreements captured rents for the state; public planning and savings restrained spending; electoral and legal continuity reduced expropriation risk. These mechanisms are more precise than a claim that Botswana simply had a “good culture.”

Three cautions are necessary:

1. **Institutions did not operate without rents.** Diamonds supplied the fiscal space that made investment and saving consequential.
2. **Institutional inheritance was not uniformly inclusive.** The colonial cattle economy concentrated assets and opportunity; later growth did not eliminate high inequality (Hillbom, 2014; World Bank, 2023, p. 13).
3. **Past governance quality does not guarantee present diversification.** Survey evidence shows meaningful trust in courts alongside perceived unequal enforcement, while recent diagnostics identify public-sector inefficiency and policy barriers (Afrobarometer, 2021, pp. 40, 50; World Bank, 2023, pp. 28–31).

The defensible conclusion is conditional: institutions helped Botswana capture and invest resource rents, but diamonds, small population, geography, regional arrangements, external demand, and policy choices also shaped the result.

## Data-gap list

- No comparable 1960 labour-productivity or sector-employment observation.
- Manufacturing begins in 1965; the proxy must not be plotted as 1960.
- No verified numeric 1960 export-composition table; obtain a Bechuanaland trade yearbook before publication.
- No adult-literacy observation within ±3 years of 2020; 2014 is context only.
- No 1960 electricity-access estimate; 1991 is the first anchor-adjacent WDI value.
- No harmonised 1990/2020 firm-size or informal-employment series. Reconcile the two formal-employment concepts inside the 2019 Q4 labour report before using a residual as “informal.”
- No institutional/trust measure for 1960 or 1990; the 2019 Afrobarometer result is a snapshot, not a historical trait.
- Export classifications differ between the 1990 IMF table and the 2020 Statistics Botswana table; direct product-by-product charting requires a common UN Comtrade classification.

## Evidence-backed findings

1. **Botswana achieved a real income transformation:** constant-2015-US-dollar GDP per person rose from **US$394 in 1960 to US$6,254 in 2020**, even with a COVID-related fall from 2019 (World Bank, 2026).
2. **The transformation did not become broad export diversification:** diamonds accounted for **78.8% of exports in 1990 and 88.2% in 2020** (International Monetary Fund, 1998, Table 4; Statistics Botswana, 2021, Table 2.2).
3. **Manufacturing remained shallow:** its GDP share was **4.77% in 1990 and 5.66% in 2020**, while services held about two-thirds of employment (World Bank, 2026).
4. **Public-goods expansion was substantial:** electricity access rose from **10.1% in 1991 to 71.8% in 2020**, and literacy reached **90.0% by 2014** for ages 15–65 (Statistics Botswana, 2016, Table 35; World Bank, 2026).
5. **Governance is an explanation to test, not a halo:** **65%** trusted courts somewhat or a lot in 2019, but **49%** said officials often or always go unpunished (Afrobarometer, 2021, pp. 40, 50).

## What Botswana supports

- African development outcomes vary radically; continent-level cultural determinism fails.
- Capable states can bargain over natural-resource rents and turn a portion into infrastructure and human development.
- Continuity in planning and fiscal rules can support long-run accumulation when combined with adaptation and external resources.
- Connected infrastructure and public services matter, but their economic effects depend on firm capability and market structure.

## What Botswana challenges

- Growth is not the same as structural transformation: high income growth can coexist with export concentration and weak manufacturing.
- “Good institutions” are not a complete monocausal explanation; factor endowments, geography, external markets, and a small population matter.
- Institutional reputation should not erase inequality, weak job creation, policy distortions, or citizens’ concerns about unequal enforcement.
- Resource wealth does not automatically generate a diversified private sector even when macroeconomic management is comparatively strong.

## What Botswana cannot prove

- It cannot isolate culture, institutions, diamonds, or policy continuity as the single cause of growth.
- It cannot establish that precolonial consultative institutions were equally inclusive across gender, class, ethnicity, or minority groups.
- It cannot show that institutional trust caused firm scale; the available trust measure is a 2019 cross-section.
- It cannot show that infrastructure caused diversification; electricity and urbanisation rose while export concentration remained high.
- It cannot demonstrate that Botswana’s path is replicable in larger, more populous, less diamond-rich, or differently situated countries.

---

## References (APA 7)

Afrobarometer. (2021). *Botswana Round 8: Summary of results* [Survey report]. <https://www.afrobarometer.org/wp-content/uploads/2022/02/afrobarometer_sor_bot_r8_en_2019-12-17.pdf>

- In text: Afrobarometer (2021); (Afrobarometer, 2021).

Hillbom, E. (2014). Cattle, diamonds and institutions: Main drivers of Botswana’s economic development, 1850 to present. *Journal of International Development, 26*(2), 155–176. <https://doi.org/10.1002/jid.2957>

- In text: Hillbom (2014); (Hillbom, 2014).

International Monetary Fund. (1998). *Botswana: Selected issues and statistical appendix* (IMF Staff Country Report No. 98/39). <https://www.imf.org/-/media/websites/imf/imported-full-text-pdf/external/pubs/ft/scr/1998/_cr9839.pdf>

- In text: International Monetary Fund (1998); (International Monetary Fund, 1998).

Maipose, G. S. (2008). *Policy and institutional dynamics of sustained development in Botswana* (Commission on Growth and Development Working Paper No. 35). World Bank. <https://documents.worldbank.org/curated/en/364701468330906042/pdf/577340NWP0Box353767B01PUBLIC10gcwp035web.pdf>

- In text: Maipose (2008); (Maipose, 2008).

Statistics Botswana. (2016). *Selected statistical indicators 1966–2016*. <https://www.statsbots.org.bw/sites/default/files/documents/1966sept%20selected%20indicators.pdf>

- In text: Statistics Botswana (2016); (Statistics Botswana, 2016).

Statistics Botswana. (2020). *Quarterly multi-topic survey: Labour force module report, quarter 4: 2019*. <https://www.statsbots.org.bw/sites/default/files/publications/Multi%20Topic%20Survey%20Q4%20Labour%20Force%20Module%20Report_0.pdf>

- In text: Statistics Botswana (2020); (Statistics Botswana, 2020).

Statistics Botswana. (2021). *International merchandise trade statistics: Monthly digest—December 2020*. <https://www.statsbots.org.bw/sites/default/files/publications/International%20Merchandise%20Trade%20Statistics%20December%20%20Monthly%20Digest%20%20December%202020.pdf>

- In text: Statistics Botswana (2021); (Statistics Botswana, 2021).

World Bank. (2023). *Botswana systematic country diagnostic update: At a crossroads—Reigniting efficient and inclusive growth*. <https://documents1.worldbank.org/curated/en/099112023112034378/pdf/BOSIB156106b900661a7d8168fe9cad99f2.pdf>

- In text: World Bank (2023); (World Bank, 2023).

World Bank. (2026). *World Development Indicators* [Data set]. Retrieved October 4, 2026, from <https://databank.worldbank.org/source/world-development-indicators>

- In text: World Bank (2026); (World Bank, 2026). Exact indicator codes and reproducible API queries appear under each observation above.

## Verification record

- 2026-10-04 — Re-pulled all WDI series from the World Bank API and recorded direct anchor/proxy observations and nulls.
- 2026-10-04 — Opened Statistics Botswana’s 1966–2016 indicators, Q4 2019 labour report, and December 2020 trade digest; checked the cited tables and page locators.
- 2026-10-04 — Recomputed 1990 export shares from IMF Table 4 and checked that components sum to the published diamond/nondiamond total; recomputed the 2019 formal-sector share from Statistics Botswana headline counts.
- 2026-10-04 — Opened Afrobarometer’s Botswana Round 8 summary and checked sampling details and Q41I response categories.
- 2026-10-04 — Opened the World Bank 2023 diagnostic and Maipose working paper; checked historical, diversification, infrastructure, inequality, and institutional claims against the cited pages.
- 2026-10-04 — Opened Hillbom’s final journal landing page and DOI; used it for the multi-causal historical interpretation, not for unverified numeric cells.
