import { LoginPage } from "../login-page"
import { LandingPage } from "../landing-page"
import { HomePage } from "../home-page"
import { defineConfig } from "@playwright/test"

import { test as base } from "@playwright/test"
import { ListingPage } from "../listing-page"
import { ListingDetailPage } from "../listing-detail-page"
import { CartPage } from "../cart-page"

type TestFixtures = {
   landingPageFixture : LandingPage
   loginPageFixture : LoginPage;
   homePageFixture : HomePage;
   listingPageFixture : ListingPage
   listingDetailPageFixture : ListingDetailPage
   cartPageFixture : CartPage
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
    },

    listingPageFixture : async ({page}, use) => {
        const lisp = new ListingPage(page)
        await use(lisp);
    },

    listingDetailPageFixture : async ({page}, use) => {
        const lidp = new ListingDetailPage(page)
        await use(lidp);
    },

    cartPageFixture : async ({page}, use) => {
        const cp = new CartPage(page)
        await use(cp);
    }




})

export const expect = base.expect
