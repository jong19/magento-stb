import { expect, type Locator, type  Page } from "@playwright/test";
import exp from "constants";

export class CheckoutPage{

    readonly page : Page;

    readonly newAddressButton : Locator
    readonly newAddressDialog : Locator

   

   
    constructor(page : Page){

        this.page = page;

        this.newAddressButton = page.getByRole('button', {name : 'New Address'})
        this.newAddressDialog = page.locator('#opc-new-shipping-address')

       
    }

    async addNewAddress(){
        await this.newAddressButton.click()
        await expect(this.newAddressDialog).toBeVisible()

    }

  

   
    
    

}