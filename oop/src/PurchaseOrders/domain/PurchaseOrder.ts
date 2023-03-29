import { createUuid, UUID } from "../../utilities/uuid";

export class PurchaseOrder {
  private _id: UUID;
  constructor() {
    this._id = createUuid();
  }

  get id() {
    return this._id;
  }
}
