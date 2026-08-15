import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputPath = process.argv[2] || "outputs/research-program-batch-8/KAMLESH-Flagship-Commercial-Evidence-Model.xlsx";
const previewDir = process.argv[3] || "outputs/research-program-batch-8/previews";

const NAVY = "#102A43";
const BLUE = "#0057B8";
const TEAL = "#0B7A75";
const GOLD = "#E9B949";
const PALE_BLUE = "#EAF2F8";
const PALE_GOLD = "#FFF4CC";
const PALE_GREEN = "#E8F5E9";
const PALE_RED = "#FDECEC";
const GREY = "#F3F4F6";
const BORDER = "#CBD5E1";
const FORMULA_GREEN = "#008000";

const wb = Workbook.create();
wb.comments.setSelf({ displayName: "KAMLESH & SONS" });

const cover = wb.worksheets.add("Cover");
const sources = wb.worksheets.add("Sources");
const publicInputs = wb.worksheets.add("Public Inputs");
const fieldInputs = wb.worksheets.add("Field Inputs");
const sizing = wb.worksheets.add("Market Sizing");
const capture = wb.worksheets.add("Capture & BE");
const assortment = wb.worksheets.add("Assortment Gate");
const defensibility = wb.worksheets.add("Defensibility");
const checks = wb.worksheets.add("Checks");

function title(sheet, heading, subtitle, lastCol) {
  sheet.showGridLines = false;
  sheet.getRange(`A1:${lastCol}1`).merge();
  sheet.getRange("A1").values = [[heading]];
  sheet.getRange("A1").format = {
    fill: NAVY,
    font: { bold: true, color: "#FFFFFF", size: 18 },
    horizontalAlignment: "left",
    verticalAlignment: "center",
    rowHeight: 34,
  };
  sheet.getRange(`A2:${lastCol}2`).merge();
  sheet.getRange("A2").values = [[subtitle]];
  sheet.getRange("A2").format = {
    fill: PALE_BLUE,
    font: { color: NAVY, italic: true },
    wrapText: true,
    rowHeight: 30,
  };
}

function section(sheet, range, text) {
  sheet.getRange(range).merge();
  sheet.getRange(range.split(":")[0]).values = [[text]];
  sheet.getRange(range).format = {
    fill: TEAL,
    font: { bold: true, color: "#FFFFFF" },
    rowHeight: 22,
  };
}

function header(sheet, range) {
  sheet.getRange(range).format = {
    fill: NAVY,
    font: { bold: true, color: "#FFFFFF" },
    wrapText: true,
    verticalAlignment: "center",
    borders: { preset: "all", style: "thin", color: BORDER },
    rowHeight: 34,
  };
}

function inputStyle(sheet, range) {
  sheet.getRange(range).format = {
    fill: PALE_GOLD,
    font: { color: BLUE },
    borders: { preset: "all", style: "thin", color: BORDER },
  };
}

function formulaStyle(sheet, range, crossSheet = false) {
  sheet.getRange(range).format = {
    fill: GREY,
    font: { color: crossSheet ? FORMULA_GREEN : "#000000" },
    borders: { preset: "all", style: "thin", color: BORDER },
  };
}

function bodyStyle(sheet, range) {
  sheet.getRange(range).format = {
    borders: { preset: "all", style: "thin", color: BORDER },
    verticalAlignment: "top",
  };
}

// Cover
title(cover, "KAMLESH Flagship Commercial Evidence Model", "Evidence-led market sizing, capture, contribution, assortment and defensibility. A model status is never a founder approval.", "H");
cover.getRange("A4:B10").values = [
  ["Workbook version", "0.1.0"],
  ["As of", "2026-08-15"],
  ["Geography", "Nepalgunj resident market plus separately evidenced regional and institutional demand"],
  ["Currency", "NPR; whole rupees unless stated"],
  ["Owner", "Founder until Research, Commercial and Finance owners are appointed"],
  ["Scenario convention", "Low / Base / High; blank means evidence not yet received"],
  ["Decision boundary", "READY FOR FOUNDER REVIEW is not APPROVED"],
];
cover.getRange("A4:A10").format = { fill: TEAL, font: { bold: true, color: "#FFFFFF" }, borders: { preset: "all", style: "thin", color: BORDER } };
bodyStyle(cover, "B4:B10");
section(cover, "A12:H12", "Current model status and key outputs");
cover.getRange("A13:B21").values = [
  ["MODEL STATUS", null],
  ["Public phone scale check / month", null],
  ["Public laptop scale check / month", null],
  ["Triangulated local phone market / month — Base", null],
  ["Month-three phone target — planning hypothesis", null],
  ["Required share of triangulated market", null],
  ["Break-even phones / month — Base", null],
  ["Proposed opening handset cost", null],
  ["Differentiator candidates", null],
];
cover.getRange("B13:B21").formulas = [
  ["='Checks'!B4"],
  ["='Market Sizing'!C7/12"],
  ["='Market Sizing'!C8/12"],
  ["=IF('Market Sizing'!C14=\"\",\"\",'Market Sizing'!C14)"],
  ["='Field Inputs'!E26"],
  ["=IF('Market Sizing'!C15=\"\",\"\",'Market Sizing'!C15)"],
  ["=IF('Capture & BE'!C18=\"\",\"\",'Capture & BE'!C18)"],
  ["=IF(COUNTA('Assortment Gate'!A7:A66)=0,\"\",SUM('Assortment Gate'!U7:U66))"],
  ["=COUNTIF('Defensibility'!M7:M18,\"DIFFERENTIATOR CANDIDATE\")"],
];
cover.getRange("A13:A21").format = { fill: PALE_BLUE, font: { bold: true, color: NAVY }, borders: { preset: "all", style: "thin", color: BORDER } };
formulaStyle(cover, "B13:B21", true);
cover.getRange("B14:B16").setNumberFormat("#,##0;[Red](#,##0);-");
cover.getRange("B17:B17").setNumberFormat("#,##0;[Red](#,##0);-");
cover.getRange("B18:B18").setNumberFormat("0.0%;[Red](0.0%);-");
cover.getRange("B19:B19").setNumberFormat("#,##0;[Red](#,##0);-");
cover.getRange("B20:B20").setNumberFormat("#,##0;[Red](#,##0);-");
section(cover, "A23:H23", "How to use");
cover.getRange("A24:H30").merge(true);
cover.getRange("A24:A30").values = [
  ["1. Preserve Public Inputs as source-backed values; update only when a newer official source is logged."],
  ["2. Load comparable field evidence into Low/Base/High cells. Blank is more honest than an invented number."],
  ["3. Review each sizing method separately before using the optional triangulation comparison."],
  ["4. Enter exact SKU evidence in Assortment Gate; no weighted score overrides authorisation, warranty, cash or demand gates."],
  ["5. Score defensibility only after customer, competitor, contribution and repeatability evidence exists."],
  ["6. Resolve every Checks item before founder review. Founder approval stays in the decision system, not this workbook."],
  ["Legend: blue text/yellow fill = editable input; green text/grey fill = cross-sheet formula; black text/grey fill = local formula."],
];
cover.getRange("A24:H30").format = { wrapText: true, rowHeight: 24, borders: { preset: "all", style: "thin", color: BORDER } };
cover.getRange("A:H").format.columnWidth = 16;
cover.getRange("A:A").format.columnWidth = 52;
cover.getRange("B:B").format.columnWidth = 28;
cover.getRange("C:H").format.columnWidth = 18;

