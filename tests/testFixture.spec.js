import { test } from "../fixtures/customFixtures"

test("Test customFixture", async ({ atlasLogin }) => {

    const headerFrame = atlasLogin.frameLocator("//frame[@name='header']");
    const userName = await headerFrame.locator("(//div[@class='grey10b'])[2]").textContent();
    console.log('Logged in user:', userName);

})