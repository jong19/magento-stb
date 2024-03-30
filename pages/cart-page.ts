import { expect, type Locator, type  Page } from "@playwright/test";
import exp from "constants";

export class CartPage{

    readonly page : Page;

    readonly cartListItem : Locator;
    readonly product1 : Locator
    readonly product2 : Locator

   
  

    
    
    constructor(page : Page){

        this.page = page;

        this.product1 = page.getByRole('cell', { name: 'Proteus Fitness Jackshirt' })
        this.product2 = page.locator('#shopping-cart-table').getByText('Olivia 1/4 Zip Light Jacket')
     
    }

    async verifyAddedProduct1(){

        await expect(this.product1).toBeVisible()

        
    }

    async verifyAddedProduct2(){

        await expect(this.product2).toBeVisible()

        
    }

   
    
    

}