// Sources
title(sources, "Sources and Audit Log", "Primary sources define public inputs. Local commercial evidence must be dated and attached before it changes a decision case.", "J");
sources.getRange("A5:J5").values = [["Source ID", "Topic", "Value / use", "Units", "Period / as-of", "Evidence label", "Source name", "URL / repository ref", "Limitation", "Accessed"]];
header(sources, "A5:J5");
sources.getRange("A6:J15").values = [
  ["S001", "Nepal population", 29164578, "persons", "2021", "V", "NSO NPHC 2021 national report", "https://data.nsonepal.gov.np/dataset/a6e2cfed-dddd-4deb-8053-0b608094b47d/resource/e113b03f-ea64-488b-9f37-00e8ebe537fc/download/national-report_-national-population-and-housing-census-2021.pdf", "Population denominator is older than FY 2082/83 imports", "2026-08-15"],
  ["S002", "Nepalgunj population and households", "164,444 people; 34,565 households", "count", "2021", "V", "Nepalgunj Sub-Metropolitan City / NSO census", "https://www.nepalgunjmun.gov.np/ne/node/140", "Resident scale; not retail demand", "2026-08-15"],
  ["S003", "Household technology access", "25,535 smartphone; 6,347 computer/laptop; 16,335 home internet households", "households", "2021", "V", "NSO household facilities", "https://censusresults.nsonepal.gov.np/files/longform-dataset/Hhld10_HouseholdFacility.csv", "Installed-base indicator; not unit ownership or annual sales", "2026-08-15"],
  ["S004", "National device imports", "2,267,419 smartphones; 154,991 laptops; 32,727 tablets", "units", "FY 2082/83", "V", "Department of Customs annual commodity workbook", "https://customs.gov.np/content/450/foreign-trade-statistics-came-208-83/", "Preliminary national imports; not local retail sell-through", "2026-08-15"],
  ["S005", "National device import value", "NPR 48.69bn smartphones; NPR 11.14bn laptops", "NPR", "FY 2082/83", "V", "Department of Customs annual commodity workbook", "https://giwmscdnone.gov.np/media/files/FTS_Upto_Ashadh_82_83_gdfkmo9.xlsx", "Customs value before distribution/retail economics", "2026-08-15"],
  ["S006", "Telecom context", "Current monthly MIS series", "subscriptions", "Ashadh 2083", "V", "Nepal Telecommunications Authority", "https://www.nta.gov.np/mispdf", "Subscriptions are not unique people/devices or retail purchases", "2026-08-15"],
  ["S007", "Establishment frame", "National Economic Census resources", "establishments", "2018", "V", "National Statistics Office", "https://data.nsonepal.gov.np/en/dataset/nepal-economic-census-2018", "Old structural frame; cannot establish 2026 active phone/laptop retailers", "2026-08-15"],
  ["S008", "Survey methods", "Pretest, transparent recruitment and disclosure", "method", "current", "V", "AAPOR", "https://aapor.org/standards-and-ethics/best-practices/", "Method standard does not make a purposive sample representative", "2026-08-15"],
  ["S009", "Integrated research", "Canonical synthesis and gate definitions", "document", "2026-08-15", "H/E/V mixed", "RESEARCH-FLAGSHIP-001", "docs/research/integrated-market-size-assortment-and-flagship-defensibility.md", "Founder decisions remain separate", "2026-08-15"],
  ["S010", "Field programme", "Comparable sell-through, customer, competitor, institutional and pilot evidence", "method", "2026-08-15", "Open", "EVD-NPJ-FLAGSHIP-004", "docs/evidence/nepalgunj-mobile-flagship/field-validation-and-research-marketing-plan.md", "No field item is complete merely because the method is documented", "2026-08-15"],
];
bodyStyle(sources, "A6:J15");
sources.getRange("C6:C15").format.wrapText = true;
sources.getRange("G6:J15").format.wrapText = true;
sources.getRange("A:J").format.columnWidth = 15;
sources.getRange("B:B").format.columnWidth = 24;
sources.getRange("C:C").format.columnWidth = 34;
sources.getRange("G:G").format.columnWidth = 28;
sources.getRange("H:H").format.columnWidth = 50;
sources.getRange("I:I").format.columnWidth = 38;
sources.getRange("A6:J15").format.rowHeight = 52;
sources.freezePanes.freezeRows(5);

