# Malaysia — middle-development-path evidence file

Data verified **2026-10-04**. This file follows the common ten-indicator structure and the locked anchor years **1960 · 1990 · 2020**. It does not interpolate. When an anchor is unavailable, the actual proxy year is printed; `n/a` means no sufficiently comparable observation was verified.

Legend: **H** = high confidence · **M** = medium confidence · **L** = low confidence · **n/a** = unavailable or not comparable.

## Reading the case

Malaysia moved from a British colonial export economy centred on rubber and tin to an upper-middle-income, urban, highly electrified manufacturing exporter. The shift was neither automatic nor adequately explained by “Asian culture.” It combined a favourable commodity inheritance, public investment, a literate and English-speaking workforce, export-processing zones, active investment promotion, foreign direct investment (FDI), global electronics demand, and a long-running—though contested—post-1969 political settlement (Asadullah et al., 2024, pp. 9–15; World Bank, 2020, pp. 44–47).

The outcome is also incomplete. Electronics production remained strongly multinational-led, manufacturing's GDP share fell after its late-1990s peak, productivity growth slowed, and reported growth coexisted with inequality, skills mismatch, household strain, and ethnic/regional polarization (Asadullah et al., 2024, pp. 1, 13–16; World Bank, 2016, pp. 28–69). Malaysia is therefore a useful middle path between simple “miracle” and “failure” narratives.

## Starting position and historical inheritance

The 1960 anchor is statistically awkward. The Federation of Malaya became independent in 1957, but Malaysia was formed in 1963 when Malaya federated with Sabah, Sarawak, and Singapore; Singapore left in 1965. WDI’s 1960 Malaysia series is a retrospective territorial/national-accounts construction and should not be described as a contemporaneous census of the post-1963 federation.

British rule developed an externally oriented plantation-and-mining economy. In 1960, rubber supplied **55.2%** and tin **14.0%** of merchandise-export value; manufactures supplied only **16.3%** (International Monetary Fund [IMF], 1999, Table IV.3). Colonial labour migration and occupational segmentation linked ethnicity to economic function: plantation and extractive activities relied heavily on migrant labour, commerce was disproportionately Chinese, and many Bumiputera remained in low-productivity agriculture (Asadullah et al., 2024, pp. 13–15). These are institutional and distributive inheritances, not evidence of fixed cultural traits.

After violence in May 1969, the government launched the New Economic Policy (NEP, 1971–1990), with stated aims of eradicating poverty irrespective of ethnicity and restructuring society so ethnicity would no longer determine economic function. It used land development, education, employment and ownership interventions and Bumiputera preferences. The NEP coincided with large poverty reduction and greater educational/professional representation, but it cannot be credited in isolation from rapid manufacturing growth, FDI, commodity income, demographic change, and world demand; later evidence also records persistent inequality and discontent (Asadullah et al., 2024, pp. 9–16).

## 1. GDP per capita

**Definition:** gross domestic product divided by midyear population. **Unit and price basis:** constant 2015 US dollars; annual national-accounts series.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | 1960 | US$1,266.32 | WDI `NY.GDP.PCAP.KD`; FRED table series `NYGDPPCAPKDMYS`, row `1960-01-01` | H | Retrospective series across the pre-1963 territorial break; not a PPP measure. |
| 1990 | 1990 | US$4,184.76 | Same series; row `1990-01-01` | H | Revised WDI vintages differ slightly; freeze this retrieval vintage before charting. |
| 2020 | 2020 | US$10,171.47 | Same series; row `2020-01-01` | H | Pandemic year; lower than 2019 (US$10,902.98), so it understates the pre-COVID endpoint. |

- Reproducible World Bank query: `https://api.worldbank.org/v2/country/MYS/indicator/NY.GDP.PCAP.KD?date=1960:2022&format=json&per_page=100` (World Bank, 2026a). The opened FRED table distributes the WDI observations and provides the exact rows (Federal Reserve Bank of St. Louis, 2026).
- Interpretation: real GDP per person increased roughly eightfold from 1960 to 2020. This establishes transformation, not its cause.

