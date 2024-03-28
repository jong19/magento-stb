import { expect, type Locator, type  Page } from "@playwright/test";
import exp from "constants";

export class ListingPage{

    readonly page : Page;

    readonly men_jacket_item1 : Locator;
    readonly women_jacket_item2 : Locator;
  

    
    
    constructor(page : Page){

        this.page = page;

        this.men_jacket_item1  = page.locator('#maincontent div').filter({ hasText: 'Proteus Fitness Jackshirt As' }).nth(3)
        this.women_jacket_item2  = page.locator('#maincontent div').filter({ hasText: 'Olivia 1/4 Zip Light Jacket' }).nth(3)

     
    }

    async selectProduct1(){

        await expect(this.men_jacket_item1).toBeVisible()
        await this.men_jacket_item1.hover()
        await this.men_jacket_item1.click()
        await expect(this.page).toHaveTitle('Proteus Fitness Jackshirt')
    }

    async selectProduct2(){
        
        await expect(this.women_jacket_item2).toBeVisible()
        await this.women_jacket_item2.hover()
        await this.women_jacket_item2.click()
        await expect(this.page).toHaveTitle('Olivia 1/4 Zip Light Jacket')
    }







   




    
    
    

}