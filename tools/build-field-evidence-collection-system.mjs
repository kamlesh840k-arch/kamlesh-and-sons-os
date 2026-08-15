import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputPath = process.argv[2] || "outputs/research-program-batch-9/KAMLESH-Field-Evidence-Collection-System.xlsx";
const previewDir = process.argv[3] || "outputs/research-program-batch-9/previews";

const NAVY = "#102A43";
const BLUE = "#0057B8";
const TEAL = "#0B7A75";
const GOLD = "#E9B949";
const PALE_BLUE = "#EAF2F8";
const PALE_GOLD = "#FFFBEB";
const PALE_GREEN = "#E8F5E9";
const PALE_RED = "#FDECEC";
const GREY = "#F3F4F6";
const BORDER = "#CBD5E1";
const FORMULA_GREEN = "#008000";

const wb = Workbook.create();
wb.comments.setSelf({ displayName: "KAMLESH & SONS" });

const cover = wb.worksheets.add("Cover");
const protocol = wb.worksheets.add("Protocol");
const codebook = wb.worksheets.add("Codebook");
const versions = wb.worksheets.add("Version Register");
const disposition = wb.worksheets.add("Disposition");
const customer = wb.worksheets.add("Customer Core");
const friction = wb.worksheets.add("Friction Events");
const choice = wb.worksheets.add("Choice Tasks");
const competitor = wb.worksheets.add("Competitor Visits");
const basket = wb.worksheets.add("Price Basket");
const sellThrough = wb.worksheets.add("Sell Through");
const institutions = wb.worksheets.add("Institutions");
const traffic = wb.worksheets.add("Traffic");
const funnel = wb.worksheets.add("Funnel");
const purchases = wb.worksheets.add("Purchase Audits");
const service = wb.worksheets.add("Service Cases");
const evidence = wb.worksheets.add("Evidence Register");
const qa = wb.worksheets.add("QA Dashboard");

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
    rowHeight: 32,
  };
}

function section(sheet, range, text) {
  sheet.getRange(range).merge();
  sheet.getRange(range.split(":")[0]).values = [[text]];
  sheet.getRange(range).format = {
    fill: TEAL,
    font: { bold: true, color: "#FFFFFF" },
    rowHeight: 23,
  };
}

function header(sheet, range) {
  sheet.getRange(range).format = {
    fill: NAVY,
    font: { bold: true, color: "#FFFFFF" },
    wrapText: true,
    verticalAlignment: "center",
    borders: { preset: "all", style: "thin", color: BORDER },
    rowHeight: 42,
  };
}

function inputStyle(sheet, range) {
  sheet.getRange(range).format = {
    fill: PALE_GOLD,
    font: { color: BLUE },
    verticalAlignment: "top",
  };
}

function formulaStyle(sheet, range, crossSheet = false) {
  sheet.getRange(range).format = {
    fill: GREY,
    font: { color: crossSheet ? FORMULA_GREEN : "#000000" },
    verticalAlignment: "top",
  };
}

function rawSheet(sheet, heading, subtitle, lastCol, headers, lastRow) {
  title(sheet, heading, subtitle, lastCol);
  sheet.getRange(`A4:${lastCol}4`).merge();
  sheet.getRange("A4").values = [["Blue text / pale yellow = field input. Green text / grey = formula. Blank is not zero; use explicit Don't know, Refused or Not applicable where provided."]];
  sheet.getRange(`A4:${lastCol}4`).format = { fill: PALE_BLUE, font: { color: NAVY }, wrapText: true, rowHeight: 30 };
  sheet.getRange(`A5:${lastCol}5`).values = [headers];
  header(sheet, `A5:${lastCol}5`);
  inputStyle(sheet, `A7:${lastCol}${lastRow}`);
  sheet.getRange(`A5:${lastCol}${lastRow}`).format.wrapText = true;
  sheet.freezePanes.freezeRows(5);
  sheet.freezePanes.freezeColumns(2);
}

function listValidation(sheet, range, values) {
  sheet.getRange(range).dataValidation = { rule: { type: "list", values } };
}

function wholeValidation(sheet, range, min, max) {
  sheet.getRange(range).dataValidation = { rule: { type: "whole", operator: "between", formula1: min, formula2: max } };
}

// Cover
title(cover, "KAMLESH Field Evidence Collection System", "Normalized raw-data, evidence-custody and QA workbook. It does not authorize fieldwork or create founder decisions.", "H");
cover.getRange("A4:B11").values = [
  ["Workbook version", "0.1.0"],
  ["As of", "2026-08-15"],
  ["Canonical protocol", "RESEARCH-FIELD-001"],
  ["Geography", "Nepalgunj/Banke plus separately coded Kohalpur, Rupaidiha, Kathmandu and other catchment"],
  ["Participant boundary", "Adults 18+ only; voluntary research; no sales, loan or benefit promise"],
  ["Contact boundary", "No names/phones/emails in this workbook; approved contact key stays separate"],
  ["Evidence boundary", "No unredacted identity, IMEI, finance or confidential partner files in GitHub"],
  ["Decision boundary", "READY FOR ANALYSIS is not approval of any flagship decision"],
];
cover.getRange("A4:A11").format = { fill: TEAL, font: { bold: true, color: "#FFFFFF" } };
cover.getRange("B4:B11").format = { wrapText: true, borders: { preset: "all", style: "thin", color: BORDER } };
section(cover, "A13:H13", "Current execution status");
cover.getRange("A14:B22").values = [
  ["QA STATUS", null],
  ["Valid cognitive interviews", null],
  ["Valid main interviews", null],
  ["Valid competitor visits", null],
  ["Traffic sessions", null],
  ["Sell-through sources", null],
  ["Institution sources", null],
  ["Purchase audits", null],
  ["Service cases", null],
];
cover.getRange("B14:B22").formulas = [
  ["='QA Dashboard'!B4"],
  ["='QA Dashboard'!D7"],
  ["='QA Dashboard'!D8"],
  ["='QA Dashboard'!D13"],
  ["='QA Dashboard'!D15"],
  ["='QA Dashboard'!D16"],
  ["='QA Dashboard'!D17"],
  ["='QA Dashboard'!D18"],
  ["='QA Dashboard'!D19"],
];
cover.getRange("A14:A22").format = { fill: PALE_BLUE, font: { bold: true, color: NAVY } };
formulaStyle(cover, "B14:B22", true);
section(cover, "A24:H24", "Use sequence");
cover.getRange("A25:H31").merge(true);
cover.getRange("A25:A31").values = [
  ["1. Obtain founder/privacy approval and freeze the English + reviewed Nepali instrument in Version Register."],
  ["2. Use Disposition for every approach, including refusal and invalid/partial outcomes."],
  ["3. Keep one respondent, visit, source or case per row; use linked long-form event and choice rows."],
  ["4. Register every documentary/photo/message/source item in Evidence Register; keep restricted files outside GitHub."],
  ["5. Review QA Dashboard daily. Freeze suspicious records; do not delete them to improve completion."],
  ["6. Lock raw data before analysis. Clean only in a separate processed extract."],
  ["7. Load only reviewed summaries into the commercial evidence model; workbook status never creates approval."],
];
cover.getRange("A25:H31").format = { wrapText: true, rowHeight: 25, borders: { preset: "all", style: "thin", color: BORDER } };
cover.getRange("A:A").format.columnWidth = 48;
cover.getRange("B:B").format.columnWidth = 34;
cover.getRange("C:H").format.columnWidth = 16;