## 2. Labour productivity

**Definition:** GDP divided by total employment. **Unit and price/PPP basis:** constant 2021 international dollars at PPP per employed person.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | WDI `SL.GDP.PCAP.EM.KD` begins in 1991 | n/a | No backward interpolation. |
| 1990 | **1991 proxy** | US$37,394 | WDI/ILO series `SL.GDP.PCAP.EM.KD`; OWID processed table, Malaysia row, 1991 | M | One-year proxy; modelled employment inputs and PPP revisions add uncertainty. |
| 2020 | 2020 | US$61,442 | Same series; Malaysia row, 2020 | M | COVID affected output and employment; modelled estimate, unsuitable for fine rankings. |

- Source and query: World Bank et al. (2026), `https://data.worldbank.org/indicator/SL.GDP.PCAP.EM.KD`; processed download locator `https://ourworldindata.org/grapher/gdp-per-person-employed-constant-ppp.csv`.
- Interpretation: productivity rose about 64% between the 1991 proxy and 2020. Yet the World Bank found that productivity growth slowed after the global financial crisis and that large exporting firms led part of the slowdown (World Bank, 2016, pp. 28–42).

## 3. Employment by sector

**Definition:** share of employed people in agriculture, industry, and services under ILO modelled estimates. Industry includes mining, manufacturing, construction, and utilities. **Unit:** percent of total employment.

| Anchor | Actual year | Agriculture | Industry | Services | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | n/a | n/a | WDI/ILO series begin in 1991 | n/a | Historical national tables use different definitions; not merged. |
| 1990 | **1991 proxy** | 18.9% | 32.8% | 48.3% | WDI `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS`; Malaysia 1991 rows | M | One-year proxy; modelled estimates. Agriculture is the sectoral residual of the published rounded shares and may differ by 0.1 point. |
| 2020 | 2020 | 10.4% | 26.2% | 63.4% | Same series; Malaysia 2020 rows | M | Pandemic changed sectoral employment; rounded shares. |

- Source and reproducible queries: World Bank (2026a), replace `{indicator}` in `https://api.worldbank.org/v2/country/MYS/indicator/{indicator}?date=1990:2022&format=json&per_page=100` with the three indicator codes. The definitions and current series provenance are ILOEST; the opened data tables list 1991 and 2020 industry/services observations (World Bank, 2026a).
- Interpretation: employment shifted decisively toward services, while industry’s share was lower in 2020 than at the 1991 proxy. The endpoint does not erase Malaysia’s earlier industrial employment expansion or show that services are uniformly high-productivity.

## 4. Manufacturing share of GDP

**Definition:** manufacturing value added under ISIC, divided by GDP. **Unit:** percent of GDP at current prices.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | 1960 | 10.26% | WDI `NV.IND.MANF.ZS`; Malaysia row `1960` | H | Early national accounts are retrospective; post-1963 territory warning applies. |
| 1990 | 1990 | 24.22% | Same series; row `1990` | H | Current-price share, not a volume-growth measure. |
| 2020 | 2020 | 22.28% | Same series; row `2020` | H | Pandemic composition effect; below the series peak of 30.94% in 1999. |

- Source and reproducible query: World Bank (2026a), `https://api.worldbank.org/v2/country/MYS/indicator/NV.IND.MANF.ZS?date=1960:2022&format=json&per_page=100`.
- Interpretation: manufacturing more than doubled its GDP share by 1990, then retreated from its late-1990s peak. Malaysia industrialised substantially, but the fall to 22.28% is counterevidence to a simple uninterrupted-upgrading story.

## 5. Export composition

**Definition:** commodity/product categories as shares of merchandise-export value. **Unit:** percent of total merchandise exports, free on board. Classifications differ across the historical table and the 2020 SITC-3 table; they must not be graphed as identical product bins without aggregation notes.

