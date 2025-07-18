import { APIResponse } from '@playwright/test';
import { expect } from '@playwright/test';

// ✅ Parse JSON from response safely
export async function parseResponse(response: APIResponse): Promise<any> {
  const contentType = response.headers()['content-type'] || '';
  if (contentType.includes('application/json')) {
    return await response.json();
  }
  return await response.text(); // fallback
}

// ✅ Log formatted response
export async function logResponse(response: APIResponse, label = '') {
  const data = await parseResponse(response);
  console.log(`\n--- ${label || 'API Response'} ---`);
  console.log(`Status: ${response.status()}`);
  console.log('Body:', JSON.stringify(data, null, 2))}

  export function expectStatus(res: APIResponse, status: number) {
  expect(res.status(), `Expected status ${status} but got ${res.status()}`).toBe(status);
  }