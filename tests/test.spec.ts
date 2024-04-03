

import { test, expect } from "../pages/fixtures/pom-fixtures";



test.describe('User login', async() => {

    
    test('Login and Logout', async({landingPageFixture,loginPageFixture, homePageFixture}) => {
      
      // Landing page
      await landingPageFixture.isInLandingPage()
      await landingPageFixture.isInLoginPage()

      // Login Page
      await loginPageFixture.login("playwright@yopmail.com", "Qwerty!23456");
      await loginPageFixture.isLoggedIn()

      // Home page
      await homePageFixture.logout()
      await homePageFixture.isLoggedOut()


      
    });

      
});


test.describe('Product Listing', async() => {
  test('Add To Cart', async({landingPageFixture, loginPageFixture, homePageFixture, listingPageFixture, listingDetailPageFixture, cartPageFixture, checkoutPageFixture}) => {
    
    // Landing page
    await landingPageFixture.isInLandingPage()
    await landingPageFixture.isInLoginPage()

    // Login Page
    await loginPageFixture.login("playwright@yopmail.com", "Qwerty!23456");
    await loginPageFixture.isLoggedIn()
   
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
    await cartPageFixture.checkCartItems()
    
    await cartPageFixture.proceedToCheckout()


  //   checkout
    await checkoutPageFixture.addNewAddress()

  });
  

});


