export interface DelayOptions {
  /** An optional AbortSignal to cancel the delay */
  signal?: AbortSignal;
}

/**
 * Delays execution for a given number of milliseconds.
 * @param ms Number of milliseconds to delay
 * @param options Delay options
 * @returns A promise that resolves after the specified delay
 */
export function delay(ms: number, { signal }: DelayOptions = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const abortError = new Error("Delay aborted");

    if (signal?.aborted) {
      return reject(abortError);
    }

    const handleAbort = () => {
      clearTimeout(timeoutId);
      reject(abortError);
    };

    const timeoutId = setTimeout(() => {
      resolve();
      signal?.removeEventListener("abort", handleAbort);
    }, ms);
    // Register abort listener (memory leak is avoided by removing listener on timeout)
    signal?.addEventListener("abort", handleAbort);
  });
}