// Protocol
title(protocol, "Protocol and Field Controls", "Read RESEARCH-FIELD-001 and the canonical study before collection. These cells summarize controls; they do not replace the full instrument.", "H");
protocol.getRange("A4:H4").values = [["Control area", "Rule", "Owner", "Evidence before use", "Status", "Source / document", "Risk if ignored", "Notes"]];
header(protocol, "A4:H4");
const protocolRows = [
  ["Research purpose", "Research must not be represented as sales, finance approval, recruitment or guaranteed benefit.", "Research Lead", "Approved participant script", "Open", "RESEARCH-FIELD-001", "Coercion, biased answers, trust harm", ""],
  ["Age", "Interview adults 18+ only under the current protocol.", "Enumerator", "Age eligibility response", "Open", "RESEARCH-CX-001 S01", "Invalid consent", ""],
  ["Consent", "Study, evidence viewing, follow-up contact and public media permission are separate decisions.", "Research Lead / Custodian", "Approved wording and separate fields", "Open", "RESEARCH-FIELD-001", "Invalid use and privacy harm", ""],
  ["Identifiers", "No name, phone, email, citizenship number, IMEI or precise address in research IDs or raw workbook.", "Data Custodian", "Restricted contact/evidence store", "Open", "Nepal Privacy Act; AAPOR 2026", "Re-identification and breach", ""],
  ["Translation", "Freeze English; bilingual translation, review, adjudication, cognitive pretest and documentation before production.", "Research Lead", "Version Register approval", "Open", "Pew translation guidance", "Non-equivalent questions", ""],
  ["Recruitment", "Record every approach and outcome. Main sample remains directional and recruitment channels stay within canonical limits.", "Research Lead", "Disposition log", "Open", "RESEARCH-CX-001", "Convenience bias hidden", ""],
  ["Evidence", "Record claim/shown/documented/tested separately. Viewing is optional and sensitive material is redacted/restricted.", "Custodian / Reviewer", "Evidence Register", "Open", "RESEARCH-FIELD-001", "Unsupported claims or data exposure", ""],
  ["Raw data", "Never overwrite original answers during cleaning; lock a raw snapshot and analyze a copy.", "Data Custodian", "Snapshot reference/checksum", "Open", "Scientific research workbook guidance", "No reproducible audit trail", ""],
  ["QA", "Duplicates, no consent, ineligible, fabrication, material incompleteness or deviation are invalid; suspicious records are retained and reviewed.", "Quality Reviewer", "Daily QA log", "Open", "RESEARCH-CX-001", "False confidence", ""],
  ["Pause rule", "Pause customer production if more than 15% of completes fail QA; investigate before replacements.", "Research Lead", "QA Dashboard", "Open", "RESEARCH-CX-001", "Systematic interviewer/instrument failure", ""],
  ["Confidentiality", "Named retailer units, distributor/bank terms and landlord offers remain internal without written permission.", "Founder / Custodian", "Access class and permission", "Open", "Field validation plan", "Commercial/reputation harm", ""],
  ["Publication", "Disclose dates, mode, population, eligibility, recruitment, questions/version, disposition, exclusions and limitations.", "Research Lead", "Disclosure appendix", "Open", "AAPOR 2026", "Misleading public claims", ""],
];
protocol.getRange(`A5:H${4 + protocolRows.length}`).values = protocolRows;
protocol.getRange(`A5:H${4 + protocolRows.length}`).format = { wrapText: true, verticalAlignment: "top", borders: { preset: "all", style: "thin", color: BORDER } };
protocol.getRange(`A5:H${4 + protocolRows.length}`).format.rowHeight = 42;
listValidation(protocol, `E5:E${4 + protocolRows.length}`, ["Open", "Ready", "Approved", "Paused", "Expired"]);
inputStyle(protocol, `E5:E${4 + protocolRows.length}`);
section(protocol, "A19:H19", "Current external references");
protocol.getRange("A20:H24").values = [
  ["AAPOR ethics", "Voluntary participation, privacy, fit-for-purpose methods and disclosure", "", "", "", "https://aapor.org/standards-and-ethics/", "Revised June 2026", "Method benchmark"],
  ["AAPOR best practices", "Population/sample/recruitment/mode/question transparency", "", "", "", "https://aapor.org/standards-and-ethics/best-practices/", "Accessed 2026-08-15", "Method benchmark"],
  ["Pew translation", "Meaning-equivalent reviewed translation and pretesting", "", "", "", "https://www.pewresearch.org/questionnaire-design-and-translation/", "Accessed 2026-08-15", "Method benchmark"],
  ["ICC/ESOMAR 2025", "Duty of care, minimisation, privacy, accountability and human oversight", "", "", "", "https://standards.esomar.org/assets/documents/icc-esomar-code-2025.pdf", "Updated July 2025", "Professional benchmark; not Nepal law"],
  ["Nepal Privacy Act", "Personal information and purpose-limited use of consented data", "", "", "", "https://lawcommission.gov.np/content/12261/the-privacy-act-2075/", "Official law source", "Qualified Nepal review required"],
];
protocol.getRange("A20:H24").format = { wrapText: true, verticalAlignment: "top", borders: { preset: "all", style: "thin", color: BORDER } };
protocol.getRange("A20:H24").format.rowHeight = 50;
protocol.getRange("A:A").format.columnWidth = 24;
protocol.getRange("B:B").format.columnWidth = 48;
protocol.getRange("C:E").format.columnWidth = 20;
protocol.getRange("F:F").format.columnWidth = 48;
protocol.getRange("G:H").format.columnWidth = 30;

