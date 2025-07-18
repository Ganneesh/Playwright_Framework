import type { APIResponse } from '@playwright/test';

/**
 * Retries an API function (returning APIResponse) up to `retries` times, with optional `delayMs`.
 */
export async function retry<T extends APIResponse>(
  fn: () => Promise<T>,
  retries = 3,
  delayMs = 1000
): Promise<T> {
  let lastError: any;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      console.warn(`Attempt ${attempt} failed:`, err);
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, delayMs));
      }
    }
  }
  throw lastError;
}
