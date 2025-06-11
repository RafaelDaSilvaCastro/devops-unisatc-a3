import { test, expect } from '@playwright/test';

test('Criar novo artigo no Strapi CMS', async ({ page }) => {
  // Aumenta timeout para 60 segundos
  test.setTimeout(60000);

  // // Acessa o painel admin e espera a página carregar completamente
  // await page.goto('http://localhost:1337/admin', { waitUntil: 'networkidle' });

  // // Preenche Email e Password
  // await page.getByLabel('Email').fill('admin@satc.edu.br');
  // await page.getByLabel('Password').fill('welcomeToStrapi123');

  // // Espera o botão de login ficar visível e clica
  // const loginButton = page.getByRole('button', { name: /log in/i });
  // await loginButton.waitFor({ state: 'visible' });
  // await loginButton.click();

  // // Espera até mudar para a URL do painel admin (pode ajustar o timeout se necessário)
  // await page.waitForURL('**/admin', { timeout: 20000 });

  // // Vai para o Content Manager e espera a navegação
  // const contentManagerLink = page.getByRole('link', { name: 'Content Manager' });
  // await contentManagerLink.waitFor({ state: 'visible' });
  // await contentManagerLink.click();

  // // Aguarda e clica na collection Articles
  // const articlesLink = page.getByRole('link', { name: /articles?/i });
  // await articlesLink.waitFor({ state: 'visible' });
  // await articlesLink.click();

  // // Clica no botão de criar novo artigo
  // const createEntryBtn = page.getByRole('button', { name: /create new entry/i });
  // await createEntryBtn.waitFor({ state: 'visible' });
  // await createEntryBtn.click();

  // // Preenche campos básicos
  // await page.getByLabel(/title/i).fill('Artigo de Teste E2E');
  // await page.getByLabel(/description/i).fill('Esse é um artigo criado automaticamente.');

  // // Salva
  // const saveBtn = page.getByRole('button', { name: /save/i });
  // await saveBtn.waitFor({ state: 'visible' });
  // await saveBtn.click();

  // // Verifica se o artigo foi salvo com sucesso
  // await expect(page.getByText(/entry created/i)).toBeVisible({ timeout: 10000 });
});
