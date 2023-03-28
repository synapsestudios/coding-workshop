import { constructPORepository } from "../domain/PORepistory";
import { createPO } from "./Create-PO";

describe("Create PO Workflow", () => {
  it("is callable", () => {
    createPO(constructPORepository());
  });
});
