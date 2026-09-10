import {BasePage} from "../basePage";

export   class  LoginPage extends BasePage
{
    // start to write locators 
    private readonly usernameField= this.page.locator('[id="user-name"]');
    private readonly PasswordField= this.page.locator('[id="password"]');
    private readonly LoginBtn=this.page.locator('[id="login-button"]');

    async enterUsername(username:string)
    {
        await this.enterTextToElement(this.usernameField, username);
    }

     async enterPassword(password:string)
    {        
        await this.enterTextToElement(this.PasswordField,password);
    }

    async ClickOnLoginButton()
    {
        await this.clickOnElement(this.LoginBtn);
    }

    
}