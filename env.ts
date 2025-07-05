import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  ENV:         z.enum(['dev', 'qa', 'uat', 'prod']).default('qa'),
  NODE_ENV:    z.enum(['development', 'production', 'test']).default('test'),
  PORT:        z.coerce.number().int().positive().default(3000),
  BASE_URL:    z.string().url(),
  ENABLE_MOCK: z.coerce.boolean().default(false),
  USERNAME:    z.string().min(1),
  PASSWORD:    z.string().min(1),
  TIMEOUT:     z.coerce.number().int().positive(),
  DATABASE_URL:z.string().url(),
  API_KEY:     z.string().min(1),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(' Invalid environment variables:\n', parsed.error.format());
  process.exit(1);
}

export const Env = parsed.data;
