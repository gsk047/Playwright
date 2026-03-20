import {expect, test} from "@playwright/test";

test('Frames', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    await frame1?.locator('input[name="mytext1"]').fill('Sample Text');
    await expect(frame1?.locator('#id1')).toHaveText('Frame1');
});

test('iFramForm', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frameLocator('frame[src="frame_3.html"]');

    await expect(frame3?.locator('form[id="id3"]')).toHaveText('Frame3');

    const hybridFrame = frame3?.frameLocator('iframe[src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]');

    // await hybridFrame?.locator('(//div[@class="rseUEf nQOrEb"])[1]').check();
    // await expect(hybridFrame?.locator('(//span[@class="aDTYNe snByac OvPDhc OIC90c"])[1]')).toHaveText('Hi, I am the UI.Vision IDE');

    // await hybridFrame?.locator('(//div[@class="TCA6qd"])[1]').check();
    // await expect(hybridFrame?.locator('(//span[@class="aDTYNe snByac n5vBHf OIC90c"])[1]')).toHaveText('Web Testing');

    await hybridFrame?.getByRole('radio', {name: 'Hi, I am the UI.Vision IDE'}).click();
    await hybridFrame?.getByRole('checkbox', {name: 'Form Autofilling'}).check();
    
})