// Codebook
title(codebook, "Shared Codebook", "Common controlled values. Workstream-specific questions remain in the canonical research documents and sheet headers.", "F");
codebook.getRange("A4:F4").values = [["Domain", "Code / allowed value", "Meaning", "Applies to", "Evidence/decision label", "Notes"]];
header(codebook, "A4:F4");
const frictionCodes = [
  ["F_BEF_FIT", "Unclear fit"], ["F_BEF_INFO", "Specification/information overload"], ["F_BEF_PRICE", "Unclear price"], ["F_BEF_STOCK", "Unclear stock"], ["F_BEF_AUTH", "Authenticity/warranty uncertainty"], ["F_BEF_DEMO", "No useful demo"], ["F_BEF_FIN", "Finance eligibility/terms"], ["F_BEF_PRESSURE", "Sales pressure"],
  ["F_DUR_PRICE", "Final price/gift changed"], ["F_DUR_VARIANT", "Variant/condition mismatch"], ["F_DUR_DOCS", "Invoice/MDMS/warranty confusion"], ["F_DUR_FIN", "Finance decline/changed terms"], ["F_DUR_SETUP", "Rushed/incomplete setup"], ["F_DUR_PRIVACY", "Unsafe data handling"], ["F_DUR_ACCESSORY", "Accessory incompatibility"], ["F_DUR_DOAINFO", "Unclear DOA/return terms"],
  ["F_AFT_DOA", "DOA/return dispute"], ["F_AFT_HANDOFF", "Warranty/repair handoff burden"], ["F_AFT_UPDATES", "No useful status updates"], ["F_AFT_PRIVACY", "After-sales privacy concern"], ["F_AFT_COST", "Unexpected ownership/service cost"], ["F_AFT_DOWNTIME", "Long downtime"], ["F_AFT_REPEAT", "Repeat failure"], ["F_AFT_RESALE", "Weak resale/trade-in path"], ["F_AFT_MARKETING", "Unwanted marketing"]
];
const codeRows = [
  ...[["Evidence label", "V", "Verified/auditable fact"], ["Evidence label", "P", "Public or interested-party claim"], ["Evidence label", "S", "Secondary signal"], ["Evidence label", "E", "Estimate from stated inputs"], ["Evidence label", "H", "Hypothesis"], ["Evidence label", "D", "Founder decision"]].map(r => [...r, "All", "", "Do not promote automatically"]),
  ...["Not offered", "Claimed", "Shown", "Documented", "Successfully tested"].map(v => ["Evidence state", v, v, "Competitor/partner evidence", "P/V mixed", "Preserve state"]),
  ...["Authorised Nepal", "Lawful personal import", "Parallel/grey", "Seller-warranty", "Unknown/unclassified"].map(v => ["Channel class", v, v, "Customer/purchase/service", "Analyst classification", "Do not infer from MDMS alone"]),
  ...["Neutral intercept", "K&S social/waitlist", "Community/workplace/campus", "Referral", "Other"].map(v => ["Recruitment channel", v, v, "Disposition/Customer Core", "Method", "K&S social/waitlist capped"]),
  ...["Nepalgunj resident", "Banke nonresident", "Other Nepal catchment", "India/other", "Unknown"].map(v => ["Origin class", v, v, "Funnel", "Method", "No catchment multiplier without records"]),
  ...["Price", "Finance", "Unavailable SKU", "Lead time", "Warranty/channel", "Trust", "Competitor relationship", "Postponed", "No decision", "Other"].map(v => ["Lost-sale reason", v, v, "Funnel", "Observed/input", "Use one primary reason plus notes"]),
  ...frictionCodes.map(([code, meaning]) => ["Friction event", code, meaning, "Friction Events", "Observed/participant report", "Ask spontaneous first"]),
  ...["Pending", "Valid", "Review", "Invalid", "Excluded"].map(v => ["QA status", v, v, "All raw sheets", "Quality control", "Never delete disputed raw record"]),
];
codebook.getRange(`A5:F${4 + codeRows.length}`).values = codeRows;
codebook.getRange(`A5:F${4 + codeRows.length}`).format = { wrapText: true, verticalAlignment: "top", borders: { preset: "all", style: "thin", color: BORDER } };
codebook.getRange("A:A").format.columnWidth = 24;
codebook.getRange("B:B").format.columnWidth = 32;
codebook.getRange("C:C").format.columnWidth = 42;
codebook.getRange("D:F").format.columnWidth = 26;
codebook.freezePanes.freezeRows(4);

// Version Register
const versionHeaders = ["instrument_version", "workstream", "language", "effective_date", "status", "question_variable_ids_changed", "change_summary", "reason", "translation_reviewer", "cognitive_pilot_evidence_ref", "approved_by", "approval_date", "supersedes", "comparability_effect", "notes"];
rawSheet(versions, "Instrument and Translation Version Register", "Every production instrument must be frozen here. Material live edits create a new version and comparability review.", "O", versionHeaders, 106);
listValidation(versions, "C7:C106", ["English source", "Nepali", "Hindi", "Other"]);
listValidation(versions, "E7:E106", ["Draft", "Translation review", "Cognitive test", "Frozen for pilot", "Frozen for production", "Superseded", "Paused"]);
versions.getRange("D7:D106").setNumberFormat("yyyy-mm-dd");
versions.getRange("L7:L106").setNumberFormat("yyyy-mm-dd");
versions.getRange("A:A").format.columnWidth = 20;
versions.getRange("B:E").format.columnWidth = 22;
versions.getRange("F:H").format.columnWidth = 38;
versions.getRange("I:O").format.columnWidth = 28;

// Disposition
const dispositionHeaders = ["approach_id", "approach_date", "approach_time", "interviewer_id", "interview_phase", "recruitment_channel", "approach_place", "age_18plus", "decision_role", "device_timing", "study_consent", "evidence_consent", "contact_consent", "outcome", "respondent_id", "duration_min", "invalid_reason", "notes", "record_status"];
rawSheet(disposition, "Approach and Disposition Log", "Record every approach—including refusals, ineligible cases, partials and invalid completes—to make recruitment visible.", "S", dispositionHeaders, 256);
disposition.getRange("S7").formulas = [["=IF(A7=\"\",\"\",IF(K7<>\"Yes\",\"NO CONSENT\",IF(AND(H7=\"Yes\",OR(I7=\"Primary\",I7=\"Shared\"),OR(J7=\"Bought ≤24m\",J7=\"Likely ≤12m\",J7=\"Both\"),N7=\"Complete\",Q7=\"\"),\"VALID\",\"REVIEW\")))"]];
disposition.getRange("S7:S256").fillDown();
formulaStyle(disposition, "S7:S256");
disposition.getRange("B7:B256").setNumberFormat("yyyy-mm-dd");
disposition.getRange("C7:C256").setNumberFormat("hh:mm");
listValidation(disposition, "E7:E256", ["Cognitive", "Main"]);
listValidation(disposition, "F7:F256", ["Neutral intercept", "K&S social/waitlist", "Community/workplace/campus", "Referral", "Other"]);
listValidation(disposition, "H7:H256", ["Yes", "No", "Refused"]);
listValidation(disposition, "I7:I256", ["Primary", "Shared", "Not decision-maker", "Refused"]);
listValidation(disposition, "J7:J256", ["Bought ≤24m", "Likely ≤12m", "Both", "Neither", "Refused"]);
listValidation(disposition, "K7:M256", ["Yes", "No", "Not asked"]);
listValidation(disposition, "N7:N256", ["Refused", "Ineligible", "Partial", "Complete", "Invalid after review"]);
disposition.getRange("A:A").format.columnWidth = 22;
disposition.getRange("B:F").format.columnWidth = 19;
disposition.getRange("G:G").format.columnWidth = 28;
disposition.getRange("H:Q").format.columnWidth = 19;
disposition.getRange("R:R").format.columnWidth = 36;
disposition.getRange("S:S").format.columnWidth = 18;

