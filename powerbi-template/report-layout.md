# Suggested Power BI Report Layout

## Page 1: Executive Overview

**Cards (KPIs)**
- Total Deposits
- Total Loans
- Loan-to-Deposit Ratio %
- NPL Ratio %
- Total Interest Income

**Charts**
- Line chart: Date vs Total Deposits and Total Loans
- Clustered column chart: Date vs Net Deposit Flow and Net Loan Flow

## Page 2: Deposits Analysis

**Filters/Slicers**
- Date (Year/Quarter/Month)
- Branch
- Product
- CustomerSegment

**Visuals**
- Line chart: Total Deposits by Date
- Waterfall chart: New Deposits, Withdrawals, Net Deposit Flow
- Matrix: Branch x Product with Total Deposits and Deposit Growth MoM %

## Page 3: Loans Analysis

**Filters/Slicers**
- Date (Year/Quarter/Month)
- Branch
- LoanType
- CustomerSegment

**Visuals**
- Line chart: Total Loans by Date
- Stacked column chart: Disbursements vs Repayments by Date
- Matrix: Branch x LoanType with Total Loans, NPL Ratio %, Loan Growth MoM %
- Gauge: NPL Ratio % against target (e.g., 3%)

## Page 4: Branch Performance

**Visuals**
- Bar chart: Branch vs Total Deposits and Total Loans
- Scatter plot: Branch (Total Deposits vs Total Loans, bubble size = Total NPL)
- Table: Branch KPI summary (Deposits, Loans, LDR, NPL Ratio, Interest Income)
