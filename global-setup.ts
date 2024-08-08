import { test, expect } from "./pages/fixtures/pom-fixtures";


const userdataJSON = JSON.parse(JSON.stringify(require("../magento-stb/testdata/user.json")))


test.describe('Global Setup', async() => {
    test('Successful valid login', async({landingPageFixture,loginPageFixture,homePageFixture, page}) => {

        // Landing page
        await landingPageFixture.isInLandingPage()
        await landingPageFixture.toLoginPage()
        await landingPageFixture.isInLoginPage()
  
        // Login Page
        await loginPageFixture.login(userdataJSON.users[5].email, userdataJSON.users[5].password);
        await loginPageFixture.isLoggedIn()
  
        await page.context().storageState({path : "./LoginAuth.json"})
  
     
      })


})

    
