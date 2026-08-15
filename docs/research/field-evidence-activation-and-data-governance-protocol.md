# KAMLESH & SONS Field Evidence Activation and Data-Governance Protocol

**Document ID:** RESEARCH-FIELD-001

**Version:** 0.2.0

**Status:** Execution system complete; fieldwork, translation, privacy approval and real-world collection not started

**Owner:** Founder until a Research Lead and Data Custodian are appointed

**Created:** 2026-08-15

**Related research:** [research programme index](README.md), [customer friction/WTP study](customer-phone-buying-experience-and-price-hypothesis.md), [competitor matrix](competitor-experience-matrix.md), [official/grey/border study](nepal-official-grey-border-buying-and-price-gap.md), [institutional demand/procurement study](western-nepal-institutional-device-demand-and-procurement.md), [integrated flagship study](integrated-market-size-assortment-and-flagship-defensibility.md), [field validation plan](../evidence/nepalgunj-mobile-flagship/field-validation-and-research-marketing-plan.md)

**Operating workbook:** [KAMLESH Field Evidence Collection System](../evidence/nepalgunj-mobile-flagship/KAMLESH-Field-Evidence-Collection-System.xlsx)

**Related decisions:** [DEC-0017](../../decisions/DEC-0017-research-and-market-intelligence-strategy.md), [DEC-0048](../../decisions/DEC-0048-sales-crm-and-customer-relationship-management-system.md), [DEC-0054](../../decisions/DEC-0054-customer-service-support-warranty-and-after-sales-experience-system.md), [DEC-0092](../../decisions/DEC-0092-market-research-and-competitive-intelligence-system.md)

## Purpose and decision boundary

This protocol turns the completed desk instruments into one executable evidence system. It defines common identifiers, consent separation, source and quality labels, raw-data tables, version control, evidence custody, quality review and handoff into the commercial model.

It does not authorise travel, incentives, covert recording, cross-border buying, customer contact, paid professional advice, collection of identity documents, publication of named competitor findings or any product/service/launch decision. Those actions require the approvals stated below.

The collection workbook is a blank operating instrument. An empty or formula-complete workbook is not field evidence. Only dated, reviewable records from authorised collection can change an assumption.

## Evidence labels

- **V — verified fact:** primary/official evidence or a directly collected record whose method and source can be audited.
- **P — public claim:** an interested party's advertised or stated offer; execution is not proven.
- **S — secondary signal:** useful discovery evidence with lower authority.
- **E — estimate:** arithmetic from stated inputs; method and limitations remain visible.
- **H — hypothesis:** a proposition requiring evidence.
- **D — founder decision:** an accepted decision record; field frequency or a workbook status cannot create one.

Field observations do not automatically become V. A record must retain collector, date/time, scope, method, evidence state and quality review. Verbal recall remains labelled as recall; a photographed document remains subject to consent, redaction and authenticity review.

## What the repository audit found

The existing research already defines the necessary questions, sample thresholds, scorecards and interpretation limits. Creating a new short survey or a separate informal competitor sheet would duplicate and weaken those instruments.

The missing operating layer was:

1. one respondent/visit/source identifier system across workstreams;
2. a normalized raw-data structure rather than narrative notes scattered across files;
3. separate consent, contact and evidence permissions;
4. one evidence register for commercial, personal and device-identifying material;
5. an instrument-version and translation-change record;
6. automatic completion and quality-control checks;
7. a documented bridge from raw records to the commercial evidence model.

The workbook fills that operating gap without replacing the canonical questionnaires and schedules.

## Current standards baseline

The following are method and governance references, not Nepal market findings:

1. AAPOR's June 2026 ethics code emphasizes voluntary participation, truthful research purpose, protection and early destruction of identifiers, fit-for-purpose methods, disclosure sufficient for independent review, and claims no broader than the design supports.
2. AAPOR's best-practice guidance calls for transparent reporting of the population, sample construction, recruitment, mode, questions, sample size and analysis.
3. Pew's questionnaire guidance supports pretesting new questions and retaining meaning—not literal wording—through a reviewed translation process.
4. The 2025 ICC/ESOMAR Code adds duty of care, data minimisation, privacy, accountability and human oversight as current professional benchmarks. It is not Nepal law and does not substitute for local legal review.
5. Nepal's Privacy Act, 2075 treats address, telephone/email and other person-linked data as personal information; its data-privacy provisions require consented data to be used for the purpose for which it was collected. Obtain qualified Nepal advice before collection rather than treating this protocol as a legal opinion.

## Field activation gates

