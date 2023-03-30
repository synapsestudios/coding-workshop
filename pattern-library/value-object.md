# Value Object

> Many objects ahve no conceptual identity. These objects describe some characteristic of a thing.
>
> Eric Evans, Domain Driven Design

Value objects are the things in our system that have no persistent identity. Common value objects will be Address, Time or Money. An address object has some attributes, like street number, street name, etc., but it doesn't necessarily have an identity. You can instantiate a new Address and then hand that object off to a Person entity.

One complicating factor is that something like an address might be a value object in one system, but an entity in another. Software that manages shipping and delivery will probably model Address as an Entity, but address in an e-commerce platform will most probably be a value object.
