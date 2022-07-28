import { flipObj } from "./nonDOM";

describe("Should flip the keys and values of an object", () => {
  const testObject = { key: value };
  it("Should return values as keys and keys as values", () => {
    expect(flipObj(testObject)).toBe( {value: key});
  });
});