# Functional Domain Modeling

Almost all of the literature about Domain Modeling and Domain Driven Design focuses on using Object Oriented Programming in order to build our models in software. Functional programming, however, is seeing a bit of a surge in popularity and there have been some recent contributions that combine Domain Modeling concepts with the functional paradigm.

Scott Wlaschin is one of the primary authors in this space and [his primer on functional architecture](https://increment.com/software-architecture/primer-on-functional-architecture/) is a good place to start. I'll list more resources at the bottom of this README.md that will include his book.

## Getting Started

```
$> npm i
$> npm test
```

This is a starting point for modeling the procurement domain with an object oriented style. There is a single starter workflow to [Create a new Purchase Order](./src//PurchaseOrders/workflows/Create-PO.ts). This workflow has a [repository](/pattern-library/repository.md) injected into it using the [Dependency Inversion Principle](/pattern-library/SOLID/Dependency-Inversion-Principle.md).

There is a single starter entity for the Purchase Order that does nothing but generate an id for itself when it is constructed.

## Modeling with Types

Functional Domain Modeling uses the power of our type systems to model domain objects and behavior. We combine a declarative model expressed in types with functional programming to build "workflows" that are composed of domain functions.

A example can look like this (translated into typescript from Domain Modeling Made Functional by Scott Wlaschin):

```typescript
type CheckNumber = int;
type CardNumber = string;

type CardType = "visa" | "Mastercard";

type CreditCardInfo = {
  CardType: CardType;
  CardNumber: CardNumber;
};

type PaymentMethod = "Cash" | CreditCardInfo | CheckNumber;
type PaymentAmount = decimal;
type Currency = "EUR" | "USD";

type Payment = {
  Amount: PaymentAmount;
  Currency: Currency;
  Method: PaymentMethod;
};

// Curried function that takes an UnpaidInvoice (not defined here) and
// a Payment and retuns a PaidInvoice (also not defined here)
type PayInvoice = (UnpaidInvoice) => (Payment) => PaidInvoice;
```

The above code attempts to express domain knowledge in the code using the type system. For example, instead of having a single type for `Invoice` the example hints that there is a type defined for each of the states an `Invoice` might inhabit. The model also defines explicitly how to go from `UnpaidInvoice` to a `PaidInvoice`. You supply the `PayInvoice` function with an `UnpaidInvoice` and a `Payment` and it will construct and return for you a `PaidInvoice` object that you can then do something useful with.

## Dealing with Optional values and Errors in a functional way

For the starter template I've opted to include a library called [oxide.ts](https://github.com/traverse1984/oxide.ts) that gives us an `Option` and a `Result` type. These types allow us to build pure composable functions and have explicitly declared error states, which is something we can't get with native typescript or javascript. Here's an example:

```typescript
type PaymentError =
  | CardTypeNotRecognized // Definition omitted for brevity
  | PaymentRejected //  Definition omitted for brevity
  | PaymentProviderOffline; //  Definition omitted for brevity

type PayInvoice = (
  UnpaidInvoice
) => (Payment) => Result<PaidInvoice, PaymentError>;
```

Unfortunately, due to some limitations in typescript, using `Result` and `Option` types can feel cumbersome. One of the core issues is how embedded async programming is into typescript and how Promises interact with the `Result` and `Option` types. [Neverthrow](https://github.com/supermacro/neverthrow) is a good library that provides a Result type that has a better async api than oxide.ts, but Neverthrow does not provide an `Option` type.

Ultimately I think these types can cleanly be worked into models, but it's up to you if you want to try or not. If you prefer to avoid the trouble then I'd recommend running `npm uninstall oxide.ts` and removing the `Result` and `Option` code in the starter template.

## Further Study

- [Book: Domain Modeling Made Functional by Scott Wlaschin](https://pragprog.com/titles/swdddf/domain-modeling-made-functional/)
- [Book: Functional and Reactive Domain Modeling](https://www.manning.com/books/functional-and-reactive-domain-modeling)
- Free online book [Mostly Adequate Guide to Functional Programming](https://mostly-adequate.gitbook.io/mostly-adequate-guide/)
- [Talk: Functional Programming and Domain Driven Design](https://www.youtube.com/watch?v=56j8kLMdkyQ)
