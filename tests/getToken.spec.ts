import { test, expect, request } from '@playwright/test';
import { getSavedToken } from '../utils/authHelper';

test('Get users with saved token', async () => {
  const token = getSavedToken();

  const context = await request.newContext({
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await context.get('/api/users');
  expect(response.ok()).toBeTruthy();
});
