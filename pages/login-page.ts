import { expect, type Locator, type  Page } from "@playwright/test";
import { Keyboard } from "@playwright/test";

export class LoginPage{

    readonly loginPage : Page;
    readonly emailField : Locator;
    readonly passwordField : Locator;
    readonly signinButton : Locator;
    readonly dropdown : Locator;



    constructor(loginPage : Page){
        this.loginPage = loginPage;

        this.emailField = loginPage.getByLabel('Email', { exact: true });
        this.passwordField = loginPage.getByLabel('Password');
        this.signinButton = loginPage.getByRole('button', { name: 'Sign In' });

        this.dropdown = loginPage.locator('button').filter({ hasText: 'Change' });


        
    }

    async login(email : string, password : string){

        await this.emailField.fill(email);

        await this.passwordField.fill(password);

        await this.signinButton.click();
        
  
    }

    async isLoggedIn(){
        await expect(this.loginPage).toHaveTitle("Home Page");
       
    }




    
    
    

}