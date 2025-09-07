// customFixtures.js
const { test: base } = require('@playwright/test');

export const test = base.extend({
  atlasLogin: async ({ page }, use) => {
    await page.goto('https://atlasqa.cartus.com/password.aspx');
    await page.locator('#UserID').fill('atlas422');
    await page.locator('#Passwd').fill('Q3Qa010125');
    await page.locator('#SubmitBtn').click();
    await page.waitForTimeout(5000); // optional, replace with smart wait if needed

    await use(page); // makes the logged-in page available to tests
  },
});

//module.exports = { test };
