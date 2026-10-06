# Philippines — slower Asian development path evidence file

Data verified **2026-10-04**. This file follows the common ten-indicator structure and the locked anchor years **1960 · 1990 · 2020**. It does not interpolate. A substituted observation is printed with its actual year; `n/a` means that no sufficiently comparable observation was verified.

Legend: **H** = high confidence · **M** = medium confidence · **L** = low confidence · **n/a** = unavailable or not comparable.

## Reading the case

The Philippines is the project's slower Asian path, not evidence that a national culture determines development. It began the 1960s with relatively high literacy, an established manufacturing sector, access to the US market, and English-language education. Yet real GDP per person rose much more slowly than in the fast East Asian cases. The record points to interacting causes: unequal land and political power inherited from Spanish and US rule; protected, import-dependent industrialisation; policy instability and the 1980s debt crisis; weak and uneven infrastructure; external shocks; and later growth centred on electronics assembly, services, business-process outsourcing (BPO), and overseas-worker remittances (Asian Development Bank [ADB], 2007, pp. v, 5–15, 24–27; Dolan, 1993, pp. 3–6, 28–31, 108–109, 146–147; World Bank, 1987, Vol. II, pp. 1–10).

## Starting position and historical inheritance

Spanish rule joined church and state, governed indirectly through local leaders, strengthened a *principalia*, replaced communal land use with private titled ownership, and helped perpetuate concentrated local control (Dolan, 1993, pp. 5–6). The same country study identifies concentrated landholding, rural poverty, and agrarian unrest as a Spanish-period legacy that later reform efforts did not overcome (pp. 146–147). This is a political-economic inheritance, not a claim that all regions or Filipinos shared one fixed culture.

US rule added representative institutions, a civil service, mass public education, English, and improved communication. More than 1,000 American teachers arrived in 1901–1902; elementary enrolment rose from about 150,000 in 1900–1901 to nearly one million two decades later (Dolan, 1993, pp. 28–31, 76–77, 108–109). But US administrators also incorporated established landed elites into elections and patronage networks, while preferential US market access made sugar and coconut processing unusually dependent on one external market (Dolan, 1993, pp. 29–31; World Bank, 1987, Vol. II, pp. 3–4).

After independence in 1946, exchange and import controls fostered rapid import-substituting manufacturing in the 1950s, but much production depended on imported capital/intermediate goods, protection, tax privileges, and US or state finance. Manufacturing value added rose from roughly 12.5% of GDP in 1950 to 17.5% in 1960, then the easy phase slowed (World Bank, 1987, Vol. II, pp. 5–10). Martial law, debt-financed investment, the 1983 debt moratorium, political shocks, and the 1984–1985 recession contributed to a lost decade; reform then crossed several administrations rather than following one continuously corrected industrial strategy (ADB, 2007, pp. 5–15; Hill, 2013, pp. 108–130, section III.C).

## 1. GDP per capita

**Definition:** GDP divided by midyear population. **Unit/basis:** constant 2015 US dollars; a real market-exchange-rate series, not PPP and not current dollars.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | 1960 | US$1,123.78 | WDI `NY.GDP.PCAP.KD`; Philippines API row `date=1960` | H | Historical national accounts are reconstructed and revised; not a household-income measure. |
| 1990 | 1990 | US$1,704.08 | Same query; row `date=1990` | H | Endpoint follows the 1980s debt crisis and is not a normal growth year. |
| 2020 | 2020 | US$3,198.67 | Same query; row `date=2020` | H | COVID-19 year; 2019 was US$3,575.88, so the anchor understates the pre-pandemic level. |

- Reproducible query: `https://api.worldbank.org/v2/country/PHL/indicator/NY.GDP.PCAP.KD?date=1960:2022&format=json&per_page=100` (World Bank, 2026).
- Interpretation: real output per person was only about 2.85 times its 1960 value by 2020. The endpoints establish slower income growth; they do not identify one cause.

## 2. Labour productivity

