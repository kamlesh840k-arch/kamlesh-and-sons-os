import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputPath = process.argv[2] || "outputs/research-program-batch-6/KAMLESH-Distributor-Operating-System.xlsx";
const wb = Workbook.create();

const NAVY = "#0B1F33";
const TEAL = "#0F766E";
const GOLD = "#D4A72C";
const LIGHT = "#E8EEF3";
const INPUT = "#D9EAF7";
const GREEN = "#DDF2E7";
const RED = "#FCE1E1";
const GREY = "#5B6573";

function baseSheet(sheet, title, subtitle, lastCol) {
  sheet.showGridLines = false;
  sheet.getRange(`A1:${lastCol}1`).merge();
  sheet.getRange("A1").values = [[title]];
  sheet.getRange("A1").format = {
    fill: NAVY,
    font: { bold: true, color: "#FFFFFF", size: 16 },
    rowHeight: 30,
    verticalAlignment: "center",
  };
  sheet.getRange(`A2:${lastCol}2`).merge();
  sheet.getRange("A2").values = [[subtitle]];
  sheet.getRange("A2").format = {
    fill: LIGHT,
    font: { color: GREY, italic: true },
    wrapText: true,
    rowHeight: 32,
  };
  sheet.freezePanes.freezeRows(6);
}

function tableHeader(sheet, address) {
  const r = sheet.getRange(address);
  r.format = {
    fill: TEAL,
    font: { bold: true, color: "#FFFFFF" },
    wrapText: true,
    verticalAlignment: "center",
    borders: { preset: "all", style: "thin", color: "#B8C2CC" },
    rowHeight: 32,
  };
}

function inputRange(sheet, address) {
  sheet.getRange(address).format = {
    fill: INPUT,
    font: { color: "#004C8C" },
    borders: { preset: "all", style: "thin", color: "#D0D7DE" },
  };
}

function formulaRange(sheet, address) {
  sheet.getRange(address).format = {
    fill: "#F3F4F6",
    font: { color: NAVY },
    borders: { preset: "all", style: "thin", color: "#D0D7DE" },
  };
}

// Cover
const cover = wb.worksheets.add("Cover");
cover.showGridLines = false;
cover.getRange("A1:H2").merge();
cover.getRange("A1").values = [["KAMLESH Distributor Operating System"]];
cover.getRange("A1").format = { fill: NAVY, font: { bold: true, color: "#FFFFFF", size: 20 }, horizontalAlignment: "center", verticalAlignment: "center", rowHeight: 40 };
cover.getRange("A4:B11").values = [
  ["Workbook version", "1.1"],
  ["Issued", "2026-08-15"],
  ["Status", "Controlled planning tool — partner evidence pending"],
  ["Planning scenario", "NPR 60 lakh BG-supported purchasing + NPR 10 lakh proposed bank-approved working capital"],
  ["Owner", "Founder until Commercial/Finance owners are appointed"],
  ["Blue cells", "Inputs or evidence references"],
  ["Grey cells", "Calculated outputs"],
  ["Important", "A score never overrides a failed legal, authorisation, warranty, downside-cash or security gate."],
];
cover.getRange("A4:A11").format = { fill: TEAL, font: { bold: true, color: "#FFFFFF" }, borders: { preset: "all", style: "thin", color: "#D0D7DE" } };
cover.getRange("B4:B11").format = { fill: "#FFFFFF", wrapText: true, borders: { preset: "all", style: "thin", color: "#D0D7DE" } };
cover.getRange("A13:H13").merge();
cover.getRange("A13").values = [["Operating sequence"]];
cover.getRange("A13").format = { fill: GOLD, font: { bold: true, color: NAVY } };
cover.getRange("A14:H20").merge(true);
cover.getRange("A14:A20").values = [
  ["1. Enter only dated written terms; label verbal statements outside this workbook."],
  ["2. Compare equivalent VAT-exclusive quotation baskets and time periods."],
  ["3. Set unreceived claims/support to zero in downside cash."],
  ["4. Review exact BG, collateral, consignment, VAT and title wording with qualified advisers."],
  ["5. Purchase only demand-proven SKUs within due-date and liquidity gates."],
  ["6. Reconcile purchases, claims, support and consignment stock weekly."],
  ["7. Record founder approvals outside the workbook and link the evidence reference."],
];
cover.getRange("A14:H20").format = { fill: "#FFFFFF", wrapText: true, borders: { preset: "all", style: "thin", color: "#D0D7DE" }, rowHeight: 24 };
cover.getRange("A1:H20").format.columnWidth = 18;
cover.getRange("A1:A20").format.columnWidth = 23;
cover.getRange("B1:H20").format.columnWidth = 20;

