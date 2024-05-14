import { IPORepository } from "../domain/IPORepository";
import { LineItem } from "../domain/LineItem";
import { createPurchaseOrder } from "../domain/PurchaseOrder";

export const createPO =
  ({ PORepo }: { PORepo: IPORepository }) =>
  async (lineItems: LineItem[]) => {
    const purchaseOrder = createPurchaseOrder(lineItems);
    const res = await PORepo.save(purchaseOrder);
    return res.map(() => purchaseOrder.id);
  };
