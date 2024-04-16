> Invariant
> An ASSERTION about some design element that must be true at all times, except during specifically transient situations such as the middle of the execution of a method, or the middle of an uncommitted database transaction.

A domain invariant is a simple rule in our domain code that is usually modeled as some kind of an assertion. The rules themselves are separate from other kinds of validation because they originate in the domain. It's a business rule that a only submitted Purchase Orders can be approved, and so that rule should be modeled in the domain.
