export class LoginPage{

    constructor(page){

        this.page=page;
        this.userID_Inputbox="#UserID"
        this.password_Inputbox="#Passwd"
        this.submit_Button="#SubmitBtn"
    }

    async gotoAtlasPage(){
        await this.page.goto('https://atlasqa.cartus.com/password.aspx')
        await this.page.waitForTimeout(5000)
    }

    async login(username, password){

        await this.page.locator(this.userID_Inputbox).fill(username)
        await this.page.locator(this.password_Inputbox).fill(password)
        await this.page.locator(this.submit_Button).click()
        await this.page.waitForTimeout(5000)
    }
}