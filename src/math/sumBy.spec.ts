import { describe, expect, it } from "vitest";
import { sumBy } from "./sumBy";

describe("sumBy", () => {
  interface ArrayItem {
    value: number;
  }

  const arr: ArrayItem[] = [{ value: 1 }, { value: 2 }, { value: 3 }];

  it("should return the sum of values based on the provided function", () => {
    expect(sumBy(arr, ({ value }) => value)).toBe(6);
  });

  it("should handle an empty array", () => {
    expect(sumBy<ArrayItem>([], ({ value }) => value)).toBe(0);
  });

  it("should can access zero-based index in the array", () => {
    expect(sumBy(arr, ({ value }, index) => value * index)).toBe(8);
  });
});
