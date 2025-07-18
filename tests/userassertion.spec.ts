import { test, request } from '@playwright/test';
import {
  assertStatus,
  assertSuccessTrue,
  assertBodyHasKeys,
  assertBodyKeyValue,
  assertBodyContains,
} from '../support/utils/assertions';


//describe block and hooks for better organization
test.describe.skip('User Assertion Tests', () => {
  test.beforeAll(async () => {
    // Any setup before tests run
  });

  test('User assertion test', async ({ request }) => {
    const response = await request.get('/api/users/1');
    
    assertStatus(response, 200);
    await assertSuccessTrue(response);
    await assertBodyHasKeys(response, ['id', 'name', 'email']);
    await assertBodyKeyValue(response, 'id', 1);
    await assertBodyContains(response, { success: true });
  });

  test.afterAll(async () => {
    // Any cleanup after tests run
  });
});

