import { expect, type Locator, type  Page } from "@playwright/test";
import { log } from "console";
import exp from "constants";
import { read } from "fs";

export class CheckoutPage{

    readonly page : Page;

    readonly checkoutButton : Locator;


    readonly newAddressButton : Locator
    readonly newAddressDialog : Locator

    readonly streetAddressInput : Locator
    readonly cityInput : Locator
    readonly stateDropdown : Locator
    readonly zipcodeInput : Locator
    readonly countryDropdown : Locator
    readonly phoneInput : Locator
    readonly shippingMethod : Locator

    readonly nextButton : Locator
    
    readonly placeOrderButton : Locator

    readonly billingAddressDetails : Locator


    readonly thanksPurchaseMessage : Locator

    readonly randomState = Math.floor(Math.random()*66);
    readonly randomCountry = Math.floor(Math.random()*249);
    readonly randomShippingMethod = Math.floor(Math.random()*1);



   
    constructor(page : Page){

        this.page = page;

        this.checkoutButton = page.getByRole('button', {name : 'Proceed to Checkout'})

        this.newAddressButton = page.getByRole('button', { name: '+New Address' })
        this.newAddressDialog = page.locator('#opc-new-shipping-address')
        
        this.streetAddressInput = page.getByLabel('Street Address: Line 1')
        this.cityInput = page.getByLabel('City')
        this.stateDropdown = page.locator('select[name="region_id"]')
        this.zipcodeInput = page.getByLabel('Zip/Postal Code')
        this.countryDropdown = page.locator('select[name="country_id"]')
        this.phoneInput = page.getByLabel('Phone Number')

        this.shippingMethod = page.locator('#checkout-shipping-method-load > table > tbody > tr > td > input').nth(this.randomShippingMethod)
        // page.getByLabel('Table Rate').check();
        // page.getByLabel('Fixed').check();

        this.nextButton = page.getByRole('button', { name: 'Next' })

        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })

        this.billingAddressDetails = page.locator('.checkout-billing-address')


        this.thanksPurchaseMessage = page.getByText('Thank you for your purchase!')

       
    }

    async proceedToCheckout(){

        await this.page.goto('https://magento.softwaretestingboard.com/checkout/cart/')
        await this.page.reload()

        await expect(async()=> {
            await this.checkoutButton.click()
            await expect(this.page).toHaveTitle('Checkout')

        }).toPass()
    }
 

    async addShippingAddress(street : string, 
            city :  string, 
            state : string,
            zip : string, 
            country : string, 
            phone : string){


        // if(expect(await this.newAddressButton.isVisible())){
        //             await this.newAddressButton.click()
        //             await expect(this.newAddressDialog).toBeVisible()
        // }
       
    
        await this.streetAddressInput.fill(street)
        await this.cityInput.fill(city)


        const selectedState = await this.stateDropdown.textContent()
        await expect(selectedState?.includes(state), "State is not available in dropdown options").toBeTruthy()
        await this.stateDropdown.selectOption(state)
        
        await this.zipcodeInput.fill(zip)

        const selectedCountry = await this.countryDropdown.textContent()
        await expect(selectedCountry?.includes(country), "Country is not available in dropdown options").toBeTruthy()
        await this.countryDropdown.selectOption(country)
        
        await this.phoneInput.fill(phone)

        await this.shippingMethod.check()
        console.log("shipping method is " + this.randomShippingMethod)

        await this.nextButton.click()

    }

    async verifyShippingAddress(){
        await expect(this.placeOrderButton).toBeVisible()
        await expect(this.billingAddressDetails).toBeVisible()
        
    }

    async finishCheckout(){
        await this.placeOrderButton.click()
        await expect(this.thanksPurchaseMessage, 'Checkout to be successful').toBeVisible()

    }

  


      // for(const option of countryOptions){
        //     console.log("Number of countries " + await countryOptions.length)
        //     console.log(await option.textContent())
        // }


              // const countryOptions = await this.page.$$('select[name="country_id"] option')
        // console.log(countryOptions.length)

         //     const stateOption =  await this.stateDropdown.selectOption({index : this.randomState})
    //    // console.log("STATE SELECTED " + stateOption)


        // const stateOptions = await this.page.$$('select[name="region_id"] option')
        // console.log(stateOptions.length)


        // for(const option of stateOptions){
        //     console.log(await stateOptions.length)
        //     console.log(await option.textContent())
           
        // }


   
    
    

}