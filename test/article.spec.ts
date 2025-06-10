import { test, expect } from '@playwright/test';

test('Criar novo artigo no Strapi CMS', async ({ page }) => {
  await page.goto('http://localhost:1337/admin');

  // Login
  await page.fill('input[name="email"]', 'admin@satc.edu.br');
  await page.fill('input[name="password"]', 'welcomeToStrapi123');
  await page.click('button[type="submit"]');

  // Aguardar o painel carregar
  await page.waitForURL('**/admin');

  // Ir até "Content Manager" e selecionar "Articles"
  await page.click('text=Content Manager');
  await page.click('text=Article');

  // Criar novo artigo
  await page.click('text=Create new entry');

  // Preencher campos
  await page.fill('input[name="title"]', 'Artigo de Teste');
  await page.fill('[aria-label="Rich text editor input"]', 'Conteúdo do artigo de teste');

  // Salvar
  await page.click('button:has-text("Save")');
  await expect(page.locator('text=Artigo de Teste')).toBeVisible();
});
