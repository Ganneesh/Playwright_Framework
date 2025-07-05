// index.ts
import { Env } from './env';
import { startServer } from './server.ts';  // now this will work

console.log(`Running in ${Env.ENV} (${Env.NODE_ENV})`);
console.log(`Server listening on port ${Env.PORT}`);

startServer(Env.PORT).catch(err => {
  console.error(' Server failed to start:', err);
  process.exit(1);
});