// Public inputs
title(publicInputs, "Verified Public Inputs", "Values below are source-backed context. Calculated proxies remain estimates and never become local demand facts.", "H");
publicInputs.getRange("A5:H5").values = [["Input ID", "Metric", "Value", "Unit", "Period", "Label", "Source ID", "Limitation"]];
header(publicInputs, "A5:H5");
publicInputs.getRange("A7:H17").values = [
  ["P001", "Nepal population", 29164578, "persons", "2021", "V", "S001", "Denominator is older than current imports"],
  ["P002", "Nepalgunj population", 164444, "persons", "2021", "V", "S002", "Resident population; excludes evidenced catchment"],
  ["P003", "Nepalgunj households", 34565, "households", "2021", "V", "S002", "Sampling frame; not buyer count"],
  ["P004", "Households with smartphone", 25535, "households", "2021", "V", "S003", "At least one; not number of devices"],
  ["P005", "Households with computer/laptop", 6347, "households", "2021", "V", "S003", "Installed base; not current demand"],
  ["P006", "Households with home internet", 16335, "households", "2021", "V", "S003", "Access context; not device purchase"],
  ["P007", "National smartphone imports", 2267419, "units", "FY 2082/83", "V", "S004", "Preliminary national imports"],
  ["P008", "National laptop/notebook imports", 154991, "units", "FY 2082/83", "V", "S004", "Preliminary national imports"],
  ["P009", "National tablet imports", 32727, "units", "FY 2082/83", "V", "S004", "Preliminary national imports"],
  ["P010", "National smartphone import value", 48690000000, "NPR", "FY 2082/83", "V", "S005", "Customs value, not retail sales"],
  ["P011", "National laptop import value", 11140000000, "NPR", "FY 2082/83", "V", "S005", "Customs value, not retail sales"],
];
bodyStyle(publicInputs, "A7:H17");
publicInputs.getRange("C7:C17").setNumberFormat("#,##0;[Red](#,##0);-");
publicInputs.getRange("A:H").format.columnWidth = 16;
publicInputs.getRange("B7:B17").format.columnWidth = 42;
publicInputs.getRange("H7:H17").format.columnWidth = 48;
publicInputs.getRange("A7:H17").format.rowHeight = 22;
publicInputs.freezePanes.freezeRows(5);

// Field inputs
title(fieldInputs, "Field and Planning Inputs", "Blue inputs must carry a date, evidence label and reference. Planning hypotheses are not observed market evidence.", "M");
fieldInputs.getRange("A5:M5").values = [["Input ID", "Workstream", "Metric", "Low", "Base", "High", "Unit", "Evidence label", "Period / as-of", "Source / reference", "Owner", "Status", "Notes"]];
header(fieldInputs, "A5:M5");
const fieldRows = [
  ["F001", "Local demand", "Comparable observed seller/distributor phone units — 30 days", null, null, null, "units/month", "Open", "", "", "Research", "Open", "Deduplicate distributor-to-retailer units"],
  ["F002", "Local demand", "Documented coverage share of in-scope local phone market", null, null, null, "%", "Open", "", "", "Research", "Open", "A guess is not coverage evidence"],
  ["F003", "Replacement", "Addressable smartphone users in defined geography", null, null, null, "users", "Open", "", "", "Research", "Open", "Requires probability-oriented evidence for population estimate"],
  ["F004", "Replacement", "Annual phone purchase/replacement rate", null, null, null, "%/year", "Open", "", "", "Research", "Open", "Do not derive from household access"],
  ["F005", "Channel", "In-scope official/authorised purchase share", null, null, null, "%", "Open", "", "", "Research", "Open", "Local share unknown"],
  ["F006", "Institutional", "Institutional phone units — annual, deduplicated", null, null, null, "units/year", "Open", "", "", "Research", "Open", "Separate confirmed, planned and verbal"],
  ["F007", "Catchment", "Regional nonresident phone units — annual, not already counted", null, null, null, "units/year", "Open", "", "", "Research", "Open", "Origin-linked transactions only"],
  ["F008", "Store funnel", "K&S qualified phone visits — month three", null, null, null, "visits/month", "Open", "", "", "Commercial", "Open", "Pilot/site evidence"],
  ["F009", "Store funnel", "Qualified-visit conversion rate", null, null, null, "%", "Open", "", "", "Commercial", "Open", "Completed sales divided by qualified visits"],
  ["F010", "Contribution", "Average realized phone selling price", null, null, null, "NPR/unit", "Open", "", "", "Finance", "Open", "Net of discount; VAT treatment consistent"],
  ["F011", "Contribution", "Realized phone gross margin rate", null, null, null, "%", "Open", "", "", "Finance", "Open", "After promotion obligations"],
  ["F012", "Contribution", "Accessory attachment rate", null, null, null, "% of phone sales", "Open", "", "", "Commercial", "Open", "Transaction evidence"],
  ["F013", "Contribution", "Average attached-accessory revenue", null, null, null, "NPR/attached sale", "Open", "", "", "Finance", "Open", "Net sales value"],
  ["F014", "Contribution", "Realized accessory gross margin rate", null, null, null, "%", "Open", "", "", "Finance", "Open", "After returns, installation and shrink"],
  ["F015", "Service", "Ownership-support cases per month", null, null, null, "cases/month", "Open", "", "", "Service", "Open", "Only completed cases"],
  ["F016", "Service", "Contribution per completed ownership-support case", null, null, null, "NPR/case", "Open", "", "", "Finance", "Open", "After partner, staff, courier and risk reserve"],
  ["F017", "Fixed cost", "Fully loaded monthly operating cost", null, null, null, "NPR/month", "Open", "", "", "Finance", "Open", "Rent, payroll, utilities, marketing and overhead"],
  ["F018", "Finance", "Monthly interest and BG/finance cost", null, null, null, "NPR/month", "Open", "", "", "Finance", "Open", "Sanction and actual utilization"],
  ["F019", "Risk", "Monthly discount/warranty/return/shrink reserve", null, null, null, "NPR/month", "Open", "", "", "Finance", "Open", "Evidence-backed reserve"],
  ["F020", "Planning hypothesis", "Month-three phone target", null, 70, null, "units/month", "H", "2026 plan", "EVD-NPJ-FLAGSHIP-005", "Founder", "Unapproved", "Not a market finding"],
  ["F021", "Planning hypothesis", "Year-one phone target", null, 1070, null, "units/year", "H", "2026 plan", "EVD-NPJ-FLAGSHIP-005", "Founder", "Unapproved", "Not a forecast"],
  ["F022", "Inventory hypothesis", "Maximum opening days cover", null, 45, null, "days", "H", "2026 plan", "EVD-NPJ-FLAGSHIP-005", "Founder", "Unapproved", "Replace through live lead-time and volatility evidence"],
  ["F023", "Inventory hypothesis", "Minimum 30-day sell-through for stocked candidate", null, 0.7, null, "%", "H", "2026 plan", "EVD-NPJ-FLAGSHIP-005", "Founder", "Unapproved", "Order-led rows use a different route"],
  ["F024", "Concentration hypothesis", "Maximum one-brand handset capital share", null, 0.3333333333, null, "%", "H", "2026 plan", "EVD-NPJ-FLAGSHIP-005", "Founder", "Unapproved", "Portfolio guardrail"],
  ["F025", "Concentration hypothesis", "Maximum handset capital above NPR 100,000", null, 0.1, null, "%", "H", "2026 plan", "EVD-NPJ-FLAGSHIP-005", "Founder", "Unapproved", "Premium exposure guardrail"],
  ["F026", "Margin hypothesis", "Minimum realized handset gross margin", null, 0.05, null, "%", "H", "2026 plan", "EVD-NPJ-FLAGSHIP-001", "Founder", "Unapproved", "Must be tested after all obligations"],
  ["F027", "Defensibility hypothesis", "Differentiator candidate total-score threshold", null, 24, null, "points/40", "H", "2026 model", "RESEARCH-FLAGSHIP-001", "Founder", "Unapproved", "No score overrides customer, contribution or risk gates"],
];
fieldInputs.getRange("A7:M33").values = fieldRows;
bodyStyle(fieldInputs, "A7:M33");
inputStyle(fieldInputs, "D7:F33");
inputStyle(fieldInputs, "H7:M33");
fieldInputs.getRange("D7:F33").setNumberFormat("#,##0.0;[Red](#,##0.0);-");
fieldInputs.getRange("D8:F8").setNumberFormat("0.0%;[Red](0.0%);-");
fieldInputs.getRange("D10:F11").setNumberFormat("0.0%;[Red](0.0%);-");
fieldInputs.getRange("D15:F15").setNumberFormat("0.0%;[Red](0.0%);-");
fieldInputs.getRange("D17:F18").setNumberFormat("0.0%;[Red](0.0%);-");
fieldInputs.getRange("D20:F20").setNumberFormat("0.0%;[Red](0.0%);-");
fieldInputs.getRange("D29:F32").setNumberFormat("0.0%;[Red](0.0%);-");
fieldInputs.getRange("H7:H33").dataValidation = { rule: { type: "list", values: ["V", "P", "S", "E", "H", "D", "Open"] } };
fieldInputs.getRange("L7:L33").dataValidation = { rule: { type: "list", values: ["Open", "Received", "Validated", "Rejected", "Expired", "Unapproved"] } };
fieldInputs.getRange("A:M").format.columnWidth = 15;
fieldInputs.getRange("B:B").format.columnWidth = 23;
fieldInputs.getRange("C:C").format.columnWidth = 45;
fieldInputs.getRange("J:J").format.columnWidth = 32;
fieldInputs.getRange("M:M").format.columnWidth = 42;
fieldInputs.getRange("A7:M33").format.wrapText = true;
fieldInputs.freezePanes.freezeRows(5);
fieldInputs.freezePanes.freezeColumns(3);

