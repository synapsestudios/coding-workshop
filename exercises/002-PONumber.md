# PO Number

```
In order to track Purchase Orders internally and across many external accounting systems
I want Purchase Orders to be automatically assigned a Purchase Order number when they're submitted
```

## Details and Instructions

The **Purchase Order Number** or **PO Number** is an important domain concept. Engineers, when first confronted with this concept, will often naively attempt to reuse the unique id for the Purchase Order entity as the PO number, but then their domain experts start to explain what a PO number is and how it's used.

1. a PO number is a unique number
1. A PO number is sequential. It starts with 000001 and progresses to 000002
   but only within an organizational boundary.
1. PO numbers have a prefix that is based on the organization. For now hardcoding it like `syn-000001` and `syn-000002` is expected.

Take special note of the uniqueness constraint. Please make sure to treat your solution like one that you would find in a real application. A real application will have PO Numbers stored in a database and in order to generate a unique PO Number you'd need to know what the last PO Number was and increment it. We aren't building with a database in this exercise, but the expectation is that you will build an interface for some kind of service or repository that will be injected into your workflow.
