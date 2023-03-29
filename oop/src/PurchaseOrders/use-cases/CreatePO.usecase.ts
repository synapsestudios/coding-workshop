import { UseCase } from "../../lib/UseCase.base";
import { IPORepository } from "../domain/IPORepository";

type CreatePOProps = {};
export class CreatePO implements UseCase<CreatePOProps> {
  constructor(private repo: IPORepository) {}
  async execute() {
    // const purchaseOrder = createPurchaseOrder();
    // const res = await PORepo.save(purchaseOrder);
    // return res.map(() => purchaseOrder.id);
  }
}
