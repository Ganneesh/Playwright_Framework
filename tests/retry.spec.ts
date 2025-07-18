import { test, expect } from '@playwright/test';
import { retry } from '../support/utils/retry';

test.describe('API Retry Tests', () => {

  test('Flaky API call retried up to 3 times', async ({ request }) => {
    const callFlakyApi = async () => {
      const res = await request.get('/api/flaky-endpoint');
      expect(res.status()).toBe(200);
      return res;
    };

    const response = await retry(callFlakyApi, 3, 1000);
    const body = await response.json();
    expect(body).toBeDefined();
    console.log('✅ Final result:', body);
  });

  test('Create user directly in test', async ({ request }) => {
    const res = await request.post('/api/users', {
      data: {
        name: 'Alice',
        email: 'alice@example.com'
      },
    });
    expect(res.status()).toBe(201);
    const user = await res.json();
    expect(user.id).toBeTruthy();
    console.log('👤 Created user:', user);
  });

});
