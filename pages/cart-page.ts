import { expect, type Locator, type  Page } from "@playwright/test";
import exp from "constants";

export class CartPage{

    readonly page : Page;

 
    readonly product1 : Locator
    readonly product2 : Locator

    readonly cartListItem : Locator;

    readonly checkoutButton : Locator;

   
    
    
    constructor(page : Page){

        this.page = page;

        this.cartListItem = page.locator('#shopping-cart-table > tbody')
        this.checkoutButton = page.getByRole('button', {name : 'Proceed to Checkout'})

    }



    async checkCartItems(){
        await expect(this.cartListItem).toHaveCount(2);
    }

    async proceedToCheckout(){

        await expect(async()=> {
            await this.checkoutButton.click()
            await expect(this.page).toHaveTitle('Checkout')

        }).toPass()



        

       

    }
s   
    
    

}