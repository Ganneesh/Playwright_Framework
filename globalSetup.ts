import { request } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { Env } from './env';

async function globalSetup() {
  // const apiContext = await request.newContext({
  //   baseURL: Env.BASE_URL,
  // });

  // const response = await apiContext.post('/api/login', {
  //   data: {
  //     email: Env.USERNAME,
  //     password: Env.PASSWORD,
  //   },
  // });

  // const body = await response.json();

  // fs.writeFileSync(path.join(__dirname, 'authToken.json'), JSON.stringify({ token: body.token }));
}

export default globalSetup;
