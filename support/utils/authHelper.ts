import fs from 'fs';
import path from 'path';

export function getSavedToken(): string {
  const filePath = path.join(__dirname, '../authToken.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return data.token;
}
