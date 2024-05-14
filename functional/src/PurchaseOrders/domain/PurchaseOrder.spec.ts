import { isUuid } from "../../utilities/uuid";
import { LineItem } from "./LineItem";
import { createPurchaseOrder } from "./PurchaseOrder";

describe("Purchase Order Entity", () => {
  const testLineItems: LineItem[] = [
    {
      itemNumber: 11888,
      description: "Nut",
      price: 19.99,
      quantity: 100,
    },
    {
      itemNumber: 11889,
      description: "Bolt",
      price: 24.99,
      quantity: 50,
    },
  ];

  it("creates a purchase order", () => {
    const PO = createPurchaseOrder(testLineItems);
    expect(isUuid(PO.id)).toBeTruthy();
  });
});
