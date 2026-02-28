import { test, expect } from "@playwright/test";

test('To be Visible', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('#displayed-text')).toBeVisible();
});

test('To be Present', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await page.locator('//*[@id="content"]/div/button').click();
    const countButton = page.locator('//*[@id="elements"]/button');
    await expect(countButton).toHaveCount(1);
    await countButton.click();
    await expect(countButton).toHaveCount(0);
});

test.only('To be Enabled', async ({page}) =>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page).toHaveTitle(/Practice Page/);
    const disableButton = page.locator('#disabled-button');
    const enableButton = page.locator('#enabled-button');
    const enableDisableTestBox = page.locator('#enabled-example-input');
    await disableButton.click();
    await expect(enableDisableTestBox).toBeDisabled();
    await enableButton.click();
    await expect(enableDisableTestBox).toBeEnabled();
});