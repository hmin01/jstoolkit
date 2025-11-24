/**
 * Returns the sum of the values obtained by applying `getValue` to each item in the array.
 * @param values The array of items to be processed.
 * @param getValue A function that takes an item and its index, and returns a number.
 * @returns The sum of the values obtained by applying `getValue` to each item.
 *
 * @example
 * ```ts
 * const data = [{ amount: 10 }, { amount: 20 }, { amount: 30 }];
 * const total = sumBy(data, item => item.amount); // Output: 60
 * ```
 */
export function sumBy<T>(values: T[], getValue: (item: T, index: number) => number): number {
  let result = 0;
  for (let i = 0; i < values.length; i++) {
    result += getValue(values[i], i);
  }
  return result;
}
