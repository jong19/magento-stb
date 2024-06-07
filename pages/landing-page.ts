import { expect, type Locator, type  Page } from "@playwright/test";

export class LandingPage{

    readonly landingPage : Page;
    readonly signInLink : Locator;
    readonly emailField : Locator;

    readonly createAccountLink : Locator
   

    constructor(landingPage : Page){
        this.landingPage = landingPage;
         
       this.signInLink = landingPage.getByRole('link', { name: 'Sign In' });
       this.createAccountLink = landingPage.getByRole('link', {name : 'Create an Account'})
    

    }

    async isInLandingPage(){
        await this.landingPage.waitForLoadState();
        await expect(this.signInLink).toBeVisible();
       
    }

    async toLoginPage(){
        await this.signInLink.click();
    }

    async isInLoginPage(){
        await expect(this.landingPage).toHaveTitle("Customer Login");
    }

    async toCreateAccountPage(){
        await this.createAccountLink.click()
    }

    async isInCreateAccountPage(){
        await this.landingPage.goto('https://magento.softwaretestingboard.com/customer/account/create/')
        await expect(this.landingPage).toHaveTitle('Create New Customer Account')

    }








    
    
    

}