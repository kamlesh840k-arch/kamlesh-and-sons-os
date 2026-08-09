# K&S Documentation Standards

**Document ID:** DOC-STD-001
**Version:** 0.1.0
**Status:** Foundation

## Required Metadata
Where applicable, documents include:
- Document ID
- Title
- Version
- Status
- Owner
- Created date
- Last updated date
- Related documents
- Related decisions
- Related innovations
- Change history

## Writing Standards
Use clear language, explicit ownership, actionable statements and stable terminology. Avoid duplicate documents and empty placeholders.

## Naming
Use descriptive lowercase filenames with hyphens where practical. Decision records use `DEC-####-title.md`; innovation records use `INV-####-title.md`.

## Status Values
Use controlled states such as Draft, Proposed, Accepted, Active, Deprecated and Archived.

Roadmap maturity must distinguish:

- **Documentation-ready:** the canonical design, controls, roles and evidence requirements exist.
- **Approval-ready:** a complete decision package is available to the authorized approvers.
- **Operationally validated:** implementation has produced reviewed real-world evidence and the release authority has accepted it.

Documentation-ready or approval-ready must never be described as physical or operational completion.

## Cross-References
Connect documents to relevant decisions, roadmap milestones, architecture records and innovation records.

## Versioning
Use semantic versioning for repository releases. Individual documents may use the repository version when their content is release-bound.

## Quality Check
Before publication verify accuracy, ownership, references, consistency, duplication risk and intended status.

## Change History
- 1.0.0-rc.1 — Added roadmap maturity states separating documentation, approval and operational evidence.
- 0.1.0 — Initial documentation standard.
