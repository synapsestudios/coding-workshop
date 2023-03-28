import { Option, Result } from "oxide.ts";
import { UUID } from "../../utilities/uuid";
import { PurchaseOrder } from "./PurchaseOrder";

export interface IPORepository {
  save: (po: PurchaseOrder) => Promise<Result<undefined, Error>>;
  fetch: (id: UUID) => Promise<Result<Option<PurchaseOrder>, Error>>;
}