// Market sizing
title(sizing, "Market Sizing Triangulation", "Public pro-rata results are reasonableness checks. A local market case requires at least two independent, evidence-backed methods.", "F");
sizing.getRange("A5:F5").values = [["Metric", "Low", "Base", "High", "Unit", "Interpretation / gate"]];
header(sizing, "A5:F5");
sizing.getRange("A7:A16").values = [
  ["Public phone pro-rata scale check — annual"],
  ["Public laptop pro-rata scale check — annual"],
  [""],
  ["Method B: comparable sell-through coverage — annual phones"],
  ["Method C: replacement + institutional + incremental catchment — annual phones"],
  [""],
  ["Optional triangulated comparison — annual phones"],
  ["Optional triangulated comparison — monthly phones"],
  ["Month-three target / triangulated monthly market"],
  ["Year-one target / triangulated annual market"],
];
sizing.getRange("B7:D7").formulas = [["='Public Inputs'!$C$13*'Public Inputs'!$C$8/'Public Inputs'!$C$7", "='Public Inputs'!$C$13*'Public Inputs'!$C$8/'Public Inputs'!$C$7", "='Public Inputs'!$C$13*'Public Inputs'!$C$8/'Public Inputs'!$C$7"]];
sizing.getRange("B8:D8").formulas = [["='Public Inputs'!$C$14*'Public Inputs'!$C$8/'Public Inputs'!$C$7", "='Public Inputs'!$C$14*'Public Inputs'!$C$8/'Public Inputs'!$C$7", "='Public Inputs'!$C$14*'Public Inputs'!$C$8/'Public Inputs'!$C$7"]];
sizing.getRange("B10:D10").formulas = [["=IF(OR('Field Inputs'!D7=\"\",'Field Inputs'!D8<=0),\"\",'Field Inputs'!D7/'Field Inputs'!D8*12)", "=IF(OR('Field Inputs'!E7=\"\",'Field Inputs'!E8<=0),\"\",'Field Inputs'!E7/'Field Inputs'!E8*12)", "=IF(OR('Field Inputs'!F7=\"\",'Field Inputs'!F8<=0),\"\",'Field Inputs'!F7/'Field Inputs'!F8*12)"]];
sizing.getRange("B11:D11").formulas = [["=IF(COUNT('Field Inputs'!D9:D13)<5,\"\",'Field Inputs'!D9*'Field Inputs'!D10*'Field Inputs'!D11+'Field Inputs'!D12+'Field Inputs'!D13)", "=IF(COUNT('Field Inputs'!E9:E13)<5,\"\",'Field Inputs'!E9*'Field Inputs'!E10*'Field Inputs'!E11+'Field Inputs'!E12+'Field Inputs'!E13)", "=IF(COUNT('Field Inputs'!F9:F13)<5,\"\",'Field Inputs'!F9*'Field Inputs'!F10*'Field Inputs'!F11+'Field Inputs'!F12+'Field Inputs'!F13)"]];
sizing.getRange("B13:D13").formulas = [["=IF(COUNT(B10:B11)<2,\"\",MIN(B10:B11))", "=IF(COUNT(C10:C11)<2,\"\",AVERAGE(C10:C11))", "=IF(COUNT(D10:D11)<2,\"\",MAX(D10:D11))"]];
sizing.getRange("B14:D14").formulas = [["=IF(B13=\"\",\"\",B13/12)", "=IF(C13=\"\",\"\",C13/12)", "=IF(D13=\"\",\"\",D13/12)"]];
sizing.getRange("B15:D15").formulas = [["=IF(B14=\"\",\"\",'Field Inputs'!$E$26/B14)", "=IF(C14=\"\",\"\",'Field Inputs'!$E$26/C14)", "=IF(D14=\"\",\"\",'Field Inputs'!$E$26/D14)"]];
sizing.getRange("B16:D16").formulas = [["=IF(B13=\"\",\"\",'Field Inputs'!$E$27/B13)", "=IF(C13=\"\",\"\",'Field Inputs'!$E$27/C13)", "=IF(D13=\"\",\"\",'Field Inputs'!$E$27/D13)"]];
sizing.getRange("E7:F16").values = [
  ["units/year", "E only: uniform per-capita allocation; not local TAM"],
  ["units/year", "E only: weak local laptop proxy"],
  ["", ""],
  ["units/year", "Requires comparable observed units and documented coverage"],
  ["units/year", "Requires addressable users, replacement rate, channel, institutional and deduplicated catchment evidence"],
  ["", ""],
  ["units/year", "Comparison convention only; investigate method disagreement"],
  ["units/month", "Use only when both methods are evidence-backed"],
  ["%", "Planning target share; not observed market share"],
  ["%", "Planning target share; not observed market share"],
];
formulaStyle(sizing, "B7:D16", true);
bodyStyle(sizing, "A7:A16");
bodyStyle(sizing, "E7:F16");
sizing.getRange("B7:D14").setNumberFormat("#,##0;[Red](#,##0);-");
sizing.getRange("B15:D16").setNumberFormat("0.0%;[Red](0.0%);-");
sizing.getRange("A:A").format.columnWidth = 52;
sizing.getRange("B:D").format.columnWidth = 16;
sizing.getRange("E:E").format.columnWidth = 16;
sizing.getRange("F:F").format.columnWidth = 58;
sizing.getRange("A7:F16").format.wrapText = true;