| Anchor | Actual year | Composition / value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---|---|:---:|---|
| 1960 | 1960 | Rubber 55.2%; tin 14.0%; manufactures 16.3%; palm oil 1.7% | IMF (1999), Table IV.3, “Composition of Exports, 1960–97” | H | Authorities’ historical categories, not modern HS/SITC product codes. |
| 1990 | 1990 | Manufactured goods 58.8%; crude petroleum 13.4%; palm oil 5.5%; rubber 3.8%; tin 1.1% | IMF (1999), Table IV.3 | H | Broad manufactured-goods aggregate; cannot show electronics alone. |
| 2020 | 2020 | Thermionic valves/tubes 24.4%; refined petroleum 5.5%; fixed vegetable fats/oils 4.6%; telecommunications equipment 3.5%; measuring instruments 3.0% | DOSM (2021), Table 2, pp. 4–5; total exports RM980,988 million | H | SITC 3-digit groups; components and re-exports included. Top five sum to 41.0%, not all exports. |

- The IMF table reports data supplied by Malaysian authorities. The 2020 values are independently traceable to DOSM’s *Malaysia External Trade Statistics Bulletin, December 2020*, Table 2.
- Interpretation: rubber and tin supplied 69.2% of exports in 1960; manufactures were the majority by 1990; electronics/components dominated the 2020 product ranking. This is strong evidence of structural change. It is not proof of domestic ownership or high local value capture: in 1992 almost 90% of electronic products were manufactured by transnational-corporation affiliates (World Bank, 2020, p. 46).

## 6. Literacy / education

**Definition:** share of people aged 15+ able to read and write a short simple statement about everyday life. **Unit:** percent of population aged 15+.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | UNESCO/WDI `SE.ADT.LITR.ZS`; first comparable observation is 1980 | n/a | No verified 1960 adult-rate observation; no interpolation. |
| 1990 | **1991 proxy** | 82.92% | FRED/WDI series `SEADTLITRZSMYS`, row `1991-01-01` | H | One-year proxy; census/survey methodology may differ from later Labour Force Survey estimates. |
| 2020 | 2020 | 95.5% | OpenDOSM SDG 4.6.1 table, filters `Malaysia / both / 15+ / 2020` | H | National LFS-based proficiency indicator; WDI/UNESCO has no 2020 row, so do not silently substitute 2019 or 2022. |

- Comparable-series query: `https://api.worldbank.org/v2/country/MYS/indicator/SE.ADT.LITR.ZS?date=1960:2022&format=json&per_page=100` (UNESCO Institute for Statistics, 2026; World Bank, 2026a). National 2020 locator: OpenDOSM dataset `sdg_04-6-1` (Department of Statistics Malaysia, 2024).
- Interpretation: Malaysia had a large education base by the start of its high-growth manufacturing phase, and adult literacy continued toward universality. Literacy alone does not measure engineering depth, learning quality, or skill matching; the World Bank documents persistent skill mismatch (World Bank, 2016, pp. 47–50).

## 7. Urbanisation

**Definition:** population living in urban areas under national definitions, harmonised/smoothed by the UN Population Division. **Unit:** percent of total population.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | 1960 | 26.07% | WDI `SP.URB.TOTL.IN.ZS`; Malaysia row `1960` | H | National urban definitions and retrospective territorial estimates. |
| 1990 | 1990 | 49.03% | Same series; row `1990` | H | Smoothed international series; national census benchmark is 50.7% in 1991. |
| 2020 | 2020 | 75.05% | Same series; row `2020` | H | Urban designation can change; DOSM census reports 75.1%, a close cross-check. |

- Source and reproducible query: World Bank (2026a), `https://api.worldbank.org/v2/country/MYS/indicator/SP.URB.TOTL.IN.ZS?date=1960:2022&format=json&per_page=100`. Cross-check: DOSM’s census series reports 28.4% (1970), 50.7% (1991), and 75.1% (2020) (Department of Statistics Malaysia, 2025, Chart 1b).
- Interpretation: Malaysia urbanised alongside industrial and services employment. The correlation does not show that urbanisation caused productivity growth; reclassification, migration, and natural increase all contributed.

