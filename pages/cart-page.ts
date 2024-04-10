import { expect, type Locator, type  Page } from "@playwright/test";
import { ListingPage } from "./listing-page";
import exp from "constants";

export class CartPage{

    readonly page : Page;

 
    readonly product1 : Locator
    readonly product2 : Locator

    readonly cartListItem : Locator;


  
    constructor(page : Page){

        this.page = page;

        this.cartListItem = page.locator('#shopping-cart-table > tbody')


    }



    async checkCartItems(){

        await expect(this.cartListItem).toHaveCount(2);
        
    }


    
    

}