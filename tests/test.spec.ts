

import { test, expect } from "../pages/fixtures/pom-fixtures";



test.describe('User login', async() => {

    
    test('Login and Logout', async({landingPageFixture,loginPageFixture, homePageFixture}) => {
      
      // Landing page
      await landingPageFixture.isInLandingPage()
      await landingPageFixture.isInLoginPage()

      // Login Page
      await loginPageFixture.login("playwright@yopmail.com", "${Playwright1234}");
      await loginPageFixture.isLoggedIn()

      // Home page
      await homePageFixture.logout()
      await homePageFixture.isLoggedOut()


      
    });

      
});


test.describe('Product Listing', async() => {
  test.only('Go to Product Listing', async({landingPageFixture, loginPageFixture, homePageFixture, listingPageFixture, listingDetailPageFixture, cartPageFixture}) => {
    
    // Landing page
    await landingPageFixture.isInLandingPage()
    await landingPageFixture.isInLoginPage()

    // Login Page
    await loginPageFixture.login("playwright@yopmail.com", "${Playwright1234}");
    await loginPageFixture.isLoggedIn()
   
    // Home page
    await homePageFixture.toProductListingPage1()
    await homePageFixture.isInProductListing1()

    // Product Listing
    await listingPageFixture.selectProduct1()

    // Add to Cart
    await listingDetailPageFixture.addToCartProduct1()
    await cartPageFixture.verifyAddedProduct()



    // await homePageFixture.toProductListingPage2()
    // await homePageFixture.isInProductListing2()
    // await listingPageFixture.selectProduct2()

  });
  

});


