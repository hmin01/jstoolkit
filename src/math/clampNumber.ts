/**
 * Clamps a number to be upper bounds.
 * @param value The number to clamp.
 * @param upper The upper bound.
 * @returns The clamped number.
 *
 * @example
 * ```ts
 * clampNumber(10, 5);  // returns 5
 * clampNumber(3, 5);   // returns 3
 * ```
 */
export function clampNumber(value: number, upper: number): number;

/**
 * Clamps a number to be within the specified range.
 * @param value The number to clamp.
 * @param lower The lower bound.
 * @param upper The upper bound.
 * @returns The clamped number.
 *
 * @example
 * ```ts
 * clampNumber(10, 5, 8);  // returns 8
 * clampNumber(3, 5, 8);   // returns 5
 * clampNumber(6, 5, 8);   // returns 6
 * ```
 */
export function clampNumber(value: number, lower: number, upper: number): number;

/** Implementation of clampNumber function. */
export function clampNumber(value: number, lower: number, upper?: number): number {
  if (upper === undefined) {
    return Math.min(value, lower);
  }

  return Math.max(lower, Math.min(value, upper));
}