## 8. Electricity / infrastructure

**Definitions:** the harmonised WDI measure is the share of the total population with access to electricity. The 1990 context measure is the share of **rural households served with electricity**. **Unit:** percent. These denominators are different and the context measure must not be plotted as total-population access.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | No harmonised national observation verified | n/a | Gap retained. |
| 1990 | n/a | n/a | Current WDI `EG.ELC.ACCS.ZS` public coverage begins in 2000 | n/a | No verified harmonised total-population anchor; no interpolation. |
| 1990 context | 1990 | 80% of rural households served | Mody (1997), Malaysia infrastructure chapter, electricity subsection | H | Different denominator and concept from WDI total-population access; context only. |
| 2020 | 2020 | 100.0% | WDI `EG.ELC.ACCS.ZS`; Malaysia row `2020` | H | Access does not measure price, outages, grid quality, or industrial reliability. |

- Source and query: World Bank (2026a), `https://api.worldbank.org/v2/country/MYS/indicator/EG.ELC.ACCS.ZS?date=1960:2022&format=json&per_page=100`. A World Bank infrastructure volume separately reports that 80% of rural households had electricity in 1990 and 92% by 1995, while noting early-1990s peak-hour supply constraints (Mody, 1997, Malaysia chapter, electricity subsection).
- Interpretation: broad electrification was largely achieved by 1990, consistent with connected production and urban growth, but access endpoints cannot identify whether grid expansion caused industrialisation.

## 9. Firm size / informality

**Definitions:** (1) employment in the informal sector covers non-agricultural workers aged 15–64 working in unregistered/small household enterprises under the 2019 survey framework; (2) SME employment uses Malaysia’s national enterprise-size criteria. **Units:** percent of total employment. These measures are not interchangeable.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---|---|:---:|---|
| 1960 | n/a | n/a | No comparable firm-size/informality measure verified | n/a | Gap retained. |
| 1990 | n/a | n/a | No harmonised anchor observation verified | n/a | Do not back-cast later surveys. |
| 2020 | **2019 proxy** | Informal-sector employment: 8.3% of total employment (1.26 million people) | DOSM (2020), Overview and Chart 1 | H | Excludes agriculture and is “employment in the informal sector,” not all informal employment. |
| 2020 context | 2020 | SMEs: 48.0% of employment | World Bank (2022), p. 24 and figure discussion based on DOSM/SME Corp | M | SME is a formal size class, not informality; COVID reduced SME employment. |

- In the 2019 informal-sector workforce, 71.7% were own-account workers, 17.1% employees, 8.9% unpaid family workers, and 2.2% employers (Department of Statistics Malaysia, 2020, Exhibit 3).
- Interpretation: Malaysia combined large multinational/state-linked firms with a substantial SME economy and a smaller measured non-agricultural informal sector. Large organisations therefore did not require the disappearance of small or relational business. Cross-country comparisons must match exclusions and enterprise definitions.

## 10. Institutional / trust measures

### 10a. Worldwide Governance Indicators

**Definitions:** Rule of Law covers perceptions of contract enforcement, property rights, police, courts, crime, and violence. Government Effectiveness covers perceptions of public services, civil service quality, policy formulation/implementation, and credibility. **Unit:** standard-normal estimate, approximately −2.5 to +2.5; higher is better.

| Anchor | Actual year | Rule of Law | Government Effectiveness | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | n/a | WGI starts in 1996 | n/a | Cannot measure the independence-era baseline. |
| 1990 | n/a | n/a | n/a | WGI starts in 1996 | n/a | No backward substitution. |
| 2020 | 2020 | +0.379 | +0.935 | World Bank `WB_WGI_WIDEF.csv`; Malaysia 2020 row, `RL.EST` and `GE.EST` | H | Composite perception estimates with uncertainty; the 2025 methodology revision changes historical estimates. |

