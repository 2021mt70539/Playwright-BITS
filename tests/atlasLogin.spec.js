const { test,expect } = require('@playwright/test')

const loggerUtil = require('C:\\BITS - Playwright\\utils\\loggerUtil.js')
//Without POM - Page Object Model

test('Atlas Login Logger Test', async ({ page }) => {

    loggerUtil.INFO('This is INFO Message')
    loggerUtil.ERROR('This is ERROR Message')
    loggerUtil.LOG('This is LOG Message')
})

test('Atlas Login', async ({ page }) => {

    await page.goto('https://atlasqa.cartus.com/password.aspx');
    loggerUtil.LOG('User has navigated to the URL')
    await expect(page).toHaveURL("https://atlasqa.cartus.com/password.aspx")
    await expect(page).toHaveTitle("ATLAS LOGIN")

    await page.locator('#UserID').fill('atlas422');
    loggerUtil.LOG('User has entered Username')
    await page.locator('#Passwd').fill('Q3Qa010125');
    loggerUtil.LOG('User has entered Passowrd')
    await page.locator('#SubmitBtn').click();
    loggerUtil.LOG('User has clicked on Submit Button')
    
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://atlasqa.cartus.com/default.aspx")
    await expect(page).toHaveTitle("ATLAS")

})

test('Search Customer Number', async ({ page }) => {

    await page.goto('https://atlasqa.cartus.com/password.aspx')
    await page.locator('#UserID').fill('atlas422')
    await page.locator('#Passwd').fill('Q3Qa010125')
    await page.locator('#SubmitBtn').click()
    await page.waitForTimeout(5000)

    // Print the name of the Logined User
    const header_Frame = await page.frameLocator("//frame[@name='header']")
    console.log(await header_Frame.locator("(//div[@class='grey10b'])[2]").textContent())

    //Search the Customer using Customer Number
    await header_Frame.locator("//input[@name='ClientSearch']").fill('4708')
    await header_Frame.locator("//img[@id='Submit2']").click()
    await page.waitForTimeout(5000)

    //Print the name of the Customer Searched 
    const mainframe_Frame = await page.frameLocator("//frame[@id='mainframe']")
    const main_Frame = await mainframe_Frame.frameLocator("//iframe[@id='main']")
    console.log(await main_Frame.locator("//h2[@id='HeaderControl_divClientName']").textContent())

})