**Definition:** GDP per person employed. **Unit/basis:** constant 2021 international dollars at PPP; this is output per employed person, not hourly productivity or wages.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | WDI `SL.GDP.PCAP.EM.KD`; series begins in 1991 | n/a | No interpolation or backward projection. |
| 1990 | **1991 proxy** | Int$12,711.81 | Same query; row `date=1991` | H | One year late and includes modelled employment; label 1991 in any visual. |
| 2020 | 2020 | Int$22,857.17 | Same query; row `date=2020` | H | Pandemic affected both output and employment; not a normal productivity observation. |

- Reproducible query: `https://api.worldbank.org/v2/country/PHL/indicator/SL.GDP.PCAP.EM.KD?date=1960:2022&format=json&per_page=100` (World Bank, 2026).
- Interpretation: productivity rose about 80% from the 1991 proxy to 2020, but this does not reveal within-sector productivity or hours worked.

## 3. Employment by sector

**Definition:** employed people assigned to agriculture, industry, or services under ILO modelled estimates. **Unit:** percent of total employment; the three shares sum to approximately 100%.

| Anchor | Actual year | Agriculture | Industry | Services | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | n/a | n/a | Harmonised WDI/ILO series begins in 1991 | n/a | Historical sources use different coverage; gap retained. |
| 1990 | **1991 proxy** | 44.08% | 16.61% | 39.31% | WDI `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS`; rows `date=1991` | M | Modelled and one year late. |
| 2020 | 2020 | 24.51% | 18.71% | 56.78% | Same three queries; rows `date=2020` | M | Pandemic changed sector employment; PSA's annual LFS reports similar broad shares but uses survey estimates. |

- Reproducible queries replace the indicator code in `https://api.worldbank.org/v2/country/PHL/indicator/INDICATOR?date=1960:2022&format=json&per_page=100` (International Labour Organization estimates distributed by World Bank, 2026).
- Historical context only: in 1955, agriculture was 59.0% and manufacturing 12.5% of employment in the World Bank's historical table; these are **not 1960 anchors** (World Bank, 1987, Vol. II, Table 1.1, p. 2).
- Interpretation: labour moved mainly from agriculture into services, while industry's employment share rose only modestly. This differs from a classic agriculture-to-manufacturing-to-services sequence.

## 4. Manufacturing share of GDP

**Definition:** manufacturing value added as a share of GDP at current prices. **Unit:** percent. Historical estimates come from older NEDA/World Bank national-account vintages; the current WDI series starts in 2000, so the three rows are not yet approved for one seamless chart.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | 1960 | about 18.9% | World Bank (1980), Part II, para. 1.11, p. 4; source NEDA National Income Accounts | M | Alternative historical vintages give roughly 16%–20%; rebasing/method changes prevent false precision. |
| 1990 | 1990 | 24.8% | Yusuf and Nabeshima (2010), Figure 4.16, p. 141 | M | Secondary compilation from older national accounts; not the current WDI vintage. |
| 2020 | 2020 | 17.66% | WDI `NV.IND.MANF.ZS`; Philippines API row `date=2020` | H | Current-price share; pandemic composition effect. |

- Reproducible current query: `https://api.worldbank.org/v2/country/PHL/indicator/NV.IND.MANF.ZS?date=1960:2022&format=json&per_page=100` (World Bank, 2026).
- Interpretation: manufacturing was established early and remained sizeable, but its share did not deepen and hold as in the fastest industrialisers. The apparent 1990-to-2020 decline should be described, not plotted as a harmonised series, until national-account vintages are reconciled.

## 5. Export composition

**Definition:** merchandise exports valued free on board (FOB). **Unit:** percent of merchandise-export value, calculated within each source's commodity grouping. Services and remittances are excluded. Classifications change across rows, so this is a matched narrative, not a single-classification time series.

| Anchor | Actual year | Composition/value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---|---|:---:|---|
| 1960 | 1960 | Coconut products US$177m / US$532m = **33.3%**; sugar products US$135m = **25.4%**; forest products US$95m = **17.9%** | Lim (1990), Table 1, pp. 74–75; source National Statistics Office | H | Historical national commodity groups; the three groups total 76.5%. |
| 1990 | 1990 | Electronics/electrical/telecom **24.0%**; garments/textile yarns/fabrics **22.8%**; agriculture **17.0%** | Nasution (2000), Table 9, p. 20 | H | Mixed levels of aggregation but mutually exclusive in the table; electronics and garments are subgroups of total manufactures. |
| 2020 | 2020 | Electronic products **58.2%**; other manufactured goods **5.5%**; machinery and transport equipment **3.4%** | Philippine Statistics Authority (PSA, 2021), Figure 3 and Table 2 | H | 2015 PSCC national groupings; not directly identical to 1960/1990 categories. |

