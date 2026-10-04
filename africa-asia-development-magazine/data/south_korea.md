# South Korea — anchor case

Data pulled 2026-09-22. Follows the same 10-indicator template as `ghana.md`. Paired case with Ghana on the flagship spread.

Anchor years: **1960 · 1990 · 2020**.

Legend: **H** = high confidence · **M** = medium · **L** = low · **n/a** = no comparable measure for that period.

**Headline check:** GDP per capita in 1960 was **US$1,038** (Korea) vs **US$1,101** (Ghana). The magazine's founding claim — same starting income, different destinies — is verified.

---

## 1. GDP per capita (constant 2015 USD)

| Year | Value | Note |
|---|---|---|
| 1960 | US$ 1,038 | ~5% below Ghana in the same year |
| 1990 | US$ 9,673 | 11× Ghana's 1990 value |
| 2020 | US$ 33,216 | 17× Ghana's 2020 value |

- Source: World Bank WDI `NY.GDP.PCAP.KD` — `https://api.worldbank.org/v2/country/KOR/indicator/NY.GDP.PCAP.KD?date=1960:2022&format=json`
- Cross-check: Maddison Project 2023 (2011 int$) gives Korea $1,548 / $13,874 / $38,607. **Notable:** on the PPP frame Maddison shows Korea 1960 *below* Ghana ($1,548 vs Ghana's $2,197) — the "same starting income" story survives either way; PPP framing makes the paradox even sharper.
- Confidence: **H**
- **Publish rule:** use the WB constant 2015 USD series for the paired dashboard so Ghana and Korea are on the same yardstick. Maddison stays as a footnote cross-check.

## 2. Labour productivity (GDP per person employed, constant 2021 PPP $)

| Year | Value | Note |
|---|---|---|
| 1960 | n/a | Series `SL.GDP.PCAP.EM.KD` starts 1991 |
| 1990 → **1991** | US$ 35,978 | Closest available (within ±3 yr) |
| 2020 | US$ 93,906 | ~5.5× Ghana's 2020 value |

- Source: World Bank WDI — `https://api.worldbank.org/v2/country/KOR/indicator/SL.GDP.PCAP.EM.KD?date=1990:2022&format=json`
- Confidence: **H** for 1991 / 2020 · **L** for 1960 (gap)
- Note: Bank of Korea historical accounts suggest 1960 labour productivity was roughly one-quarter of the 1991 level — not directly comparable, use as narrative only.

## 3. Employment by sector (%)

| Year | Agriculture | Industry | Services | Note |
|---|---|---|---|---|
| 1960 (~1963) | 61 | 9 | 30 | From Bank of Korea / NBER historical accounts |
| 1990 → **1991** | 15.5 | 37.2 | 47.4 | ILO modelled |
| 2020 | 5.4 | 24.6 | 70.0 | |

- Sources: WDI `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS`; NBER Hong chapter for 1960s
- Confidence: **H** for 1991 / 2020 · **M** for 1963 (single historical source)
- **The killer stat:** agriculture went from **61% → 15% → 5%**. Ghana went from ~65% → 72% → 37%. Korea's workforce moved *out* of agriculture into industry then services in a coordinated wave. Ghana's *stayed in agriculture* through 1991 before drifting into services.

## 4. Manufacturing share of GDP (%)

| Year | Value | Note |
|---|---|---|
| 1960 | 11.4 | Nearly identical to Ghana's ~10% |
| 1990 | 25.2 | Ghana was still at 9.8 |
| 2020 | 25.7 | Ghana at 11.0 |

- Source: WDI — `https://api.worldbank.org/v2/country/KOR/indicator/NV.IND.MANF.ZS?date=1960:2022&format=json`
- Confidence: **H** — direct observations at all three anchors
- **Headline finding:** Both countries started near 10% manufacturing share. Korea more than doubled to 25% and *stayed there*. Ghana peaked at ~14% in 1975 and collapsed back to ~10%. Same starting point, one country built a manufacturing base, the other did not.
- Peaked at **29.0% in 2011** and held 27–29% through 2018. Korea is one of the few advanced economies that has *not* de-industrialised.

## 5. Export composition — top 3 (% of merchandise exports)

| Year | Composition | Note |
|---|---|---|
| 1960 | Primary products **>70%** (marine products, tungsten ore, raw silk) · Manufactures <30% | IMF F&D historical review (precise split unavailable) |
| 1990 (via 1995 clean HS-2 snapshot) | Electrical machinery / electronics ~29% · Machinery ~12% · Cars & parts ~7% (+ships, textiles) | OEC / WITS — 1995 proxy, mark with asterisk |
| 2020 | Electrical machinery / electronics 33.7% · Machinery 13.3% · Cars & parts 9.8% | OEC BACI **HS-2 chapter aggregates** — different taxonomy from OEC's public HS-4 product view |

- Sources: OEC `https://oec.world/en/profile/country/kor?yearSelector1=2020` · WITS `https://wits.worldbank.org/CountryProfile/en/Country/KOR/Year/1990/TradeFlow/Export` · IMF F&D `https://www.elibrary.imf.org/view/journals/022/0008/001/article-A003-en.xml`
- Confidence: **H** for 2020 · **M** for 1960 (categorical, not HS-6) and 1990 (1995 proxy)
- **The strongest single narrative in the whole dataset:** Korea's exports went from tungsten ore and dried seaweed to integrated circuits and Hyundai cars in one lifetime. Ghana's went from cocoa and gold to gold and oil — different commodities, same structure.

## 6. Adult literacy rate (%, ages 15+)

| Year | Value | Note |
|---|---|---|
| 1960 | ~71 | UNESCO EFA / Kim (2005) national estimates; not in WDI |
| 1990 | ~93–96 | UNESCO / national estimates — no clean WDI observation |
| 2020 (last obs 2008) | ~98 | Effectively universal; Korea stopped reporting once literacy saturated |

- Source: WDI `SE.ADT.LITR.ZS`; UNESCO EFA `https://unesdoc.unesco.org/ark:/48223/pf0000229721`
- Confidence: **M** (Korea stopped submitting once universal, so anchor values rely on secondary sources)
- **The human-capital contrast that anchors the whole magazine:** Korea 1960 ≈ **71% literate**. Ghana 1960 ≈ **25% literate**. Same income, ~2.8× the literacy stock. This is the strongest data point in the three-theory arc.

## 7. Urbanisation rate (% urban)

| Year | Value |
|---|---|
| 1960 | 27.7 |
| 1990 | 74.0 |
| 2020 | 81.2 |

- Source: WDI `SP.URB.TOTL.IN.ZS`
- Confidence: **H** — full series, no gaps
- **Cross-continent comparison:** Korea and Ghana were nearly equally urbanised in 1960 (28% vs 23%). By 1990 Korea was at 74%, Ghana at 36%. Korea urbanised **around industrial jobs**. Ghana urbanised **without them** — the "urbanisation without industrialisation" pattern.

## 8. Electricity access (% of population)

| Year | Value | Note |
|---|---|---|
| 1960 | n/a | Series `EG.ELC.ACCS.ZS` starts 1990. Korean sources indicate rural electrification programme reached ~100% by late 1970s |
| 1990 | 99.88 | Effectively universal at the start of the series |
| 2020 | 100 | |

- Source: WDI — `https://api.worldbank.org/v2/country/KOR/indicator/EG.ELC.ACCS.ZS?date=1990:2022&format=json`
- Confidence: **H** for 1990 / 2020 · **L** for 1960 (gap)
- Ghana at 1990 = data gap · Korea at 1990 = 100%. The gap by 1990 is the story.

## 9. Firm size / informality proxy

| Year | Value | Note |
|---|---|---|
| 1960 | n/a | |
| 1990 | n/a | ILO harmonised informal-employment series starts ~2000s |
| 2020 | Informal economy ~22.5% of GDP (DGE method, Medina & Schneider / IMF) | Closest apples-to-apples comparable measure for Ghana |

- Sources: OECD Economic Survey Korea 2020 `https://www.oecd.org/content/dam/oecd/en/publications/reports/2020/08/oecd-economic-surveys-korea-2020_59a25235/2dde9480-en.pdf` · TheGlobalEconomy DGE mirror
- Confidence: **M** — model-based, not survey-based
- **Definitional watch-out:** Korea's *informal employment share of workers* is not directly comparable to Ghana's ~78–85% figure (which uses the non-agricultural informal definition). The DGE size-of-informal-economy measure is the fairest paired stat.

## 10. Institutional trust / governance (WGI, −2.5 to +2.5)

| Year | Rule of Law | Govt Effectiveness | Note |
|---|---|---|---|
| 1960 | n/a | n/a | WGI series starts 1996 |
| 1990 | n/a | n/a | |
| 2020 | ~1.15 | ~1.13 | ~87–90th percentile globally on both dimensions |

- Source: WGI download page — `https://www.worldbank.org/en/publication/worldwide-governance-indicators`. Note: `RL.EST` no longer resolves via WDI API path.
- Confidence: **M** for 2020 (verified via mirror, not raw WGI CSV pull) · **n/a** for 1960 / 1990
- Ghana 2020 = +0.11 · Korea 2020 = +1.15. A one-point gap on the −2.5 to +2.5 scale.

---

## Data-gap punch list (to close before publication)

- Labour productivity 1960 — no fix; acknowledge as unmeasurable and move on.
- Adult literacy 1990 and 2020 — pull Korean national statistics office (KOSTAT) rather than UNESCO/WDI.
- WGI 2020 — pull the actual WGI CSV rather than the TheGlobalEconomy mirror.
- Export composition 1990 — replace the 1995 HS-2 proxy with a true 1990 HS-6 pull from UN Comtrade.
- Informality — pick one method (DGE) and use the same method for Ghana's 2020 anchor. Currently mixed.

## Headlines to carry into the magazine

1. **1960 GDP per capita: Korea $1,038 · Ghana $1,101.** Same start. This is the founding paradox of the whole magazine.
2. **1960 literacy: Korea ~71% · Ghana ~25%.** Same income, radically different human capital. The strongest single explanatory variable in the paired dataset.
3. **Manufacturing share: Korea doubled to 25% and held. Ghana peaked, collapsed, recovered to 10%.** The industrialisation arc that worked vs the one that didn't.
4. **Employment structure: Korea moved workers out of agriculture into industry then services. Ghana's workforce stayed in agriculture through 1991.** Structural transformation in action.
5. **Export composition: Korea sold tungsten ore in 1960 and integrated circuits in 2020. Ghana sold cocoa in 1960 and gold in 2020.** Different commodities, same structure — for Ghana. For Korea, a complete transformation.

## Verification log

- 2026-09-22 — researcher agent pulled data.
- 2026-09-23 — dual-agent verification pass. 8 of 10 numeric cells matched to exact precision on independent WDI re-pull. Fixes applied: (a) Maddison cross-check numbers corrected ($1,548 / $13,874 / $38,607 in 2011 int$; noted that PPP framing shows Korea *below* Ghana in 1960 — paradox holds either way); (b) manufacturing peak updated to 29.0% in 2011, held 27–29% through 2018; (c) 1960 export split softened to >70% primary / <30% manufactures (source doesn't support false precision); (d) 2020 export composition footnoted as HS-2 chapter aggregates, distinct from OEC's HS-4 view; (e) literacy contrast corrected from "3×" to "~2.8×".
