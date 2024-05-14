import { PORepository } from "../domain/PORepository";
import { CreatePO } from "./CreatePO.usecase";

describe("CreatePO", () => {
  it("instantiates", () => {
    const repo = new PORepository();
    new CreatePO(repo);
  });

  it("*", async () => {
    const repo = new PORepository();
    const useCase = new CreatePO(repo);

    const id = await useCase.execute();
    const po = await repo.fetch(id);
    expect(po).toBeTruthy();
  });
});