// Proposal comparison
const pc = wb.worksheets.add("Proposal Comparison");
baseSheet(pc, "Proposal Comparison", "Blue = evidence-backed input. Ratings are 0–5. Mandatory gates and cash cover override the weighted score.", "X");
pc.getRange("A4:X4").merge();
pc.getRange("A4").values = [["Default cash-cover warning: 1.20 (hypothesis; founder must approve actual threshold)"]];
pc.getRange("A4").format = { fill: "#FFF4CC", font: { bold: true, color: NAVY } };
const pcHeaders = ["Supplier","Brand","Structure","Authorisation","VAT/MDMS","DOA/Warranty","Title/legal","Margin rating","Credit/BG rating","Price protection","Service","Rotation","Supply","Support","Channel conflict","Weighted score","Amount due NPR","Forecast sold cost by due","Unrestricted cash by due","Sell-through cover","Cash due cover","Commercial gate","Decision","Evidence reference"];
pc.getRange("A6:X6").values = [pcHeaders];
tableHeader(pc, "A6:X6");
inputRange(pc, "A7:O46");
inputRange(pc, "Q7:S46");
inputRange(pc, "X7:X46");
formulaRange(pc, "P7:P46");
formulaRange(pc, "T7:W46");
pc.getRange("P7").formulas = [["=IF(A7=\"\",\"\",H7*15/5+I7*15/5+J7*15/5+K7*15/5+L7*10/5+M7*10/5+N7*10/5+O7*10/5)"]];
pc.getRange("P7:P46").fillDown();
pc.getRange("T7").formulas = [["=IF(A7=\"\",\"\",IF(Q7=0,0,R7/Q7))"]];
pc.getRange("T7:T46").fillDown();
pc.getRange("U7").formulas = [["=IF(A7=\"\",\"\",IF(Q7=0,0,S7/Q7))"]];
pc.getRange("U7:U46").fillDown();
pc.getRange("V7").formulas = [["=IF(A7=\"\",\"\",IF(AND(D7=\"Pass\",E7=\"Pass\",F7=\"Pass\",G7=\"Pass\",T7>=1,U7>=1.2),\"Pass\",\"Hold\"))"]];
pc.getRange("V7:V46").fillDown();
pc.getRange("W7").formulas = [["=IF(A7=\"\",\"\",IF(V7<>\"Pass\",\"HOLD\",IF(P7>=75,\"APPROVE CANDIDATE\",IF(P7>=60,\"CONDITIONAL\",\"RENEGOTIATE/REJECT\"))))"]];
pc.getRange("W7:W46").fillDown();
pc.getRange("D7:G46").dataValidation = { rule: { type: "list", values: ["Pass", "Hold", "Fail", "Unverified"] } };
pc.getRange("H7:O46").dataValidation = { rule: { type: "whole", operator: "between", formula1: 0, formula2: 5 } };
pc.getRange("P7:P46").setNumberFormat("0.0");
pc.getRange("Q7:S46").setNumberFormat("#,##0");
pc.getRange("T7:U46").setNumberFormat("0.00x");
pc.getRange("A6:X46").format.wrapText = true;
pc.getRange("A:X").format.columnWidth = 15;
pc.getRange("A:C").format.columnWidth = 18;
pc.getRange("X:X").format.columnWidth = 28;

