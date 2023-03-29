import { None, Ok, Some, Option } from "oxide.ts";
import { UUID } from "../../utilities/uuid";
import { IPORepository } from "./IPORepository";
import { PurchaseOrder } from "./PurchaseOrder";

export class PORepository implements IPORepository {
  purchaseOrders: PurchaseOrder[] = [];
  async save(po: PurchaseOrder) {
    this.purchaseOrders.push(po);
    return undefined;
  }
  async fetch(id: UUID) {
    const x = this.purchaseOrders.find((p) => p.id === id);
    return x || null;
  }
}
