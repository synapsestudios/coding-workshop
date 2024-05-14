import { createUuid, UUID, isUuid } from "../../utilities/uuid";
import { LineItem } from "./LineItem";

export type PurchaseOrder = { id: UUID; lineItems: LineItem[] };
export type createPurchaseOrder = (lineItems: LineItem[]) => PurchaseOrder;

export const createPurchaseOrder: createPurchaseOrder = (lineItems) => ({
  id: createUuid(),
  lineItems: lineItems,
});
export const isPurchaseOrder = (s: any): s is PurchaseOrder => {
  if (typeof s !== "object") return false;

  const po = s as PurchaseOrder;
  if (!po.id) return false;
  if (!isUuid(po.id)) return false;
  if (po.lineItems.length === 0) return false;

  return true;
};