// Term economics
const te = wb.worksheets.add("Term Economics");
baseSheet(te, "Term Economics", "Use VAT-exclusive inputs. Unreceived claims do not enter collected support. One row can represent a SKU, order or portfolio scenario.", "W");
const teHeaders = ["Supplier","SKU/portfolio","Structure","Inventory cost","Net sales revenue","Inventory days","Customer collection days","Supplier payment days","Supplier amount due","Sold cost by due","Cash available by due","Explicit fee","Forgone discount","Allocated BG cost","Bank interest","Insurance/audit","Direct fulfilment","Unrecovered risk","Collected support","Cash-conversion days","Sell-through cover","Cash due cover","Realised contribution"];
te.getRange("A6:W6").values = [teHeaders];
tableHeader(te, "A6:W6");
inputRange(te, "A7:S106");
formulaRange(te, "T7:W106");
te.getRange("T7").formulas = [["=IF(A7=\"\",\"\",F7+G7-H7)"]]; te.getRange("T7:T106").fillDown();
te.getRange("U7").formulas = [["=IF(A7=\"\",\"\",IF(I7=0,0,J7/I7))"]]; te.getRange("U7:U106").fillDown();
te.getRange("V7").formulas = [["=IF(A7=\"\",\"\",IF(I7=0,0,K7/I7))"]]; te.getRange("V7:V106").fillDown();
te.getRange("W7").formulas = [["=IF(A7=\"\",\"\",E7-D7-L7-M7-N7-O7-P7-Q7-R7+S7)"]]; te.getRange("W7:W106").fillDown();
te.getRange("D7:E106").setNumberFormat("#,##0"); te.getRange("I7:S106").setNumberFormat("#,##0"); te.getRange("T7:T106").setNumberFormat("0"); te.getRange("U7:V106").setNumberFormat("0.00x"); te.getRange("W7:W106").setNumberFormat("#,##0");
te.getRange("A:W").format.columnWidth = 15; te.getRange("A:C").format.columnWidth = 18;

// Price protection
const pp = wb.worksheets.add("Price Protection");
baseSheet(pp, "Price Protection", "A claim exists only under the signed eligibility rule. Record current eligible stock and actual settlement separately.", "P");
const ppHeaders = ["Claim ID","Supplier","Brand/SKU","Trigger date","Eligible units","Old net cost/unit","New net cost/unit","Gross exposure","Claim deadline","Submitted date","Expected amount","Received amount","Outstanding","Status","Evidence reference","Owner"];
pp.getRange("A6:P6").values = [ppHeaders]; tableHeader(pp, "A6:P6");
inputRange(pp, "A7:G106"); inputRange(pp, "I7:L106"); inputRange(pp, "N7:P106"); formulaRange(pp, "H7:H106"); formulaRange(pp, "M7:M106");
pp.getRange("H7").formulas = [["=IF(A7=\"\",\"\",E7*(F7-G7))"]]; pp.getRange("H7:H106").fillDown();
pp.getRange("M7").formulas = [["=IF(A7=\"\",\"\",K7-L7)"]]; pp.getRange("M7:M106").fillDown();
pp.getRange("D7:D106").setNumberFormat("yyyy-mm-dd"); pp.getRange("I7:J106").setNumberFormat("yyyy-mm-dd"); pp.getRange("F7:H106").setNumberFormat("#,##0"); pp.getRange("K7:M106").setNumberFormat("#,##0");
pp.getRange("N7:N106").dataValidation = { rule: { type: "list", values: ["Draft","Submitted","Accepted","Rejected","Part-paid","Settled","Disputed"] } };
pp.getRange("A:P").format.columnWidth = 16; pp.getRange("O:O").format.columnWidth = 28;

