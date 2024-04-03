import { expect, type Locator, type  Page } from "@playwright/test";
import exp from "constants";

export class ListingDetailPage{

    readonly page : Page;

    readonly sizeBtn : Locator;
    readonly colorPicker : Locator;
    readonly addToCartBtn : Locator

    readonly sizeBtn2 : Locator;
    readonly colorPicker2 : Locator;
    readonly addToCartBtn2 : Locator

    readonly cartIcon : Locator
    readonly cartListing : Locator

    readonly addCartSuccessMsg : Locator

    readonly randomSize = Math.floor(Math.random()*4);
    readonly randomColor = Math.floor(Math.random()*2);


  

    
    
    constructor(page : Page){

        this.page = page;

    
        this.sizeBtn = page.locator('div > div.swatch-attribute.size > div > div').nth(this.randomSize)
        this.colorPicker = page.locator('div.swatch-attribute.color > div > div').nth(this.randomColor)
        
        this.sizeBtn2 = page.locator('div > div.swatch-attribute.size > div > div').nth(this.randomSize)
        this.colorPicker2 = page.locator('div.swatch-attribute.color > div > div').nth(this.randomColor)

        this.addToCartBtn = page.locator('#product-addtocart-button')

        this.addCartSuccessMsg = page.getByRole('link', { name: 'shopping cart' })

      

      
    }

    async addToCartProduct1(){

       await this.sizeBtn.click()
       await this.colorPicker.click()
       await this.addToCartBtn.click()

       this.page.waitForLoadState()

     
       
       await expect(this.addCartSuccessMsg).toBeVisible()
       await this.addCartSuccessMsg.click()

       await expect(this.page).toHaveTitle('Shopping Cart')
  
    }

    async addToCartProduct2(){

        await this.sizeBtn.click()
        await this.colorPicker.click()
        await this.addToCartBtn.click()
 
        this.page.waitForLoadState()
 
      
        
        await expect(this.addCartSuccessMsg).toBeVisible()
        await this.addCartSuccessMsg.click()
 
        await expect(this.page).toHaveTitle('Shopping Cart')
   
     }
 

   






   

    // await page.getByRole('link', { name: ' My Cart 1 1\nitems' }).click();
    // await page.locator('#minicart-content-wrapper div').filter({ hasText: 'Proteus Fitness Jackshirt See' }).nth(1).click();
// await page.getByRole('link', { name: 'shopping cart' }).click();

    
    
    

}