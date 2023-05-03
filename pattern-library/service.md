# Service

> In some cases, the clearest and most pragmatic design includes operations that do not conceptually belong to any object. Rather than force the issue, we can follow the natural contours of the problem space and include SERVICES explicitly in the model.
>
> There are important domain operations that can't find a natural home in an ENTITY or VALUE OBJECT. Some of these are intrinsically activities or actions, not things...
>
> Eric Evans, Domain Driven Design

Services are used to encapsulate domain behaviors that don't quite fit into entities or value objects, and are themselves stateless. Services _do things_ - and tend to be named "for an activity".

Here's an example interface for a service:

```
interface IFundsTransferService = {
    transfer: (to: Account, from: Account, amt: Amount) => TransferCompletedEvent
}
```

This services interface describes a banking domain operation: transferring an amount of money from one account to another. In this case I modeled the return value as a `TransferCompletedEvent` and left out the details of what that was. This is a good service because in banking transferring money is kind of complex - you have to create a credit in one account and a debit in another for the exact same amount, and it doesn't really quite fit into a single account entity.

## Services in FP

It will be tempting for FP elitists to scoff and say every function is stateless and is a service. In order to be useful and maintainable in the long run functional code needs to be organized into "classes" even if we don't use the class keyword. My entities should have a type and some set of basic entity behaviors, but I may need something like services as well. It can't all live in one file, but it can't all live in separate files either.

In fact there's no reason why the interface in my example above couldn't apply to a functional program.
