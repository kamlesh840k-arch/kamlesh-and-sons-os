# K&S OS — Decision Consolidation Registry

**Version:** 0.1.0  
**Status:** Part 5 — canonical foundation consolidated

## Purpose

This registry is the control layer between the historical DEC series and the active operating-system documents. It prevents premature deletion and gives every consolidated or deferred decision a destination.

## Active v0.1 Foundation

The active foundation is governed by:

- [Canonical Foundation](v0.1-canonical-foundation.md) — the active, consolidated v0.1 reference
- [Foundation Decision Set](v0.1-foundation-decision-set.md) — the governing scope rule
- [DEC Inventory Classification](v0.1-decision-inventory-classification.md) — the complete historical classification
- DEC-0100 — Foundation Integration & Completion Readiness
- DEC-0101 — Foundation Completion Gate

## Consolidation Masters

| Master area | Historical DEC inputs | Target stage |
|---|---|---|
| Founding / strategic principles | DEC-0002, DEC-0003, DEC-0004, DEC-0005, DEC-0020 | v0.1 / v0.2 |
| Governance & decision rights | DEC-0021, DEC-0080 | v0.1 |
| Documentation & institutional memory | DEC-0022, DEC-0023, DEC-0076 | v0.1 |
| Technology architecture & governance | DEC-0014, DEC-0027, DEC-0035, DEC-0050, DEC-0061 | v0.1 principles / v0.5 implementation |
| Security, privacy & data protection | DEC-0042, DEC-0055, DEC-0062 | v0.1 principles / v0.5 implementation |
| Legal, compliance & risk | DEC-0036, DEC-0051, DEC-0058, DEC-0079 | v0.1 principles / later implementation |
| Finance controls | DEC-0034, DEC-0043 | v0.1 controls / v0.8 implementation |
| Management system | DEC-0077, DEC-0078, DEC-0081, DEC-0089, DEC-0099 | v0.1 principles / later implementation |
| Customer & commercial | DEC-0006, DEC-0019, DEC-0028, DEC-0046, DEC-0054, DEC-0067, DEC-0068, DEC-0091, DEC-0092, DEC-0093, DEC-0094 | v0.4 / v0.7 |
| Technology / AI / digital products | DEC-0026, DEC-0060, DEC-0063, DEC-0086, DEC-0087, DEC-0088 | v0.5 |
| Operations | DEC-0052, DEC-0053, DEC-0064, DEC-0070, DEC-0073, DEC-0095, DEC-0096, DEC-0098 | v0.6 |
| People | DEC-0056, DEC-0074, DEC-0075, DEC-0097 | v0.6 |
| Expansion | DEC-0066, DEC-0084, DEC-0085 | v0.9 |

## Deferred Destination Rule

When a roadmap milestone becomes active, the relevant historical DEC inputs should be consolidated into one or more implementation-level master documents. Until then, the original DEC records remain historical source material.

## Physical File Policy

The GitHub connector currently supports create/update/delete operations but not a safe repository-wide rename/move operation. Therefore no historical DEC files are physically relocated as part of consolidation. This avoids creating duplicate records or losing Git history through improvised copy/delete operations.

The archive convention is established first. Physical relocation, if desired, is a separate controlled migration step.