- Dataset locator: World Bank (2025), original wide file linked from `https://www.worldbank.org/en/publication/worldwide-governance-indicators`. The opened 2020 table reproduces Malaysia’s exact World Bank values and links the publisher file.

### 10b. Direct trust evidence

A 2020 commercial trust survey found variation by institution rather than one national “trust level”: banks were trusted by 69% and business leaders by 68%, while government/media-associated personnel ranked lower (Ipsos, 2020, pp. 1–3). This source is credible for a contemporary attitudinal snapshot but is not a historical, generalized-interpersonal-trust series. Sampling/mode details and institution wording make it unsuitable for a direct six-country causal chart.

**Interpretation:** positive governance estimates are consistent with institutions supporting impersonal coordination, but neither WGI nor the Ipsos survey proves that generalized trust caused firm scaling. Contracting institutions, multinational ownership, government-linked companies, and supply-chain governance can substitute for broad interpersonal trust.

## Industrial and political-economic trajectory

1. **Colonial commodity platform.** Rubber and tin supplied 69.2% of 1960 exports. Infrastructure and institutions connected plantations and mines to external markets, while occupational segmentation created distributive tensions (IMF, 1999, Table IV.3; Asadullah et al., 2024, pp. 13–15).
2. **Post-1969 redistribution and state building.** The NEP paired poverty reduction and restructuring objectives with education, land, employment, ownership, and Bumiputera preference policies. Poverty fell sharply across ethnic groups, but this temporal association does not isolate NEP effects from growth, FDI, commodity revenues, and structural transformation (Asadullah et al., 2024, pp. 9–16).
3. **Export-oriented industrialisation.** Import-substitution electronics began in the mid-1960s; export orientation accelerated after 1971. Export-processing zones, MIDA investment promotion, fiscal incentives, training/R&D subsidies, technology-transfer agreements, infrastructure, and an English-speaking literate workforce drew semiconductor assembly firms to Penang. By 1990, manufactures were 58.8% of exports; by 1992, multinational affiliates made almost 90% of electronic products (World Bank, 2020, pp. 44–47; IMF, 1999, Table IV.3).
4. **Middle-income path and upgrading constraint.** GDP per capita and labour productivity rose markedly, urbanisation and electrification spread, and electronics remained the leading export group. Yet the manufacturing share peaked in 1999, productivity growth later slowed, skills mismatch persisted, and domestic value capture/upgrading remained a policy challenge (World Bank, 2016, pp. 28–69).
5. **Social and distributive counterevidence.** Strong aggregate growth and poverty reduction coexisted with household cost pressures, indebtedness, inequality, and ethnic/regional polarization. This prevents the case from being presented as a costless or culturally predetermined success (Asadullah et al., 2024, pp. 1–3, 13–16).

## Critical test: Connected Development Theory

### Evidence consistent with the mechanism

- Export-processing zones connected ports, reliable power, labour, investment agencies, and multinational production networks. Bayan Lepas opened in 1972 and became an electronics cluster (World Bank, 2020, pp. 46–47).
- The economy moved from commodity exports to manufactured/electronics exports while urbanisation rose from 26.07% to 75.05% and electricity became universal.
- World Bank firm evidence characterises Malaysian logistics services as strong relative to comparable countries (World Bank, 2016, pp. 52–54).

### Evidence that challenges or narrows it

- Colonial commodity corridors also generated export revenue; connection to ports alone did not produce broad upgrading.
- Electronics integration was heavily foreign-owned and assembly-centred. Global connections can create enclaves or capture firms in lower-value functions if domestic supplier, design, research, and ownership capabilities do not deepen.
- Infrastructure may have followed industrial demand, and zones bundled tax, trade, labour, and investment policies. Endpoint associations cannot identify the independent infrastructure effect.

### Verdict

