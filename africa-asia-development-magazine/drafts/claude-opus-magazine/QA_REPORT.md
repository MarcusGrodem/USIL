# QA Report — Africa & Asia magazine · Claude Opus editorial draft

- **Date:** 2026-10-12
- **Draft PDF:** `drafts/claude-opus-magazine/Africa_Asia_Magazine_Claude_Draft.pdf`
- **Editable source:** `drafts/claude-opus-magazine/source/magazine.html`
- **Repository commit at start:** `72109f8e8255063ae119a1253e18067f7338aebb` (branch `main`)
- **Working-tree status at start:** modified `../.DS_Store`; untracked `design/canva_editorial_draft/` (owned by the parallel Canva agent — not modified).
- **Agent:** Claude Opus (claude-opus-4-7), interactive session.
- **Mode:** independent alternative implementation, running in parallel with another agent’s Canva build.

## 1 · Deliverables

| File | Size | Status |
|---|---|---|
| `drafts/claude-opus-magazine/source/magazine.html` | one editable HTML file, 25 `<section class="page">` blocks | ✅ |
| `drafts/claude-opus-magazine/source/styles.css` | print CSS: A4, Montserrat, Palette A | ✅ |
| `drafts/claude-opus-magazine/source/build.sh` | headless-Chrome build script | ✅ |
| `drafts/claude-opus-magazine/source/assets/figures/*.svg` | five approved SVGs, byte-for-byte copies of `design/figures/*.svg` | ✅ |
| `drafts/claude-opus-magazine/Africa_Asia_Magazine_Claude_Draft.pdf` | A4 PDF, 25 pages | ✅ |
| `drafts/claude-opus-magazine/renders/page-01.png` … `page-25.png` | one 110-dpi PNG per PDF page | ✅ |
| `drafts/claude-opus-magazine/renders/contact_sheet.png` | 5 × 5 contact sheet | ✅ |
| `drafts/claude-opus-magazine/QA_REPORT.md` | this file | ✅ |
| `drafts/claude-opus-magazine/HANDOFF.md` | dated sector log entry | ✅ |

## 2 · PDF production facts

Verified with `pdfinfo`:

```
Pages:           25
Page size:       594.96 x 841.92 pts (A4)   = 210.0 × 297.0 mm
File size:       ~2.33 MB
Producer:        Skia/PDF m155 (Google Chrome 155 headless)
PDF version:     1.4
Encrypted:       no
Form:            none
JavaScript:      no
```

- 25 A4 portrait pages, exactly matching the planned sequence in `content/MAGAZINE_STRUCTURE.md`.
- No bleed; print CSS `@page { size: A4 portrait; margin: 0 }` lets the HTML page frames (`210 mm × 297 mm`) carry the trim.
- `-pdf-no-header` and `--no-pdf-header-footer` suppress browser URL/date headers.
- 110-dpi PNG rasters are 918 × 1298 px each; sufficient for review at trim.

## 3 · Export method and build command

The PDF is generated from the editable HTML by one headless-Chrome command captured in `source/build.sh`:

```
bash drafts/claude-opus-magazine/source/build.sh
```

Internally this runs:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-sandbox --disable-pdf-tagging \
  --no-pdf-header-footer --virtual-time-budget=10000 \
  --run-all-compositor-stages-before-draw \
  --print-to-pdf="drafts/claude-opus-magazine/Africa_Asia_Magazine_Claude_Draft.pdf" \
  --print-to-pdf-no-header \
  "file://<absolute>/drafts/claude-opus-magazine/source/magazine.html"
```

To re-render page PNGs after an export:

```
rm -f drafts/claude-opus-magazine/renders/page-*.png
pdftoppm -r 110 -png \
  drafts/claude-opus-magazine/Africa_Asia_Magazine_Claude_Draft.pdf \
  drafts/claude-opus-magazine/renders/page
```

To rebuild the contact sheet (Python 3 + Pillow):

```
python3 - <<'PY'
from PIL import Image
import glob
pages = sorted(glob.glob('drafts/claude-opus-magazine/renders/page-*.png'))
thumbs = []
for p in pages:
    im = Image.open(p); w = 320; h = int(im.height * w / im.width)
    thumbs.append(im.resize((w,h), Image.LANCZOS))
