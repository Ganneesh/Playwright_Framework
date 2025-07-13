import fs from 'fs';
import path from 'path';

async function globalTeardown() {
  const tokenFile = path.join(__dirname, 'authToken.json');
  if (fs.existsSync(tokenFile)) {
    fs.unlinkSync(tokenFile);
    console.log('🧹 Deleted saved auth token.');
  }
}

export default globalTeardown;
