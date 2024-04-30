# PO Notifications

Notifications are a common feature in our systems and modeling them as domain behavior is unique because the notification
is always a side effect of some other domain activity or behavior. The fact that certain people get notified for certain
domain events is worth encapsulating in domain code, but how can we do it in a way that's expressive, but also avoids a lot
of boilerplate?

## When a PO is submitted it will notify the procurement employees

```
In order to keep on top of my duties and maintain speedy review times
as a PO reviewer
I want to be notified when new purchase orders are submitted for review
```

## When a PO is approved

```
As a PO submitter
I expect to be notified when my PO is approved
so that I can move on with my life, relieved, knowing that my order is on its way
```
