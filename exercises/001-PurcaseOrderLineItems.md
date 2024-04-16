# Purchase Order Line Items

```
In order to purchase the things I need
I want to be able to specify line items when I create a Purchase Order
```

## Details and Instructions

**Line Items** are a domain term. These are the goods that the PO author is attempting to purchase. Each line item will have an item number, a description, a price and a quantity. The expectation is that a list of line items will be provided at the time the Purchase Order is created.

Hint: Understand [aggregates](https://github.com/synapsestudios/coding-workshop/blob/main/pattern-library/aggregate.md). It won't be required to model a PO as an aggregate, but you should consider it.
