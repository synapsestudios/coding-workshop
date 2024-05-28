import { LineItem } from "./LineItem";
import { createUuid, UUID, isUuid } from "../../utilities/uuid";
import { PONumber } from "./PONumber";

export type PurchaseOrder = {
  id: UUID;
  poNumber: PONumber;
  lineItems: LineItem[];
  draft: boolean;
};

export type createPurchaseOrder = (
  poNumber: PONumber,
  lineItems: LineItem[],
  draft?: boolean
) => PurchaseOrder;

export const createPurchaseOrder = (
  poNumber: PONumber,
  lineItems: LineItem[],
  draft: boolean = true
) => ({
  id: createUuid(),
  poNumber,
  lineItems,
  draft,
});

export const isPurchaseOrder = (s: any): s is PurchaseOrder => {
  if (typeof s !== "object") return false;

  const po = s as PurchaseOrder;
  if (!po.id) return false;
  if (!isUuid(po.id)) return false;

  return true;
};
