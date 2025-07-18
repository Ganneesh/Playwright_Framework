// tests/mysql-db-test.spec.ts
import { test } from '@playwright/test';
import { connectDB, disconnectDB, queryDB } from '../support/utils/db'; 



// test('MySQL DB connection test', async () => {
//   await connectDB();

//   const users = await queryDB('SELECT * FROM users');
//   console.log('🧾 Users:', users);

//   await disconnectDB();
// });