- Interpretation: exports changed from coconut, sugar, and forest products to garments/electronics and then electronics-dominated manufactures. This is real structural change, but electronics often relies on imported inputs and assembly stages; high gross exports do not equal high domestic value added (Nasution, 2000, pp. 19–20).

## 6. Literacy / education

**Definition:** adult literacy is the percentage of people aged 15+ who can understand, read, and write a short simple statement about everyday life. **Unit:** percent of adults aged 15+.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | No opened 15+ observation on the later UNESCO definition | n/a | Do not substitute enrolment or total-population literacy. |
| 1990 | 1990 | 93.57% | WDI/UIS `SE.ADT.LITR.ZS`; Philippines API row `date=1990` | H | Survey/census reporting; functional literacy and school quality are different constructs. |
| 2020 | 2020 | 98.47% | Same query; row `date=2020` | H | A high basic-literacy rate does not measure learning quality or advanced skills. |

- Reproducible query: `https://api.worldbank.org/v2/country/PHL/indicator/SE.ADT.LITR.ZS?date=1960:2022&format=json&per_page=100` (UNESCO Institute for Statistics data distributed by World Bank, 2026).
- Historical context: Spanish authorities initiated free compulsory primary education in 1863, and US rule expanded a mass English-language public-school system; independent governments extended schools to remote areas in the 1950s–1960s (Dolan, 1993, pp. 108–109). This helps explain the strong later literacy stock, but schooling quality and unequal access remained constraints.

## 7. Urbanisation

**Definition:** people living in areas classified as urban under the national definition, estimated by the UN Population Division. **Unit:** percent of total population.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | 1960 | 30.01% | WDI `SP.URB.TOTL.IN.ZS`; row `date=1960` | H | National definitions and UN smoothing; not a direct measure of density or infrastructure. |
| 1990 | 1990 | 36.00% | Same query; row `date=1990` | H | Administrative reclassification can affect the level. |
| 2020 | 2020 | 54.11% | Same query; row `date=2020` | H | Does not measure congestion, housing quality, or productive agglomeration. |

- Reproducible query: `https://api.worldbank.org/v2/country/PHL/indicator/SP.URB.TOTL.IN.ZS?date=1960:2022&format=json&per_page=100` (World Bank, 2026).
- Interpretation: urbanisation was steady but did not by itself generate a manufacturing-employment surge; endpoint association cannot establish causality.

## 8. Electricity / infrastructure

**Definition:** share of the population with access to electricity. **Unit:** percent of population.

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | WDI `EG.ELC.ACCS.ZS`; no observation | n/a | Gap retained. |
| 1990 | **1993 proxy** | 65.4% | Same query; earliest non-null Philippines row `date=1993` | M | Three years late; print 1993 in any figure. Access does not measure reliability or price. |
| 2020 | 2020 | 96.4% | Same query; row `date=2020` | H | National access masks island/regional disparities and outages. |

- Reproducible query: `https://api.worldbank.org/v2/country/PHL/indicator/EG.ELC.ACCS.ZS?date=1960:2022&format=json&per_page=100` (World Bank, 2026).
- Context: the severe early-1990s power crisis was resolved by 1994, but later infrastructure investment and quality lagged regional comparators and raised business costs (ADB, 2007, pp. 5–6, 24–27). This is consistent with Connected Development, but access alone cannot measure inter-island logistics or industrial-network quality.

## 9. Firm size / informality

**Definitions:** establishment size is based on workers at a fixed-location economic unit. Historical “unorganised” manufacturing meant establishments with fewer than five workers. The 2020 formal-sector ASPBI categories are micro (1–9), small (10–99), medium (100–199), and large (200+). **Units:** shares of manufacturing employment/value added (1960) or formal establishments/employment (2020).

