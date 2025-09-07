export class clientProfile{

    

    constructor(page){

        this.page=page;
        this.mainframe_Frame = page.frameLocator("//frame[@id='mainframe']")
        this.main_Frame = this.mainframe_Frame.frameLocator("//iframe[@id='main']")
        this.atlasClient="//h2[@id='HeaderControl_divClientName']"
    }

    async printCustomerName(){
        await this.page.waitForTimeout(2000)
        const atlasClient = await this.main_Frame.locator(this.atlasClient).textContent()
        console.log('Client Name :',atlasClient)
        await this.page.waitForTimeout(5000)
    }
}