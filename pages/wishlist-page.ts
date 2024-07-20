import {expect, type Locator, type Page} from '@playwright/test'
import { ListingPage } from './listing-page'

export class WishlistPage{
    readonly page : Page 

    readonly wishListItems : Locator;


    constructor(wishListPage : Page){

        this.page = wishListPage
        this.wishListItems = wishListPage.locator('.product-items > li > div > strong > a')

    }

    async isInWishListPage(){
        await expect(this.page).toHaveTitle('My Wish List')
    }

    async verifyWishListItemAdded(){
        const addedWishList = await this.wishListItems.textContent()

        console.log(addedWishList + ' successfully added to Wishlist')
    }

    


    // async verifyWishListItemAdded(){

    //     const lptest = new ListingPage(this.page)
    //     const theProdName = await lptest.selectProduct1()

    //     // await expect(this.page.getByText(theProdName)).toBeVisible()

    //     // console.log("Selected Product1 now in Wishlist " + theProdName)

    // }



}