| Anchor | Actual year | Value | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---|---|:---:|---|
| 1960 | 1960 | 1–4 worker manufacturing units: **76.0% of employment** but **17.7% of value added** | World Bank (1980), Part II, Table I-1, p. 4; residual estimates from NCSO/NEDA | M | Manufacturing only; 1–4 worker rows are residual estimates and “unorganised” is not today's informal-employment definition. |
| 1990 | n/a | n/a | No harmonised firm-size/informality anchor verified | n/a | Gap retained; do not mix self-employment, informal employment, and establishment size. |
| 2020 | 2020 | Formal sector: micro firms **64.3% of establishments** and **10.2% of employment**; large firms **1.7%** and **49.6%**, respectively | PSA (2023), Tables A, 1, and 2 | H | ASPBI formal establishments only; it excludes much informal/home-based activity and is pandemic-affected. |

- Interpretation: both endpoints show a dual structure—many tiny units but a disproportionate employment/value-added role for large establishments. The definitions are not identical, so this is not a trend statistic.

## 10. Institutional / trust measures

### 10a. Worldwide Governance Indicators

**Definitions:** Rule of Law is a perception-based composite covering contract enforcement, property rights, police, courts, crime, and violence. Government Effectiveness covers public-service quality, civil service, policy implementation, and credibility. **Unit:** standard-normal estimate, approximately −2.5 to +2.5; higher is better.

| Anchor | Actual year | Rule of Law | Government Effectiveness | Exact source locator | Confidence | Limitation / comparability warning |
|---|---:|---:|---:|---|:---:|---|
| 1960 | n/a | n/a | n/a | WGI begins in 1996 | n/a | Cannot score colonial inheritance or early independence. |
| 1990 | n/a | n/a | n/a | WGI begins in 1996 | n/a | No backward substitution. |
| 2020 | 2020 | −0.633 | +0.182 | World Bank API `GOV_WGI_RL_EST` and `GOV_WGI_GE_EST`; rows `date=2020` | H | Composite perceptions have uncertainty; small differences and causal claims are unsafe without intervals/design. |

- Reproducible queries: `https://api.worldbank.org/v2/country/PHL/indicator/GOV_WGI_RL_EST?date=1990:2022&format=json&per_page=100` and the same URL with `GOV_WGI_GE_EST` (World Bank, 2025).

### 10b. Generalised trust

In the 2019 Philippines World Values Survey, 64 of 1,200 respondents (**5.3% unweighted cases**) chose “most people can be trusted,” 1,133 (94.4%) chose “need to be very careful,” and three did not answer (World Values Survey Association, 2024, variable Q57). The catalogue explicitly warns that displayed case counts are not population estimates. This is a direct but question-sensitive measure of generalised trust, not trust in courts, banks, managers, or contracts.

## Services, overseas work, and remittances

The later growth model is not “no upgrading.” Electronics replaced primary commodities in merchandise exports; services reached 56.78% of employment in 2020; English-language education and telecommunications supported a globally competitive BPO sector. The central bank's 2010 survey reported IT-BPO revenue of US$10.1 billion and described voice-based support as the main driver (Bangko Sentral ng Pilipinas, 2011, pp. 1–3).

Personal remittances received were **2.90% of GDP in 1990** and **9.64% in 2020** under WDI `BX.TRF.PWKR.DT.GD.ZS` (World Bank, 2026). Remittances support household income, foreign exchange, and demand, but heavy overseas deployment can also reflect limited domestic job creation. They are transfers, not domestic production, and must not be added to GDP as if they were sector value added.

## Why the path was slower: evidence and alternatives

The evidence rejects a culture-only explanation. The Philippines possessed educational and manufacturing advantages but combined them with concentrated land/political power, an industrial base dependent on protection and imported inputs, infrastructure bottlenecks across an archipelago, macroeconomic and political crises, and inconsistent or slow reform. The 1980s debt crisis reduced investment and income; disasters, power shortages, and the Asian financial crisis added shocks (ADB, 2007, pp. 5–15). Electronics and BPO later generated exports and jobs, but assembly and voice services did not automatically create the same domestic supplier depth, productivity spillovers, or manufacturing employment as more integrated industrial upgrading.

