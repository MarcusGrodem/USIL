# Ghana — worked example

Data pulled 2026-09-22. This is the template every other country file should follow. Each cell is either a primary-source value or explicitly marked as a gap / proxy. No silent interpolation.

Anchor years: **1960 · 1990 · 2020**.

Legend: **H** = high confidence · **M** = medium · **L** = low · **n/a** = no comparable measure for that period.

---

## 1. GDP per capita (constant 2015 USD)

| Year | Value | Note |
|---|---|---|
| 1960 | US$ 1,101 | Direct WDI pull |
| 1990 | US$ 856 | Reflects the 1975–83 collapse (Acheampong / SAP era) |
| 2020 | US$ 1,970 | COVID year; 2019 was US$ 2,000 |

- Source: World Bank WDI series `NY.GDP.PCAP.KD` — `https://api.worldbank.org/v2/country/GHA/indicator/NY.GDP.PCAP.KD?date=1960:2020&format=json`
- Confidence: **H**
- To upgrade: pull Maddison Project 2023 (`mpd2023_web.xlsx`) for 2011 int$ series. Absolute magnitudes differ, pattern should match.

## 2. Labour productivity (GDP per person employed, constant 2021 PPP $)

| Year | Value | Note |
|---|---|---|
| 1960 | n/a | Series `SL.GDP.PCAP.EM.KD` starts 1991 |
| 1990 → **1991** | US$ 7,400 | Closest available (within ±3 yr) |
| 2020 | US$ 17,124 | |

- Source: World Bank WDI — `https://api.worldbank.org/v2/country/GHA/indicator/SL.GDP.PCAP.EM.KD?date=1990:2022&format=json`
- Confidence: **H** for 1991 / 2020 · **L** for 1960 (gap)
- Note: WDI now uses constant 2021 PPP $, not 2017 PPP.

## 3. Employment by sector (%)

| Year | Agriculture | Industry | Services | Note |
|---|---|---|---|---|
| 1960 | n/a | n/a | n/a | ILO modelled estimates start 1991 |
| 1990 → **1991** | 71.8 | 9.0 | 19.3 | ILO modelled |
| 2020 | 37.4 | 15.2 | 47.4 | |

- Sources: WDI `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS`
- Confidence: **M** — modelled, not direct census counts
- Note: 1960 Ghana Census reports ~60–65% in agriculture but definitional differences — do not merge without caveat.

## 4. Manufacturing share of GDP (%)

| Year | Value | Note |
|---|---|---|
| 1960 | n/a | Series `NV.IND.MANF.ZS` starts 1965 for Ghana |
| 1965 (proxy) | 9.8 | Nearest; rose to 12.6% by 1968 |
| 1990 | 9.8 | |
| 2020 | 11.0 | |

- Source: WDI — `https://api.worldbank.org/v2/country/GHA/indicator/NV.IND.MANF.ZS?date=1960:2022&format=json`
- Confidence: **H** for 1990 / 2020 · **M** for 1965 proxy
- **Headline finding for the magazine:** manufacturing share started near 10% at independence, peaked at ~14% in 1975, collapsed during the 1980s crisis, and has recovered only to ~11% by 2020. Not "flat" — a rise, a collapse, and an incomplete recovery. This is the "premature deindustrialisation" story with real dynamics behind it.
- Intermediate values that matter: 1968 = 12.6%, **1975 = 13.95% (peak)**, 1980s trough substantially lower.

## 5. Export composition — top 3 (% of merchandise exports)

| Year | Composition | Note |
|---|---|---|
| 1960 | Cocoa ~45% · Gold + Timber ~30% combined | Narrative sources, not single primary dataset |
| 1990 | Cocoa ~40% · Gold/minerals ~30% · Timber #3 · combined ~75% | Ghana narrative sources |
| 2020 | Gold · Crude petroleum · Cocoa (beans + paste) · combined ~83% (GSS) | **Individual 2020 shares NOT YET SET.** 2019 shares were Gold ~37%, Fuels ~32%, Cocoa ~15% — do not carry these forward as 2020 without verification. Pending OEC / GSS 2020 CSV pull. |

- Sources: OEC `https://oec.world/en/profile/country/gha` · WITS `https://wits.worldbank.org/CountryProfile/en/Country/GHA/Year/2020/Summarytext` · Ghana Statistical Service via GNA `https://gna.org.gh/2025/03/gold-cocoa-and-oil-constitute-83-4-per-cent-of-ghanas-export-gss/`
- Confidence: **L–M**
- To upgrade: pull UN Comtrade or OEC CSV directly for 2020. Verify 1960 cocoa share against UN Yearbook of International Trade Statistics 1961.

## 6. Adult literacy rate (%, ages 15+)

| Year | Value | Note |
|---|---|---|
| 1960 | ~25% (estimate) | Secondary sources on 1960 census; not in WDI |
| 1990 | n/a | UNESCO UIS has no observation 1970–2000 |
| 2000 (proxy) | 57.9 | **Outside ±3-yr window** — treat 1990 as gap |
| 2020 → **2021** | 76.5 | |