// Capture and break-even
title(capture, "Store Capture and Break-Even Bridge", "Market, funnel and contribution must support the same volume. Blank outputs mean required field/commercial evidence is missing.", "F");
capture.getRange("A5:F5").values = [["Metric", "Low", "Base", "High", "Unit", "Interpretation"]];
header(capture, "A5:F5");
capture.getRange("A7:A21").values = [
  ["Serviceable market units / month"],
  ["Month-three target"],
  ["Funnel sales capacity"],
  ["Evidence-limited achievable units"],
  [""],
  ["Average phone selling price"],
  ["Phone gross contribution / unit"],
  ["Accessory contribution / phone sale"],
  ["Total variable contribution / phone sale"],
  ["Ownership-support contribution / month"],
  ["Fixed + finance + risk cost / month"],
  ["Break-even phones / month"],
  ["Operating contribution at achievable units"],
  ["Unit headroom over break-even"],
  ["Scenario status"],
];
capture.getRange("B7:D7").formulas = [["=IF('Market Sizing'!B14=\"\",\"\",'Market Sizing'!B14)", "=IF('Market Sizing'!C14=\"\",\"\",'Market Sizing'!C14)", "=IF('Market Sizing'!D14=\"\",\"\",'Market Sizing'!D14)"]];
capture.getRange("B8:D8").formulas = [["='Field Inputs'!$E$26", "='Field Inputs'!$E$26", "='Field Inputs'!$E$26"]];
capture.getRange("B9:D9").formulas = [["=IF(COUNT('Field Inputs'!D14:D15)<2,\"\",'Field Inputs'!D14*'Field Inputs'!D15)", "=IF(COUNT('Field Inputs'!E14:E15)<2,\"\",'Field Inputs'!E14*'Field Inputs'!E15)", "=IF(COUNT('Field Inputs'!F14:F15)<2,\"\",'Field Inputs'!F14*'Field Inputs'!F15)"]];
capture.getRange("B10:D10").formulas = [["=IF(COUNT(B7:B9)<3,\"\",MIN(B7:B9))", "=IF(COUNT(C7:C9)<3,\"\",MIN(C7:C9))", "=IF(COUNT(D7:D9)<3,\"\",MIN(D7:D9))"]];
capture.getRange("B12:D12").formulas = [["=IF('Field Inputs'!D16=\"\",\"\",'Field Inputs'!D16)", "=IF('Field Inputs'!E16=\"\",\"\",'Field Inputs'!E16)", "=IF('Field Inputs'!F16=\"\",\"\",'Field Inputs'!F16)"]];
capture.getRange("B13:D13").formulas = [["=IF(COUNT('Field Inputs'!D16:D17)<2,\"\",'Field Inputs'!D16*'Field Inputs'!D17)", "=IF(COUNT('Field Inputs'!E16:E17)<2,\"\",'Field Inputs'!E16*'Field Inputs'!E17)", "=IF(COUNT('Field Inputs'!F16:F17)<2,\"\",'Field Inputs'!F16*'Field Inputs'!F17)"]];
capture.getRange("B14:D14").formulas = [["=IF(COUNT('Field Inputs'!D18:D20)<3,\"\",'Field Inputs'!D18*'Field Inputs'!D19*'Field Inputs'!D20)", "=IF(COUNT('Field Inputs'!E18:E20)<3,\"\",'Field Inputs'!E18*'Field Inputs'!E19*'Field Inputs'!E20)", "=IF(COUNT('Field Inputs'!F18:F20)<3,\"\",'Field Inputs'!F18*'Field Inputs'!F19*'Field Inputs'!F20)"]];
capture.getRange("B15:D15").formulas = [["=IF(COUNT(B13:B14)<2,\"\",SUM(B13:B14))", "=IF(COUNT(C13:C14)<2,\"\",SUM(C13:C14))", "=IF(COUNT(D13:D14)<2,\"\",SUM(D13:D14))"]];
capture.getRange("B16:D16").formulas = [["=IF(COUNT('Field Inputs'!D21:D22)<2,\"\",'Field Inputs'!D21*'Field Inputs'!D22)", "=IF(COUNT('Field Inputs'!E21:E22)<2,\"\",'Field Inputs'!E21*'Field Inputs'!E22)", "=IF(COUNT('Field Inputs'!F21:F22)<2,\"\",'Field Inputs'!F21*'Field Inputs'!F22)"]];
capture.getRange("B17:D17").formulas = [["=IF(COUNT('Field Inputs'!D23:D25)<3,\"\",SUM('Field Inputs'!D23:D25))", "=IF(COUNT('Field Inputs'!E23:E25)<3,\"\",SUM('Field Inputs'!E23:E25))", "=IF(COUNT('Field Inputs'!F23:F25)<3,\"\",SUM('Field Inputs'!F23:F25))"]];
capture.getRange("B18:D18").formulas = [["=IF(OR(B15<=0,B17=\"\",B16=\"\"),\"\",MAX(0,(B17-B16)/B15))", "=IF(OR(C15<=0,C17=\"\",C16=\"\"),\"\",MAX(0,(C17-C16)/C15))", "=IF(OR(D15<=0,D17=\"\",D16=\"\"),\"\",MAX(0,(D17-D16)/D15))"]];
capture.getRange("B19:D19").formulas = [["=IF(COUNT(B10,B15:B17)<4,\"\",B10*B15+B16-B17)", "=IF(COUNT(C10,C15:C17)<4,\"\",C10*C15+C16-C17)", "=IF(COUNT(D10,D15:D17)<4,\"\",D10*D15+D16-D17)"]];
capture.getRange("B20:D20").formulas = [["=IF(COUNT(B10,B18)<2,\"\",B10-B18)", "=IF(COUNT(C10,C18)<2,\"\",C10-C18)", "=IF(COUNT(D10,D18)<2,\"\",D10-D18)"]];
capture.getRange("B21:D21").formulas = [["=IF(B20=\"\",\"INPUT REQUIRED\",IF(B20>=0,\"EVIDENCE CASE COVERS COST\",\"INSUFFICIENT\"))", "=IF(C20=\"\",\"INPUT REQUIRED\",IF(C20>=0,\"EVIDENCE CASE COVERS COST\",\"INSUFFICIENT\"))", "=IF(D20=\"\",\"INPUT REQUIRED\",IF(D20>=0,\"EVIDENCE CASE COVERS COST\",\"INSUFFICIENT\"))"]];
capture.getRange("E7:F21").values = [
  ["units/month", "From triangulated market; not available until two methods"], ["units/month", "Planning hypothesis"], ["units/month", "Qualified visits × observed conversion"], ["units/month", "Minimum of market, funnel and target"], ["", ""], ["NPR/unit", "Realized net selling price"], ["NPR/unit", "ASP × realized phone gross margin"], ["NPR/phone", "Attachment × attached revenue × realized margin"], ["NPR/phone", "Phone plus accessory contribution"], ["NPR/month", "Completed cases × contribution/case"], ["NPR/month", "Fully loaded cost plus finance and risk reserve"], ["units/month", "Contribution-based requirement"], ["NPR/month", "Before tax and principal repayment unless loaded in inputs"], ["units/month", "Must be nonnegative in approved downside case"], ["status", "Not a founder decision"]
];
formulaStyle(capture, "B7:D21", true);
bodyStyle(capture, "A7:A21");
bodyStyle(capture, "E7:F21");
capture.getRange("B7:D10").setNumberFormat("#,##0.0;[Red](#,##0.0);-");
capture.getRange("B12:D20").setNumberFormat("#,##0;[Red](#,##0);-");
capture.getRange("A:A").format.columnWidth = 44;
capture.getRange("B:D").format.columnWidth = 18;
capture.getRange("E:E").format.columnWidth = 18;
capture.getRange("F:F").format.columnWidth = 52;
capture.getRange("A7:F21").format.wrapText = true;

