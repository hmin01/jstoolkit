/**
 * Calculates the sum of the provided numbers in an array
 * @param values The array of numbers to be summed.
 * @return The sum of the provided numbers.
 *
 * @example
 * ```ts
 * sum([1, 2, 3, 4]);    // Output: 10
 * sum([5, 10, 15]);     // Output: 30
 * ```
 */
export function sum(values: number[]): number;

/**
 * Calculates the sum of the provided numbers
 * @param values The numbers to be summed.
 * @return The sum of the provided numbers.
 *
 * @example
 * ```ts
 * sum(1, 2, 3, 4);     // Output: 10
 * sum(5, 10, 15);      // Output: 30
 * ```
 */
export function sum(...values: number[]): number;

/**
 * Implementation of sum function.
 */
export function sum(...values: number[] | number[][]): number {
  let result = 0;

  if (values.length === 1 && Array.isArray(values[0])) {
    for (const elem of values[0]) {
      result += elem;
    }
  } else {
    for (const elem of values as number[]) {
      result += elem;
    }
  }
  return result;
}
