import { None, Ok, Some, Option } from "oxide.ts";
import { UUID } from "../../utilities/uuid";
import { IPORepository } from "./IPORepository";
import { PurchaseOrder } from "./PurchaseOrder";

class PORepository implements IPORepository {
  purchaseOrders: PurchaseOrder[] = []
  async save(po: PurchaseOrder) {
    this.purchaseOrders.push(po);
    return Ok(undefined);
  }
  async fetch(id: UUID) {
    const po = this.purchaseOrders.find(p => p.id === id);
    return po ? Ok(Some(po)) : Ok(None) 
  }
}
export const constructPORepository = () => new PORepository();