**Qualified support.** Malaysia supports a revised theory in which connections matter when they link infrastructure to skills, investment institutions, firms, suppliers, and world markets. It also shows that international connection without domestic capability-building can limit local upgrading. “Connected” must therefore mean productive network depth, not simply a road or port.

## Critical test: Radius of Trust Theory

### Evidence consistent with the mechanism

- Positive 2020 rule-of-law and government-effectiveness estimates are compatible with formal institutions extending coordination beyond family ties.
- Malaysia scaled export zones, multinational supply chains, banks, government-linked enterprises, and large factories—organisational forms requiring contracts, standards, and delegation.

### Evidence that challenges or narrows it

- Available trust snapshots vary sharply by institution; no credible 1960/1990 generalized-trust series was verified.
- Multinationals, state-linked ownership, ethnic business networks, and internal corporate governance can substitute for generalized interpersonal trust.
- SMEs still accounted for 48% of employment in 2020, while measured informal-sector employment persisted. Large formal firms and small enterprises coexisted.

### Verdict

**Mechanism plausible, causal test unavailable.** Malaysia shows institutional and organisational substitutes that can widen economic cooperation, but it cannot demonstrate that interpersonal trust drove industrialisation. The theory should distinguish generalized trust from confidence in courts, banks, corporations, and government.

## Critical test: Continuity + Adaptation Theory

### Evidence consistent with the mechanism

- Export-oriented industrialisation persisted across the NEP period and beyond, while instruments adapted from commodity diversification and import substitution to EPZs, FDI attraction, heavy industry, and later productivity/innovation agendas.
- The electronics cluster accumulated infrastructure, supplier experience, skills, and institutional knowledge over decades rather than one policy cycle.
- The durable direction coexisted with correction after shocks, including the mid-1980s downturn, Asian financial crisis, and later productivity concerns.

### Evidence that challenges or narrows it

- Continuity also protected preferences and incumbents; longevity is not evidence of effectiveness.
- Manufacturing’s share and productivity momentum weakened, indicating that a stable direction can become insufficient or rigid.
- Favourable global semiconductor demand, Japanese/US investment, English-language skills, geography, and commodity revenues are alternative explanations for continuity and success.

### Verdict

**Moderate support for continuity with performance discipline.** Malaysia fits the learning-over-time mechanism, but the case strengthens the theory only if “adaptation” includes competition, upgrading, distributional review, and willingness to retire ineffective privileges. Continuity alone is not sufficient.

## Data-gap list

- No comparable 1960 labour-productivity or employment-by-sector observation.
- The 1960 national-accounts baseline crosses the 1963 formation of Malaysia; all charts need a territorial note.
- No verified 1960 adult-literacy anchor; the UNESCO/WDI series starts in 1980.
- The 1990 employment and literacy anchors use 1991 proxies; actual years must remain printed.
- No verified harmonised total-population electricity observation exists at the 1990 anchor; the separate rural-household measure is 80% and is not the same indicator.
- Export categories change between the authorities’ historical broad table and the 2020 SITC table.
- Merchandise exports do not measure domestic value added, ownership, imported intermediate content, or services exports.
- No harmonised 1960/1990 firm-size or informality series.
- WGI starts in 1996 and direct trust evidence is contemporary; neither can explain the start of industrialisation.
- No matched historical series on domestic supplier linkages, electronics R&D/design, or local value capture was verified for the three anchors.

## Evidence-backed findings

1. **A real structural break in exports:** rubber and tin supplied 69.2% of export value in 1960; manufactured goods supplied 58.8% by 1990; electronics components led the 2020 product table (IMF, 1999, Table IV.3; Department of Statistics Malaysia, 2021, Table 2).
2. **Income and productivity rose substantially:** real GDP per capita increased from US$1,266 in 1960 to US$10,171 in 2020, and PPP output per worker rose from about US$37,394 in 1991 to US$61,442 in 2020 (World Bank, 2026a; World Bank et al., 2026).
3. **Industrialisation was large but not linear:** manufacturing rose from 10.26% of GDP in 1960 to 24.22% in 1990, peaked at 30.94% in 1999, and was 22.28% in 2020 (World Bank, 2026a).
4. **Capabilities and connection expanded together:** literacy reached 82.92% by 1991, urbanisation 75.05% by 2020, and electricity access 100% by 2020 (Department of Statistics Malaysia, 2024; World Bank, 2026a).
5. **The middle path remains incomplete:** multinational-led electronics, slowing productivity, skills mismatch, unequal outcomes, and social strain qualify the headline success (Asadullah et al., 2024; World Bank, 2016).