// Brand support
const bs = wb.worksheets.add("Brand Support");
baseSheet(bs, "Brand Support", "Expected and net value expose claim, spend, operational, space and exit costs. Enter probabilities from 0 to 1.", "R");
const bsHeaders = ["Support ID","Supplier/brand","Support type","Program/version","Contract value","Evidence-valid probability","Settlement probability","Expected collected value","K&S cash spend","Operating/tax cost","Space/exit cost","Net support value","Submitted amount","Received amount","Realisation rate","Claim deadline","Status","Evidence reference"];
bs.getRange("A6:R6").values = [bsHeaders]; tableHeader(bs, "A6:R6");
inputRange(bs, "A7:G106"); inputRange(bs, "I7:K106"); inputRange(bs, "M7:N106"); inputRange(bs, "P7:R106"); formulaRange(bs, "H7:H106"); formulaRange(bs, "L7:L106"); formulaRange(bs, "O7:O106");
bs.getRange("H7").formulas = [["=IF(A7=\"\",\"\",E7*F7*G7)"]]; bs.getRange("H7:H106").fillDown();
bs.getRange("L7").formulas = [["=IF(A7=\"\",\"\",H7-I7-J7-K7)"]]; bs.getRange("L7:L106").fillDown();
bs.getRange("O7").formulas = [["=IF(A7=\"\",\"\",IF(M7=0,0,N7/M7))"]]; bs.getRange("O7:O106").fillDown();
bs.getRange("E7:E106").setNumberFormat("#,##0"); bs.getRange("F7:G106").setNumberFormat("0%"); bs.getRange("H7:N106").setNumberFormat("#,##0"); bs.getRange("O7:O106").setNumberFormat("0%"); bs.getRange("P7:P106").setNumberFormat("yyyy-mm-dd");
bs.getRange("C7:C106").dataValidation = { rule: { type: "list", values: ["Fixture/signage","Demo","MDF/co-op","Launch/festival","Promoter","Rebate/spiff","Training/content","Allocation/O2O","Other"] } };
bs.getRange("Q7:Q106").dataValidation = { rule: { type: "list", values: ["Proposed","Preapproved","Submitted","Accepted","Rejected","Part-paid","Settled","Disputed"] } };
bs.getRange("A:R").format.columnWidth = 16; bs.getRange("D:D").format.columnWidth = 20; bs.getRange("R:R").format.columnWidth = 28;

// Claims register
const cl = wb.worksheets.add("Claims");
baseSheet(cl, "Claims Register", "Unreceived claims are not available cash. Reconcile cash/credit notes independently and preserve policy/program version evidence.", "Q");
const clHeaders = ["Claim ID","Claim type","Supplier/brand","Program/policy version","Related PO/invoice","SKU/IMEI","Event date","Deadline","Amount claimed","K&S spend","Submitted date","Expected settlement","Received date","Amount received","Outstanding","Status","Evidence reference"];
cl.getRange("A6:Q6").values = [clHeaders]; tableHeader(cl, "A6:Q6");
inputRange(cl, "A7:N206"); inputRange(cl, "P7:Q206"); formulaRange(cl, "O7:O206");
cl.getRange("O7").formulas = [["=IF(A7=\"\",\"\",I7-N7)"]]; cl.getRange("O7:O206").fillDown();
cl.getRange("G7:H206").setNumberFormat("yyyy-mm-dd"); cl.getRange("K7:M206").setNumberFormat("yyyy-mm-dd"); cl.getRange("I7:J206").setNumberFormat("#,##0"); cl.getRange("N7:O206").setNumberFormat("#,##0");
cl.getRange("B7:B206").dataValidation = { rule: { type: "list", values: ["Price protection","Rotation","Rebate","MDF","Demo","DOA","Warranty","Freight/damage","Other"] } };
cl.getRange("P7:P206").dataValidation = { rule: { type: "list", values: ["Draft","Submitted","Accepted","Rejected","Part-paid","Settled","Disputed"] } };
cl.getRange("A:Q").format.columnWidth = 16; cl.getRange("D:F").format.columnWidth = 20; cl.getRange("Q:Q").format.columnWidth = 28;

