// server.ts
import express, { Request, Response } from 'express';

export function startServer(port: number) {
  const app = express();
  
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
  });

  return new Promise<void>((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`✅ Server running on port ${port}`);
      resolve();
    });
    server.on('error', reject);
  });
}