Counterevidence matters. Literacy became nearly universal; electricity access reached 96.4%; exports shifted decisively into manufactures; BPO became globally competitive; and GDP per person grew strongly in parts of the post-2000 period. Therefore “failure” is too absolute. The more defensible claim is **partial transformation with limited industrial deepening and uneven inclusion**.

## Critical test: Connected Development Theory

**Evidence consistent with the mechanism**

- US-era schools, transport, communications, and English helped connect a linguistically diverse archipelago and later enabled service exports (Dolan, 1993, pp. 76–77, 108–109).
- Electricity access and urbanisation rose substantially, while electronics and BPO connected firms and workers to global markets (World Bank, 2026; Bangko Sentral ng Pilipinas, 2011).
- ADB diagnosed inadequate infrastructure and high business costs as constraints, consistent with the theory's prediction that weak connections reduce investment and productive clustering (ADB, 2007, pp. 24–27).

**Counterevidence and alternatives**

- Strong global connection did not guarantee deep local linkages: electronics had high import content, and gross export success coexisted with modest industrial employment (Nasution, 2000, pp. 19–20).
- Land concentration, macro crises, policy incentives, skills quality, foreign demand, and firm ownership offer alternative explanations.
- Because infrastructure may follow growth, endpoints do not identify the direction of causality.

**Verdict:** **qualified support.** The case supports distinguishing global/export connection from dense domestic supplier and labour-market connection. It challenges any version that treats physical connectivity as sufficient.

## Critical test: Radius of Trust Theory

**Evidence consistent with the mechanism**

- The 2019 WVS case count for generalised trust was very low, while the formal economy remained highly dualistic and rule-of-law perceptions were negative (World Values Survey Association, 2024; World Bank, 2025).
- Historical elite/patronage networks and unequal landholding are compatible with cooperation organised through close or political networks rather than impersonal rules (Dolan, 1993, pp. 29–31, 146–147).

**Counterevidence and alternatives**

- Large formal firms, electronics supply chains, banks, and BPO operations scaled despite low survey trust. Contracts, foreign ownership, hierarchy, law, reputation, and repeated business relationships can substitute for generalised interpersonal trust.
- The WVS question is from 2019, long after early industrialisation; it cannot be projected backward or treated as a timeless culture score.
- Inequality, insecurity, and institutional performance may reduce trust, reversing the proposed causal direction.

**Verdict:** **challenge to the strong version; limited support for the institutional-substitution version.** The case does not show that low trust caused slower development.

## Critical test: Continuity + Adaptation Theory

**Evidence consistent with the mechanism**

- Import substitution, martial-law industrial projects, crisis controls, multi-administration liberalisation, and later service/export promotion show interrupted or slow-changing policy regimes. Hill (2013, section III.C) describes Philippine trade reform as durable but unusually slow and spread across crisis, democratic transition, and several administrations.
- The 1980s crisis and prolonged recovery are consistent with the prediction that destabilising reversals interrupt investment and learning (ADB, 2007, pp. 5–6).

**Counterevidence and alternatives**

- Electronics and BPO expanded across political transitions, showing that sectors can learn through foreign networks, private investment, and durable market demand even when national policy is unstable.
- Long-lasting protection did not guarantee productivity; the case supports adaptation and performance discipline, not continuity alone (World Bank, 1987, Vol. II, pp. 1–10).
- External shocks, debt, geography, inequality, and firm capabilities remain plausible independent explanations.

**Verdict:** **moderate support for a revised theory.** Stable direction may help, but only with feedback, macroeconomic discipline, capability building, and domestic linkages. The case cannot isolate policy duration as causal.

## Data-gap list

