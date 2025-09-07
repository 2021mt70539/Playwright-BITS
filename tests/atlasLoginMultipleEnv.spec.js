const { test,expect } = require('@playwright/test')


test('Atlas Login', async ({ page }) => {

    //$env:TEST_ENV="FT";npx playwright test tests/atlasLoginMultipleEnv.spec.js

    console.log(process.env.AtlasURL)
    console.log(process.env.AtlasUserID)
    console.log(process.env.AtlasPassword)

    const url = process.env.AtlasURL

     await page.goto(process.env.AtlasURL);
     await page.waitForTimeout(5000);
    await page.locator('#UserID').fill(process.env.AtlasUserID);
    await page.locator('#Passwd').fill(process.env.AtlasPassword);
    await page.screenshot();
    await page.locator('#SubmitBtn').click();
    await page.waitForTimeout(5000);

})