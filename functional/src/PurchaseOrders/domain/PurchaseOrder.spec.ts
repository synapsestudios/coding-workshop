import { LineItem } from "./LineItem";
import { isUuid } from "../../utilities/uuid";
import { createPurchaseOrder } from "./PurchaseOrder";

describe("Purcase Order Entity", () => {
  it("does it", () => {
    const lineItems: LineItem[] = [
      { itemNumber: 1, description: "item", quantity: 1, price: "1.00" },
    ];
    const PO = createPurchaseOrder("syn-000001", lineItems);
    expect(isUuid(PO.id)).toBeTruthy();
    expect(PO.lineItems).toEqual(lineItems);
  });
});
