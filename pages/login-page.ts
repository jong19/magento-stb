import { expect, type Locator, type  Page } from "@playwright/test";

export class LoginPage{

    readonly loginPage : Page;
    readonly emailField : Locator;
    readonly passwordField : Locator;
    readonly signinButton : Locator;
    readonly whatsNewLink : Locator;


    constructor(loginPage : Page){
        this.loginPage = loginPage;
        this.emailField = loginPage.getByLabel('Email', { exact: true });
        this.passwordField = loginPage.getByLabel('Password');
        this.signinButton = loginPage.getByRole('button', { name: 'Sign In' });
        this.whatsNewLink = loginPage.getByRole('menuitem', { name: 'What\'s New' });


    }

    async doLogin(email : string, password : string){

        await this.emailField.click
        await this.emailField.fill(email);

        await this.passwordField.fill(password);

        await this.signinButton.click();
        
  
    }

    async toHome(){
        await expect(this.whatsNewLink).toBeVisible();
        await this.loginPage.waitForTimeout(3000);
    }






    
    
    

}