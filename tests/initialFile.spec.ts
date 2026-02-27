import { expect, test } from "@playwright/test";

test('Login Page', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
    // await page.pause();
    await expect(page.locator('//*[@id="content"]/div/h2')).toHaveText(' Secure Area');
});

//*[@id="content"]/div/ul/li[1]/a