- No comparable 1960 labour-productivity observation.
- No harmonised 1960 employment-by-sector observation; the 1955 historical context must not be plotted at 1960.
- Manufacturing shares for 1960, 1990, and 2020 come from different national-account vintages; reconcile before one chart.
- Export categories change across 1960, 1990, and 2020; retain labels and do not imply HS/SITC continuity.
- No verified 1960 adult-literacy observation on the UNESCO 15+ definition.
- No 1960 electricity-access value; 1993 is the nearest verified proxy for 1990.
- No harmonised 1990 firm-size/informality anchor; historical and 2020 establishment concepts differ.
- WGI has no 1960/1990 data; WVS 2019 case percentages are not population-weighted estimates and cannot establish historical trust.
- A complete service-transformation graphic needs matched BPO/services-export series at all anchors; merchandise exports exclude services.
- 2020 is a pandemic year for GDP, productivity, employment, establishment, and trade observations.

## Evidence-backed findings

1. **Income growth was real but slow:** real GDP per person rose from US$1,123.78 in 1960 to US$3,198.67 in pandemic-hit 2020 (World Bank, 2026).
2. **Transformation bypassed a large manufacturing-employment phase:** from the 1991 proxy to 2020, agriculture employment fell from 44.08% to 24.51%, services rose from 39.31% to 56.78%, and industry moved only from 16.61% to 18.71% (World Bank, 2026).
3. **Exports transformed more than domestic manufacturing depth:** primary products dominated 1960 exports; electronics were 24.0% in 1990 and 58.2% in 2020, but high import content limits the inference about domestic value added (Lim, 1990, pp. 74–75; Nasution, 2000, pp. 19–20; PSA, 2021).
4. **Human and infrastructure capabilities improved:** adult literacy reached 93.57% in 1990 and 98.47% in 2020; electricity access rose from a 65.4% 1993 proxy to 96.4% in 2020 (World Bank, 2026).
5. **A service/remittance model became central:** services employed 56.78% of workers and personal remittances equalled 9.64% of GDP in 2020, while BPO became a major export activity (Bangko Sentral ng Pilipinas, 2011; World Bank, 2026).

## What the Philippines supports

- Development paths can move from agriculture toward services without a Korean-scale manufacturing employment transition.
- Connections to global markets matter, but domestic supplier, infrastructure, and capability linkages determine spillovers.
- Policy continuity is productive only when combined with correction, macro stability, and performance discipline.
- Colonial institutions can shape land, education, trade, and political networks without mechanically determining later outcomes.

## What the Philippines challenges

- A claim that literacy, urbanisation, electricity, or manufactured exports alone guarantee rapid convergence.
- A culture-only explanation: the strongest mechanisms in the record are political-economic, institutional, geographic, external, and sectoral.
- A simple “low trust means firms cannot scale” claim; large domestic and foreign organisations scaled through substitutes.
- A binary success/failure label: the country achieved major export and service capabilities but limited industrial deepening and uneven inclusion.

## What the Philippines cannot prove

- That any national cultural trait caused slower growth.
- That colonial inheritance alone determined post-1946 policy or performance.
- That low generalised trust caused firm dualism, governance outcomes, or income growth.
- That policy discontinuity caused the 1980s crisis or later industrial pattern independently of debt, external shocks, and political institutions.
- That electronics' gross export share equals domestic technological capability or value added.
- That endpoint correlations identify whether infrastructure, education, institutions, or growth came first.

## References

Asian Development Bank. (2007). *Philippines: Critical development constraints* (Country Diagnostic Studies; Publication Stock No. 120907). https://www.adb.org/sites/default/files/publication/29274/cdc-philippines.pdf

Bangko Sentral ng Pilipinas. (2011). *Results of the 2010 survey of information technology-business process outsourcing (IT-BPO) services*. https://www.bsp.gov.ph/Media_And_Research/Survey%20of%20IT-BPO%20Services%20Report/ICT_2010.pdf

Dolan, R. E. (Ed.). (1993). *Philippines: A country study* (4th ed.). Federal Research Division, Library of Congress. https://tile.loc.gov/storage-services/master/frd/frdcstdy/ph/philippinescount00dola_0/philippinescount00dola_0.pdf

Hill, H. (2013). The political economy of policy reform: Insights from Southeast Asia. *Asian Development Review, 30*(1), 108–130. https://doi.org/10.1162/ADEV_a_00005

