# Submit Purchase Order to Supplier

Purchase Orders, once approved, will be sent to a supplier who will then be expected to ship us good or to render a service. Suppliers will
be companies that offer goods and services in a wide range. Some suppliers will be service-oriented like landscaping companies, painters and maintenance firms.
Other companies will supply goods like office supplies, food for the cafeteria, and cleaning supplies. These companies can not be expected to log
into our system and manage their orders. Instead they will expect to receive Purchase Orders by mail.

In our system, once a Purchase Order is approved (probably by a department manager) we'll send the approved Purchase Order to somebody who
works in procurement. Procurement professionals are familiar with the contracts our company has with its suppliers and will manage the lifecycle
of the Purchase Order for all stages after approval.

We will refer to procurement professionals as "PO submitters" sometimes in our stories. In [Exercise 5](./005-PO-notifications.md) we introduced
the PO Submitter as a person who receives a notification when a Purchase Order is approved.

## Submit PO

```
As a Procurement user
I want to be able to submit Purchase Orders to our Suppliers by mail
So that the Supplier will know to ship us _the goods_
```

- Sending stuff by mail sounds hard for a software system to do, but assume this is abstracted away by a service. We send them a PDF and an address and they print
  it, put it in an envelope with proper postage. [This is a real thing.](https://www.postgrid.com/postal-api/)
- This story will introduce the supplier as some kind of an Entity. You need to pull the address and send it to the Mail service.
- For extra credit you can write some code to generate the pdf, but if you don't wanna then just write a mock service that takes your PO entity
  returns a fake file of some kind.

## Keep Track of Submissions

```
As a procurement user
I need to be able to refer to all Purchase Orders that have been sent
in order to resolve any disputes with suppliers
```

- Procurement staff will want to be able to look at the exact pdf that was sent to suppliers
- they'll need to know exactly when the pdf was mailed (or sent to our mailing service in this case)
