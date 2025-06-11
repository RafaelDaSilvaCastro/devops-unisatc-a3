import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:1337',
    headless: false, // Para visualizar o navegador
    viewport: { width: 1280, height: 720 },
  },
});
