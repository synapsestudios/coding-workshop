import { createUuid, UUID } from "../../utilities/uuid";

export type PurchaseOrder = { id: UUID };
export type createPurchaseOrder = () => PurchaseOrder;

export const createPurchaseOrder: createPurchaseOrder = () => ({
  id: createUuid(),
});
