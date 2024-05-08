import { test, expect } from "./pages/fixtures/pom-fixtures";

// const fs = require('fs')


const userdataJSON = JSON.parse(JSON.stringify(require("./testdata/user.json")))


test.describe('Global Setup', async() => {
    test.skip('Successful valid login', async({landingPageFixture,loginPageFixture,homePageFixture, page}) => {

        // Landing page
        await landingPageFixture.isInLandingPage()
        await landingPageFixture.toLoginPage()
        await landingPageFixture.isInLoginPage()
  
        // Login Page
        await loginPageFixture.login(userdataJSON.users[0].email, userdataJSON.users[0].password);
        await loginPageFixture.isLoggedIn()
  
        await page.context().storageState({path : "./LoginAuth.json"})
  
     
      })


})

    
