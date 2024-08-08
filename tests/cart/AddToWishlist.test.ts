

import { test, expect } from "../../pages/fixtures/pom-fixtures";

const userdataJSON = JSON.parse(JSON.stringify(require("../../testdata/sample.json")))

test.describe.configure({
  mode : "serial"
})



test.describe('Wishlist', async() => {
  test('Add to Wishlist', async({landingPageFixture, loginPageFixture, homePageFixture, listingDetailPageFixture, listingPageFixture, wishListPageFixture}) => {

    await homePageFixture.toProductListingPage1()
    await homePageFixture.isInProductListing1()

    await listingPageFixture.selectProduct1()
    
    await listingDetailPageFixture.addItemToWishList()


    await homePageFixture.toWishListPage()

    await wishListPageFixture.isInWishListPage()
    await wishListPageFixture.verifyWishListItemAdded()


  })


})



