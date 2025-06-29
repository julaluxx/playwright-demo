import { test, expect } from '@playwright/test';

test("Checkbox 1 should not be checked initially", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    let checkBox1 = page.locator('input[type="checkbox"]').nth(0);

    await expect(checkBox1).toBeVisible();
    await expect(checkBox1).not.toBeChecked();
});

test("Checkbox 2 should be checked initially", async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes')
    let checkbox = page.locator('input[type="checkbox"]');

    await expect(checkbox.nth(1)).toBeVisible();

    await expect(checkbox.nth(1)).toBeChecked();
});

test("Check checkbox 1 and verify", async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes')
    let checkbox = page.locator('input[type="checkbox"]');

    await expect(checkbox.nth(0)).toBeVisible();

    await checkbox.nth(0).click();

    await expect(checkbox.nth(0)).toBeChecked;
});