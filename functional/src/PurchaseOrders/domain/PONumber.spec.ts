import { createPONumber, parsePONumber } from "./PONumber";

describe("PONumber", () => {
  it("creates a valid PO number", () => {
    const poNumber = createPONumber("syn", 1);
    expect(poNumber).toBe("syn-000001");
  });
  it("parses a valid PO number", () => {
    const poNumber = createPONumber("syn", 2);
    const parsed = parsePONumber(poNumber);
    expect(parsed).toEqual({ prefix: "syn", num: 2 });
  });
});