// Customer Core
const customerHeaders = ["respondent_id", "interview_phase", "instrument_version", "interview_date", "interviewer_id", "language", "recruitment_channel", "catchment_relationship", "home_locality_general", "age_band", "gender_self_described", "occupation", "primary_intent", "budget_stratum", "recent_buyer_18m", "border_parallel_comparer", "recent_device", "recent_purchase_month", "recent_purchase_place", "analyst_channel_class", "final_amount_npr", "payment_method", "proof_checked", "search_days", "stores_sites_checked", "unprompted_hardest_part", "main_worry", "actual_problem", "change_one_thing", "top_three_factors", "optional_evidence_type", "qa_status", "exclusion_reason", "duplicate_flag"];
rawSheet(customer, "Customer Core", "One row per participant. No names, telephone numbers, emails, precise addresses or device identifiers.", "AH", customerHeaders, 156);
customer.getRange("AH7").formulas = [["=IF(A7=\"\",\"\",IF(COUNTIF($A$7:$A$156,A7)>1,\"DUPLICATE\",\"OK\"))"]];
customer.getRange("AH7:AH156").fillDown();
formulaStyle(customer, "AH7:AH156");
customer.getRange("D7:D156").setNumberFormat("yyyy-mm-dd");
customer.getRange("R7:R156").setNumberFormat("yyyy-mm");
customer.getRange("U7:U156").setNumberFormat("#,##0;[Red](#,##0);-");
listValidation(customer, "B7:B156", ["Cognitive", "Main"]);
listValidation(customer, "F7:F156", ["Nepali", "English", "Hindi", "Other"]);
listValidation(customer, "G7:G156", ["Neutral intercept", "K&S social/waitlist", "Community/workplace/campus", "Referral", "Other"]);
listValidation(customer, "H7:H156", ["Resident", "Worker/student", "Frequent shopper", "Other"]);
listValidation(customer, "M7:M156", ["Phone", "Laptop"]);
listValidation(customer, "N7:N156", ["Phone <25k", "Phone 25–50k", "Phone 50–100k", "Phone >100k", "Laptop <80k", "Laptop 80–130k", "Laptop >130k"]);
listValidation(customer, "O7:P156", ["Yes", "No", "Don't know", "Refused"]);
listValidation(customer, "T7:T156", ["Authorised Nepal", "Lawful personal import", "Parallel/grey", "Seller-warranty", "Unknown/unclassified"]);
listValidation(customer, "V7:V156", ["Cash", "Card", "EMI", "Mixed", "Other", "Don't know", "Refused"]);
listValidation(customer, "AF7:AF156", ["Pending", "Valid", "Review", "Invalid", "Excluded"]);
customer.getRange("A:C").format.columnWidth = 20;
customer.getRange("D:P").format.columnWidth = 20;
customer.getRange("Q:Y").format.columnWidth = 24;
customer.getRange("Z:AE").format.columnWidth = 42;
customer.getRange("AF:AH").format.columnWidth = 20;

// Friction Events
const frictionHeaders = ["event_record_id", "respondent_id", "instrument_version", "stage", "event_code", "spontaneous_or_prompted", "happened", "severity_0_10", "extra_time_value", "extra_time_unit", "extra_cost_npr", "resolution", "expected_responsible_party", "trust_effect", "raw_note", "qa_status"];
rawSheet(friction, "Friction Events", "Long-form table: one respondent × event per row. Ask open experience before prompted codes.", "P", frictionHeaders, 3006);
listValidation(friction, "D7:D3006", ["Before", "During", "After", "Other"]);
listValidation(friction, "F7:F3006", ["Spontaneous", "Prompted"]);
listValidation(friction, "G7:G3006", ["Yes", "No", "Not applicable", "Cannot recall", "Refused"]);
wholeValidation(friction, "H7:H3006", 0, 10);
listValidation(friction, "J7:J3006", ["Minutes", "Hours", "Days", "Not applicable", "Don't know", "Refused"]);
listValidation(friction, "L7:L3006", ["Fully", "Partly", "Not resolved", "Still open", "Not applicable", "Don't know"]);
listValidation(friction, "M7:M3006", ["Seller", "Brand/distributor", "Service centre", "Bank/finance", "Self", "Other", "Don't know"]);
listValidation(friction, "N7:N3006", ["More likely", "No change", "Less likely", "Definitely not", "Not applicable"]);
listValidation(friction, "P7:P3006", ["Pending", "Valid", "Review", "Invalid", "Excluded"]);
friction.getRange("H7:H3006").setNumberFormat("0");
friction.getRange("I7:I3006").setNumberFormat("#,##0.0;[Red](#,##0.0);-");
friction.getRange("K7:K3006").setNumberFormat("#,##0;[Red](#,##0);-");
friction.getRange("A:F").format.columnWidth = 22;
friction.getRange("G:N").format.columnWidth = 20;
friction.getRange("O:O").format.columnWidth = 45;
friction.getRange("P:P").format.columnWidth = 18;

// Choice Tasks
const choiceHeaders = ["choice_record_id", "respondent_id", "instrument_version", "block_id", "task_no", "dominance_task", "reference_sku", "reference_price_npr", "offer_a_price_npr", "offer_a_gap_pct", "offer_a_channel_proof", "offer_a_advice_demo", "offer_a_setup_privacy", "offer_a_ownership_support", "offer_a_finance", "offer_b_price_npr", "offer_b_gap_pct", "offer_b_channel_proof", "offer_b_advice_demo", "offer_b_setup_privacy", "offer_b_ownership_support", "offer_b_finance", "choice", "confidence_0_10", "short_reason", "comprehension_pass", "exclude_from_choice", "qa_status", "notes"];
rawSheet(choice, "Stated-Choice Tasks", "Long-form table: one respondent × task per row. Use only a reviewed, frozen balanced design; dominance task is excluded from preference estimates.", "AC", choiceHeaders, 1206);
choice.getRange("J7").formulas = [["=IF(OR(A7=\"\",H7<=0,I7<=0),\"\",I7/H7-1)"]];
choice.getRange("J7:J1206").fillDown();
choice.getRange("Q7").formulas = [["=IF(OR(A7=\"\",H7<=0,P7<=0),\"\",P7/H7-1)"]];
choice.getRange("Q7:Q1206").fillDown();
formulaStyle(choice, "J7:J1206");
formulaStyle(choice, "Q7:Q1206");
choice.getRange("H7:I1206").setNumberFormat("#,##0;[Red](#,##0);-");
choice.getRange("P7:P1206").setNumberFormat("#,##0;[Red](#,##0);-");
choice.getRange("J7:J1206").setNumberFormat("0.0%;[Red](0.0%);-");
choice.getRange("Q7:Q1206").setNumberFormat("0.0%;[Red](0.0%);-");
wholeValidation(choice, "E7:E1206", 1, 20);
listValidation(choice, "F7:F1206", ["Yes", "No"]);
listValidation(choice, "W7:W1206", ["Offer A", "Offer B", "Postpone/buy neither", "Refused"]);
wholeValidation(choice, "X7:X1206", 0, 10);
listValidation(choice, "Z7:AA1206", ["Yes", "No", "Review"]);
listValidation(choice, "AB7:AB1206", ["Pending", "Valid", "Review", "Invalid", "Excluded"]);
choice.getRange("A:G").format.columnWidth = 20;
choice.getRange("H:V").format.columnWidth = 22;
choice.getRange("W:X").format.columnWidth = 20;
choice.getRange("Y:Y").format.columnWidth = 42;
choice.getRange("Z:AC").format.columnWidth = 20;

