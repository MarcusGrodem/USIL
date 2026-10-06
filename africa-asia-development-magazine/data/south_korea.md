# South Korea — audited anchor-case evidence

**Task:** DATA-001 · **Checked:** 2026-10-04 · **Anchors:** 1960, 1990, 2020

Values appear only with a source and locator. Proxies retain their actual year; `gap` means no comparable observation was verified. Confidence: **H** high, **M** medium, **L** gap/unresolved.

## Starting position and inheritance

In 1960 Korea's GDP per capita was **US$1,037.73 (constant 2015 US$)**, 5.7% below Ghana's US$1,100.76 on the same WDI series (World Bank, 2026a; [K1]). Similar income did not mean identical starting conditions. Other verified baselines are manufacturing **11.40% of GDP**, urban population **27.69%**, adult literacy **71%**, and commodity exports **86.3% primary / 13.7% manufactured** (World Bank, 1980, Table 23, p. 154; World Bank, 2026a; Kim, 1971, Table 1, pp. 16–17). These are descriptive conditions, not a single-cause explanation.

## Audited indicator table

| Indicator | 1960 anchor | 1990 anchor | 2020 anchor | Source, definition, and limitation |
|---|---|---|---|---|
| GDP per capita, constant 2015 US$ | 1,038 | 9,673 | 33,216 | **H**. [K1]. Exact: 1037.72899231615; 9672.57845182894; 33215.9298928108. Korea/Ghana ratios: 11.3017 (1990), 16.859 (2020). |
| Labour productivity, constant 2021 PPP$ per person employed | gap | **1991 proxy:** 35,978 | 93,906 | **H**. [K2]. Exact: 35977.9382182175; 93905.8652726407. Unsupported 1960 backcast removed. |
| Employment: agriculture / industry / services, % total | **1963 context:** 63.1 / 8.7 / 28.2 | **1991 proxy:** 15.5 / 37.2 / 47.4 | 5.4 / 24.6 / 70.0 | 1963 **M**, Economic Planning Board (1982), Table 3-5; middle category is mining/quarrying/manufacturing. Later rows **M**, ILO-modelled WDI [K3]. |
| Manufacturing value added, % GDP | 11.4 | 25.2 | 25.7 | **H**. [K4]. Exact 11.4035087719298; 25.2385195677477; 25.7002433607737. |
| Export composition | Primary 86.3%; manufactured 13.7% | gap | gap for HS2 shares | Kim (1971), Table 1, pp. 16–17; see export audit. |
| Adult literacy, % ages 15+ | 71 | gap; 1975 context: 93 | gap; 2008 context: 98.0 | 1960 **M**, World Bank (1980), Table 23, p. 154 and definition p. 158. 2008 **H**, [K6], exact 97.9700012207031. |
| Urban population, % | 27.7 | 74.0 | 81.2 | **H**. [K7]. Exact 27.6858239622977; 73.9851161168568; 81.1759595622913. |
| Electricity access, % population | gap | 99.88 | 100 | **H**. [K8]. Rural-programme history is separate context below. |
| Informality / firm-size proxy | gap | gap | gap | Rejected 22.5%-of-GDP claim removed; see audit. |
| WGI Rule of Law / Government Effectiveness | gap | gap | **1.16 / 1.54** | **H**. [K10]. 90% CIs: RL 0.90–1.42; GE 1.16–1.92. Governance, not trust. |

Exact WDI employment values are 15.4803368403517, 37.1597644608214, 47.359888440688 in 1991 and 5.37120678440121, 24.6462264496937, 69.9825667659051 in 2020 ([K3]). The former 61/9/30 historical row is corrected; its definitions must not be spliced into WDI without a note.

## Income and manufacturing cross-checks

Maddison Project 2023 gives Korea GDP per capita 1,547.69 (1960), 13,874 (1990), and 38,606.98 (2020), and Ghana 2,197 (1960), in 2011 international dollars (Bolt & van Zanden, 2024, `mpd2023_web.xlsx`, `Full data`, `countrycode` KOR/GHA, `gdppc`). **Limitation:** for a chart with fewer than 12 countries, the dataset requires original country-paper citations; those remain missing.

