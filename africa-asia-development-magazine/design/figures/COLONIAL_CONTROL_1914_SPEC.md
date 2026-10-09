# Colonial control in 1914 — production and source specification

**Task:** MAP-001  
**Status:** BLOCKED  
**Figure ID:** MAP-001-H1-1914

## Outcome

The historical map was deliberately **not** drawn or substituted. This environment could not retrieve a verified raster derivative of the approved Library of Congress item because both the item page and JSON route returned a Cloudflare security-verification HTML page instead of the item metadata or raster.

No `colonial_control_1914.svg` has been delivered. This specification records the approved production route and the exact dependency; it is not evidence that the required artwork exists or has passed review.

## Approved source route

- **Asset ID:** `ASSET-H1-LOC1914`
- **Source ID:** `SRC-LOC-AFRICA14-001`
- **Item:** Vladimir V. Linde and Wagner & Debes, *Africa* (1914), scale 1:10,000,000, published by L. Friederichsen & Company.
- **Holding institution:** Library of Congress, Geography and Map Division; World Digital Library Collection.
- **Item URL:** https://www.loc.gov/item/2021668660/
- **Access date recorded by the rights audit:** 2026-10-07.
- **Approved decision:** `ADAPT`.
- **Rights statement recorded in the register:** the item-specific record says the Library of Congress is unaware of copyright or other restrictions and, absent restrictions, the material is free to use and reuse.
- **Required attribution:** “Linde, V. V., & Wagner & Debes. (1914). *Africa* [Map]. L. Friederichsen & Company. World Digital Library/Library of Congress, Geography and Map Division, item 2021668660.”

No modern boundary file, CShapes geometry, decorative Africa silhouette, traced third-party map, or newly invented colonial-control polygons may replace this route.

## Exact dependency needed to unblock

Obtain and locally preserve a verified, legible raster derivative from Library of Congress item 2021668660, with enough resolution to inspect the complete sheet and its legend at the intended crop. Record its direct LOC derivative URL, pixel dimensions, checksum, and retrieval date. A human map reviewer must compare the embedded crop against the item page before release.

Once available:

1. Create `design/figures/colonial_control_1914.svg` only after the verified item raster is available.
2. Choose a crop that retains the full African control field and the complete original colonial-possession key needed to interpret it.
3. Preserve the original legend wording, category associations, and map colours. Do not silently translate, recolour, merge, rename, or reorder categories.
4. If a short English reading aid is added, place it in the contemporary editorial rail and label it “Editorial reading aid”; it must point to—not replace—the original key.
5. Record the exact crop bounds and any tonal or resolution adjustments. Do not perform geometry edits.

## Editorial concept and five-second entry point

- **Question:** “Who claimed control across Africa in 1914?”
- **Immediate cues:** prominent `1914` date badge; map-dominant field; deck stating that this is not modern sovereignty.
- **Thirty-second read:** original/editorial-content distinction, source and rights band, and “What this cannot prove” note.
- **Page:** A4 portrait, 210 × 297 mm, designed for the map-dominant colonialism page in the rhythm plan.
- **Background and text:** selected-system cream `#F4F0E7` and charcoal `#252525`; neutral grey `#B7B0A4` only for secondary rules/hatching.
- **Typography:** use an explicit fallback stack in the future artwork. Typeface approval remains open; this specification does not claim a final typeface.

## Historical and editorial layers

### Original 1914 content

The source image, its German labels, colonial-possession colour key, boundaries, and operational/planned transport symbols are historical content. They must remain visibly attributable to the 1914 sheet.

### Contemporary editorial additions

The headline, date badge, explanatory deck, original/editorial layer labels, limitation note, source band, and any crop boundary are contemporary additions. They use the magazine's neutral system and must never appear to be part of the original legend.

## Mandatory adaptation and limitation note

Use this substance in the final figure note:

> *Note.* Adapted from *Africa* (scale 1:10,000,000), by V. V. Linde and Wagner & Debes, 1914, L. Friederichsen & Company (Library of Congress, Geography and Map Division, item 2021668660, https://www.loc.gov/item/2021668660/). The Library of Congress is unaware of restrictions and states that the item is free to use and reuse absent restrictions. Cropped; editorial annotations added. The sheet shows generalized 1914 colonial possessions and predates post-World War I mandates.

The visible limitation must state:

> This map depicts mapped colonial claims/control in 1914. It does not establish effective administrative reach, cultural territory, later mandates, modern sovereignty, or downstream causal effects.

## Accessibility and production requirements

- Keep the date, question, source identity, and limitation independent of colour.
- Retain the original historical legend; do not make the reader infer its categories from a new colour-only key.
- Use direct adjacent annotations for the reading guide; do not require legend hunting between distant panels.
- Minimum provisional A4 sizes: 28 pt headline, 14 pt deck, 11 pt essential labels, and 10 pt source/limitation copy.
- Maintain at least 10 mm safe margins and a bottom source band of at least 24 mm.
- Inspect at actual A4 size, grayscale, and classroom-screen scale after the source is embedded.
- Do not claim final palette/type release while VIS-004 is blocked.

## Verification completed

- Confirmed that the LOC item JSON request and standard item page returned Cloudflare security-verification HTML rather than item metadata or an image derivative.
- Rechecked the approved source-register and asset-rights-register rows for source identity, rights language, required attribution, access date, and limitations.
- Confirmed that no substitute path, polygon, silhouette, or alternative raster was left in the deliverable path.

## Release gates still required

- Verified LOC raster embedded and checked against the source item.
- Original legend content checked category by category.
- Actual-size A4 visual inspection of the completed adaptation.
- Human five-second test by a non-creator.
- Physical A4, human colour-vision, classroom/back-row, and final-typography reviews required by VIS-004.