// Competitor Visits
const competitorHeaders = ["visit_id", "visit_date", "visit_time", "geography", "store_code", "store_name_internal", "scenario", "researcher_id", "stated_budget_npr", "offered_sku", "price_clarity_max12", "product_advice_max12", "stock_demo_max8", "auth_warranty_max12", "emi_max10", "tradein_max10", "setup_privacy_max10", "repair_case_max12", "delivery_max6", "store_experience_max5", "followup_consent_max3", "total_score_100", "overall_evidence_state", "notes", "publication_permission", "qa_status"];
rawSheet(competitor, "Competitor Visits", "Use the canonical two scenarios and score definitions. Record evidence state separately from score; named findings remain internal unless approved.", "Z", competitorHeaders, 86);
competitor.getRange("V7").formulas = [["=IF(A7=\"\",\"\",IF(COUNT(K7:U7)<11,\"\",SUM(K7:U7)))"]];
competitor.getRange("V7:V86").fillDown();
formulaStyle(competitor, "V7:V86");
competitor.getRange("B7:B86").setNumberFormat("yyyy-mm-dd");
competitor.getRange("C7:C86").setNumberFormat("hh:mm");
competitor.getRange("I7:I86").setNumberFormat("#,##0;[Red](#,##0);-");
listValidation(competitor, "D7:D86", ["Nepalgunj", "Kohalpur", "Rupaidiha", "Kathmandu", "India benchmark", "Other"]);
listValidation(competitor, "G7:G86", ["Value replacement", "Premium/ownership support"]);
wholeValidation(competitor, "K7:L86", 0, 12);
wholeValidation(competitor, "M7:M86", 0, 8);
wholeValidation(competitor, "N7:N86", 0, 12);
wholeValidation(competitor, "O7:Q86", 0, 10);
wholeValidation(competitor, "R7:R86", 0, 12);
wholeValidation(competitor, "S7:S86", 0, 6);
wholeValidation(competitor, "T7:T86", 0, 5);
wholeValidation(competitor, "U7:U86", 0, 3);
listValidation(competitor, "W7:W86", ["Not offered", "Claimed", "Shown", "Documented", "Successfully tested"]);
listValidation(competitor, "Y7:Y86", ["Internal only", "Approved aggregate", "Approved named"]);
listValidation(competitor, "Z7:Z86", ["Pending", "Valid", "Review", "Invalid", "Excluded"]);
competitor.getRange("A:J").format.columnWidth = 21;
competitor.getRange("K:V").format.columnWidth = 18;
competitor.getRange("W:Z").format.columnWidth = 28;

// Price Basket
const basketHeaders = ["basket_record_id", "visit_id", "basket_version", "quote_datetime", "geography", "store_code", "item_class", "exact_sku_configuration", "currency", "quoted_price", "fx_to_npr", "converted_price_npr", "stock_status", "colour_variant", "gift_bundle", "gift_value_npr", "vat_invoice_state", "mdms_authorisation_state", "warranty_state", "warranty_terms_summary", "payment_finance_summary", "tradein_summary", "setup_privacy_summary", "delivery_summary", "offer_valid_until", "evidence_ref", "qa_status", "notes"];
rawSheet(basket, "Exact-SKU Price Basket", "One store × exact SKU/configuration × timestamp per row. Freeze one basket version; do not compare unlike variants or stale offers.", "AB", basketHeaders, 806);
basket.getRange("L7").formulas = [["=IF(A7=\"\",\"\",IF(I7=\"NPR\",J7,IF(AND(I7=\"INR\",K7>0),J7*K7,\"\")))"]];
basket.getRange("L7:L806").fillDown();
formulaStyle(basket, "L7:L806");
basket.getRange("D7:D806").setNumberFormat("yyyy-mm-dd hh:mm");
basket.getRange("J7:L806").setNumberFormat("#,##0.00;[Red](#,##0.00);-");
basket.getRange("P7:P806").setNumberFormat("#,##0;[Red](#,##0);-");
basket.getRange("Y7:Y806").setNumberFormat("yyyy-mm-dd hh:mm");
listValidation(basket, "E7:E806", ["Nepalgunj", "Kohalpur", "Rupaidiha", "Kathmandu", "Other"]);
listValidation(basket, "G7:G806", ["Phone", "Laptop", "Accessory"]);
listValidation(basket, "I7:I806", ["NPR", "INR"]);
listValidation(basket, "M7:M806", ["In stock exact", "Order available", "Alternative only", "Out of stock", "Unknown"]);
listValidation(basket, "Q7:S806", ["Not offered", "Claimed", "Shown", "Documented", "Successfully tested", "Not applicable"]);
listValidation(basket, "AA7:AA806", ["Pending", "Valid", "Review", "Invalid", "Excluded"]);
basket.getRange("A:H").format.columnWidth = 22;
basket.getRange("I:P").format.columnWidth = 18;
basket.getRange("Q:S").format.columnWidth = 22;
basket.getRange("T:X").format.columnWidth = 34;
basket.getRange("Y:AB").format.columnWidth = 28;

// Sell Through
const sellHeaders = ["record_id", "source_id", "first_record_for_source", "source_type", "evidence_quality", "confidentiality", "period_start", "period_end", "geography", "channel_scope", "category", "price_band", "brand", "model_family", "units", "cash_units", "emi_units", "returns_doa_units", "accessory_attachment_rate", "estimated_coverage_share", "duplicate_group", "evidence_ref", "source_notes", "qa_status"];
rawSheet(sellThrough, "Confidential Sell-Through", "Comparable period/category rows only. Mark the first row for each source and duplicate groups to prevent double counting.", "X", sellHeaders, 306);
sellThrough.getRange("G7:H306").setNumberFormat("yyyy-mm-dd");
sellThrough.getRange("O7:R306").setNumberFormat("#,##0;[Red](#,##0);-");
sellThrough.getRange("S7:T306").setNumberFormat("0.0%;[Red](0.0%);-");
listValidation(sellThrough, "C7:C306", ["Yes", "No"]);
listValidation(sellThrough, "D7:D306", ["Retailer", "Distributor", "Brand/distributor report", "Other"]);
listValidation(sellThrough, "E7:E306", ["System export", "Invoice/document", "Documentary schedule", "Verbal recall", "Estimate"]);
listValidation(sellThrough, "F7:F306", ["Commercial confidential", "Approved aggregate", "Public"]);
listValidation(sellThrough, "K7:K306", ["Phone", "Laptop", "Tablet", "Accessory", "Feature phone"]);
listValidation(sellThrough, "X7:X306", ["Pending", "Valid", "Review", "Invalid", "Excluded"]);
sellThrough.getRange("A:J").format.columnWidth = 21;
sellThrough.getRange("K:V").format.columnWidth = 19;
sellThrough.getRange("W:W").format.columnWidth = 38;
sellThrough.getRange("X:X").format.columnWidth = 18;

