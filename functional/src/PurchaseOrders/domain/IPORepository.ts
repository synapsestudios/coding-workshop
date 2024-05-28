import { None, Option, Result } from "oxide.ts";
import { UUID } from "../../utilities/uuid";
import { PurchaseOrder } from "./PurchaseOrder";
import { PONumber } from "./PONumber";

export interface IPORepository {
  save: (po: PurchaseOrder) => Promise<Result<undefined, Error>>;
  fetch: (id: UUID) => Promise<Result<Option<PurchaseOrder>, Error>>;
  getNextPONumber: (org: string) => Promise<Result<PONumber, Error>>;
}
