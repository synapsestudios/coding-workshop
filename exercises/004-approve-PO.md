# Review and Approve a Pending Purchase Order

```
In order to guarantee proper use of company funds
As a procurement department employee
I want to review and approve all Purchase Orders

```

This exercise introduces the first handoff in our domain. The user who reviews and approves purchase orders is not usually the same person that submits them.

## Review

In order to review purchase orders a procurement employee needs to be presented with a list of all pending Purchase Orders. This list should only include POs in the "pending approval" state, and won't include any drafts or previously approved POs.

## Approval

Once a PO has been reviewed a procurmente employee will approve it and the PO entity will transition into a new "approved" state.
Only submitted Purchase Orders can be approved. ([Domain Invariant](https://github.com/synapsestudios/coding-workshop/blob/main/pattern-library/domain-invariant.md))