No participant interview, contact capture, mystery shop, evidence photograph or paid field action begins until all gates below are recorded in the Version Register or a linked decision record.

| Gate | Minimum evidence | Status at creation |
|---|---|---|
| Accountable owner | Named Research Lead, Data Custodian and Quality Reviewer | Open |
| Field authority | Dates, locations, workstreams, permitted observation and travel approved | Open |
| Privacy/legal | Approved notice, consent wording, lawful basis, retention/deletion and incident route | Open |
| Instrument | English source version frozen; Nepali translation reviewed, adjudicated and cognitively tested | Open |
| Enumerator readiness | Training, role play, neutrality, safety and escalation passed | Open |
| Technology | Approved offline-capable collection device/tool, access control, backup and sync test | Open |
| Evidence custody | Restricted storage path, redaction, naming and reviewer access tested | Open |
| Budget | Incentive, travel, communication and paid-advice limits approved, or recorded as zero | Open |
| Pilot | At least two supervised records per active workstream reviewed before production | Open |

If a gate is open, prepare materials but do not collect live personal or commercially confidential evidence.

## Roles and separation

| Role | Responsibility | Cannot self-approve |
|---|---|---|
| Founder / commissioner | Approves scope, budget, privacy boundary and later decisions | Cannot treat a preferred answer as evidence |
| Research Lead | Freezes instruments, assigns work, monitors recruitment and owns disclosure | Material deviations or own suspected fabrication |
| Enumerator / mystery shopper | Reads neutral scripts and records observable answers/events | Validity of own disputed record |
| Data Custodian | Controls contact key, evidence store, access, backup and deletion | Secondary use outside approved purpose |
| Quality Reviewer | Reviews consent, eligibility, duplicates, timing, consistency and evidence | Final commercial/launch decision |
| Analyst | Produces reproducible descriptive and choice outputs with limitations | Population claims from the directional sample |

One person may hold more than one role in a small pilot, but every conflict and compensating review must be recorded.

## Identifier and file architecture

Use non-identifying IDs. Never embed a name, telephone number, citizenship number, IMEI or full address in a research ID.

| Record | Pattern | Example |
|---|---|---|
| Approach | `APP-YYYYMMDD-###` | `APP-20260820-001` |
| Respondent | `RSP-###` | `RSP-001` |
| Competitor visit | `CV-GEO-###` | `CV-NPJ-001` |
| Basket record | `PB-visit-seq` | `PB-CV-NPJ-001-01` |
| Sell-through source | `STS-###` | `STS-001` |
| Institution | `ORG-###` | `ORG-001` |
| Traffic session | `TRF-YYYYMMDD-##` | `TRF-20260820-01` |
| Funnel interaction | `FUN-YYYYMMDD-###` | `FUN-20260820-001` |
| Evidence | `EVD-workstream-####` | `EVD-CX-0001` |

The workbook contains no contact-key sheet. If optional follow-up is approved, store `respondent_id ↔ contact` in a separate encrypted/restricted system accessible only to the Data Custodian. The research workbook receives only `contact consent = yes/no`.

## Consent source script

The final Nepali and English scripts require legal/privacy review and cognitive testing. The source meaning is:

> KAMLESH & SONS is conducting research about how adults buy and use phones and laptops. This is research, not a sales or loan application. Participation is voluntary. You may skip any question or stop at any time. The interview will take approximately the approved tested duration. Your answers will be analyzed with other participants and will not guarantee a discount, product, EMI approval, service, job or benefit. We will not ask for passwords, OTPs, banking credentials or private device content. May we continue?

Ask separately:

1. May the researcher view the offered non-private evidence and record only its type or a redacted copy?
2. May K&S retain separate contact details for the specific follow-up pilot described to you?
3. May an anonymized quote/photo/video be used publicly? This needs a separate media release; ordinary research consent is insufficient.

Refusal to evidence, contact or media consent must not invalidate an otherwise eligible interview.

## Translation and version control

1. Freeze the English source with version and checksum/reference.
2. Have at least one bilingual translator produce the Nepali draft and another qualified reviewer check meaning, tone and retail terminology.
3. Adjudicate disagreements with the Research Lead; record the affected question IDs and rationale.
4. Test the translated script during the twelve cognitive interviews, including comprehension, recall, sensitivity and response-option fit.
5. Freeze the production version. Never edit live wording silently.
6. If a material change is required, stop affected collection, open a new instrument version and decide whether prior records remain comparable.

Automated translation may assist drafting but cannot approve field wording.

## Workbook and raw-data rules

The operating workbook separates:

