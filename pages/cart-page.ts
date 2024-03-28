import { expect, type Locator, type  Page } from "@playwright/test";
import exp from "constants";

export class CartPage{

    readonly page : Page;

    readonly cartListItem : Locator;
    readonly product1 : Locator
   
  

    
    
    constructor(page : Page){

        this.page = page;

        this.product1 = page.getByRole('cell', { name: 'Proteus Fitness Jackshirt' })
        // page.locator('#shopping-cart-table').getByText('Proteus Fitness Jackshirt')
     
    }

    async verifyAddedProduct(){

        await expect(this.product1).toBeVisible()

        
    }

   
    
    

}