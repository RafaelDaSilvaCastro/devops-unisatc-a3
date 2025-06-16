import { test, expect, Page } from '@playwright/test';
import { ADMIN_EMAIL_ADDRESS, ADMIN_PASSWORD } from "../constants";

async function login(page: Page) {
    await page.goto('http://localhost:1337/admin');

    await page.getByLabel('Email').fill(ADMIN_EMAIL_ADDRESS);
    await page.getByLabel('Password').fill(ADMIN_PASSWORD);

    await page.getByRole('button', { name: 'Login' }).click();

    // Verificar se o login foi bem-sucedido
    await expect(page).toHaveTitle('Homepage | Strapi');
}

async function navigateToCreateCategory(page: Page) {
    await page.getByRole('link', { name: 'Content Manager' }).click();
    await page.getByRole('link', { name: 'Categoria' }).click();

    await page.goto('http://localhost:1337/admin/content-manager/collection-types/api::category.category/create');
}

async function fillCategoryForm(page: Page, description: string, title: string, tag: string) {
    await page.locator('textarea[name="description"]').fill(description);
    await page.locator('input[name="AAAAAAAAAAAAAAAAAAA"]').fill(title);
    await page.locator('input[name="wqdqwdqwdqwdqwd"]').fill(tag);
}


async function validateSuccessMessage(page: Page, message: string) {
    await expect(page.locator(`text=${message}`)).toBeVisible({ timeout: 10000 });
}

// Função auxiliar para validar texto em uma página

async function validateTextOnPage(page: Page, text: string) {
    await expect(page.locator(`text=${text}`)).toBeVisible({ timeout: 5000 });
}

test.use({ headless: false });

test.describe('Testes de Categoria', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:1337/admin');
    });

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(1000);
        await page.close();
    });

    test('Criar uma Nova Categoria', async ({ page }) => {
        test.setTimeout(60000);

        // Realizar o login

        await login(page);

        // Navegar para a página de criação de categoria

        await navigateToCreateCategory(page);

        // Preencher o formulário de categoria

        await fillCategoryForm(page, 'Este é um categoria de teste criado para fins de demonstração.', 'Automação de Testes com Playwright', 'Devops');

        // Clicar no botão de salvar

        await page.locator('button:has-text("Save")').click();

        // Validar a mensagem de sucesso

        // await validateSuccessMessage(page, 'Success: Saved document');

        // Validar que a categoria foi criada com sucesso

        await validateTextOnPage(page, 'Automação de Testes com Playwright');

        // Navegar para a lista de categorias

        await page.goto('http://localhost:1337/admin/content-manager/collection-types/api::category.category?page=1&pageSize=10&sort=AAAAAAAAAAAAAAAAAAA%3AASC');

        // Validar que a categoria está listada

        await validateTextOnPage(page, 'Automação de Testes com Playwright');
    });
});