- approach/disposition records;
- respondent core data;
- long-form friction-event observations;
- long-form stated-choice tasks;
- competitor visit scorecards;
- exact-SKU price-basket rows;
- confidential sell-through rows;
- institutional demand rows;
- traffic sessions;
- quote/funnel interactions;
- recent-purchase audits;
- service cases;
- evidence custody; and
- QA/completion outputs.

Each row represents one defined observation. Do not merge multiple respondents, SKUs, institutions, events or service episodes into one row. Do not overwrite raw answers during cleaning. Put review/exclusion status in the designated column and retain the original entry.

Use these missing-value meanings consistently:

- blank = not yet entered or not asked because the record is incomplete;
- `Don't know` = asked; participant does not know;
- `Refused` = asked; participant declined;
- `Not applicable` = field does not apply;
- numeric zero = observed or confirmed zero.

## Workstream execution cards

### Customer cognitive and main interviews

Use RESEARCH-CX-001 unchanged. The workbook is the storage schema, not a shortened questionnaire. Complete twelve cognitive interviews, freeze the production instrument, then complete 100 valid directional interviews under the stated device/budget and recruitment controls.

Link one respondent across Customer Core, Friction Events and Choice Tasks with `respondent_id`. Cognitive records do not count toward the 100. Record recent-buyer and border-comparer overlays explicitly.

### Competitor visits and exact-SKU basket

Use the competitor matrix's scenarios, evidence states and 100-point score. Store names and commercially sensitive observations remain internal. Record `not offered`, `claimed`, `shown`, `documented` and `successfully tested` separately. A high score does not prove financial strength or market share.

Build and freeze the 12-phone/3-laptop/6-accessory basket immediately before execution. Price, stock, gifts, finance and warranty terms must share the same timestamp or a stated comparison window.

### Sell-through sources

Obtain eight to ten confidential sources over comparable 30/90-day periods. Label system export, invoice, documentary schedule, verbal recall and estimate separately. Use `duplicate_group` to prevent adding distributor shipments and the same retailer sale twice.

Never publish an identifiable retailer's units or terms without permission.

### Institutional demand

Use one organization code and separate category rows. Keep last-12-month purchases, confirmed next-12-month orders/budgets, documented plans, verbal estimates and exploratory interest separate. Do not add all of them as committed demand.

### Traffic and funnel

Complete the twenty-seven specified 30-minute traffic sessions. General traffic is not sales. For at least four weeks, log qualified visits, exact-SKU quotes, availability, origin class, outcome and lost-sale reason without collecting unnecessary identity.

### Recent purchases and service cases

Complete thirty evidence-backed purchase audits and ten service cases. Evidence is optional and consented. Record channel, invoice/MDMS/authorisation/warranty as separate fields; do not infer one from another. Service cases demonstrate mechanisms and burden, not channel failure rates.

## Evidence custody and access classes

| Class | Examples | Minimum control |
|---|---|---|
| Internal research | Anonymized responses and public price observations | K&S research access; no public raw release |
| Commercial confidential | Retailer units, distributor/bank terms, rent proposals | Named need-to-know access; aggregation for reporting |
| Personal restricted | Contact key, voice/image, precise address, unredacted invoice | Separate restricted store; Data Custodian access |
| Device/financial/legal restricted | IMEI/serial, finance records, identity evidence, adviser opinions | Do not collect unless separately approved; highest restriction |

Every evidence file receives an `evidence_id`, linked record, collection date, storage reference, sensitivity, authority/consent, redaction status, reviewer and deletion/expiry field. Do not paste confidential files into the GitHub repository.

GitHub stores instruments, anonymized/aggregated outputs and decision-relevant research—not personal contact keys, unredacted invoices, IMEIs, identity documents, recordings or confidential partner documents.

## Daily quality-control sequence

1. Enumerator self-checks IDs, consent, required fields and evidence link before submission.
2. Data Custodian confirms sync, file naming, restricted storage and backup.
3. Quality Reviewer samples records daily and reviews every invalid/excluded record.
4. Research Lead reviews disposition by channel, quota coverage, duration, missingness, repeated patterns and interviewer deviations.
5. Freeze suspicious records; never delete them to improve completion rates.
6. Correct a transcription error with change note, original value, corrected value, author and date.

Mark a record invalid for duplicate, ineligibility, absent consent, material incompleteness, demonstrated fabrication or material interviewer deviation. Flag short duration, inconsistent timing/price, repetitive responses or failed comprehension for review rather than automatic deletion.

If more than 15% of completed customer interviews fail quality review, pause production and investigate before replacements. This is a project control, not a statistical theorem.

