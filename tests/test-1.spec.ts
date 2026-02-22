import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
  await expect(page.locator('#app')).toMatchAriaSnapshot(`
    - text: 
    - paragraph: Time at Work
    - separator
    - img "profile picture"
    - paragraph: Punched Out
    - paragraph: "/Punched Out: Feb 9th at \\\\d+:\\\\d+ PM \\\\(GMT 0\\\\)/"
    - text: /\\d+[hmsp]+ [\\d,.]+[bkmBKM]+ Today/
    - button ""
    - separator
    - paragraph: This Week
    - paragraph: /Feb \\d+ - Feb \\d+/
    - text: 
    - paragraph: /\\d+[hmsp]+ [\\d,.]+[bkmBKM]+/
    - text: 
    - paragraph: My Actions
    - separator
    - button
    - paragraph: (1) Pending Self Review
    - button
    - paragraph: (1) Candidate to Interview
    - text: 
    - paragraph: Quick Launch
    - separator
    - button "Assign Leave"
    - paragraph: Assign Leave
    - button "Leave List"
    - paragraph: Leave List
    - button "Timesheets"
    - paragraph: Timesheets
    - button "Apply Leave"
    - paragraph: Apply Leave
    - button "My Leave"
    - paragraph: My Leave
    - button "My Timesheet"
    - paragraph: My Timesheet
    - text: 
    - paragraph: Buzz Latest Posts
    - separator
    - img "profile picture"
    - paragraph: Test Nico Franey
    - paragraph: /\\d+-\\d+-\\d+ \\d+:\\d+ AM/
    - separator
    - paragraph: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
    - img "profile picture"
    - paragraph: Sania Shaheen
    - paragraph: /\\d+-\\d+-\\d+ \\d+:\\d+ AM/
    - separator
    - paragraph: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
    - img "profile picture"
    - paragraph: Rebecca Harmony
    - paragraph: /\\d+-\\d+-\\d+ \\d+:\\d+ AM/
    - separator
    - paragraph: Throwback Thursdays!!
    - img
    - img "profile picture"
    - paragraph: Russel Hamilton
    - paragraph: /\\d+-\\d+-\\d+ \\d+:\\d+ AM/
    - separator
    - paragraph: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
    - paragraph: Employees on Leave Today
    - text: 
    - separator
    - img "No Content"
    - paragraph: No Employees are on Leave Today
    - text: 
    - paragraph: Employee Distribution by Sub Unit
    - separator
    - list:
      - listitem: Human Resources
      - listitem: Client Services
      - listitem: Unassigned
    - text: 
    - paragraph: Employee Distribution by Location
    - separator
    - list:
      - listitem: Texas R&D
      - listitem: New York Sales Office
      - listitem: Unassigned
    `);
});