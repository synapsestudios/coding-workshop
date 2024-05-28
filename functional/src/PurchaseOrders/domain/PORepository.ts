import { None, Ok, Some, Option, Err } from "oxide.ts";
import { UUID } from "../../utilities/uuid";
import { IPORepository } from "./IPORepository";
import { PurchaseOrder } from "./PurchaseOrder";
import { createPONumber, parsePONumber } from "./PONumber";

class PORepository implements IPORepository {
  purchaseOrders: PurchaseOrder[] = [];
  poIndexByOrg: Record<string, number> = {};

  async save(po: PurchaseOrder) {
    this.purchaseOrders.push(po);
    const parsedPONumber = parsePONumber(po.poNumber);
    if (parsedPONumber) {
      this.poIndexByOrg[parsedPONumber.prefix] = parsedPONumber.num;
    }
    return Ok(undefined);
  }
  async fetch(id: UUID) {
    const po = this.purchaseOrders.find((p) => p.id === id);
    return po ? Ok(Some(po)) : Ok(None);
  }
  async getNextPONumber(org: string) {
    const currentIdx = this.poIndexByOrg[org] ?? 0;
    return Ok(createPONumber(org, currentIdx + 1));
  }
}
export const constructPORepository = () => new PORepository();