Manufacturing peaked at **29.00% in 2011** and remained 27–29% through 2018 ([K4]). A paired headline must state that Ghana's early value is a **1965 proxy**, not 1960. The unsupported superlative “one of the few advanced economies not to deindustrialise” is removed.

## Export-composition audit

- **1960:** primary products US$28.3m (**86.3%**) and manufactured goods US$4.5m (**13.7%**) of US$32.8m commodity exports (Kim, 1971, Table 1, pp. 16–17).
- **1990:** gap. The former 1995 29/12/7 proxy is removed; it had no saved query, code mapping, or denominator.
- **2020:** gap for shares. WITS query: KOR; 2020; exports; world; HS 1988/92; total US$512,419m (World Bank, n.d.). The summary confirms leading HS6 identities, including integrated circuits and cars, but not the inherited 33.7/13.3/9.8 HS2 shares. The public endpoint was rate-limited or returned no usable rows.

The defensible narrative is categorical: exports shifted from marine products, tungsten, and raw silk to leading products including integrated circuits and cars. It does not use one unchanged taxonomy. A percentage chart is blocked until a saved full extraction records HS revision, chapter mapping, FOB denominator, and total.

## Literacy audit

World Bank (1980) Table 23, printed p. 154, gives Korea 71% (1960) and 93% (1975). Technical notes to Table 1, p. 158, define adult literacy as people aged 15+ able to read and write, primarily from UNESCO plus World Bank data, and warn that estimates can be up to two years from the label. The 1960 claim is now exactly located. The former 1990 93–96% range is removed, and 2008 cannot proxy 2020. Ghana's 1960 value remains unresolved, so the 2.8-fold ratio and “strongest explanatory variable” claim are removed.

## Urbanisation interpretation

Urbanisation rose 27.7%→81.2%, alongside manufacturing growth and a falling agricultural employment share ([K3], [K4], [K7]). These series establish co-movement, not that Korea urbanised “around industrial jobs” or that manufacturing caused urbanisation (World Bank, 2026a).

## Electricity history

KEPCO (n.d.), history, dates completion of the Rural Electrification Promotion Project to **1979**. The National Archives of Korea (2007), rural-electrification subject entry, reports rural supply rates 12% at end-1964, 74% at end-1975, **99.3% at end-1980**, and 99.9% at end-1988. This resolves the historical locator, but the universe is rural programme supply, not WDI national population access. WDI gives 99.8828430175781% in 1990 and 100% in 2020 ([K8]).

## Informality audit

No numeric value is retained. OECD (2020) contains no 22.5% claim; Medina and Schneider (2018) provide model-based shadow-economy series, with 22.5 associated with about 2014 rather than 2020. Shadow-economy share of GDP is not comparable with Ghana's survey share of workers. Publication needs one construct, comparable years, and matched units.

## Governance audit

Official WGI 2026 gives 2020 Rule of Law **1.1612116** (90% CI 0.9043354–1.4180878) and Government Effectiveness **1.5408948** (1.15916–1.9226296), [K10]. This replaces the old GE 1.13. Old-release percentile claims are removed because the recalculated release publishes absolute 0–100 scores instead. Korea–Ghana Rule of Law difference is 1.068 estimate points, with uncertainty. WGI is perception-based governance, not trust (World Bank, 2026b).

## Exact dataset locators

- **[K1]** WDI API v2 `KOR/NY.GDP.PCAP.KD?date=1960:2020`; paired 1960 also country GHA.
- **[K2]** WDI API v2 `KOR/SL.GDP.PCAP.EM.KD?date=1990:2022`.
- **[K3]** WDI API v2, KOR, 1991/2020: `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS`.
- **[K4]** WDI API v2 `KOR/NV.IND.MANF.ZS?date=1960:2020`.
- **[K6]** WDI API v2 `KOR/SE.ADT.LITR.ZS?date=2008:2008`.
- **[K7]** WDI API v2 `KOR/SP.URB.TOTL.IN.ZS?date=1960:2020`.
- **[K8]** WDI API v2 `KOR/EG.ELC.ACCS.ZS?date=1990:2020`.
- **[K10]** `wgidataset_with_sourcedata-2026.xlsx`, sheets `rl`/`ge`, economy KOR, 2020, estimate and 90% bounds.

