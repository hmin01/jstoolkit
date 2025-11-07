export type RangeBoundaryInclusion = "include" | "lowerOnly" | "upperOnly" | "exclude";

/**
 * Checks if a value is within a specified number range.
 * @param value The number to check.
 * @param maximum The upper bound of the range.
 * @param option The inclusion/exclusion option for the range.
 * @returns True if the value is within the range, false otherwise.
 *
 * @example
 * ```ts
 * inRange(5, 10);                  // returns true
 * inRange(10, 10);                 // returns false
 * inRange(10, 10, "include");      // returns true
 * inRange(15, 10);                 // returns false
 * inRange(10, 10, "upperOnly");    // returns true
 * ```
 */
export function inRange(value: number, maximum: number, option?: RangeBoundaryInclusion | undefined): boolean;

/**
 * Checks if a value is within a specified number range.
 * @param value The number to check.
 * @param minimum The lower bound of the range.
 * @param maximum The upper bound of the range.
 * @param option The inclusion/exclusion option for the range.
 * @returns True if the value is within the range, false otherwise.
 *
 * @example
 * ```ts
 * inRange(5, 2, 10);                // returns true
 * inRange(10, 2, 10);               // returns false
 * inRange(10, 2, 10, "include");    // returns true
 * inRange(15, 2, 10);               // returns false
 * inRange(10, 5, 10, "upperOnly");  // returns true
 * ```
 */
export function inRange(value: number, minimum: number, maximum: number, option?: RangeBoundaryInclusion | undefined): boolean;

/**
 * Implementation of inRange function.
 */
export function inRange(value: number, minimum: number, maximum?: number | RangeBoundaryInclusion, option?: RangeBoundaryInclusion | undefined): boolean {
  let _option: RangeBoundaryInclusion = option ?? "exclude";

  if (maximum === undefined) {
    maximum = minimum;
    minimum = -Infinity;
  }

  if (typeof maximum === "string") {
    _option = maximum;
    maximum = minimum;
    minimum = -Infinity;
  }

  if (minimum > maximum) {
    throw new Error("The minimum value cannot be greater than the maximum value.");
  }

  switch (_option) {
    case "include":
      return value >= minimum && value <= maximum;
    case "lowerOnly":
      return value >= minimum && value < maximum;
    case "upperOnly":
      return value > minimum && value <= maximum;
    default: // Default: exclude
      return value > minimum && value < maximum;
  }
}
