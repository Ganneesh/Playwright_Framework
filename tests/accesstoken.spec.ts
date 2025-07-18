import { test } from '@playwright/test';
import { getToken } from '../support/utils/authHelper';


//add describe block for better organization
test.describe.skip('Authentication Tests', () => {
  test.beforeAll(async () => {
    // Any setup before tests run
  });

  test('Token fetch test', async () => {
  const token = await getToken();
  console.log('🔐 Token:', token);
});

  test.afterAll(async () => {
    // Any cleanup after tests run
  });

  // Test to fetch and log
})
