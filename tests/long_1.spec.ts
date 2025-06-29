import {test, expect} from '@playwright/test';

test(('Login system check.') , async ({page}) => {
    await page.goto('https://www.saucedemo.com/');  

    await page.getByPlaceholder('Username').fill('standard_user');  
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Swag Labs')).toBeVisible();

    
    await expect(page.locator('.title')).toHaveText('Products');

    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await expect(page.locator('.shopping_cart_link')).toHaveText('1');

    await page.locator('.shopping_cart_link').click();
});

