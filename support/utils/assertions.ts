// src/utils/assertions.ts
import { expect, APIResponse } from '@playwright/test';

/**
 * ✅ Assert status code (e.g. 200, 201, 400)
 */
export function assertStatus(response: any, expectedStatus: number) {
  expect(response.status(), `Expected status ${expectedStatus}, got ${response.status()}`).toBe(expectedStatus);
}

/**
 * ✅ Assert response JSON has certain keys
 */
export async function assertBodyHasKeys(response: any, expectedKeys: string[]) {
  const body = await response.json();
  for (const key of expectedKeys) {
    expect(body, `Missing key: ${key}`).toHaveProperty(key);
  }
}

/**
 * ✅ Assert value of a key in response JSON
 */
export async function assertBodyKeyValue(response: any, key: string, expectedValue: any) {
  const body = await response.json();
  expect(body[key], `Expected ${key} = ${expectedValue}, got ${body[key]}`).toBe(expectedValue);
}

/**
 * ✅ Assert response JSON includes expected object
 */
export async function assertBodyContains(response: any, expectedPartial: object) {
  const body = await response.json();
  expect(body).toMatchObject(expectedPartial as Record<string, unknown>);
}

/**
 * ✅ Assert success = true in response JSON
 */
export async function assertSuccessTrue(response: any) {
  const body = await response.json();
  expect(body.success, `Expected success: true, got ${body.success}`).toBe(true);
}

/**
 * ✅ Assert success = false in response JSON
 */
export async function assertSuccessFalse(response: any) {
  const body = await response.json();
  expect(body.success, `Expected success: false, got ${body.success}`).toBe(false);
}

/**
 * ✅ Assert specific error message in failed response
 */
export async function assertErrorMessage(response: any, expectedMessage: string) {
  const body = await response.json();
  expect(body.message, `Expected message: "${expectedMessage}", got: "${body.message}"`).toBe(expectedMessage);
}

/**
 * ✅ Assert array length (e.g. for user lists, product lists)
 */
export async function assertArrayLength(response: any, expectedLength: number) {
  const body = await response.json();
  expect(Array.isArray(body)).toBe(true);
  expect(body.length, `Expected array length ${expectedLength}, got ${body.length}`).toBe(expectedLength);
}

/**
 * ✅ Assert response time is within limit (in ms)
 */
export function assertResponseTime(response: any, maxMs: number) {
  const resTime = response.timing()?.duration;
  expect(resTime, `Expected response time <= ${maxMs}ms, got ${resTime}ms`).toBeLessThanOrEqual(maxMs);
}
export function expectStatus(res: APIResponse, status: number) {
  expect(res.status(), `Expected status ${status} but got ${res.status()}`).toBe(status);
  }