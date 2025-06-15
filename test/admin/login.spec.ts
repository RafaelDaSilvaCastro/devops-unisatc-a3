import { test, expect } from '@playwright/test';
import {
    ADMIN_EMAIL_ADDRESS,
    ADMIN_PASSWORD,
    INVALID_ADMIN_PASSWORD,
    INVALID_EMAIL_ADDRESS,
} from "../constants";

test.use({ headless: false });

test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        // Acessar a página de login

        await page.goto('http://localhost:1337/admin');
    });

    test.afterEach(async ({ page }) => {
        // Adicionar um delay de 1 segundo entre os testes

        await page.waitForTimeout(1000);
        // Fechar a página para garantir independência entre os testes

        await page.close();
    });

    test('Validações de formulário', async ({ page }) => {
        // Testa sem preencher o email
        await page.getByLabel('Password').fill(ADMIN_EMAIL_ADDRESS);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Value is required')).toBeVisible();

        // Testa sem preencher a senha
        await page.getByLabel('Email').fill(ADMIN_EMAIL_ADDRESS);
        await page.getByLabel('Password').fill('');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Value is required')).toBeVisible();

        // Testa com email inválido
        await page.getByLabel('Email').fill(INVALID_EMAIL_ADDRESS);
        await page.getByLabel('Password').fill(ADMIN_PASSWORD);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Invalid credentials')).toBeVisible();

        // Testa com senha inválida
        await page.getByLabel('Email').fill(ADMIN_EMAIL_ADDRESS);
        await page.getByLabel('Password').fill(INVALID_ADMIN_PASSWORD);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Invalid credentials')).toBeVisible();
    });

    test('Login bem-sucedido', async ({ page }) => {
        // Preencher o formulário de login
        await page.getByLabel('Email').fill(ADMIN_EMAIL_ADDRESS);
        await page.getByLabel('Password').fill(ADMIN_PASSWORD);
        await page.getByRole('button', { name: 'Login' }).click();

        // Verificar se o login foi bem-sucedido
        await expect(page).toHaveTitle('Homepage | Strapi');
    });

    test('Exibe erro após 5 tentativas de login', async ({ page }) => {
        // Preencher o formulário com credenciais inválidas
        await page.getByLabel('Email').fill(ADMIN_EMAIL_ADDRESS);
        await page.getByLabel('Password').fill(INVALID_ADMIN_PASSWORD);

        // Clica no botão de login 6 vezes
        for (let i = 0; i < 6; i++) {
            await page.getByRole('button', { name: 'Login' }).click();
        }

        // Verifica se a mensagem de erro de limite de tentativas é exibida
        await expect(page.getByText('Too many requests, please try again later.')).toBeVisible();
    });

    test('Acessar a página de recuperação de senha', async ({ page }) => {
        // Clica no link de recuperação de senha
        await page.getByRole('link', { name: 'Forgot your password?' }).click();
        await expect(page.getByText('Password Recovery')).toBeVisible();

        // Retorna para a página de login
        await page.getByRole('link', { name: 'Ready to sign in?' }).click();
        await expect(page).toHaveTitle('Strapi Admin');
    });
});