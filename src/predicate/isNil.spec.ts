import { describe, expect, it } from "vitest";
import { isNil } from "./isNil";

describe("isNil", () => {
  it("should return true for null or undefined", () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });

  it("should return false for other values", () => {
    expect(isNil(0)).toBe(false);
    expect(isNil("")).toBe(false);
    expect(isNil(false)).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil({})).toBe(false);
  });

  it("should filter out null and undefined values from an array", () => {
    const arr = [null, undefined, 42, "hello", {}];

    expect(arr.filter(isNil)).toEqual([null, undefined]);
  });
});
