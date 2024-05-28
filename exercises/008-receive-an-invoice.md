# Receive an Invoice

In [Exercise 7](./007-submit-PO.md) we submitted our Purchase Order to a supplier. Our system makes use of a mocked external mailing service to send physical Purchase Orders in the mail.

Once Suppliers receive a Purchase Order they'll be sending us an Invoice. An invoice is a bill that needs to be paid. For now we'll assume that invoices are received in the mail and will be entered manually into our system.

```
As a procurement professional
I want to input invoices that we receive
so that everybody knows that we have a bill to pay
```

Invoices have:

- Invoice Number. Invoice numbers are unique per supplier. No invoice number is expected to be used twice for a given supplier.
- PO Number. This is a reference to the purchase order that the invoice was created for.
- Date issued. This is the date that the supplier sent the invoice.
- Date received. This is the date that we got the invoice in the mail.
- Date input. This is the date and time that the invoice was input into the system.
- Amount due.
- Due date.
