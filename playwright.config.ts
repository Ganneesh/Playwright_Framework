// playwright.config.ts
import { defineConfig, devices, FullConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig({
  globalSetup: require.resolve('./globalSetup'),
  globalTeardown: require.resolve('./globalTeardown'),

  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    // Base URL—ensures your API and page requests target the right host
    baseURL: process.env.API_BASE_URL || 'https://api.dev.example.com',
    trace: 'on-first-retry',
    // Optionally add storageState if you use auth via globalSetup
    // storageState: 'state.json',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
