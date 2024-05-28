import { LineItem } from "../domain/LineItem";
import { IPORepository } from "../domain/IPORepository";
import { createPurchaseOrder } from "../domain/PurchaseOrder";

export const createPO =
  ({ PORepo }: { PORepo: IPORepository }) =>
  async (org: string, lineItems?: LineItem[], draft?: boolean) => {
    const poNumber = (await PORepo.getNextPONumber(org)).unwrap(); // TODO: handle errors
    const purchaseOrder = createPurchaseOrder(poNumber, lineItems || [], draft);
    const res = await PORepo.save(purchaseOrder);
    return res.map(() => purchaseOrder.id);
  };
