# Power BI Report Template: Deposits & Loans

This template package provides a ready-to-build structure for a **Deposits & Loans** Power BI report.

## Contents

- `deposits.csv`: Sample deposits fact table.
- `loans.csv`: Sample loans fact table.
- `date.csv`: Shared date dimension.
- `measures.dax`: Reusable DAX measures.
- `report-layout.md`: Suggested report pages and visuals.

## How to use in Power BI Desktop

1. Open **Power BI Desktop**.
2. Load `date.csv`, `deposits.csv`, and `loans.csv` via **Get Data > Text/CSV**.
3. Create relationships:
   - `date[Date]` -> `deposits[Date]` (one-to-many)
   - `date[Date]` -> `loans[Date]` (one-to-many)
4. Create the measures from `measures.dax`.
5. Build report pages using `report-layout.md`.
6. Save as a reusable template using **File > Export > Power BI template** (`.pbit`).

## Data model

- **Dimensions**: `date`
- **Facts**: `deposits`, `loans`

This supports side-by-side KPI and trend analysis for deposit balances, loan balances, growth, and key portfolio metrics.
