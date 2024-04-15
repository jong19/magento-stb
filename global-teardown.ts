import { test, expect } from "./pages/fixtures/pom-fixtures";


test('Cleanup', async({landingPageFixture, loginPageFixture,homePageFixture, context}) => {
   
    await homePageFixture.logout()
    await homePageFixture.isLoggedOut()

    await context.clearCookies()
    await context.close()
    
})

    
