import { test, expect } from "@playwright/test";
import { LoginPage } from '../pages/login-page';
import { LandingPage } from "../pages/landing-page";

test.describe('Playwright Tests', async() => {


    test.beforeEach('Before Tests', async({page}) => {
        const baseUrl = 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/'

        await page.goto(baseUrl);
        await page.waitForLoadState();

    }
    );

    
    // test('Landing Page', async({page}) => {
    //     const lp = new LandingPage(page)
    //     lp.inLandingPage();
    //     lp.toLogin();
    // });
    
    

    
    test('Login', async({page}) => {
        const lip = new LoginPage(page)
        await lip.doLogin("playwright@yopmail.com", "${Playwright1234}");
        await lip.toHome();
    });
    
    

}

);


