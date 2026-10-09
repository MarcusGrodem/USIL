# PHOTO-001 source-registry integration audit

**Task:** SRC-005  
**Audit date:** 2026-10-08  
**Status:** REVIEW  
**Scope:** Integration of the twelve accepted PHOTO-001 Wikimedia Commons sources into `research/source_registry.csv`. This audit does not approve a final image, crop, page placement, colour treatment, or publication export.

## Outcome

The twelve provisional `SRC-PHOTO-COMMONS-*` identifiers already assigned by PHOTO-001 now each have one complete source-registry row. The append increases the registry from 85 to 97 data rows and leaves all pre-existing rows unchanged. All 97 source IDs are unique; the CSV has 18 fields per row with zero malformed rows; and all twelve PHOTO-001 asset `source_id` values join to the source registry.

Each Wikimedia Commons item page and the applicable Creative Commons deed was opened on 2026-10-08. The registry records creator, full image date in the APA reference and item locator, item title, Commons/original-container provenance, stable item URL, access date, source type and tier, APA 7 image reference, narrative and parenthetical citations, exact item/file locator, verification status, owner, licence obligations, ShareAlike status, model-release uncertainty where relevant, and the accepted PHOTO-001 limitations.

No material conflict was found between an accepted asset row and its item page. The integration therefore did not rename an asset or source ID and did not modify `research/asset_rights_register.csv` or any PHOTO-001 rights decision.

## Integrated records

| Source ID | Linked asset | Creator and date | Item / container | Licence confirmed | Registry result |
|---|---|---|---|---|---|
| `SRC-PHOTO-COMMONS-GHA-TEMA-001` | `ASSET-PH-GHA-TEMA-001` | JulianGrayscales, 8 February 2020 | *Tema port*, Wikimedia Commons | CC BY-SA 4.0 | `VERIFIED` |
| `SRC-PHOTO-COMMONS-GHA-ACCRA-001` | `ASSET-PH-GHA-ACCRA-001` | Amuzujoe, 27 November 2020 | *Market Accra*, Wikimedia Commons | CC BY-SA 4.0 | `VERIFIED` |
| `SRC-PHOTO-COMMONS-BWA-GABORONE-001` | `ASSET-PH-BWA-GABORONE-001` | Sarvesh Lutchmun, 6 August 2015 | *Bus Terminal in Gaborone, Botswana*, Wikimedia Commons | CC BY-SA 4.0 | `VERIFIED` |
| `SRC-PHOTO-COMMONS-BWA-MOCHUDI-001` | `ASSET-PH-BWA-MOCHUDI-001` | Paul tk, 14 September 2018 | *MochudiBotswanaSolarPanel*, Wikimedia Commons | CC BY-SA 4.0 | `VERIFIED` |
| `SRC-PHOTO-COMMONS-MUS-MARKET-001` | `ASSET-PH-MUS-MARKET-001` | Didier Baertschiger, 9 March 2015 | *Mauritius - Port Louis (Central Market)*, Wikimedia Commons; originally Flickr | CC BY-SA 2.0 | `VERIFIED` |
| `SRC-PHOTO-COMMONS-MUS-SUGAR-001` | `ASSET-PH-MUS-SUGAR-001` | Richard N Horne, 3 April 2025 | *Port Louis, Mauritius, Bulk Sugar Terminal Quay*, Wikimedia Commons | CC BY 4.0 | `VERIFIED` |
| `SRC-PHOTO-COMMONS-KOR-BUSAN-001` | `ASSET-PH-KOR-BUSAN-001` | Svwmal, 8 April 2012 | *South Korea Busan harbour*, Wikimedia Commons | CC BY-SA 3.0 | `VERIFIED` |
| `SRC-PHOTO-COMMONS-KOR-GYEONGDONG-001` | `ASSET-PH-KOR-GYEONGDONG-001` | Gaël Chardon, 21 April 2008 | *Korea-Seoul-Gyeongdong Market-01*, Wikimedia Commons; originally Flickr | CC BY-SA 2.0 | `VERIFIED` |
| `SRC-PHOTO-COMMONS-MYS-PERAI-001` | `ASSET-PH-MYS-PERAI-001` | HundenvonPenang, 27 January 2024 | *Perai Industrial Zone, Seberang Perai, Penang*, Wikimedia Commons | CC BY-SA 4.0 | `VERIFIED` |
| `SRC-PHOTO-COMMONS-MYS-PORTKLANG-001` | `ASSET-PH-MYS-PORTKLANG-001` | jgmorard, 1 March 2009 | *090301.020.PortKlang*, Wikimedia Commons; originally Flickr | CC BY 2.0 | `VERIFIED` |
| `SRC-PHOTO-COMMONS-PHL-MANILAPORT-001` | `ASSET-PH-PHL-MANILAPORT-001` | Theurbanhistorian, 18 July 2009 | *Port of Manila*, Wikimedia Commons | CC BY-SA 3.0 | `VERIFIED` |
| `SRC-PHOTO-COMMONS-PHL-DAMPA-001` | `ASSET-PH-PHL-DAMPA-001` | george ruiz, 4 January 2013 | *The Philippines — seaside market in Manila*, Wikimedia Commons; originally Flickr | CC BY 2.0 | `VERIFIED` |

