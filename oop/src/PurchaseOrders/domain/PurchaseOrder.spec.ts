import { isUuid } from "../../utilities/uuid";
import { PurchaseOrder } from "./PurchaseOrder";

describe("Purcase Order Entity", () => {
  it("instantiates", () => {
    const PO = new PurchaseOrder();
    expect(isUuid(PO.id)).toBeTruthy();
  });
});
