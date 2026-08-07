# DEC-0012 — Two-AI Architecture

**Decision ID:** DEC-0012  
**Title:** Establish the Two-AI Architecture  
**Status:** Accepted  
**Version:** 0.1.0  
**Decision Date:** 2026-08-08  
**Owner:** KAMLESH & SONS  
**Related Documents:** [Founding Charter](../docs/founders-playbook/FOUNDING-CHARTER.md), [ROADMAP](../ROADMAP.md)  
**Related Decisions:** DEC-0010, DEC-0011

---

## Decision

KAMLESH & SONS will pursue a two-layer AI architecture consisting of:

1. **Customer AI** — a customer-facing system for product discovery, comparison, recommendations, and assistance.
2. **Internal AI** — a private company assistant for authorized employees and internal operations.

The two systems should be separated by purpose, access, data, and permissions rather than treated as one unrestricted AI system.

## 1. Customer AI

The Customer AI is public-facing and should support customer needs such as:

- Product questions
- Product comparisons
- Specification explanations
- Price comparisons
- Availability information
- Accessory discovery
- Recommendations
- Store and service guidance
- Continuation of conversations across store and phone

The Customer AI should use only information appropriate for customer access and should not expose confidential company information.

## 2. Internal AI

The Internal AI is private and intended to support authorized company personnel.

It may eventually have access to company knowledge such as:

- SOPs
- Policies
- Training material
- Inventory information
- CRM information
- Company documentation
- Decision history
- Operational processes

Access should be role-based and limited to information required for the user's responsibilities.

## Separation Principle

The core architectural principle is:

> **Customer AI serves customers. Internal AI serves the company.**

Customer-facing data and confidential internal knowledge must not be exposed to each other by default.

Any controlled sharing between systems must be explicitly designed, authorized, and auditable.

## Why Two Systems

A single unrestricted AI could create unnecessary risks around:

- Confidential information
- Customer privacy
- Internal policies
- Pricing strategy
- Employee information
- Inventory data
- Business decisions
- Security

Separating the systems allows KAMLESH & SONS to optimize each AI for its intended users while maintaining stronger access boundaries.

## Internal AI Role

The Internal AI is intended to become a company knowledge interface for authorized employees. It may eventually help staff:

- Find SOPs
- Understand policies
- Access training material
- Query company documentation
- Understand prior decisions
- Assist with operational procedures
- Support internal problem solving

The Internal AI should reference authoritative company documentation rather than inventing company policy.

## Repository Integration

The GitHub repository is the official source of truth for K&S OS documentation. Future Internal AI architecture should be designed to consume appropriate repository content while respecting permissions, versioning, and document authority.

The intended relationship is:

**GitHub / K&S OS → Internal Knowledge Layer → Internal AI**

The AI must not become the source of truth itself. It is an interface to authoritative company knowledge.

## Guardrails

Both AI systems should be designed around:

- Least-privilege access
- Data separation
- Privacy
- Security
- Auditability
- Reliable source data
- Human escalation
- Clear uncertainty handling
- Appropriate retention policies

The Internal AI must not automatically receive unrestricted access to every system simply because it is internal.

## Implementation Status

This decision establishes the **strategic architecture** only. It does not select AI models, vendors, databases, infrastructure, authentication systems, retrieval systems, budgets, or deployment timelines.

Those implementation choices require separate technical, security, product, legal, and operational decisions.

## Review / Supersession

This decision remains active until formally superseded. Future architecture decisions may refine the boundaries, integrations, and capabilities of the two AI systems without changing the fundamental separation of customer-facing and internal AI responsibilities.

---

**Decision Status:** Accepted  
**Current K&S OS Version:** `0.1.0`
