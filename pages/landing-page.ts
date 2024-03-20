import { expect, type Locator, type  Page } from "@playwright/test";

export class LandingPage{

    readonly landingPage : Page;
    readonly signInLink : Locator;
    readonly emailField : Locator;
   

    constructor(landingPage : Page){
        this.landingPage = landingPage;
         
       this.signInLink = landingPage.getByRole('link', { name: 'Sign In' });
    

    }

    async isInLandingPage(){
        await this.landingPage.waitForLoadState();
        await expect(this.signInLink).toBeVisible();
        await this.signInLink.click();
       
    }

    async isInLoginPage(){
        await expect(this.landingPage).toHaveTitle("Customer Login");
    }








    
    
    

}