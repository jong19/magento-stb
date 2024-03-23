import { test, expect } from "@playwright/test";
import { LoginPage } from '../pages/login-page';
import { LandingPage } from "../pages/landing-page";
import { HomePage } from "../pages/home-page";
import playwrightConfig from "../playwright.config";
import { PlaywrightTestOptions } from "@playwright/test";


test.beforeEach('Setup', async({page}) => {
     
    await page.goto('https://magento.softwaretestingboard.com');

}
);




test.describe('User login', async() => {

    
    test('Login and Logout', async({page}) => {
        const lp = new LandingPage(page)
        const lip = new LoginPage(page)
        const hp = new HomePage(page)

        // Landing page
        await lp.isInLandingPage();
        await lp.isInLoginPage();

        // Login Page
        await lip.login("playwright@yopmail.com", "${Playwright1234}");
        await lip.isLoggedIn();

        await hp.logout();
        await hp.isLoggedOut();


      });

      

      test.skip('Login with not existing email', async({page}) => {
        const lp = new LandingPage(page)
        const lip = new LoginPage(page)

        // Landing page
        await lp.isInLandingPage();
        await lp.isInLoginPage();

        // Login Page
        await lip.login("playwright@yopmail.com", "${Playwright1234}");
        await lip.isLoggedIn();

        // Home Page

 

      });

      test.skip('Login with incorrect password', async({page}) => {
        const lp = new LandingPage(page)
        const lip = new LoginPage(page)

        // Landing page
        await lp.isInLandingPage();
        await lp.isInLoginPage();

        // Login Page
        await lip.login("playwright@yopmail.com", "${Playwright1234}");
        await lip.isLoggedIn();

        // Home Page

 

      });
});


test.describe('Product Listing', async() => {
  test('Go to Product Listing', async({page}) => {
    const hp = new HomePage(page);
 
    await hp.toProductListing()

  });
  

});


