# Field Evidence Stage A Synthetic Rehearsal

**Document ID:** RESEARCH-FIELD-002

**Version:** 0.1.0

**Status:** Stage A complete; no live evidence collected

**Owner:** Founder until field roles are appointed

**Execution date:** 2026-08-15

**Related protocol:** [RESEARCH-FIELD-001](field-evidence-activation-and-data-governance-protocol.md)

**Related decision:** [DEC-0103](../../decisions/DEC-0103-staged-field-research-activation-boundary.md)

**Operating workbook:** [KAMLESH Field Evidence Collection System](../evidence/nepalgunj-mobile-flagship/KAMLESH-Field-Evidence-Collection-System.xlsx)

## Purpose and evidence boundary

This report records the zero-cost Stage A rehearsal authorised by DEC-0103. It tests whether the blank field workbook can support controlled identifiers, linked records, automatic calculations, evidence review and daily QA before any live fieldwork.

All test entries were invented and used the `SIM-` prefix. They were created in a disposable in-memory workbook object, were never exported, were never entered in the canonical workbook and were destroyed when the rehearsal process ended. They are **not market evidence** and cannot support a customer, competitor, demand, pricing, assortment or launch claim.

The statements below are verified control-test results (**V**) about the workbook. They are not verified Nepalgunj market findings.

## Scope rehearsed

Two linked synthetic records were entered in each applicable raw-data table: disposition, customer core, friction events, choice tasks, competitor visits, exact-SKU price basket, sell-through, institutions, traffic, funnel, purchase audits, service cases and evidence register. The rehearsal exercised:

- `SIM-` identifier linkage across respondent, visit, basket, case and evidence records;
- consent/disposition logic and valid-complete classification;
- duplicate respondent and unreviewed-evidence alerts;
- competitor score, currency conversion and service-cost formulas;
- valid-record counters for cognitive, competitor, traffic, sell-through, institution, purchase and service workstreams;
- funnel calendar-span calculation;
- correction and reviewer-clearance flow; and
- workbook-wide formula-error and visual-layout review.

No participant, retailer, bank, distributor, institution, adviser or other external party was contacted. No travel, purchase, incentive, subscription or paid action occurred.

## Verified results

| Control tested | Intentional test state | Observed result | Corrected state | Result |
|---|---:|---:|---:|---|
| Duplicate respondent detection | Two customer rows shared one `SIM-` respondent ID | Dashboard counted `2`; status `REVIEW` | Second ID corrected | Count `0`; status `OK` |
| Evidence review detection | One registered item was `Pending` | Dashboard counted `1`; status `REVIEW` | Reviewer/date added; status `Reviewed` | Count `0`; status `OK` |
| Disposition eligibility | Two consented, eligible cognitive completes | Both classified `VALID` | Not applicable | Passed |
| Cognitive interview counter | Two valid cognitive rows | `2` | Not applicable | Passed |
| Competitor counters | Two valid Nepalgunj visits | Overall `2`; Nepalgunj `2` | Not applicable | Passed |
| Traffic/source/case counters | Two valid rows in each tested workstream | Each dashboard counter returned `2` | Not applicable | Passed |
| Funnel date span | Records dated 1 and 15 August 2026 | `15` calendar days inclusive | Not applicable | Passed |
| Competitor score | Component scores totaling 60 | `60` | Not applicable | Passed |
| NPR conversion | NPR 60,000 quote at factor 1 | NPR `60,000` | Not applicable | Passed |
| Service direct cost | NPR 100 shipping + 0 parts + 50 other | NPR `150` | Not applicable | Passed |
| Customer complete failure rate | Two valid completes; no review complete | `0` | Not applicable | Passed |
| Formula-error scan | Workbook-wide error search | No `#REF!`, `#DIV/0!`, `#VALUE!`, `#NAME?` or `#N/A` result | Not applicable | Passed |

The QA dashboard correctly remained open because synthetic counts did not satisfy production evidence targets. That is expected and is not a failure.

## Defect found and correction

The dashboard's former status text, `FIELD EXECUTION OPEN`, was operationally ambiguous: a reader could mistake incomplete evidence gates for permission to begin live collection. The canonical workbook is now version `0.3.0` and uses `QA OPEN`, with `QA STATUS (not authorization)` on both the cover and dashboard. The cover, protocol summary and Version Register now point to DEC-0103 and state that only Stage A rehearsal is authorised.

No data-variable, formula-range or table-layout defect requiring a schema change was found. All eighteen sheets received a visual pass after the governance wording update; titles, headers, input/formula colour treatment and blank operating rows remained intact.

## What changed in our assumptions

- **Before rehearsal (H):** the workbook appeared structurally ready, but the alert-clearance path and derived calculations had not been exercised together.
- **After rehearsal (V):** the tested identifiers, derived calculations, QA counters and review-clearance logic behave as intended for the synthetic cases used.
- **Still unverified:** spreadsheet-app compatibility on the eventual company device, offline capture, account permissions, backup/sync, restricted evidence custody, Nepali instrument comprehension and real enumerator behaviour.

## K&S opportunity

The field programme can now move from document design to activation-readiness work without rebuilding the data model. The strongest immediate opportunity is disciplined execution: name accountable people, freeze lawful/reviewed materials and test the actual company-controlled collection environment before the limited Nepalgunj pilot.

## Risks and limitations

1. Synthetic success does not predict participant comprehension, refusal, missingness, interviewer neutrality, safety or evidence access.
2. The rehearsal did not constitute qualified Nepal privacy/legal review.
3. It did not test the eventual device, spreadsheet application, offline mode, storage permissions, backup or incident recovery.
4. It did not validate every allowed value or every extreme numerical boundary in every row.
5. It does not close any market-size, demand, willingness-to-pay, competitor-execution or commercial-defensibility evidence gap.

## Stage result and next research

**Stage A result:** pass, with one governance-wording correction. Stage A is complete.

**Stage B remains closed.** Next, appoint the Research Lead, Data Custodian, Quality Reviewer and enumerator(s); obtain qualified Nepal privacy/legal review; freeze English and independently reviewed/adjudicated Nepali materials; test the company device/tool, access, restricted storage, backup and sync; record dates, Nepalgunj sites, safety/check-in and live budget; and pass training/role play. Only then may the DEC-0103 limited Nepalgunj pilot begin.

Stage C production, including the 100-interview main study, remains closed pending the live-pilot report and founder acceptance.
