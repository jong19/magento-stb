import { expect, type Locator, type  Page } from "@playwright/test";
import exp from "constants";

export class HomePage{

    readonly page : Page;

    readonly dropdown : Locator;
    readonly signoutLink : Locator;

    readonly emailField : Locator;
    
    
    constructor(page : Page){

        this.page = page;

        this.dropdown = page.getByRole('banner').locator('button').filter({ hasText: 'Change' });
        this.signoutLink = page.getByRole('link', { name: 'Sign Out' });
     
    }

    async logout(){
        await this.page.waitForLoadState();

        await expect(this.dropdown).toBeVisible();
        await this.dropdown.click();

        await expect(this.signoutLink).toBeVisible();
        //await expect(this.page.getByRole('banner')).toContainText('Sign Out');
        await this.signoutLink.click();

    }

    async isLoggedOut(){
        await expect(this.page).toHaveTitle("Home Page");

    }





    
    
    

}