## Analysis and reporting handoff

1. Lock a read-only raw-data snapshot and record its checksum/reference.
2. Create a separate processed analysis extract; never clean over raw values.
3. Publish the complete field dates, geography, mode, eligibility, recruitment, sample disposition, question/instrument version, missing/exclusion rules and limitations.
4. Report directional customer results as within-sample counts/percentages with denominators. Do not publish a Nepalgunj margin of error or population prevalence from the purposive sample.
5. Report spontaneous and prompted friction separately.
6. Report public claim, verbal observation, documentary evidence and successfully tested execution separately.
7. Reconcile local demand through at least two independent methods before loading a low/base/high market range into the [commercial evidence model](../evidence/nepalgunj-mobile-flagship/KAMLESH-Flagship-Commercial-Evidence-Model.xlsx).
8. Connect service/feature evidence to actual use, conversion, contribution, delivery reliability and risk before classification as a differentiator.

## Founder decisions required before live fieldwork

1. Research Lead, Data Custodian, Quality Reviewer and enumerator appointments.
2. Approved dates, locations, store visit scope, travel and safety plan.
3. Privacy/legal review, consent/notice wording, access classes, retention and deletion schedule.
4. English and Nepali instrument versions after cognitive testing.
5. Research device/tool, offline collection, account permissions, sync, backup and incident procedure.
6. Incentive, travel, communication, analyst and adviser budget—or explicit no-cost scope.
7. Whether named competitors may be stored internally and what can be published.
8. Any contact, media, document-photo, IMEI/serial or sensitive commercial-data collection.

These are genuine founder/legal/external-action gates. Preparing this protocol does not satisfy them.

## Major-batch synthesis

### What we learned

The research programme did not need more questions; it needed compatible records, consent separation, evidence custody and version control. Without that layer, fieldwork could meet numeric targets while remaining unauditable or impossible to integrate.

### What changed in assumptions

“Run 100 interviews” is now an evidence chain: approach disposition → eligibility/consent → versioned interview → normalized events/choices → QA → anonymized analysis → behavioral validation. Contact permission and evidence permission are no longer treated as part of basic study consent.

### K&S opportunity

A disciplined field system can become an operating capability: K&S can learn from demand, lost sales and service cases without mixing marketing contacts, personal data and commercial decisions. The same IDs and evidence states can later support the assortment-learning loop.

### Risks and disconfirming evidence

Enumerator selling, convenient recruitment, literal translation, unprotected identifiers, duplicate channel counts, silent cleaning or pressure to confirm the flagship could invalidate the programme. A complete workbook can still contain weak evidence.

### Unresolved questions

Who will own and execute fieldwork, what data system/storage will be approved, what Nepali wording passes cognitive testing, what retention period is lawful and proportionate, and which local sources will provide documentary rather than recalled data?

### Recommended next research

After founder/privacy approval, run the supervised two-record-per-workstream pilot and twelve cognitive interviews. Review wording, duration, field safety, missingness and evidence custody before freezing the 100-interview production instrument. Load only quality-reviewed summaries into the commercial model.

## Sources

- American Association for Public Opinion Research, [Code of Professional Ethics and Practices, revised June 2026](https://aapor.org/standards-and-ethics/) and [Best Practices for Survey Research](https://aapor.org/standards-and-ethics/best-practices/).
- Pew Research Center, [Writing Survey Questions](https://www.pewresearch.org/writing-survey-questions/) and [Questionnaire Design and Translation](https://www.pewresearch.org/questionnaire-design-and-translation/).
- ICC/ESOMAR, [International Code on Market, Opinion and Social Research and Data Analytics, 2025](https://standards.esomar.org/assets/documents/icc-esomar-code-2025.pdf).
- Nepal Law Commission, [Privacy Act, 2075](https://lawcommission.gov.np/content/12261/the-privacy-act-2075/) and [data-privacy provisions](https://repository.lawcommission.gov.np/np/documents/prevailing-law/statutes-acts/%E0%A4%B5%E0%A5%88%E0%A4%AF%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95-%E0%A4%97%E0%A5%8B%E0%A4%AA%E0%A4%A8%E0%A5%80%E0%A4%AF%E0%A4%A4%E0%A4%BE-%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AC%E0%A4%A8%E0%A5%8D/%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%9A%E0%A5%8D%E0%A4%9B%E0%A5%87%E0%A4%A6-%E0%A5%AC-%E0%A4%A4%E0%A4%A5%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%99%E0%A5%8D%E0%A4%95-%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AC/).
