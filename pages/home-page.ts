import { expect, type Locator, type  Page } from "@playwright/test";
import exp from "constants";

export class HomePage{

    readonly page : Page;

    readonly dropdown : Locator;
    readonly signoutLink : Locator;
    readonly myWishListLink : Locator

    readonly menuMen : Locator;
    readonly menuMenTops : Locator;
    readonly menuMenJackets : Locator;

    readonly menuWomen : Locator;
    readonly menuWomenTops : Locator;
    readonly menuWomenJackets : Locator;
    
    
    constructor(page : Page){

        this.page = page;


        this.menuMen = page.locator('#ui-id-5')
        this.menuMenTops = page.locator('#ui-id-17')
        this.menuMenJackets = page.locator('#ui-id-19')

        this.menuWomen = page.locator('#ui-id-4')
        this.menuWomenTops = page.locator('#ui-id-9')
        this.menuWomenJackets = page.locator('#ui-id-11')


        this.dropdown = page.getByRole('banner').locator('button').filter({ hasText: 'Change' });
        this.signoutLink = page.getByRole('link', { name: 'Sign Out' });

        this.myWishListLink = page.getByRole('link', {name : 'My Wish List'})
     
    }
    
    async toProductListingPage1(){

        await expect(this.menuMen).toContainText('Men');
        await this.menuMen.hover();

        await expect(this.menuMenTops).toContainText('Tops');
        await (this.menuMenTops).hover();

        await expect(this.menuMenJackets).toContainText('Jackets')
        await (this.menuMenJackets).hover();

        await (this.menuMenJackets).click();

    }

    async isInProductListing1(){
        await expect(this.page).toHaveURL('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html');

    }

    async toProductListingPage2(){

        await expect(this.menuWomen).toContainText('Women');
        await this.menuWomen.hover();

        await expect(this.menuWomenTops).toContainText('Tops');
        await (this.menuWomenTops).hover();

        await expect(this.menuWomenJackets).toContainText('Jackets')
        await (this.menuWomenJackets).hover();

        await (this.menuWomenJackets).click();

    }

    async isInProductListing2(){
        await expect(this.page).toHaveURL('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');

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

    async toWishListPage(){
        await this.page.waitForLoadState();

        await expect(this.dropdown).toBeVisible();
        await this.dropdown.click();

        await expect(this.myWishListLink).toBeVisible()

        await this.myWishListLink.click()

    }

    

    





    
    
    

}