import { describe, expect, test } from "vitest";
import { roundTo } from "./roundTo";

describe("roundTo", () => {
  test("rounds to integer by default", () => {
    expect(roundTo(3.14159)).toBe(3);
    expect(roundTo(3.5)).toBe(4);
    expect(roundTo(-3.14159)).toBe(-3);
  });
  test("rounds to specified decimal places", () => {
    expect(roundTo(3.14159, 2)).toBe(3.14);
    expect(roundTo(3.14159, 4)).toBe(3.1416);
    expect(roundTo(3.14159, 1)).toBe(3.1);
  });
  test("handles negative decimal places", () => {
    expect(roundTo(3149.19, -2)).toBe(3100);
    expect(roundTo(3149.19, -1)).toBe(3150);
    expect(roundTo(3149.19, -3)).toBe(3000);
  });
  test("throws error for non-integer decimals", () => {
    expect(() => roundTo(3.14159, 2.5)).toThrow("The decimals parameter must be an integer.");
    expect(() => roundTo(3.14159, NaN)).toThrow("The decimals parameter must be an integer.");
  });
});
