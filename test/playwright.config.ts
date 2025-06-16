import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: ['login.spec.ts', 'category.spec.ts'],
  use: {
    baseURL: 'http://localhost:1337',
    headless: false,
    viewport: { width: 1280, height: 720 },
  },
});