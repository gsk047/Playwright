import {expect, test} from "@playwright/test";

test('Frames', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    await frame1?.locator('input[name="mytext1"]').fill('Sample Text');
    await expect(frame1?.locator('#id1')).toHaveText('Frame1');
})