- Source: `https://api.worldbank.org/v2/country/GHA/indicator/SE.ADT.LITR.ZS?date=1960:2022&format=json` (feeds UNESCO UIS)
- Confidence: **L** for 1960 / 1990 · **H** for 2021
- To upgrade: UNESCO *Statistical Yearbook* print archive; Ghana 1960 & 1970 census reports. Ghana 1970 census reported ~30% — could bracket the 1960 figure.

## 7. Urbanisation rate (% urban)

| Year | Value |
|---|---|
| 1960 | 23.3 |
| 1990 | 35.7 |
| 2020 | 56.2 |

- Source: WDI `SP.URB.TOTL.IN.ZS`
- Confidence: **H** — full series, no gaps
- Note: Ghana crossed the 50% urban threshold ~2010. Cleanest indicator we have.

## 8. Electricity access (% of population)

| Year | Value | Note |
|---|---|---|
| 1960 | n/a | WDI series `EG.ELC.ACCS.ZS` starts 1993 |
| 1990 | n/a | First observation is 1993 (30.6%) — still outside ±3-yr window, so treat 1990 as gap |
| 1993 | 30.6 | Earliest available WDI observation |
| 2000 (proxy) | 43.7 | |
| 2020 | 85.4 | |

- Source: WDI — `https://api.worldbank.org/v2/country/GHA/indicator/EG.ELC.ACCS.ZS?date=1990:2022&format=json`
- Confidence: **H** for 2020 · **L** for 1990
- To upgrade: IEA *World Energy Outlook* historical tables for 1990.

## 9. Firm size / informality proxy

| Year | Value | Note |
|---|---|---|
| 1960 | n/a | |
| 1990 | n/a | Ghana Living Standards Survey R1 (1987/88) noted informal ~80% of non-ag employment |
| 2015 (proxy for 2020) | 78.1% informal employment | ILO data |
| 2020 narrative | ~80%+ informal | ILO Youth Country Brief 2023: 88.8% (men) / 95.2% (women) youth informal |

- Sources: ILOSTAT `https://ilostat.ilo.org/data/country-profiles/gha/` · ILO Ghana youth brief `https://www.ilo.org/media/362181/download`
- Confidence: **L–M**
- Note: Definitions of "informal" vary (non-ag vs total; ICLS 1993 vs 2003). For publication, request ILOSTAT informality microdata; GSS Labour Force Report is the local anchor.

## 10. Institutional trust / governance (WGI Rule of Law, −2.5 to +2.5)

| Year | Value | Note |
|---|---|---|
| 1960 | n/a | WGI series starts 1996 |
| 1990 | n/a | |
| 2000 | −0.2 | WGI DataBank |
| 2020 | +0.11 | Confirmed via TheGlobalEconomy scrape |

- Source: WGI download page — `https://www.worldbank.org/en/publication/worldwide-governance-indicators`. Note: `RL.EST` no longer resolves via the WDI API path; use the WGI CSV directly.
- Confidence: **H** for 2000 / 2020 · **n/a** for 1960 / 1990 (correctly flagged)
- Historical average = 0.04; series minimum was −0.50 in 1998.
- Supplement: Afrobarometer Ghana starts Round 1, 1999 — usable for 2020 trust-in-institutions detail.

---

## Data-gap punch list (to close before publication)

- Maddison Project 2023 — download `mpd2023_web.xlsx` and record 2011 int$ series alongside WDI 2015 USD.
- 2020 export shares — pull OEC or UN Comtrade CSV directly.
- 1960 / 1990 adult literacy — UNESCO print archive; Ghana 1960 & 1970 census reports.
- 1990 electricity access — IEA WEO historical tables.
- 1996 WGI Rule of Law — full WGI CSV from govindicators.org.
- Informality 2020 — reconcile ILO 2015 (78%) with GSS 2015 Labour Force Report.

## Headlines to carry into the magazine

1. GDP per capita in 1990 was **lower** than in 1960 — Ghana lost 30 years.
2. Manufacturing share climbed from ~10% at independence to a **1975 peak of ~14%**, then collapsed in the 1980s crisis and recovered only to ~11% by 2020 — an aborted industrialisation, not a stagnation.
3. Ghana urbanised from 23% to 56% while its industrial base did not grow proportionally — the classic African "urbanisation without industrialisation" pattern.
4. Electricity access jumped from ~44% (2000) to 85% (2020) — one of the sharpest gains in the sample.

## Verification log

- 2026-09-22 — dual-agent verification pass. 9 of 10 numeric values matched to exact precision on independent re-pull. Fixes applied: (a) 2019 GDP per-capita note corrected to US$2,000; (b) manufacturing narrative rewritten to reflect real 1968/1975/1980s dynamics; (c) electricity note corrected — series starts 1993, not 2000; (d) WGI source updated to the WGI download page (RL.EST no longer resolves via WDI API); (e) 2020 export shares explicitly flagged as unresolved rather than approximate — pending OEC/GSS 2020 CSV.
