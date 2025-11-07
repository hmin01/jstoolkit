/**
 * Truncates a number to a specified number of decimal places without rounding.
 * @param value The number to truncate.
 * @param decimals The number of decimal places to truncate to. Defaults to 0.
 * @returns The truncated number.
 */
export function truncateTo(value: number, decimals: number = 0): number {
  if (!Number.isInteger(decimals)) {
    throw new Error("The decimals parameter must be an integer.");
  }

  const factor = Math.pow(10, decimals);
  return Math.trunc(value * factor) / factor;
}
