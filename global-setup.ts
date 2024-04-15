import { test, expect } from "./pages/fixtures/pom-fixtures";

const userdataJSON = JSON.parse(JSON.stringify(require("./testdata/userdata.json")))


test.describe('Global Setup', async() => {
    test('Successful valid login', async({landingPageFixture,loginPageFixture,homePageFixture, page}) => {

        // Landing page
        await landingPageFixture.isInLandingPage()
        await landingPageFixture.isInLoginPage()
  
        // Login Page
        await loginPageFixture.login(userdataJSON.email, userdataJSON.password);
        await loginPageFixture.isLoggedIn()
  
        await page.context().storageState({path : "./LoginAuth.json"})
  
     
      })


})

    
  








// Accounts with already existing shipping address 
        // qatester1@yopmail.com
        // qatester2@yopmail.com
        // qatester3@yopmail.com
        // qatester4@yopmail.com
         // qatester5@yopmail.com
          // qatester6@yopmail.com
         // qatester7@yopmail.com
         // qatester10@yopmail.com
         // qatester11@yopmail.com
