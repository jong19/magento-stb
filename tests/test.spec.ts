

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
  test('Go to Product Listing', async({landingPageFixture, loginPageFixture, homePageFixture}) => {
    
    // Landing page
    await landingPageFixture.isInLandingPage()
    await landingPageFixture.isInLoginPage()

    // Login Page
    await loginPageFixture.login("playwright@yopmail.com", "${Playwright1234}");
    await loginPageFixture.isLoggedIn()
   
    // Home page
    await homePageFixture.toProductListingPage()
    await homePageFixture.isInProductListing()


  });
  

});


