const { test, expect } = require('@playwright/test')
import fs from "fs";;
import { parse } from "csv-parse/sync";

const records = parse(fs.readFileSync("testData/atlasTestData.csv"), {
    columns: true,
    skip_empty_lines: true,
})

records.forEach((record) => {

    test('Atlas Login with ' + record.AtalsID, async ({ page }) => {

        console.log(records)

        await page.goto('https://atlasqa.cartus.com/password.aspx');

        await expect(page).toHaveURL("https://atlasqa.cartus.com/password.aspx")
        await expect(page).toHaveTitle("ATLAS LOGIN")

        await page.locator('#UserID').fill(record.AtalsID);
        await page.locator('#Passwd').fill(record.AtlasPassword);
        await page.locator('#SubmitBtn').click();
        await page.waitForTimeout(5000);

        await expect(page).toHaveURL("https://atlasqa.cartus.com/default.aspx")
        await expect(page).toHaveTitle("ATLAS")

        // Print the name of the Logined User
        const header_Frame = await page.frameLocator("//frame[@name='header']")
        console.log(await header_Frame.locator("(//div[@class='grey10b'])[2]").textContent())

    })
})