// Institutions
const institutionHeaders = ["record_id", "organization_code", "first_record_for_organization", "organization_type", "geography", "evidence_quality", "contact_role", "category", "last_12m_units", "next_12m_confirmed_units", "next_12m_documented_plan_units", "next_12m_verbal_estimate_units", "configuration_need", "price_band", "procurement_route", "vat_tender_requirement", "payment_timing", "credit_finance_need", "setup_software_network_need", "warranty_repair_sla", "replacement_loaner_expectation", "current_supplier_strength", "switch_reason", "evidence_ref", "confidentiality", "qa_status"];
rawSheet(institutions, "Institutional Device Demand", "One organization × category row. Keep confirmed, documented plan and verbal expectation separate.", "Z", institutionHeaders, 106);
institutions.getRange("I7:L106").setNumberFormat("#,##0;[Red](#,##0);-");
listValidation(institutions, "C7:C106", ["Yes", "No"]);
listValidation(institutions, "D7:D106", ["School/campus", "Hospital/clinic", "NGO/INGO", "SME", "Public body", "Other"]);
listValidation(institutions, "F7:F106", ["System/procurement record", "Invoice/document", "Approved budget/plan", "Verbal recall", "Estimate"]);
listValidation(institutions, "H7:H106", ["Phone", "Laptop", "Tablet", "Accessory", "Mixed"]);
listValidation(institutions, "Y7:Y106", ["Commercial confidential", "Approved aggregate", "Public"]);
listValidation(institutions, "Z7:Z106", ["Pending", "Valid", "Review", "Invalid", "Excluded"]);
institutions.getRange("A:H").format.columnWidth = 22;
institutions.getRange("I:L").format.columnWidth = 20;
institutions.getRange("M:Z").format.columnWidth = 30;

// Traffic
const trafficHeaders = ["session_id", "session_date", "day_type", "location", "start_time", "duration_min", "researcher_id", "weather", "pedestrians", "two_wheelers_stopping", "technology_shop_entries", "observed_purchases", "parking_availability", "obstruction", "unusual_event", "notes", "qa_status"];
rawSheet(traffic, "Traffic Sessions", "Minimum 27 comparable 30-minute sessions: 3 locations × 3 times × 3 days. General traffic is not sales.", "Q", trafficHeaders, 86);
traffic.getRange("B7:B86").setNumberFormat("yyyy-mm-dd");
traffic.getRange("E7:E86").setNumberFormat("hh:mm");
traffic.getRange("F7:F86").setNumberFormat("0");
traffic.getRange("I7:L86").setNumberFormat("#,##0;[Red](#,##0);-");
listValidation(traffic, "C7:C86", ["Weekday", "Saturday", "Holiday/other"]);
listValidation(traffic, "D7:D86", ["Dhamboji/core corridor", "Setu B.K./New Road", "Pushpalal/Bus Park", "Proposed site", "Other"]);
listValidation(traffic, "Q7:Q86", ["Pending", "Valid", "Review", "Invalid", "Excluded"]);
traffic.getRange("A:H").format.columnWidth = 22;
traffic.getRange("I:Q").format.columnWidth = 24;

// Funnel
const funnelHeaders = ["interaction_id", "interaction_date", "interaction_time", "researcher_id", "source_channel", "origin_class", "locality_general", "category", "budget_band", "purchase_timing", "qualified_visit", "exact_sku_quoted", "quote_price_npr", "stock_status", "lead_time_days", "price_gap_vs_best_alt_npr", "emi_need", "emi_eligibility_known", "followup_consent", "outcome", "primary_lost_reason", "sale_value_npr", "phone_contribution_npr", "accessory_contribution_npr", "service_contribution_npr", "evidence_ref", "notes", "qa_status"];
rawSheet(funnel, "Qualified Visit, Quote and Outcome Funnel", "One interaction per row for at least four weeks. Use general origin only; contact details remain in the approved CRM/contact system.", "AB", funnelHeaders, 2506);
funnel.getRange("B7:B2506").setNumberFormat("yyyy-mm-dd");
funnel.getRange("C7:C2506").setNumberFormat("hh:mm");
funnel.getRange("M7:M2506").setNumberFormat("#,##0;[Red](#,##0);-");
funnel.getRange("O7:O2506").setNumberFormat("0.0;[Red](0.0);-");
funnel.getRange("P7:P2506").setNumberFormat("#,##0;[Red](#,##0);-");
funnel.getRange("V7:Y2506").setNumberFormat("#,##0;[Red](#,##0);-");
listValidation(funnel, "F7:F2506", ["Nepalgunj resident", "Banke nonresident", "Other Nepal catchment", "India/other", "Unknown"]);
listValidation(funnel, "H7:H2506", ["Phone", "Laptop", "Tablet", "Accessory", "Service", "Other"]);
listValidation(funnel, "K7:K2506", ["Yes", "No", "Unclear"]);
listValidation(funnel, "N7:N2506", ["In stock exact", "Order available", "Alternative only", "Out of stock", "Not applicable"]);
listValidation(funnel, "Q7:S2506", ["Yes", "No", "Unknown", "Not applicable"]);
listValidation(funnel, "T7:T2506", ["Purchased", "Quoted/follow-up", "Lost", "Postponed", "Unqualified", "Cancelled/returned"]);
listValidation(funnel, "U7:U2506", ["Price", "Finance", "Unavailable SKU", "Lead time", "Warranty/channel", "Trust", "Competitor relationship", "Postponed", "No decision", "Other", "Not applicable"]);
listValidation(funnel, "AB7:AB2506", ["Pending", "Valid", "Review", "Invalid", "Excluded"]);
funnel.getRange("A:J").format.columnWidth = 21;
funnel.getRange("K:U").format.columnWidth = 22;
funnel.getRange("V:AB").format.columnWidth = 25;

// Purchase Audits
const purchaseHeaders = ["audit_id", "respondent_id", "audit_date", "purchase_month", "geography", "seller_code", "analyst_channel_class", "exact_sku_configuration", "final_price", "currency", "payment_method", "vat_invoice_seen", "mdms_status_checked", "authorised_channel_proof", "condition_disclosed", "warranty_terms", "customs_evidence_if_relevant", "setup_outcome", "ownership_service_outcome", "evidence_type", "redacted", "evidence_ref", "qa_status", "notes"];
rawSheet(purchases, "Recent Purchase Audits", "Thirty consented evidence-backed purchases. Invoice, MDMS, authorised channel, condition, customs and warranty are separate fields.", "X", purchaseHeaders, 106);
purchases.getRange("C7:C106").setNumberFormat("yyyy-mm-dd");
purchases.getRange("D7:D106").setNumberFormat("yyyy-mm");
purchases.getRange("I7:I106").setNumberFormat("#,##0.00;[Red](#,##0.00);-");
listValidation(purchases, "G7:G106", ["Authorised Nepal", "Lawful personal import", "Parallel/grey", "Seller-warranty", "Unknown/unclassified"]);
listValidation(purchases, "J7:J106", ["NPR", "INR", "Other"]);
listValidation(purchases, "K7:K106", ["Cash", "Card", "EMI", "Mixed", "Other", "Don't know", "Refused"]);
listValidation(purchases, "L7:Q106", ["Yes", "No", "Not seen", "Not applicable", "Don't know", "Refused"]);
listValidation(purchases, "U7:U106", ["Yes", "No", "Not applicable"]);
listValidation(purchases, "W7:W106", ["Pending", "Valid", "Review", "Invalid", "Excluded"]);
purchases.getRange("A:H").format.columnWidth = 22;
purchases.getRange("I:Q").format.columnWidth = 22;
purchases.getRange("R:X").format.columnWidth = 30;

