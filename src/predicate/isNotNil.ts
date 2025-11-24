/**
 * Checks if a value is neither null nor undefined.
 * @param value The value to check.
 * @returns True if the value is neither null nor undefined, otherwise false.
 */
export function isNotNil<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
