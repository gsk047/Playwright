import { expect, test } from "@playwright/test";

test('Simple Alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toBe('I am a JS Alert');
        await alert.accept();
    });

    await page.locator('button[onclick="jsAlert()"]').click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    await page.close();
});

test('Confirmation Alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toBe('I am a JS Confirm');
        await alert.dismiss();
    });

    await page.locator('button[onclick="jsConfirm()"]').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    await page.close();
});

test('Prompt Alert', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async(alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toBe('I am a JS prompt');
        await alert.accept('Prompted');
    })

    await page.locator('button[onclick="jsPrompt()"]').click();
    await expect(page.locator('#result')).toHaveText('You entered: Prompted');
    await page.close();
})