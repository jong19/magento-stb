import { test, expect } from "./pages/fixtures/pom-fixtures";

const userdataJSON = JSON.parse(JSON.stringify(require("./testdata/userdata.json")))


test.describe('User login', async() => {
    test('Successful valid login', async({landingPageFixture,loginPageFixture, homePageFixture, page}) => {

        // Accounts with already existing shipping address 
        // qatester1@yopmail.com
        // qatester2@yopmail.com
        // qatester3@yopmail.com

      
        // Landing page
        await landingPageFixture.isInLandingPage()
        await landingPageFixture.isInLoginPage()
  
        // Login Page
        await loginPageFixture.login(userdataJSON.email, userdataJSON.password);
        await loginPageFixture.isLoggedIn()
  
        await page.context().storageState({path : "./LoginAuth.json"})
  
     
      })


})

    
  


