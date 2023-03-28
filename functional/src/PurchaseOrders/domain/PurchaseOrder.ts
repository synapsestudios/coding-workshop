import { createUuid, UUID, isUuid } from "../../utilities/uuid";

export type PurchaseOrder = { id: UUID };
export type createPurchaseOrder = () => PurchaseOrder;

export const createPurchaseOrder: createPurchaseOrder = () => ({
  id: createUuid(),
});
export const isPurchaseOrder = (s: any): s is PurchaseOrder => {
  if (typeof s !== 'object') return false
  
  const po = s as PurchaseOrder;
  if (!po.id) return false
  if (!isUuid(po.id)) return false

  return true;
}