# Object Oriented Domain Modeling

This starter codebase will help to get workflow attendees to get started with Object Oriented Domain Modeling. OOP has been a sort of default paradigm in the Domain Modeling world for a long time so all of the resources we use to learn about Domain Modeling are usually already talking about Object Oriented Domain Modeling. As a result using OOP to model domains has lower friction and will require less explanation and "translation" of ideas.

## Getting Started

This is a starting point for modeling the procurement domain with an object oriented style. There is a single starter use case to [Create a new Purchase Order](./src//PurchaseOrders/use-cases/CreatePO.usecase.ts). This use case has a [repository](/pattern-library/repository.md) injected into it using the [Dependency Inversion Principle](/pattern-library/SOLID/Dependency-Inversion-Principle.md).

There is a single starter entity for the Purchase Order that does nothing but generate an id for itself when it is constructed.