// Purchases
const pu = wb.worksheets.add("Purchases");
baseSheet(pu, "Purchase and Due-Date Control", "Expected sell-through, cash cover, BG/security exposure and unreceived support must be reviewed before approval.", "W");
const puHeaders = ["PO ID","Supplier","Brand/SKU","Structure","PO date","Delivery date","Invoice value","Landed cost","Credit days","Due date","Forecast sold cost by due","Cash available by due","Sell-through cover","Cash due cover","Facility used","BG/security exposure","Unreceived support","Price-protection deadline","Rotation deadline","Owner approval ref","Status","Exception/action","Evidence reference"];
pu.getRange("A6:W6").values = [puHeaders]; tableHeader(pu, "A6:W6");
inputRange(pu, "A7:I206"); inputRange(pu, "K7:L206"); inputRange(pu, "O7:W206"); formulaRange(pu, "J7:J206"); formulaRange(pu, "M7:N206");
pu.getRange("J7").formulas = [["=IF(A7=\"\",\"\",E7+I7)"]]; pu.getRange("J7:J206").fillDown();
pu.getRange("M7").formulas = [["=IF(A7=\"\",\"\",IF(G7=0,0,K7/G7))"]]; pu.getRange("M7:M206").fillDown();
pu.getRange("N7").formulas = [["=IF(A7=\"\",\"\",IF(G7=0,0,L7/G7))"]]; pu.getRange("N7:N206").fillDown();
pu.getRange("E7:F206").setNumberFormat("yyyy-mm-dd"); pu.getRange("J7:J206").setNumberFormat("yyyy-mm-dd"); pu.getRange("R7:S206").setNumberFormat("yyyy-mm-dd"); pu.getRange("G7:H206").setNumberFormat("#,##0"); pu.getRange("K7:L206").setNumberFormat("#,##0"); pu.getRange("M7:N206").setNumberFormat("0.00x"); pu.getRange("O7:Q206").setNumberFormat("#,##0");
pu.getRange("U7:U206").dataValidation = { rule: { type: "list", values: ["Draft","Pending evidence","Approved","Ordered","Received","Paid","On hold","Cancelled"] } };
pu.getRange("A:W").format.columnWidth = 15; pu.getRange("C:D").format.columnWidth = 19; pu.getRange("V:W").format.columnWidth = 26;

// Controls
const ct = wb.worksheets.add("Controls");
baseSheet(ct, "Control Checks", "These checks surface missing evidence and cash/claim exposure. Investigate every non-zero exception.", "F");
ct.getRange("A6:F6").values = [["Control","Result","Target","Status","Owner","Action/evidence"]]; tableHeader(ct, "A6:F6");
ct.getRange("A7:A14").values = [["Proposal rows on Hold"],["Purchase rows with sell-through cover <1.00"],["Purchase rows with cash cover <1.20"],["Unreceived claims NPR"],["Overdue open claims"],["Unreceived support NPR"],["Open price-protection exposure NPR"],["Founder approvals missing"]];
ct.getRange("B7:B14").formulas = [["=COUNTIF('Proposal Comparison'!V7:V46,\"Hold\")"],["=COUNTIF(Purchases!M7:M206,\"<1\")-COUNTBLANK(Purchases!M7:M206)"],["=COUNTIF(Purchases!N7:N206,\"<1.2\")-COUNTBLANK(Purchases!N7:N206)"],["=SUM(Claims!O7:O206)"],["=COUNTIFS(Claims!H7:H206,\"<\"&TODAY(),Claims!O7:O206,\">0\")"],["=SUM('Brand Support'!M7:M106)-SUM('Brand Support'!N7:N106)"],["=SUM('Price Protection'!M7:M106)"],["=COUNTIF(Purchases!T7:T206,\"\")-COUNTIF(Purchases!A7:A206,\"\")"]];
ct.getRange("C7:C14").values = [[0],[0],[0],[0],[0],[0],[0],[0]];
ct.getRange("D7").formulas = [["=IF(B7<=C7,\"OK\",\"REVIEW\")"]]; ct.getRange("D7:D14").fillDown();
ct.getRange("E7:E14").values = [["Founder/Commercial"],["Commercial/Finance"],["Founder/Finance"],["Finance"],["Commercial/Finance"],["Marketing/Finance"],["Commercial"],["Founder"]];
ct.getRange("A7:A14").format = { fill: LIGHT, font: { bold: true, color: NAVY }, borders: { preset: "all", style: "thin", color: "#D0D7DE" } };
formulaRange(ct, "B7:D14"); inputRange(ct, "F7:F14");
ct.getRange("D7:D14").conditionalFormats.add("containsText", { text: "OK", format: { fill: GREEN, font: { color: "#155E3B", bold: true } } });
ct.getRange("D7:D14").conditionalFormats.add("containsText", { text: "REVIEW", format: { fill: RED, font: { color: "#9B1C1C", bold: true } } });
ct.getRange("A:F").format.columnWidth = 22; ct.getRange("A:A").format.columnWidth = 38; ct.getRange("F:F").format.columnWidth = 34;

