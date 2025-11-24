import { describe, expect, it } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  it("should return the sum of multiple numbers", () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
    expect(sum(10, 20, 30)).toBe(60);
  });

  it("should return the sum of numbers in an array", () => {
    expect(sum([5, 10, 15])).toBe(30);
    expect(sum([0, -5, 5])).toBe(0);
  });

  it("should return 0 for an empty array", () => {
    expect(sum()).toBe(0);
    expect(sum([])).toBe(0);
  });

  it("should handle negative numbers correctly", () => {
    expect(sum(-1, -2, -3)).toBe(-6);
    expect(sum([-10, 5, 5])).toBe(0);
  });

  it("ensures that sum is commutative", () => {
    const a = [1, 2, 3];
    const b = [4, 5, 6];

    expect(sum(a) + sum(b)).toBe(sum(...b, ...a));
  });
});