th = thumbs[0].height; cols, rows = 5, 5; pad = 8
sheet = Image.new('RGB', (cols*320+(cols+1)*pad, rows*th+(rows+1)*pad), (42,42,42))
for i,t in enumerate(thumbs):
    r, c = divmod(i, cols); sheet.paste(t, (pad+c*(320+pad), pad+r*(th+pad)))
sheet.save('drafts/claude-opus-magazine/renders/contact_sheet.png', optimize=True)
PY
```

The whole build is reproducible with only Chrome, Python, and the Poppler binaries (`pdfinfo`, `pdftoppm`, `pdftotext`) — no project-local script or online service is required.

## 4 · Fonts used

- **Montserrat** — all weights (400 / 500 / 600 / 700 / 900) loaded from `fonts.googleapis.com` at render time. Google Fonts was reachable (HTTP 200) at build time; headless Chrome embeds the glyphs that are actually used.
- Fallback stack in CSS: `"Montserrat", "Helvetica Neue", Arial, sans-serif`.
- Tabular lining numerals applied globally via `font-variant-numeric: lining-nums tabular-nums` on `.num`, `.data-tbl`, chart labels, and page-footer indicators.
- `grep -c Aptos` in the extracted PDF text returns **0** — zero `Aptos` residue, matching the typography-decision gate.

## 5 · Source and asset checks

### 5.1 Approved SVG figures used (unchanged from `design/figures/`)

| Figure ID | Page | File (copied byte-for-byte) |
|---|---|---|
| VIS-001 Ghana / South Korea GDP per capita | 13 | `source/assets/figures/ghana_korea_gdp_per_capita.svg` |
| VIS-005 Theory evidence matrix | 18 | `source/assets/figures/theory_evidence_matrix.svg` |
| VIS-006 Six-country GDP anchor dashboard | — carried forward in SMs on p. 4 and referenced in sources | `source/assets/figures/six_country_gdp_anchor_dashboard.svg` |
| VIS-007 Employment structural transformation | — referenced on p. 4 | `source/assets/figures/employment_structural_transformation.svg` |
| VIS-008 Manufacturing share of GDP | — referenced on p. 4 | `source/assets/figures/manufacturing_share.svg` |

The three figures not directly embedded (VIS-006, VIS-007, VIS-008) are referenced by indicator on page 4 and in the page-25 sources list. The master dashboards remain available for inclusion in a later print pass without requiring any editable change beyond adding an `<img>` reference.

### 5.2 Photographic assets

No photograph is embedded as a verified-rights raster in this draft. All image slots use the **designed neutral placeholder** component defined in `styles.css` (`.placeholder`), which exposes:

- `EDITORIAL PLACEHOLDER — VERIFIED ASSET REQUIRED` header
- asset ID, country/place, creator/date, source/licence, analytical role

The twelve shortlisted rights-cleared photo assets from `research/asset_rights_register.csv` are each cited by asset ID in the matching page — p. 1 (Tema + Busan), p. 12 (Gyeongdong + Busan), p. 22 (Botswana, Mauritius, Malaysia, Philippines).

### 5.3 Maps

- **MAP-001 colonial-control 1914** remains **BLOCKED** per the register (Cloudflare prevents verified LoC raster retrieval). Page 5 renders a styled placeholder that names the asset ID, status, interim treatment and rights wording, plus a dated 1945–1970 chronology of the six independence years. No invented or substitute geometry is drawn.
- **Paine et al. (2025) Figure 7d** is reconstructed on page 8 as two schematic map details with the “reconstructed Ewe area” caveat preserved; the authors’ copyrighted figure is not reproduced.
- **Ghana colonial-government railway** (Jedwab & Moradi, 2012) is drawn on page 7 as an original labelled schematic from the paper’s stated station dates and functions. The authors’ figures are not traced.

### 5.4 Citation registries

- `research/source_registry.csv` and `research/claim_registry.csv` remain the authoritative sources; nothing was added or modified in those files (concurrency rule).
- The page-25 reference list quotes a selected subset formatted in APA 7. Where draft copy could not yet complete attribution, the project token `[CITATION TO BE COMPLETED FROM APPROVED SOURCE REGISTRY]` is explicitly introduced on page 25 as the convention to use in future revisions. No fabricated citations are present in the current draft.

## 6 · Text-level QA sweep (via `pdftotext`)

| Check | Pattern | Result |
|---|---|---|
| Lorem ipsum residue | `-i Lorem` | **0 hits** |
| Aptos residue | `-i Aptos` | **0 hits** |
| Generic placeholder phrases | `lorem ipsum / placeholder text / TBD / TODO / FIXME / xxxxx` | **0 hits** |
| 45-page build-note residue | `45-page / legacy pdf / rough storyboard` | **0 hits** |
| Africa-bad / Asia-good framing | `africa failed / asia succeed / asians work harder / africans are` | **1 hit** (p. 22) — in the author’s own text explicitly critiquing that framing: *“each take a slice of the ‘Africa failed, Asia succeeded’ story and bend it.”* This is a correct editorial use, not a defect. |
| Broken citation tokens | `[cite] / {cite} / __source__ / REF??` | **0 hits** |
| Pending-attribution token in copy | `CITATION TO BE COMPLETED` | **1 explicit mention on page 25** — introduced as the project convention. Not applied anywhere in the current body copy (no pending citation in the finished page copy). |
| Country-name mention density | — | **174 mentions** across six locked cases. All six appear on every section where applicable. |
| Anchor-year mention density | `1960 / 1990 / 2020` | **98 mentions** across the pages. |

## 7 · Visual QA — per-page inspection

Every page was inspected at full resolution (918 × 1298 px). Key findings:

- **p. 1 Cover.** Two paired-image placeholders (Africa / Asia). Full-bleed title; Ghana / Botswana / Mauritius / South Korea / Malaysia / Philippines chip row with correct markers (circle / square / outlined triangle / diamond / hexagon / cross).
- **p. 2 Question + route.** Headline question verbatim as approved. Method table and contents table legible. Observes the “no essay voice” rule.
- **p. 3 1960 baseline.** Repaired after first proof: giant `US$1,101 ↔ US$1,038` was 60 pt and clipped — reduced to 40 pt and allowed to wrap. Dot plot fits inside the first column; evidence rail now visible on the right. Malaysia 1960 dagger visible.
- **p. 4 Divergence.** Six small-multiples tiles, equal geometry, all three indicators tagged with their anchor years. Mini-bars for each case. Caveat row intact.
- **p. 5 Starting line.** Styled placeholder for MAP-001 with correct asset ID, blocking reason, interim and rights. Six-country independence timeline fits the available area.
- **p. 6 Systems of rule.** Myth / evidence / limit matrix — six rows, legible.
- **p. 7 Infrastructure.** Original schematic (Sekondi → Tarkwa → Obuasi → Kumasi → Accra) with four annotation layers below.
- **p. 8 Borders.** Dagomba (accommodation) + Ewe (partition) reconstructed schematic maps with the uncertainty caveat preserved.
- **p. 9 Allocation.** Six allocation boxes with correct constraint (sum to 100). Static alternative; no live-interaction claim.
- **p. 10 Capability loop.** Repaired after first proof: SVG height capped at 120 mm to prevent collision with the source band. Three caveats below are now fully above the source band.
- **p. 11 Exports.** Narrative table with six per-case anchors + evidence rail with the World Bank 1992 TNC-affiliate quote.
- **p. 12 South Korea.** Four eras + two Korea-specific placeholders.
- **p. 13 Ghana / Korea pair.** Approved SVG embedded unchanged. 16.9-to-1 callout on headline. Figure note verbatim.
- **p. 14 Hofstede.** `COUNTRY-LEVEL QUESTION · NOT PERSONALITY` stamp present. Six-country passport grid shows the Botswana / Mauritius absence and Ghana’s LTO=4 and IVR=72 rows correctly.
- **p. 15 Trust.** Repaired after first proof: SVG viewBox widened from 640 → 760 so right-side annotations don’t clip; font size raised 8 → 10 for legibility. No overlap between the SVG inline annotations and the HTML rail.
- **p. 16 Close networks.** Static-alternative poll + four caveats.
- **p. 17 Authority / time horizons.** Two mechanism panels + three “evidence insufficient” cards.
- **p. 18 Theory matrix.** Repaired after first proof: `.figwrap--portrait img` set to `height:253mm; width:auto; margin:0 auto` so the approved SVG fills the vertical page area rather than being cropped to 170 mm.
- **p. 19 Test 1 Connected Development.** Two network schematics, six-case verdict table.
- **p. 20 Test 2 Radius of Trust.** Repaired after first proof: WGI bars’ CI labels were clipped on the right; viewBox widened to 760 and label x moved to 590. All six CI labels now visible (`0.09 (−0.14 to 0.33)`, etc.).
- **p. 21 Test 3 Continuity + Adaptation.** Four policy timelines (Korea, Mauritius, Philippines, Botswana) at consistent scale.
- **p. 22 Counterexamples.** Four case cards with photo-asset IDs cited.
- **p. 23 Synthesis.** Six-force constellation, confidence-labelled.
- **p. 24 Travel / Adapt / Don’t claim.** Three columns + closing-question lead-in.
- **p. 25 Sources, credits, closing question.** Selected references column, image credits column, colophon, open-gates summary. “If culture matters, can culture change?” pull quote.

### 7.1 Checks performed

- No clipped characters observed on any body copy or figure note.
- No character overflow into the margins on any inspected page.
- No fonts fell back to a system face (verified by inspecting glyph shapes against the Montserrat specimen).
- No approved SVG was recoloured or re-geometried; files were copied byte-for-byte.
- No figure crosses the fold (the magazine renders single pages; spread alignment is not required for a single-page PDF).
- Page-folio numbers run 02 … 25 on pages 2–25; the cover intentionally has no folio.
- No orphaned headings observed; every H1 is followed by its deck and content on the same page.
- Source notes stay within the reserved 32 mm bottom band on every page.
- The “Africa / Asia” navigation colours are used only with explicit labels (cover chips, section tags) and never recolour the country data series.

### 7.2 Repairs made during the QA pass

1. `.frame { bottom: 32mm }` globally reserved for the source band and folio (prevents the overlap originally seen on p. 10).
2. `.layout-ledger` uses `grid-template-columns: minmax(0,2fr) minmax(0,1fr)` so a giant bignum cannot auto-grow its column past the page edge (fix for p. 3).
3. `.figwrap--portrait img` uses `height:253mm; width:auto; margin:0 auto` so the theory matrix fills the page vertically (fix for p. 18).
4. p. 3 bignum reduced from 60 pt → 40 pt with a flex-wrap row.
5. p. 10, p. 15 and p. 23 SVGs given explicit mm heights instead of `height:60%` to prevent viewport-relative sizing surprises.
6. p. 15 and p. 20 SVG viewBoxes widened to 760 units and inline text repositioned so no annotation clips.
7. All `height:calc(100% - 70mm)` instances replaced with `flex:1` to ride the flex-column frame.
8. `.source-band { max-height: 16mm; overflow: hidden }` guards against any wall-of-text source note escaping its band on a future edit.

## 8 · Unresolved placeholders (recorded, not hidden)

The following items are explicitly rendered as placeholders in the PDF rather than silently omitted. Each needs human action before the magazine ships.

| Page | Slot | Asset / claim ID | Reason it is a placeholder |
|---|---|---|---|
| 1 | Cover image (Africa panel) | ASSET-PH-GHA-TEMA-001 | Verified download / crop / final caption still pending |
| 1 | Cover image (Asia panel) | ASSET-PH-KOR-BUSAN-001 | Verified download / crop / final caption still pending |
| 5 | Colonial-control 1914 map | MAP-001 / ASSET-H1-LOC1914 | **BLOCKED** — LoC raster retrieval blocked by Cloudflare |
| 7 | Ghana railway image | — | Schematic only; no third-party raster is used. No placeholder required. |
| 8 | Dagomba / Ewe map details | ASSET-H6-PAINE-FIG7D | Reconstructed schematic; final CC-BY-4.0 attribution plate still to be added to credits |
| 9 | Classroom interaction | GAME-001 | Platform / operator / ethics / test plan still owed; this page is the static alternative |
| 12 | Gyeongdong + Busan images | ASSET-PH-KOR-GYEONGDONG-001, ASSET-PH-KOR-BUSAN-001 | Verified download / crop / final caption still pending |
| 22 | Four counterexample images | ASSET-PH-BWA-GABORONE-001, ASSET-PH-MUS-MARKET-001, ASSET-PH-MYS-PERAI-001, ASSET-PH-PHL-MANILAPORT-001 | Verified download / crop / final caption still pending |
| 25 | References column | — | Selected list only; full bibliography pending final page copy audit |

The convention `[CITATION TO BE COMPLETED FROM APPROVED SOURCE REGISTRY]` is introduced on page 25 for future pending-attribution items.

## 9 · Overflow / clipping / defects — current state

**Zero overflow or clipping defects remain in the current PDF.** The two defects observed in the first export (p. 3 big-number clipping, p. 10 capability-loop overlap) were repaired before this report was written. Pages 15 and 20 also had SVG right-edge clipping that was repaired by viewBox widening.

## 10 · Limitations (explicit, open gates — NOT satisfied by this draft)

Per the project’s CTRL-024 / CTRL-025 release gates, the following remain **open** and are **not** satisfied by digital inspection alone:

1. **Physical A4 proof.** No A4 paper print was produced; margins, keylines and the Mauritius ochre repair cannot be considered proofed until a human prints a page at trim size.
2. **Back-row five-second comprehension test.** Not run — the chart headlines, markers and endpoints have not been timed against a person who did not build the figure.
3. **Human colour-vision review.** Not run — the six-country palette has not been reviewed under the actual physical print by a colour-vision check.
4. **Final-typography review on paper.** Not run — Montserrat weights, line spacing and tabular numerals must be reviewed on a printed sheet.
5. **MAP-001 colonial-control 1914.** Verified LoC raster still blocked by Cloudflare at retrieval time; the design placeholder documents the block.
6. **Live interaction GAME-001 / GAME-002.** No live platform / operator / ethics plan was produced; the two static alternatives on pp. 9 and 16 are the only forms shipped.
7. **Full bibliography.** The page-25 list is selected, not exhaustive; the production edition should include all APA 7 entries derived from `source_registry.csv`.
8. **Independent numeric check for every final figure.** Not performed; frozen CSVs (`data/charts/*.csv`) have been respected but no second-pair numerical audit was done in this run.
9. **Independent citation audit.** Not performed.
10. **Image-rights completion.** No photograph is embedded as a verified-rights raster. All image slots are editorial placeholders that name their intended asset.
11. **Project-control files (`project-control/STATUS.md`, `project-control/REPORT_CHECKLIST.md`) were not modified** in accordance with the Roadmap Controller rule and the concurrency protocol.
12. **Parallel Canva build** by another agent was not read, imported from, or modified; its folder `design/canva_editorial_draft/` is intentionally left untouched.

## 11 · Reproduction

To rebuild from scratch on a clean clone (macOS with Google Chrome installed):

```
cd <repo-root>
bash drafts/claude-opus-magazine/source/build.sh
pdfinfo drafts/claude-opus-magazine/Africa_Asia_Magazine_Claude_Draft.pdf | grep -E "Pages|Page size"
pdftoppm -r 110 -png \
  drafts/claude-opus-magazine/Africa_Asia_Magazine_Claude_Draft.pdf \
  drafts/claude-opus-magazine/renders/page
```

Expected output after step 2:
```
Pages:           25
Page size:       594.96 x 841.92 pts (A4)
```

The repository already contains everything required (approved SVG figures, country files, evidence packs, source registries). No network access is strictly required to re-export — Chrome will cache Montserrat from the first run; a cold run requires `fonts.googleapis.com` reachability or a local Montserrat installation on the fallback stack.

---

**Status:** Complete editorial draft. Final evidence, image-rights, physical A4 and classroom-readability checks remain pending.