// Assortment gate
title(assortment, "SKU-Level Assortment Gate", "Enter exact SKU/variant evidence. Candidate means evidence-ready for review, never authorised to purchase.", "AF");
const assortmentHeaders = ["SKU / variant", "Category", "Brand", "Price band", "Role", "Authorised source", "Warranty/DOA", "Customer evidence n", "Comparable 30d units", "Unit cost", "Net ASP", "Gross margin", "Lead time days", "Credit days", "Price protection", "Rotation", "MOQ", "Display/demo units", "Planned sale units", "Opening units", "Opening cost", "Forecast 30d sales", "30d sell-through", "Days cover", "Risk reserve/unit", "Forecast net contribution", "Demand gate", "Commercial gate", "Overall status", "Proposed treatment", "Evidence reference", "Owner"];
assortment.getRange("A5:AF5").values = [assortmentHeaders];
header(assortment, "A5:AF5");
inputStyle(assortment, "A7:K66");
inputStyle(assortment, "M7:S66");
inputStyle(assortment, "V7:V66");
inputStyle(assortment, "Y7:Y66");
inputStyle(assortment, "AE7:AF66");
formulaStyle(assortment, "L7:L66");
formulaStyle(assortment, "T7:U66");
formulaStyle(assortment, "W7:X66");
formulaStyle(assortment, "Z7:AD66", true);
assortment.getRange("L7").formulas = [["=IF(OR(A7=\"\",K7<=0),\"\",(K7-J7)/K7)"]];
assortment.getRange("L7:L66").fillDown();
assortment.getRange("T7").formulas = [["=IF(A7=\"\",\"\",R7+S7)"]];
assortment.getRange("T7:T66").fillDown();
assortment.getRange("U7").formulas = [["=IF(A7=\"\",\"\",T7*J7)"]];
assortment.getRange("U7:U66").fillDown();
assortment.getRange("W7").formulas = [["=IF(OR(A7=\"\",S7<=0),\"\",MIN(V7/S7,1))"]];
assortment.getRange("W7:W66").fillDown();
assortment.getRange("X7").formulas = [["=IF(OR(A7=\"\",V7<=0),\"\",S7/V7*30)"]];
assortment.getRange("X7:X66").fillDown();
assortment.getRange("Z7").formulas = [["=IF(A7=\"\",\"\",V7*(K7-J7-Y7))"]];
assortment.getRange("Z7:Z66").fillDown();
assortment.getRange("AA7").formulas = [["=IF(A7=\"\",\"\",IF(AND(H7>0,V7>0),\"Pass\",\"Hold\"))"]];
assortment.getRange("AA7:AA66").fillDown();
assortment.getRange("AB7").formulas = [["=IF(A7=\"\",\"\",IF(AND(F7=\"Pass\",G7=\"Pass\",K7>J7,OR(O7=\"Pass\",P7=\"Pass\",E7=\"Order-led\",E7=\"Demo/order-led\")),\"Pass\",\"Hold\"))"]];
assortment.getRange("AB7:AB66").fillDown();
assortment.getRange("AC7").formulas = [["=IF(A7=\"\",\"\",IF(AND(AA7=\"Pass\",AB7=\"Pass\",L7>='Field Inputs'!$E$32,OR(E7=\"Order-led\",E7=\"Demo/order-led\",W7>='Field Inputs'!$E$29)),\"CANDIDATE\",\"HOLD\"))"]];
assortment.getRange("AC7:AC66").fillDown();
assortment.getRange("AD7").formulas = [["=IF(A7=\"\",\"\",IF(AC7=\"CANDIDATE\",IF(OR(E7=\"Order-led\",E7=\"Demo/order-led\"),\"DEMO / ORDER ROUTE\",\"STOCK CANDIDATE\"),\"HOLD / REWORK\"))"]];
assortment.getRange("AD7:AD66").fillDown();
assortment.getRange("B7:B66").dataValidation = { rule: { type: "list", values: ["Phone", "Laptop", "Tablet", "Accessory", "Wearable", "Feature phone", "Service tool"] } };
assortment.getRange("E7:E66").dataValidation = { rule: { type: "list", values: ["Core stocked", "Shallow stocked", "Demo/order-led", "Order-led", "Partner/service-led", "Reject/pause"] } };
assortment.getRange("F7:G66").dataValidation = { rule: { type: "list", values: ["Pass", "Hold", "Fail", "Unverified"] } };
assortment.getRange("O7:P66").dataValidation = { rule: { type: "list", values: ["Pass", "Hold", "Fail", "Not offered", "Unverified"] } };
assortment.getRange("J7:K66").setNumberFormat("#,##0;[Red](#,##0);-");
assortment.getRange("L7:L66").setNumberFormat("0.0%;[Red](0.0%);-");
assortment.getRange("U7:U66").setNumberFormat("#,##0;[Red](#,##0);-");
assortment.getRange("W7:W66").setNumberFormat("0.0%;[Red](0.0%);-");
assortment.getRange("X7:X66").setNumberFormat("#,##0.0;[Red](#,##0.0);-");
assortment.getRange("Y7:Z66").setNumberFormat("#,##0;[Red](#,##0);-");
assortment.getRange("A:AF").format.columnWidth = 15;
assortment.getRange("A:E").format.columnWidth = 18;
assortment.getRange("AE:AE").format.columnWidth = 32;
assortment.getRange("A5:AF66").format.wrapText = true;
assortment.freezePanes.freezeRows(5);
assortment.freezePanes.freezeColumns(5);

