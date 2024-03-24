import { LoginPage } from "../login-page"
import { LandingPage } from "../landing-page"
import { HomePage } from "../home-page"
import { defineConfig } from "@playwright/test"

import { test as base } from "@playwright/test"

type TestFixtures = {
    landingPageFixture : LandingPage
    loginPageFixture : LoginPage;
    homePageFixture : HomePage;
}


export const test = base.extend<TestFixtures>({

    landingPageFixture : async({page},use) => {
        const lp = new LandingPage(page)
        await page.goto('https://magento.softwaretestingboard.com/');
        await use(lp)
    },

    loginPageFixture : async ({page}, use) => {
        const lip = new LoginPage(page)
        await use(lip)

    },

    homePageFixture : async ({page}, use) => {
        const hp = new HomePage(page)
        await use(hp);



    }


})

export const expect = base.expect
