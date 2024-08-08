

import { test, expect } from "../../pages/fixtures/pom-fixtures";

const userdataJSON = JSON.parse(JSON.stringify(require("../../testdata/sample.json")))


test.describe.configure({
  mode : "serial"
})



test.describe('Delete Items to Cart', async() => {
  test('Delete Items to Cart', async({landingPageFixture, loginPageFixture, homePageFixture, listingPageFixture, listingDetailPageFixture, cartPageFixture}) => {

   
    // Add 1st product to cart cart
    await homePageFixture.toProductListingPage1()
    await homePageFixture.isInProductListing1()
    await listingPageFixture.selectProduct1()
    await listingDetailPageFixture.addToCartProduct1()

  //  // Add 2nd product to cart
    await homePageFixture.toProductListingPage2()
    await homePageFixture.isInProductListing2()
    await listingPageFixture.selectProduct2()
    await listingDetailPageFixture.addToCartProduct2()

    await cartPageFixture.clearCartItems();

    
   // await cartPageFixture.checkCartItemsCount() - disable for now
    
    });
    

    // test.skip('Delete Cart Items', async({landingPageFixture,loginPageFixture, homePageFixture,cartPageFixture}) => {
    //   await cartPageFixture.clearCartItems();

   
    // })

});
