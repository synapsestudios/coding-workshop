import { match } from "oxide.ts";
import { isUuid } from "../../utilities/uuid";
import { LineItem } from "../domain/LineItem";
import { constructPORepository } from "../domain/PORepository";
import { isPurchaseOrder } from "../domain/PurchaseOrder";
import { createPO } from "./Create-PO";

describe("Create PO Workflow", () => {
  const testLineItems: LineItem[] = [
    {
      itemNumber: 11888,
      description: "Nut",
      price: 19.99,
      quantity: 100,
    },
    {
      itemNumber: 11889,
      description: "Bolt",
      price: 24.99,
      quantity: 50,
    },
  ];

  it("is callable", () => {
    const repo = constructPORepository();
    createPO({ PORepo: repo });
  });

  it("returns a uuid", async () => {
    const repo = constructPORepository();
    const poResult = await createPO({ PORepo: repo })(testLineItems);
    const id = poResult.unwrap();
    expect(poResult.isOk()).toBeTruthy();
    expect(isUuid(id)).toBeTruthy();
  });

  it("saves a purchase order to a repository", async () => {
    const repo = constructPORepository();
    const result = await createPO({ PORepo: repo })(testLineItems);
    const id = result.unwrap();
    const poRes = await repo.fetch(id);
    const output = match(poRes, {
      Ok: {
        Some: (result) => result,
        None: () => "No results for that search.",
      },
      Err: (err) => `Error: ${err}.`,
    });

    expect(isPurchaseOrder(output)).toBeTruthy();
    if (isPurchaseOrder(output)) {
      expect(id).toEqual(output.id);
    }
  });
});
