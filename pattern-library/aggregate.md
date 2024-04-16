# Aggregate

> An aggregate is a cluster of associated ojects taht we treat as a unit for the purpose of data changes. Each aggregate has a root and a boundary. The boundary defines what is inside the aggregate. The root is a single, specific entity contained in the aggregate.
>
> Eric Evans, Domain Driven Design

The aggregate pattern is a way to group related objects. There is a root entity and a collection of objects realted to that root. Within the aggregate boundary objects can reference each other, but they only way for the outside world to know about objects inside of the aggregate is to go through the root.

There are three goals of an aggregate. One is to manage logical consistency. Aggregates manage domain invariants and keep internal objects in a logically consistent state. The second is to manage physical consistency. When saving an aggregate to a database the persistence of all of the objects within the aggregate becomes the responsibility of a single safe transaction (usually a database transaction). The third goal is to add some conceptual, small scale, structure and decouple elements of your model from one another.

Aggregate design has been a large topic in the DDD community since the publishing of Eric Evans' orignal book on the subject. Vaugh Vernon is probably the most notable writer and speaker on the subject and his book Implementing Domain Driven design (The Red Book) is a great resource.

Other resources include:

- [Vaughn Vernon Talk: How to use aggregates for tactical design](https://www.youtube.com/watch?v=Xf_aLAK1RfE)
- [Vaughn Vernon: Effective Aggregate Design Part I](./Vernon_2011_1.pdf)
- [Vaughn Vernon: Effective Aggregate Design Part II](./Vernon_2011_2.pdf) and a [talk on the subject](https://vimeo.com/33708293)
- [Vaughn Vernon: Effective Aggregate Design Part III](./Vernon_2011_3.pdf) and a [talk on the subject](https://vimeo.com/36884903)

A considerable number of those links are copied over from [The dddcommunity.org website](https://www.dddcommunity.org/library/vernon_2012/)