## What Malaysia supports

- Export-oriented industrialisation can transform a commodity-dependent colonial economy.
- Long-lived, adaptive policy direction can accumulate industrial capability.
- Connected clusters that combine infrastructure, skills, investment promotion, suppliers, and external markets can outperform isolated export corridors.
- Formal institutions and corporate/state organisational substitutes can coordinate activity beyond close personal networks.

## What Malaysia challenges

- Culture as a sufficient cause: policy, colonial inheritance, FDI, world demand, skills, geography, and institutions provide concrete mechanisms.
- A binary Asia-success/Africa-failure story: Malaysia’s path differs from Korea’s and retains upgrading, distributional, and governance constraints.
- The idea that manufactured exports automatically equal domestic technological ownership or high local value capture.
- The idea that policy continuity is always beneficial; persistent instruments can also entrench privilege or delay correction.
- The idea that growth, poverty reduction, and formal institutional capacity eliminate inequality, informality, or discontent.

## What Malaysia cannot prove

- That the NEP, export zones, education, infrastructure, trust, or any one cultural attribute independently caused growth.
- That WGI scores or contemporary trust surveys describe institutional conditions in 1960 or 1990.
- That electronics export value equals Malaysian value added, domestic ownership, or frontier innovation.
- That the Malaysian model transfers unchanged to countries without its maritime location, commodity revenues, language/skills base, market access, or FDI timing.
- That correlations between urbanisation, electricity, literacy, manufacturing, and income establish causal order.

## References

Asadullah, M. N., Biradavolu, M., Rao, V., & Simler, K. (2024). *Is there an underside to economic growth? A mixed-methods analysis of Malaysia* (Policy Research Working Paper No. 10968). World Bank. https://documents1.worldbank.org/curated/en/099649211052419488/pdf/IDU1e5ec068a1bdcf14e16196dd13b21f74755c6.pdf

Department of Statistics Malaysia. (2020, July 23). *Informal sector work force survey report, Malaysia, 2019*. https://www.dosm.gov.my/portal-main/release-content/informal-sector-work-force-survey-report-malaysia-2019

Department of Statistics Malaysia. (2021, January 29). *Malaysia external trade statistics bulletin, December 2020*. https://www.dosm.gov.my/v1/uploads/files/1_Articles_By_Themes/External_Sector/BPPLN/12_2020/Malaysia%20External%20Trade%20Statistics%20Bulletin%2C%20December%202020.pdf

Department of Statistics Malaysia. (2024). *SDG 04-6-1: Literacy and numeracy skills* [Data set]. OpenDOSM. https://open.dosm.gov.my/data-catalogue/sdg_04-6-1

Department of Statistics Malaysia. (2025). *Evolution of urbanisation*. https://www.dosm.gov.my/uploads/release-content/file_20250603123420.pdf

Federal Reserve Bank of St. Louis. (2026). *Constant GDP per capita for Malaysia* [Data set; World Development Indicators series NYGDPPCAPKDMYS]. FRED. Retrieved October 4, 2026, from https://fred.stlouisfed.org/data/NYGDPPCAPKDMYS

International Monetary Fund. (1999). Malaysia: Export diversification and the export competitiveness of the manufacturing sector. In *Malaysia: Selected issues* (IMF Staff Country Report No. 99/86, Table IV.3). https://www.elibrary.imf.org/view/journals/002/1999/086/article-A004-en.xml