// Defensibility
title(defensibility, "Flagship Defensibility Evidence", "Score 0–5 only after evidence exists. Public absence is not competitor rarity; a total score never overrides customer, contribution, repeatability or risk controls.", "O");
defensibility.getRange("A5:O5").values = [["Initiative", "Desk class", "Problem severity", "Observed lift", "Competitor rarity", "Positive contribution", "Repeatability", "Copy difficulty", "Learning benefit", "Risk control", "Evidence complete?", "Total / 40", "Classification", "Evidence reference", "Owner"]];
header(defensibility, "A5:O5");
defensibility.getRange("A7:B18").values = [
  ["Authorised product, invoice and warranty", "Table stake"],
  ["Transparent price and EMI access", "Table stake"],
  ["Trade-in availability", "Table stake"],
  ["Decision Confidence Record", "System component"],
  ["One True Cost Sheet", "System component"],
  ["Verified Handover", "System component"],
  ["Privacy-Safe Migration Record", "System component"],
  ["K&S Case Ownership", "System component"],
  ["Transparent Upgrade Path", "System component"],
  ["Consented Service Continuity", "System component"],
  ["Assortment Learning Loop", "System component"],
  ["Premium interior, hospitality and packaging", "Supporting element"],
];
bodyStyle(defensibility, "A7:B18");
inputStyle(defensibility, "C7:K18");
inputStyle(defensibility, "N7:O18");
formulaStyle(defensibility, "L7:M18", true);
defensibility.getRange("L7").formulas = [["=IF(COUNT(C7:J7)<8,\"\",SUM(C7:J7))"]];
defensibility.getRange("L7:L18").fillDown();
defensibility.getRange("M7").formulas = [["=IF(A7=\"\",\"\",IF(B7=\"Table stake\",\"TABLE STAKE\",IF(K7<>\"Yes\",\"EXPERIMENT / INPUT REQUIRED\",IF(OR(C7<3,F7<3,G7<3,J7<3),\"HOLD\",IF(L7>='Field Inputs'!$E$33,\"DIFFERENTIATOR CANDIDATE\",\"EXPERIMENT\")))))"]];
defensibility.getRange("M7:M18").fillDown();
defensibility.getRange("C7:J18").dataValidation = { rule: { type: "whole", operator: "between", formula1: 0, formula2: 5 } };
defensibility.getRange("K7:K18").dataValidation = { rule: { type: "list", values: ["No", "Yes"] } };
defensibility.getRange("A:O").format.columnWidth = 16;
defensibility.getRange("A:A").format.columnWidth = 38;
defensibility.getRange("B:B").format.columnWidth = 20;
defensibility.getRange("M:M").format.columnWidth = 30;
defensibility.getRange("N:N").format.columnWidth = 34;
defensibility.getRange("A5:O18").format.wrapText = true;

