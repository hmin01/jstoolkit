import { describe, expect, it } from "vitest";
import { isNotNil } from "./isNotNil";

describe("isNotNil", () => {
  it("should return true for null or undefined", () => {
    expect(isNotNil(null)).toBe(false);
    expect(isNotNil(undefined)).toBe(false);
  });

  it("should return false for other values", () => {
    expect(isNotNil(0)).toBe(true);
    expect(isNotNil("")).toBe(true);
    expect(isNotNil(false)).toBe(true);
    expect(isNotNil([])).toBe(true);
    expect(isNotNil({})).toBe(true);
  });

  it("should filter out null and undefined values from an array", () => {
    const arr = [null, undefined, 42, "hello", {}];

    expect(arr.filter(isNotNil)).toEqual([42, "hello", {}]);
  });
});