All were independently checked 2026-10-04. Freeze dynamic returns before charting.

## Current gaps

1. Comparable 1960 labour productivity; unsupported backcast removed.
2. True 1990 export split and reproducible 2020 HS2 aggregation; blocker is no saved full UN Comtrade extraction with HS revision, mapping, and denominator.
3. Adult literacy near 1990/2020; 1975 and 2008 are outside the proxy window.
4. Comparable 1960 national electricity access; rural programme data use another universe.
5. Comparable informality and direct trust measures.
6. Original Maddison country-paper citations for a two-country publication chart.

## Evidence-backed findings

1. Korea and Ghana had similar 1960 GDP per capita on matched WDI terms, not identical starting conditions ([K1]).
2. Korea rose from US$1,038 in 1960 to US$33,216 in 2020; its matched ratio to Ghana widened to 16.86 ([K1]).
3. Manufacturing rose 11.4%→25.2%→25.7% at the three anchors ([K4]).
4. Agriculture fell from 63.1% in a differently classified **1963** table to 15.5% in the **1991 proxy** and 5.4% in 2020 (Economic Planning Board, 1982; [K3]).
5. Exports shifted from 86.3% primary in 1960 to leading products including integrated circuits/cars in 2020, but endpoints lack one comparable percentage taxonomy (Kim, 1971; World Bank, n.d.).

## What the case supports, challenges, and cannot prove

- **Supports:** descriptive structural transformation—income growth, manufacturing deepening, movement out of agriculture, export upgrading, urbanisation, and near-universal electricity.
- **Challenges:** a starting-income-only explanation; similar income coexisted with different verified literacy, export, and manufacturing conditions.
- **Cannot prove:** that literacy, culture, policy, institutions, or aid singly caused divergence; that industry caused urbanisation; specific 1990/2020 HS2 shares; that rural electrification equals national access; or that WGI measures trust.

## References

Bolt, J., & van Zanden, J. L. (2024). *Maddison Project Database 2023* [Data set]. DataverseNL. https://doi.org/10.34894/INZBF2

Kim, H. C. (1971). Korea's export success, 1960–69. *Finance & Development, 8*(1), 14–21. https://doi.org/10.5089/9781616353025.022.A003

Korea Electric Power Corporation. (n.d.). *History*. Retrieved October 4, 2026, from https://www.kepco.co.kr/eng/about-us/company/history.do

Medina, L., & Schneider, F. (2018). *Shadow economies around the world: What did we learn over the last 20 years?* (IMF Working Paper No. 18/17). International Monetary Fund. https://doi.org/10.5089/9781484338636.001

National Archives of Korea. (2007, December 1). *Rural electrification project* [Subject description, Korean]. https://www.archives.go.kr/next/newsearch/listSubjectDescription.do?id=006606&pageFlag=&sitePage=

Organisation for Economic Co-operation and Development. (2020). *OECD economic surveys: Korea 2020*. OECD Publishing. https://doi.org/10.1787/2dde9480-en

Republic of Korea Economic Planning Board. (1982). Employment by sectors, 1963–81. In *Handbook of Korean economy 1982*. Government of the Republic of Korea. https://archive.unu.edu/unupress/unupbooks/uu04te/uu04te0e.htm

World Bank. (n.d.). *Korea, Republic: Trade summary 2020* [Data set]. World Integrated Trade Solution. Retrieved October 4, 2026, from https://wits.worldbank.org/CountryProfile/en/Country/KOR/Year/2020/Summarytext

World Bank. (1980). *World Development Report 1980*. Oxford University Press. https://documents1.worldbank.org/curated/en/430051469672162445/pdf/108800REPLACEMENT0WDR01980.pdf

World Bank. (2026a). *World Development Indicators* [Data set]. Retrieved October 4, 2026, from https://databank.worldbank.org/source/world-development-indicators

World Bank. (2026b). *Worldwide Governance Indicators: 2026 update* [Data set]. Retrieved October 4, 2026, from https://www.worldbank.org/en/publication/worldwide-governance-indicators