// Checks
title(checks, "Model Checks", "RESEARCH OPEN is expected while required field inputs are blank. READY FOR FOUNDER REVIEW still does not approve the flagship.", "G");
checks.getRange("A4:B4").values = [["MODEL STATUS", null]];
checks.getRange("B4").formulas = [["=IF(COUNTIF(F7:F14,\"REVIEW\")>0,\"RESEARCH OPEN\",\"READY FOR FOUNDER REVIEW\")"]];
checks.getRange("A4").format = { fill: NAVY, font: { bold: true, color: "#FFFFFF" } };
formulaStyle(checks, "B4", true);
checks.getRange("A6:G6").values = [["Check", "Actual", "Expected", "Difference / issue", "Tolerance", "Status", "Where to fix"]];
header(checks, "A6:G6");
checks.getRange("A7:A14").values = [
  ["Verified public inputs populated"],
  ["Base field operating inputs populated (F001–F019)"],
  ["Two independent base demand methods available"],
  ["Base capture/break-even bridge complete"],
  ["Assortment candidate missing evidence reference"],
  ["Assortment candidate with failed/held mandatory gate"],
  ["Defensibility candidate missing evidence reference"],
  ["Founder approval mistakenly represented in workbook"],
];
checks.getRange("B7:B14").formulas = [
  ["=COUNT('Public Inputs'!C7:C17)"],
  ["=COUNT('Field Inputs'!E7:E25)"],
  ["=COUNT('Market Sizing'!C10:C11)"],
  ["=COUNT('Capture & BE'!C7:C20)"],
  ["=COUNTIFS('Assortment Gate'!AC7:AC66,\"CANDIDATE\",'Assortment Gate'!AE7:AE66,\"\")"],
  ["=COUNTIFS('Assortment Gate'!AC7:AC66,\"CANDIDATE\",'Assortment Gate'!AA7:AA66,\"<>Pass\")+COUNTIFS('Assortment Gate'!AC7:AC66,\"CANDIDATE\",'Assortment Gate'!AB7:AB66,\"<>Pass\")"],
  ["=COUNTIFS('Defensibility'!M7:M18,\"DIFFERENTIATOR CANDIDATE\",'Defensibility'!N7:N18,\"\")"],
  ["=COUNTIF('Defensibility'!M7:M18,\"*APPROVED*\")+COUNTIF('Assortment Gate'!AC7:AC66,\"*APPROVED*\")+COUNTIF('Capture & BE'!B21:D21,\"*APPROVED*\")"],
];
checks.getRange("C7:C14").values = [[11], [19], [2], [13], [0], [0], [0], [0]];
checks.getRange("D7:D14").formulas = [["=B7-C7"], ["=C8-B8"], ["=C9-B9"], ["=C10-B10"], ["=B11"], ["=B12"], ["=B13"], ["=B14"]];
checks.getRange("E7:E14").values = [[0], [0], [0], [0], [0], [0], [0], [0]];
checks.getRange("F7").formulas = [["=IF(ABS(D7)<=E7,\"OK\",\"REVIEW\")"]];
checks.getRange("F7:F14").fillDown();
checks.getRange("G7:G14").values = [
  ["Public Inputs / Sources"], ["Field Inputs"], ["Market Sizing"], ["Capture & BE"], ["Assortment Gate evidence reference"], ["Assortment Gate demand/commercial gate"], ["Defensibility evidence reference"], ["Remove approval language; use decision records"],
];
bodyStyle(checks, "A7:A14");
formulaStyle(checks, "B7:B14", true);
bodyStyle(checks, "C7:C14");
formulaStyle(checks, "D7:D14");
bodyStyle(checks, "E7:E14");
formulaStyle(checks, "F7:F14");
bodyStyle(checks, "G7:G14");
checks.getRange("F7:F14").conditionalFormats.add("containsText", { text: "OK", format: { fill: PALE_GREEN, font: { bold: true, color: "#155E3B" } } });
checks.getRange("F7:F14").conditionalFormats.add("containsText", { text: "REVIEW", format: { fill: PALE_RED, font: { bold: true, color: "#9B1C1C" } } });
checks.getRange("A:A").format.columnWidth = 48;
checks.getRange("B:F").format.columnWidth = 16;
checks.getRange("G:G").format.columnWidth = 44;
checks.getRange("A6:G14").format.wrapText = true;

await fs.mkdir(outputPath.substring(0, outputPath.lastIndexOf("/")), { recursive: true });
await fs.mkdir(previewDir, { recursive: true });

for (const sheetName of ["Cover", "Sources", "Public Inputs", "Field Inputs", "Market Sizing", "Capture & BE", "Assortment Gate", "Defensibility", "Checks"]) {
  const preview = await wb.render({ sheetName, autoCrop: "all", scale: sheetName === "Assortment Gate" ? 0.55 : 0.8, format: "png" });
  await fs.writeFile(`${previewDir}/${sheetName.replaceAll(" ", "-").replaceAll("&", "and")}.png`, new Uint8Array(await preview.arrayBuffer()));
}

const keyInspection = await wb.inspect({ kind: "table", range: "Cover!A1:H30", include: "values,formulas", tableMaxRows: 30, tableMaxCols: 8, maxChars: 10000 });
const errorInspection = await wb.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A", options: { useRegex: true, maxResults: 300 }, summary: "final formula error scan" });
console.log(keyInspection.ndjson || keyInspection);
console.log(errorInspection.ndjson || errorInspection);

const output = await SpreadsheetFile.exportXlsx(wb);
await output.save(outputPath);
