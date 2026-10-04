# Data Folder

Store project datasets and chart-ready tables here.

## Suggested structure

```text
data/
├── raw/          # Original downloads, unchanged
├── processed/    # Cleaned and standardised data
├── charts/       # Small chart-specific tables
└── README.md
```

The empty subfolders do not need to be created until data are collected.

## Required metadata

Every dataset should record:

- provider;
- dataset name;
- download URL;
- access date;
- indicator definition;
- unit;
- countries;
- years;
- transformations;
- known breaks or limitations.

## File naming

Use descriptive lowercase names, for example:

```text
world_bank_manufacturing_share_1960_2025.csv
unctad_export_composition_selected_cases.csv
class_survey_anonymised.csv
```

## Rules

- Keep raw downloads unchanged.
- Perform cleaning in a separate processed file.
- Never type values manually into charts without saving the underlying table.
- Do not commit personal or identifiable survey data.
- Label estimated or missing values clearly.
- Record the source for every column.

No final datasets have been added yet.