// Service Cases
const serviceHeaders = ["case_id", "respondent_id", "device_channel_class", "fault_problem", "case_open_date", "case_close_date", "diagnosis", "warranty_decision", "travel_trips", "shipping_cost_npr", "parts_cost_npr", "other_cost_npr", "total_direct_cost_npr", "downtime_days", "status_updates_count", "data_handling_concern", "repeat_failure", "final_outcome", "expected_responsible_party", "evidence_ref", "evidence_consent", "qa_status", "notes"];
rawSheet(service, "Ownership and Service Cases", "Ten documented cases across channel types. These show burden and mechanisms—not channel failure rates.", "W", serviceHeaders, 106);
service.getRange("M7").formulas = [["=IF(OR(A7=\"\",COUNT(J7:L7)<3),\"\",SUM(J7:L7))"]];
service.getRange("M7:M106").fillDown();
formulaStyle(service, "M7:M106");
service.getRange("E7:F106").setNumberFormat("yyyy-mm-dd");
service.getRange("I7:I106").setNumberFormat("0");
service.getRange("J7:M106").setNumberFormat("#,##0;[Red](#,##0);-");
service.getRange("N7:O106").setNumberFormat("#,##0.0;[Red](#,##0.0);-");
listValidation(service, "C7:C106", ["Authorised Nepal", "Lawful personal import", "Parallel/grey", "Seller-warranty", "Unknown/unclassified"]);
listValidation(service, "H7:H106", ["Approved", "Denied", "Partial/goodwill", "Out of warranty", "Pending", "Not submitted", "Unknown"]);
listValidation(service, "P7:Q106", ["Yes", "No", "Unknown", "Not applicable"]);
listValidation(service, "S7:S106", ["Seller", "Brand/distributor", "Service centre", "Bank/finance", "Self", "Other", "Don't know"]);
listValidation(service, "U7:U106", ["Yes", "No", "Not applicable"]);
listValidation(service, "V7:V106", ["Pending", "Valid", "Review", "Invalid", "Excluded"]);
service.getRange("A:H").format.columnWidth = 24;
service.getRange("I:O").format.columnWidth = 20;
service.getRange("P:W").format.columnWidth = 28;

// Evidence Register
const evidenceHeaders = ["evidence_id", "workstream", "linked_record_id", "evidence_type", "source_party_code", "collected_date", "storage_reference", "sensitivity", "access_class", "consent_or_authority", "direct_identifiers_present", "redacted", "reviewer_id", "review_date", "status", "expiry_date", "destruction_date", "notes"];
rawSheet(evidence, "Evidence Register", "Register metadata only. Restricted files stay outside GitHub in the founder-approved evidence store.", "R", evidenceHeaders, 1206);
evidence.getRange("F7:F1206").setNumberFormat("yyyy-mm-dd");
evidence.getRange("N7:N1206").setNumberFormat("yyyy-mm-dd");
evidence.getRange("P7:Q1206").setNumberFormat("yyyy-mm-dd");
listValidation(evidence, "H7:H1206", ["No personal data", "Commercial confidential", "Personal identifier", "Device identifier", "Financial/legal restricted"]);
listValidation(evidence, "I7:I1206", ["Internal research", "Commercial restricted", "Personal restricted", "Founder/legal only"]);
listValidation(evidence, "J7:J1206", ["Research consent", "Business permission", "Public source", "Contract/adviser authority", "Not required", "Unclear/hold"]);
listValidation(evidence, "K7:L1206", ["Yes", "No", "Not applicable"]);
listValidation(evidence, "O7:O1206", ["Received", "Restricted", "Redaction required", "Reviewed", "Rejected", "Expired", "Destroyed"]);
evidence.getRange("A:F").format.columnWidth = 22;
evidence.getRange("G:G").format.columnWidth = 44;
evidence.getRange("H:R").format.columnWidth = 25;

