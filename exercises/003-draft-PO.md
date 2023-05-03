# Draft Purchase Order

```
In order to be able to input information early
As a purchaser
I want my Purchase Orders to be created as a draft that can be submitted separately
```

This exercise introduces the first state change in your Purchase Order object. State changes are common in most apps and usually mean something interesting about what kinds of behaviors are allowed. Here are some domain rules regarding this state transition:

1. Purchase Orders in a 'draft' state are only visible to the purchaser who created the draft. We don't have any "fetch PO" code yet, but this is interesting domain information.
1. The PO number is not assigned until the PO is submitted
1. When a purchase order is submitted it transitions into the "pending approval" state

_Hint_: Your workflows should be updated to take some kind of user/purchaser DTO as an argument. Your purchaser should start with some basic user properties: id, first name and last name.
