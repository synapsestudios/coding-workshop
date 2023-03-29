# Domain Modeling Workshop

> A model is a simplification. It is an interpretation of reality that abstracts the aspects relevant to solving the problem at hand and ignores extraneous detail.
> Eric Evans, Domain Driven Design

When developers are working on a software system they learn about the business and industry that the software is for. If you're working in finance you're going to learn about how transactions and accounts work, and you'll learn the specific rules for calculating interest in different kinds of financial instruments. If you're working in shipping you'll learn about how cargo makes its way to ports, is loaded onto ships and is moved around the globe satisfying complex and dynamic requirements about tracking and arrival dates. We learn all this domain knowledge and then encode it into the software systems that we build.

Software systems are designed well when, among other things, they are easy to change. Well designed systems **model** the business domain. The developers encode the knowledge about the domain into the system. This has two main benefits.

The first is that your software systems are intention revealing. They emanate domain knowledge. If a new developer is reading a section of code they learn about the domain by learning about the software system. You don't even need to be a new developer on the project -- it can just be you six months after you wrote something.

The second is that systems become easier to change. Systems that model their domain effectively will be easier to understand, and therefore easier to change. If a system models the domain well then new features requests will naturally fit into the system more smoothly with less work and awkwardness.

## Introducing the Workshop

Unless you're already very good at domain modeling, or the people who designed the system(s) you work on were, then finding an opportunity to learn how to do it and practice the skill can be very difficult. Effective domain modeling requires a system to be designed so that domain code and "infrastructure" code are separated using something a hexagonal or otherwise clean architecture. Only once the domain code can really model the domain without compromise will you be able to practice domain modeling. This workshop is designed to provide a sandbox in which to practice encoding domain knowledge into software applications.
