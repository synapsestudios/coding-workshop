import { PORepository } from "../domain/PORepistory";
import { CreatePO } from "./CreatePO.usecase";

describe("CreatePO", () => {
  it("instantiates", () => {
    const repo = new PORepository();
    new CreatePO(repo);
  });
});
