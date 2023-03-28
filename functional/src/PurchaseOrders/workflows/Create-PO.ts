import { IPORepository } from "../domain/IPORepository";
import { createPurchaseOrder } from "../domain/PurchaseOrder";

export const createPO = ({ PORepo }: { PORepo: IPORepository }) => async () => {
  const purchaseOrder = createPurchaseOrder();
  const res = await PORepo.save(purchaseOrder);
  return res.map(() => purchaseOrder.id);
};
