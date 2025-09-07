export class myDashboard{

    constructor(page){

        this.page=page;
        this.header_Frame = page.frameLocator("//frame[@name='header']")
        this.atlasUser="(//div[@class='grey10b'])[2]"
        this.clientSearch_Inputbox="//input[@name='ClientSearch']"
        this.submit_Button="//img[@id='Submit2']"
    }

    async clientSearch(clientNumber){
        const atlasUsername =await this.header_Frame.locator(this.atlasUser).textContent()
        console.log('Atlas UserName :',atlasUsername)
        await this.header_Frame.locator(this.clientSearch_Inputbox).fill(clientNumber)
        await this.header_Frame.locator(this.submit_Button).click()
        await this.page.waitForTimeout(5000)

    }

}