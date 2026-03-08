import { test, expect, type Locator } from "@playwright/test";

test('Ui Elements Validation',
    {
        tag: ['@smoke', '@admin', '@destructive'],
        annotation: [
            {
                type: 'author', description: 'Gowtham',
            },
            {
                type: 'Test Description', description: 'Validation of UI Elements'
            }
        ]

    }, async ({ page }) => {
        await page.goto('https://www.letskodeit.com/practice');

        // Alerts
        await page.locator('//*[@placeholder="Enter Your Name"]').click();
        await page.locator('//*[@placeholder="Enter Your Name"]').fill('Test-User');
        await page.locator('#alertbtn').press('Enter');
    }
)

test('Mouse Action', async ({ page }) => {

    async function mouseAction(button: any, clickCount: number, assertionText: string) {
        const mouseArea = page.locator('#click_area');
        const clickAssertion = page.locator('#click_type');
        await mouseArea.click({ clickCount: clickCount, button: button });
        await expect(clickAssertion).toHaveText(assertionText);
    }

    await page.goto('http://play1.automationcamp.ir/mouse_events.html');
    await mouseAction('left', 1, 'Click');
    await mouseAction('right', 1, 'Right-Click');
    await mouseAction('left', 2, 'Double-Click');

})

test('RadioButton', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('input[value="Male"]').check();
    await expect(page.locator('input[value="FeMale"]')).not.toBeChecked();

})

test('CheckBox', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');

    const checkBox1 = page.locator('input[id="checkbox1"]');
    const checkBox2 = page.locator('input[id="checkbox2"]');
    const checkBox3 = page.locator('input[id="checkbox3"]');

    // await checkBox1.check();
    // await checkBox2.check();

    for (let i = 0; i < 6; i++) {
        await checkBox1.click();
        await checkBox2.click();
    }

    await expect(checkBox1).not.toBeChecked();
    await expect(checkBox2).not.toBeChecked();


})

test('CheckBoxEnhanced', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');

    // 1. Define your locators here
    const checkBox1 = page.locator('input[id="checkbox1"]');
    const checkBox2 = page.locator('input[id="checkbox2"]');
    // const checkBox3 = page.locator('input[id="checkbox3"]');

    // 2. Create a reusable function that:
    //    - Accepts a Locator as parameter
    //    - Accepts an action (() => Promise<void>) as parameter
    //    - Accepts a boolean — the EXPECTED checked state after action
    //    - Performs the action
    //    - Asserts whether the checkbox IS or IS NOT checked
    async function performCheckboxAction(action: () => Promise<void>, locator: Locator, isChecked: boolean) {
        await action();
        isChecked
            ? await expect(locator).toBeChecked()
            : await expect(locator).not.toBeChecked();
    }

    // 3. Use it to:
    //    - Check checkbox1 → assert it IS checked
    //    - Check checkbox2 → assert it IS checked
    //    - Uncheck checkbox1 → assert it is NOT checked
    //    - Leave checkbox2 checked → assert it IS still checked
    await performCheckboxAction(() => checkBox1.check(), checkBox1, true);
    await performCheckboxAction(() => checkBox2.check(), checkBox2, true);
    await performCheckboxAction(() => checkBox1.uncheck(), checkBox1, false);
    await performCheckboxAction(() => checkBox2.check(), checkBox2, true);

})

test('DropDown', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html')
    await page.selectOption('#Skills', {
        value: 'AutoCAD'
    })
})