Ipsos. (2020, January 15). *Do Malaysians lack trust in government and institutions?* https://www.ipsos.com/sites/default/files/ct/news/documents/2020-01/trust_in_malaysia_-_press_release_ipsos_malaysia_-_final_-_150120.pdf

Mody, A. (Ed.). (1997). *Infrastructure strategies in East Asia: The untold story*. World Bank. https://documents1.worldbank.org/curated/en/510051468774847688/pdf/multi-page.pdf

UNESCO Institute for Statistics. (2026). *UIS Data Browser* [Data set]. https://databrowser.uis.unesco.org/

World Bank. (2016). *Malaysia economic monitor: The quest for productivity growth*. https://documents1.worldbank.org/curated/en/773621481895271934/pdf/111103-WP-PUBLIC-MEM-15-December-2016-Final.pdf

World Bank. (2020). *Structural transformation and labor market performance in Ghana* (Box 2: Malaysia’s industrialization through electrical and electronics manufacturing, pp. 44–47). https://documents1.worldbank.org/curated/en/755321606255985947/pdf/Structural-Transformation-and-Labor-Market-Performance-in-Ghana.pdf

World Bank. (2022). *Malaysian SME program efficiency review*. https://documents1.worldbank.org/curated/en/099255003152238688/pdf/P17014606709a70f50856d0799328fb7040.pdf

World Bank. (2025). *Worldwide Governance Indicators: 2025 revision* [Data set]. https://www.worldbank.org/en/publication/worldwide-governance-indicators

World Bank. (2026a). *World Development Indicators* [Data set]. Retrieved October 4, 2026, from https://api.worldbank.org/v2/country/MYS

World Bank, International Labour Organization, United Nations Population Division, Eurostat, & Organisation for Economic Co-operation and Development. (2026). *GDP per employed person* [Data set; World Development Indicators, indicator SL.GDP.PCAP.EM.KD]. World Bank; processed by Our World in Data. https://ourworldindata.org/grapher/gdp-per-person-employed-constant-ppp

## Matching in-text citation forms

| Reference | Parenthetical | Narrative |
|---|---|---|
| Asadullah et al. (2024) | (Asadullah et al., 2024) | Asadullah et al. (2024) |
| Department of Statistics Malaysia (2020, 2021, 2024, 2025) | (Department of Statistics Malaysia, year) | Department of Statistics Malaysia (year) |
| Federal Reserve Bank of St. Louis (2026) | (Federal Reserve Bank of St. Louis, 2026) | Federal Reserve Bank of St. Louis (2026) |
| International Monetary Fund (1999) | (IMF, 1999) | IMF (1999) |
| Ipsos (2020) | (Ipsos, 2020) | Ipsos (2020) |
| Mody (1997) | (Mody, 1997) | Mody (1997) |
| UNESCO Institute for Statistics (2026) | (UNESCO Institute for Statistics, 2026) | UNESCO Institute for Statistics (2026) |
| World Bank (2016, 2020, 2022, 2025, 2026a) | (World Bank, year) | World Bank (year) |
| World Bank et al. (2026) | (World Bank et al., 2026) | World Bank et al. (2026) |

## Verification record

- 2026-10-04 — opened all listed World Bank, DOSM, IMF, UNESCO/WDI, FRED, and Ipsos source pages/documents; did not use search-result snippets as the sole evidence for any retained claim.
- 2026-10-04 — checked each of the ten required indicators for definition, unit/price basis, actual year, value, source locator, confidence, and limitation.
- 2026-10-04 — cross-checked GDP, manufacturing, literacy, urbanisation, electricity, export, informality, SME, and WGI values against a second authoritative distribution or analytical source where available.
- 2026-10-04 — retained missing 1960/1990 observations visibly; printed all 1991 and 2019 proxies as their actual years; did not interpolate.
- 2026-10-04 — flagged territorial, WDI-vintage, modelled-estimate, classification, pandemic-year, and causal-inference limitations.
