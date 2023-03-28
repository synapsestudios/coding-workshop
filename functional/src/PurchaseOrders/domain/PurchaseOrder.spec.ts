import { isUuid } from "../../utilities/uuid";
import { createPurchaseOrder } from "./PurchaseOrder";

describe("Purcase Order Entity", () => {
  it("does it", () => {
    const PO = createPurchaseOrder();
    expect(isUuid(PO.id)).toBeTruthy();
  });
});