## Rights-statement check

The five applicable Creative Commons deeds permit sharing and adaptation, including commercial use, subject to attribution and no additional restrictions. All require appropriate creator credit and a licence link. Version 4.0 requires change indication when modified; the older deeds require change indication for derivatives. The CC BY-SA 4.0, 3.0, and 2.0 images also require an adaptation to be distributed under the same or a compatible ShareAlike licence. The CC BY 4.0 and CC BY 2.0 images have no ShareAlike requirement.

Creative Commons also warns that copyright permission may not supply all permissions needed where publicity, privacy, moral, or similar rights apply. The Commons item pages do not state model releases for the people visible in the market and transport scenes. The new rows therefore preserve PHOTO-001's requirement for contextual, non-demeaning use without endorsement or sensitive-person implications.

## Verification and integrity checks

- Opened all twelve stable Wikimedia Commons item pages and checked displayed creator, date, title/description, source provenance, original-file locator, and licence.
- Opened all five applicable deeds: CC BY-SA 4.0, CC BY-SA 3.0, CC BY-SA 2.0, CC BY 4.0, and CC BY 2.0.
- Compared every integrated ID, creator identity, date, title, stable item URL, direct file URL, and licence against the accepted PHOTO-001 asset row.
- Confirmed the registry diff is append-only: twelve added lines and no deletion or modification of an existing source row.
- Parsed the complete registry as CSV: 97 data rows; 97 unique source IDs; 18 fields in every row; zero malformed rows; zero duplicate IDs.
- Joined PHOTO-001 asset `source_id` values to the source registry: 12 unique asset source IDs, 12 matching registry rows, zero missing IDs.
- Checked all required non-DOI fields in the twelve new rows: zero blanks. DOI is correctly blank for item-level photographs.
- Confirmed every new row is owned by `SRC-005` and carries the honest status `VERIFIED` because both the item record and rights statement were opened.

## Approved

- Approve the twelve new source rows for shared-registry integration review.
- Approve the 85-to-97 append result, subject to Roadmap Controller review.
- Approval is limited to registry integration and source/rights traceability. It is not approval of final crop, page placement, resolution at final size, colour treatment, credit composition, or publication release.

## Revision required

- Before publication, the layout owner must select final images and crops, preserve place/work context, test print resolution, compose displayed credits, link the applicable licence, and identify modifications.
- Any adaptation of a CC BY-SA image must retain the same or a compatible ShareAlike licence as recorded in the registry and accepted asset row.
- The final editorial review must check dignity, non-endorsement, and contextual handling of identifiable people.

## Unresolved

- Model/property-release status is not stated on the relevant Commons item pages. This does not reverse the item-level copyright decisions, but it remains a final-use editorial constraint.
- The Commons record supports “Dampa Seaside Market” and the accepted Metro Manila wording but not a more precise municipality; retain the accepted wording unless an authoritative locator is later approved.
- Final crop, page selection, display size, print reproduction, and classroom-screen performance remain unresolved production decisions outside SRC-005.

## Rejected

- Reject treating this integration approval as final image or page approval.
- Reject removing creator/title/source/licence attribution, omitting change notices, or ignoring ShareAlike on adapted BY-SA images.
- Reject using any photograph as proof of culture, trust, productivity, policy effectiveness, industrial capability, representativeness, or causal development outcomes.
- Reject silently replacing an accepted item, asset ID, source ID, title, URL, or licence term; any future material conflict must return to the rights/controller workflow.
