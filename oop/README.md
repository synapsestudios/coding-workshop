# Object Oriented Domain Modeling

This starter codebase will help to get workflow attendees to get started with Object Oriented Domain Modeling. OOP has been a sort of default paradigm in the Domain Modeling world for a long time so all of the resources we use to learn about Domain Modeling are usually already talking about Object Oriented Domain Modeling. As a result using OOP to model domains has lower friction and will require less explanation and "translation" of ideas.

## Getting Started

This is a starting point for modeling the procurement domain with an object oriented style. There is a single starter use case to [Create a new Purchase Order](./src//PurchaseOrders/use-cases/CreatePO.usecase.ts). This use case has a [repository](/pattern-library/repository.md) injected into it using the [Dependency Inversion Principle](/pattern-library/SOLID/Dependency-Inversion-Principle.md).

There is a single starter entity for the Purchase Order that does nothing but generate an id for itself when it is constructed.

## Practice Rules for Design Quality

These rules are optional (especially in production code), but I recommend trying to stick to the [object calisthenics](https://williamdurand.fr/2013/06/03/object-calisthenics/#1-only-one-level-of-indentation-per-method) rules. These are rules that are desinged for practice sessions like this - so I encurage you to try them out!

1. Only One Level Of Indentation Per Method. Having too many levels of indentation in your code is often bad for readability
1. Don’t Use The ELSE Keyword.
1. Wrap All Primitives And Strings. encapsulate all the primitives within objects, in order to avoid the Primitive Obsession anti-pattern.
1. First Class Collections. Any class that contains a collection should contain no other member variables.
1. One Dot Per Line. Basically, the rule says that you should not chain method calls.
1. Don’t Abbreviate. If you can’t find a decent name for a class or a method, something is probably wrong.
1. Keep All Entities Small. No class over 50 lines and no package over 10 files.
1. No Classes With More Than Two Instance Variables.
1. No Getters/Setters/Properties.