// QA Dashboard
title(qa, "Fieldwork QA and Completion Dashboard", "Targets are minimum evidence gates or caps from canonical studies. READY FOR ANALYSIS still does not approve a market claim or flagship decision.", "G");
qa.getRange("A4:B4").values = [["PROGRAM STATUS", null]];
qa.getRange("B4").formulas = [["=IF(COUNTIF(E7:E23,\"OPEN\")+COUNTIF(E7:E23,\"REVIEW\")>0,\"FIELD EXECUTION OPEN\",\"READY FOR ANALYSIS\")"]];
qa.getRange("A4").format = { fill: NAVY, font: { bold: true, color: "#FFFFFF" } };
formulaStyle(qa, "B4", true);
qa.getRange("A6:G6").values = [["Metric", "Rule", "Target", "Actual", "Status", "Interpretation", "Where to fix"]];
header(qa, "A6:G6");
qa.getRange("A7:C23").values = [
  ["Valid cognitive interviews", "Minimum", 12],
  ["Valid main interviews", "Minimum", 100],
  ["Recent-buyer overlay", "Minimum", 30],
  ["Border/parallel comparer overlay", "Minimum", 20],
  ["Neutral-intercept valid main interviews", "Minimum", 50],
  ["K&S social/waitlist valid main interviews", "Maximum", 25],
  ["Valid competitor visits", "Minimum", 22],
  ["Valid Nepalgunj competitor visits", "Minimum", 6],
  ["Valid traffic sessions", "Minimum", 27],
  ["Valid sell-through sources", "Minimum", 8],
  ["Valid institutions", "Minimum", 12],
  ["Valid purchase audits", "Minimum", 30],
  ["Valid service cases", "Minimum", 10],
  ["Funnel calendar span", "Minimum days", 28],
  ["Duplicate respondent IDs", "Maximum", 0],
  ["Unreviewed registered evidence", "Maximum", 0],
  ["Customer complete failure rate", "Maximum", 0.15],
];
qa.getRange("D7:D23").formulas = [
  ["=COUNTIFS('Customer Core'!$B$7:$B$156,\"Cognitive\",'Customer Core'!$AF$7:$AF$156,\"Valid\")"],
  ["=COUNTIFS('Customer Core'!$B$7:$B$156,\"Main\",'Customer Core'!$AF$7:$AF$156,\"Valid\")"],
  ["=COUNTIFS('Customer Core'!$B$7:$B$156,\"Main\",'Customer Core'!$O$7:$O$156,\"Yes\",'Customer Core'!$AF$7:$AF$156,\"Valid\")"],
  ["=COUNTIFS('Customer Core'!$B$7:$B$156,\"Main\",'Customer Core'!$P$7:$P$156,\"Yes\",'Customer Core'!$AF$7:$AF$156,\"Valid\")"],
  ["=COUNTIFS('Customer Core'!$B$7:$B$156,\"Main\",'Customer Core'!$G$7:$G$156,\"Neutral intercept\",'Customer Core'!$AF$7:$AF$156,\"Valid\")"],
  ["=COUNTIFS('Customer Core'!$B$7:$B$156,\"Main\",'Customer Core'!$G$7:$G$156,\"K&S social/waitlist\",'Customer Core'!$AF$7:$AF$156,\"Valid\")"],
  ["=COUNTIF('Competitor Visits'!$Z$7:$Z$86,\"Valid\")"],
  ["=COUNTIFS('Competitor Visits'!$D$7:$D$86,\"Nepalgunj\",'Competitor Visits'!$Z$7:$Z$86,\"Valid\")"],
  ["=COUNTIF('Traffic'!$Q$7:$Q$86,\"Valid\")"],
  ["=COUNTIFS('Sell Through'!$C$7:$C$306,\"Yes\",'Sell Through'!$X$7:$X$306,\"Valid\")"],
  ["=COUNTIFS('Institutions'!$C$7:$C$106,\"Yes\",'Institutions'!$Z$7:$Z$106,\"Valid\")"],
  ["=COUNTIF('Purchase Audits'!$W$7:$W$106,\"Valid\")"],
  ["=COUNTIF('Service Cases'!$V$7:$V$106,\"Valid\")"],
  ["=IF(COUNT('Funnel'!$B$7:$B$2506)=0,0,MAX('Funnel'!$B$7:$B$2506)-MIN('Funnel'!$B$7:$B$2506)+1)"],
  ["=COUNTIF('Customer Core'!$AH$7:$AH$156,\"DUPLICATE\")"],
  ["=COUNTIFS('Evidence Register'!$A$7:$A$1206,\"<>\",'Evidence Register'!$O$7:$O$1206,\"<>Reviewed\",'Evidence Register'!$O$7:$O$1206,\"<>Rejected\",'Evidence Register'!$O$7:$O$1206,\"<>Destroyed\")"],
  ["=IF(COUNTIF('Disposition'!$N$7:$N$256,\"Complete\")=0,0,COUNTIFS('Disposition'!$N$7:$N$256,\"Complete\",'Disposition'!$S$7:$S$256,\"REVIEW\")/COUNTIF('Disposition'!$N$7:$N$256,\"Complete\"))"],
];
qa.getRange("E7").formulas = [["=IF(B7=\"Maximum\",IF(D7<=C7,\"OK\",\"REVIEW\"),IF(D7>=C7,\"OK\",\"OPEN\"))"]];
qa.getRange("E7:E23").fillDown();
qa.getRange("F7:G23").values = [
  ["Cognitive records do not count toward 100", "Customer Core / Disposition"],
  ["Directional sample; not population representative", "Customer Core"],
  ["Overlay among valid main interviews", "Customer Core O"],
  ["Overlay among valid main interviews", "Customer Core P"],
  ["Minimum neutral recruitment route", "Customer Core G"],
  ["Cap to reduce K&S-audience bias", "Customer Core G"],
  ["Across required geographies/scenarios", "Competitor Visits"],
  ["Local minimum; same basket required", "Competitor Visits"],
  ["3 locations × 3 times × 3 days", "Traffic"],
  ["First valid row per confidential source", "Sell Through C/X"],
  ["First valid row per organization", "Institutions C/Z"],
  ["Evidence-backed and consented", "Purchase Audits"],
  ["Mechanism evidence, not failure rate", "Service Cases"],
  ["Date span does not prove every day is covered", "Funnel dates"],
  ["IDs must be unique", "Customer Core AH"],
  ["Every registered item needs review or explicit rejection", "Evidence Register O"],
  ["Pause above 15%; zero before execution is not completion", "Disposition / daily QA"],
];
qa.getRange("A7:C23").format = { wrapText: true, borders: { preset: "all", style: "thin", color: BORDER } };
formulaStyle(qa, "D7:E23", true);
qa.getRange("F7:G23").format = { wrapText: true, borders: { preset: "all", style: "thin", color: BORDER } };
qa.getRange("E7:E23").conditionalFormats.add("containsText", { text: "OK", format: { fill: PALE_GREEN, font: { bold: true, color: "#155E3B" } } });
qa.getRange("E7:E23").conditionalFormats.add("containsText", { text: "OPEN", format: { fill: PALE_GOLD, font: { bold: true, color: "#92400E" } } });
qa.getRange("E7:E23").conditionalFormats.add("containsText", { text: "REVIEW", format: { fill: PALE_RED, font: { bold: true, color: "#9B1C1C" } } });
qa.getRange("C7:D22").setNumberFormat("#,##0;[Red](#,##0);-");
qa.getRange("C23:D23").setNumberFormat("0.0%;[Red](0.0%);-");
qa.getRange("A:A").format.columnWidth = 42;
qa.getRange("B:E").format.columnWidth = 18;
qa.getRange("F:F").format.columnWidth = 48;
qa.getRange("G:G").format.columnWidth = 34;
qa.freezePanes.freezeRows(6);

await fs.mkdir(outputPath.substring(0, outputPath.lastIndexOf("/")), { recursive: true });
await fs.mkdir(previewDir, { recursive: true });

const previewRanges = {
  "Cover": "A1:H31",
  "Protocol": "A1:H24",
  "Codebook": "A1:F28",
  "Version Register": "A1:O16",
  "Disposition": "A1:S16",
  "Customer Core": "A1:AH14",
  "Friction Events": "A1:P16",
  "Choice Tasks": "A1:AC14",
  "Competitor Visits": "A1:Z16",
  "Price Basket": "A1:AB16",
  "Sell Through": "A1:X16",
  "Institutions": "A1:Z16",
  "Traffic": "A1:Q16",
  "Funnel": "A1:AB16",
  "Purchase Audits": "A1:X16",
  "Service Cases": "A1:W16",
  "Evidence Register": "A1:R16",
  "QA Dashboard": "A1:G23",
};

for (const [sheetName, range] of Object.entries(previewRanges)) {
  const preview = await wb.render({ sheetName, range, scale: sheetName === "Cover" || sheetName === "QA Dashboard" ? 0.9 : 0.55, format: "png" });
  await fs.writeFile(`${previewDir}/${sheetName.replaceAll(" ", "-")}.png`, new Uint8Array(await preview.arrayBuffer()));
}

const coverInspection = await wb.inspect({ kind: "table", range: "Cover!A1:H31", include: "values,formulas", tableMaxRows: 31, tableMaxCols: 8, maxChars: 12000 });
const qaInspection = await wb.inspect({ kind: "table", range: "QA Dashboard!A4:G23", include: "values,formulas", tableMaxRows: 24, tableMaxCols: 8, maxChars: 16000 });
const errorInspection = await wb.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A", options: { useRegex: true, maxResults: 300 }, summary: "final formula error scan" });
console.log(coverInspection.ndjson || coverInspection);
console.log(qaInspection.ndjson || qaInspection);
console.log(errorInspection.ndjson || errorInspection);

const output = await SpreadsheetFile.exportXlsx(wb);
await output.save(outputPath);
