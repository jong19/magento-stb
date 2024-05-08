import { test, expect } from "./pages/fixtures/pom-fixtures";


test.skip('Cleanup', async({landingPageFixture, loginPageFixture,homePageFixture, context}) => {
   
    await homePageFixture.logout()
    await homePageFixture.isLoggedOut()

    await context.clearCookies()
    await context.close()
    
})

    
