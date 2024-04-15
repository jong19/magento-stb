

import { test, expect } from "../pages/fixtures/pom-fixtures";

const userdataJSON = JSON.parse(JSON.stringify(require("../testdata/userdata.json")))


test.describe('Product and Cart Listing', async() => {
  test('Add To Cart', async({landingPageFixture, loginPageFixture, homePageFixture, listingPageFixture, listingDetailPageFixture, cartPageFixture, checkoutPageFixture}) => {

   
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
    
   // await cartPageFixture.checkCartItemsCount() - disable for now
    
    });

    test.skip('Delete Cart Items', async({landingPageFixture,loginPageFixture, homePageFixture,cartPageFixture}) => {
      await cartPageFixture.clearCartItems();

   
    })



  
});



test.describe('Checkout', async() => {
  test('Place Order', async({landingPageFixture, loginPageFixture, homePageFixture, listingPageFixture, listingDetailPageFixture, cartPageFixture, checkoutPageFixture}) => {
    

    await checkoutPageFixture.proceedToCheckout()

    await checkoutPageFixture.addShippingAddress(
      userdataJSON.street,
      userdataJSON.city,
      userdataJSON.state,
      userdataJSON.zip,
      userdataJSON.country,
      userdataJSON.phone)

    await checkoutPageFixture.verifyShippingAddress()
    await checkoutPageFixture.finishCheckout()

    
      
  });


});



