> For each type of object that needs global access, create an object that can provide the illusion of an in-memory collection of all objects of that type. Set up access through a well-known global interface. Provide methods to add and remove objects, which will encapsulate the actual insertion or removal of data in the data store. Provide methods that select objects based on some criteria and return fully instantiated objects or collections of objects whose attribute values meet the criteria, thereby encapsulating the actual storage and query technology. Provide REPOSITORIES only for AGGREGATE roots that actually need direct access. Keep the client focused on the model, delegating all object storage and access to the REPOSITORIES.
> 
> Eric Evans, Domain Driven Design

A repository is an object that allows clients to retrieve domain objects from storage. The repository abstracts away the details of how objects are stored (relational database? local storage?) and simply exposes an interface that looks like any Collection interface.

- [Martin Fowler's Respository reference](https://martinfowler.com/eaaCatalog/repository.html)
- [Esploring the Repository Pattern with Typescript and Node](https://blog.logrocket.com/exploring-repository-pattern-typescript-node/)
