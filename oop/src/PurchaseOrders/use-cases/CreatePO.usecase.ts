import { UseCase } from "../../lib/UseCase.base";
import { IPORepository } from "../domain/IPORepository";
import { PurchaseOrder } from "../domain/PurchaseOrder";

type CreatePOProps = {};
export class CreatePO implements UseCase<CreatePOProps> {
  constructor(private repo: IPORepository) {}
  async execute() {
    const purchaseOrder = new PurchaseOrder();
    await this.repo.save(purchaseOrder);
    return purchaseOrder.id;
  }
}
