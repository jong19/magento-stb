import { expect, type Locator, type  Page } from "@playwright/test";
import exp from "constants";

export class HomePage{

    readonly page : Page;

    readonly dropdown : Locator;
    readonly signoutLink : Locator;

    readonly menuMen : Locator;
    readonly menuTops : Locator;
    readonly menuJackets : Locator;
    
    
    constructor(page : Page){

        this.page = page;

        // //this.menuMen = page.getByRole("menuitem", {name : ' Men'});
        // this.menuTops = page.getByRole("menuitem", {name : ' Tops'});
        // this.menuJackets = page.getByRole("menuitem", {name : 'Jackets'});

        this.menuMen = page.locator('#ui-id-5')
        this.menuTops = page.locator('#ui-id-17')
        this.menuJackets = page.locator('#ui-id-19')


        this.dropdown = page.getByRole('banner').locator('button').filter({ hasText: 'Change' });
        this.signoutLink = page.getByRole('link', { name: 'Sign Out' });
     
    }

    async toProductListingPage(){

        await expect(this.menuMen).toContainText('Men');
        await this.menuMen.hover();

        await expect(this.menuTops).toContainText('Tops');
        await (this.menuTops).hover();

        await expect(this.menuJackets).toContainText('Jackets')
        await (this.menuJackets).hover();

        await (this.menuJackets).click();

        // await this.page.waitForLoadState();

        await expect(this.page).toHaveURL('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html');









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