import { expect, type Locator, type  Page } from "@playwright/test";
import { ListingPage } from "./listing-page";
import exp from "constants";

export class CartPage{

    readonly page : Page;

 
    readonly product1 : Locator
    readonly product2 : Locator

    readonly cartListItems : Locator;

    readonly cartRowItem : Locator

    readonly deleteItemButton : Locator;


  
    constructor(page : Page){

        this.page = page;

        this.cartListItems = page.locator('#shopping-cart-table > tbody')
        this.cartRowItem = page.locator('#shopping-cart-table > tbody').filter({has : this.page.locator('.item-actions')})


        this.deleteItemButton = page.locator('#shopping-cart-table > tbody > tr.item-actions > td > div > a.action.action-delete')

    }


    async checkCartItemsCount(){

        await expect(this.cartListItems).toHaveCount(2);
        
    }

    async clearCartItems(){
        await this.page.goto('https://magento.softwaretestingboard.com/checkout/cart/')
        const itemRows = await this.cartRowItem.all()

        console.log("Cart items to delete " + itemRows.length)
        
        
        for(let i=0; i<itemRows.length; i++){
            await this.deleteItemButton.first().click()
        }

        await expect(this.cartListItems).toHaveCount(0)

        


    }


    
    

}

