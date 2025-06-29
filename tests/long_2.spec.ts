import { test, expect } from '@playwright/test';

test('Add 3 elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    // for (let i = 0; i < 3; i++) {
        await page.locator('button[onclick="addElement()"]').click();
        await page.locator('button[onclick="addElement()"]').click();
        await page.locator('button[onclick="addElement()"]').click();
    // }
    await expect(page.locator('.added-manually')).toHaveCount(3);
});

test('Add element and delete 1', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    await page.locator('button[onclick="addElement()"]').click();
    await page.locator('button[onclick="addElement()"]').click();

    await expect(page.locator('.added-manually')).toHaveCount(2);

    await page.locator('.added-manually').last().click();

    await expect(page.locator('.added-manually')).toHaveCount(1);
});