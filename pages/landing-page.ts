import { expect, type Locator, type  Page } from "@playwright/test";

export class LandingPage{

    readonly loginPage : Page;
    readonly signInLink : Locator;
    readonly emailField : Locator;
   

    constructor(loginPage : Page){
        this.loginPage = loginPage;
         
       this.signInLink = loginPage.getByRole('link', { name: 'Sign In' });

       //this.signInLink = loginPage.locator('xpath=/html/body/div[2]/header/div[1]/div/ul/li[2]/a');

      // this.signInLink = loginPage.locator('.panel header');


        this.emailField = loginPage.getByLabel('Email', { exact: true });
    

    }

    async inLandingPage(){
        await expect(this.signInLink).toBeVisible();
        await this.signInLink.click();
    }

    async toLogin(){
        await expect(this.emailField).toBeVisible();
    }






    
    
    

}