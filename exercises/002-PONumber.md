# PO Number

In order to track Purchase Orders internally and across many external accounting systems
I want Purchase Orders to be automatically assigned a Purchase Order number when they're submitted

## Details and Instructions

The **Purchase Order Number** or **PO Number** is an important domain concept. Engineers, when first confronted with this concept, will often naively attempt to reuse the unique id for the Purchase Order entity as the PO number, but then their domain experts start to explain what a PO number is and how it's used.

1. a PO number is a unique number
1. A PO number is sequential. It starts with 000001 and progresses to 000002
   but only within an organizational boundary.
1. PO numbers have a prefix that is based on the organization. For now hardcoding it like `syn-000001` is expected.
