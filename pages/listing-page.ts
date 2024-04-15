import { expect, type Locator, type  Page } from "@playwright/test";
import exp from "constants";

export class ListingPage{

    readonly page : Page;

    readonly men_jacket_item1 : Locator;
    readonly women_jacket_item2 : Locator;

    readonly randomMen = Math.floor(Math.random()*10);
    readonly randomWomen = Math.floor(Math.random()*10);

   

    constructor(page : Page){

        this.page = page;

        this.men_jacket_item1 = page.locator('div.products.wrapper.grid.products-grid > ol > li > div > div > strong > a').nth(this.randomMen)
        this.women_jacket_item2 = page.locator('div.products.wrapper.grid.products-grid > ol > li > div > div > strong > a').nth(this.randomWomen)

        
        
      
     
    }

    async selectProduct1() {

        const prod1 = await this.men_jacket_item1.textContent()

        await expect(this.men_jacket_item1).toBeVisible()
        await this.men_jacket_item1.hover()
        await this.men_jacket_item1.click()
        console.log(" MEN nth product:> " + this.randomMen + " | " + prod1)

        
    }

    async selectProduct2(){

        const prod2 = await this.women_jacket_item2.textContent()

        await expect(this.women_jacket_item2).toBeVisible()
        await this.women_jacket_item2.hover()
        await this.women_jacket_item2.click()
        console.log(" WOMEN nth product:> " + this.randomWomen + " | " + prod2)

       
    }







   




    
    
    

}