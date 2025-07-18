// src/utils/authHelper.ts
import dotenv from 'dotenv';
dotenv.config();

let token: string;

export async function getToken(): Promise<string> {
  if (token) return token;

  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  const response = await fetch(`${process.env.BASE_API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  token = data.token;

  return token;
}