Lim, J. (1990). An application of Bacha's three-gap model: The case of the Philippines. *Philippine Review of Economics and Business, 27*(1), 63–84. https://www.pre.econ.upd.edu.ph/index.php/pre/article/view/265

Nasution, A. (2000). *Recent issues in the management of macroeconomic policies in the Philippines*. Asian Development Bank, Asia Recovery Information Center. https://aric.adb.org/pdf/aem/external/financial_market/Philippines/phil_mac.pdf

Philippine Statistics Authority. (2021, August 12). *Highlights of the 2020 annual final international merchandise trade statistics of the Philippines*. https://psa.gov.ph/content/highlights-2020-annual-final-international-merchandise-trade-statistics-philippines

Philippine Statistics Authority. (2023, November 28). *2020 Annual Survey of Philippine Business and Industry (ASPBI)—All establishments by employment grouping: Final results* (Reference No. 2023-SSO-215). https://psa.gov.ph/content/2020-annual-survey-philippine-business-and-industry-aspbi-all-establishments-employment

World Bank. (1980). *Philippines: Industrial development strategy and policies* (World Bank Country Study PUB-2513). https://documents1.worldbank.org/curated/en/111281468758983004/pdf/multi-page.pdf

World Bank. (1987). *The Philippines: Issues and policies in the industrial sector: Volume II, policy annexes* (Report No. 6706-PH). https://documents1.worldbank.org/curated/en/259831468095970280/pdf/multi0page.pdf

World Bank. (2025). *Worldwide Governance Indicators: 2025 revision* [Data set]. https://www.worldbank.org/en/publication/worldwide-governance-indicators

World Bank. (2026). *World Development Indicators* [Data set]. Retrieved October 4, 2026, from https://api.worldbank.org/v2/country/PHL

World Values Survey Association. (2024). *Philippines—World Values Survey Wave 7, 2019* [Data set and metadata]. International Household Survey Network. https://catalog.ihsn.org/catalog/12297

Yusuf, S., & Nabeshima, K. (2010). *Changing the industrial geography in Asia: The impact of China and India*. World Bank. https://documents1.worldbank.org/curated/en/983591468216577762/pdf/567940PUB0Chan10Box353739B01PUBLIC1.pdf

## Matching in-text citation forms

| Reference | Parenthetical | Narrative |
|---|---|---|
| Asian Development Bank (2007) | (ADB, 2007) | ADB (2007) |
| Bangko Sentral ng Pilipinas (2011) | (Bangko Sentral ng Pilipinas, 2011) | Bangko Sentral ng Pilipinas (2011) |
| Dolan (1993) | (Dolan, 1993) | Dolan (1993) |
| Hill (2013) | (Hill, 2013) | Hill (2013) |
| Lim (1990) | (Lim, 1990) | Lim (1990) |
| Nasution (2000) | (Nasution, 2000) | Nasution (2000) |
| Philippine Statistics Authority (2021, 2023) | (PSA, year) | PSA (year) |
| World Bank (1980, 1987, 2025, 2026) | (World Bank, year) | World Bank (year) |
| World Values Survey Association (2024) | (World Values Survey Association, 2024) | World Values Survey Association (2024) |
| Yusuf and Nabeshima (2010) | (Yusuf & Nabeshima, 2010) | Yusuf and Nabeshima (2010) |

## Verification log

- 2026-10-04 — opened and re-pulled all listed WDI and WGI API series; checked anchor values and first non-null years.
- 2026-10-04 — opened the original scanned Lim article and read Table 1, pp. 74–75; recalculated the 1960 export shares from FOB values.
- 2026-10-04 — opened the ADB macroeconomic PDF and checked 1990 export values/shares in Table 9, p. 20.
- 2026-10-04 — opened the PSA 2020 trade and 2020 ASPBI releases and checked exact table/figure references.
- 2026-10-04 — opened the Library of Congress country study, World Bank 1980/1987 industrial reports, ADB constraints report, BSP IT-BPO report, Hill article metadata/full text, WVS variable page, and World Bank manufacturing comparison.
- 2026-10-04 — checked that all ten indicators state definition, unit/basis, actual year, value, locator, confidence, and limitation; all missing anchors and incompatible proxies remain visible.