// Sources
const so = wb.worksheets.add("Sources");
baseSheet(so, "Sources and Evidence Rules", "Primary sources define the frame; only dated written partner terms can establish K&S eligibility and economics.", "D");
so.getRange("A6:D6").values = [["Topic","Source","Use","Limitation"]]; tableHeader(so, "A6:D6");
so.getRange("A7:D14").values = [
  ["Nepal working capital","NRB Working Capital Loan Guidelines, consolidated fourth amendment, 2026-03-17","Facility structure, turnover/operating-cycle and current-asset controls","Does not establish K&S sanction or price"],
  ["Overdraft/cash credit","NRB Working Capital Guidelines FAQ","Company OD terminology correction; cash-credit use boundary","Bank product and eligibility remain open"],
  ["Consignment","IFRS 15 B77–B78","Control, return and unconditional-payment indicators","Nepal contract/tax conclusion requires advisers"],
  ["Inventory/rebates","IAS 2 and IFRIC rebate agenda decision","Inventory cost and rebate classification principles","K&S accounting classification requires accountant"],
  ["Nepal accounting","Accounting Standards Board Nepal NFRS 2018 page","Current Nepal adoption/effective-standard list","Full application requires accountant"],
  ["Nepal VAT","IRD Value Added Tax Act including Finance Act 2082","Current statutory source","Consignment invoice/credit-note flow requires tax advice"],
  ["Security interests","Nepal Law Commission Secured Transactions Act, 2063","Movable/inventory security frame","Registration/priority requires legal advice"],
  ["Brand mechanisms","Dell FY27 terms; HP 2025 policy; Samsung India DOST 2025","MDF, rebate, demo and retail-training mechanism evidence","Not Nepal eligibility or K&S terms"],
];
so.getRange("A7:D14").format = { fill: "#FFFFFF", wrapText: true, borders: { preset: "all", style: "thin", color: "#D0D7DE" } };
so.getRange("A:D").format.columnWidth = 28; so.getRange("B:B").format.columnWidth = 42; so.getRange("C:D").format.columnWidth = 38;

await fs.mkdir(outputPath.substring(0, outputPath.lastIndexOf("/")), { recursive: true });
const out = await SpreadsheetFile.exportXlsx(wb);
await out.save(outputPath);

for (const sheetName of ["Cover","Proposal Comparison","Term Economics","Price Protection","Brand Support","Claims","Purchases","Controls","Sources"]) {
  const preview = await wb.render({ sheetName, autoCrop: "all", scale: 0.8, format: "png" });
  await fs.mkdir("outputs/research-program-batch-6/previews", { recursive: true });
  await fs.writeFile(`outputs/research-program-batch-6/previews/${sheetName.replaceAll(" ", "-")}.png`, new Uint8Array(await preview.arrayBuffer()));
}

const inspection = await wb.inspect({ kind: "sheet,formula", maxChars: 8000, options: { maxResults: 80 } });
console.log(inspection.ndjson || inspection);
