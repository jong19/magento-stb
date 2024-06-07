

import { test, expect } from "../../pages/fixtures/pom-fixtures";

const userdataJSON = JSON.parse(JSON.stringify(require("../../testdata/sample.json")))

test.describe.configure({
  mode : "parallel"
})



test.describe('User Account', async() => {
  test('Create Account', async({landingPageFixture, createAccountPageFixture, homePageFixture, page}) => {
    // await landingPageFixture.isInLandingPage()
    // await landingPageFixture.toCreateAccountPage()
    await landingPageFixture.isInCreateAccountPage()

    await createAccountPageFixture.createAccount()
    await createAccountPageFixture.isAccountSuccessfullyCreated()

    await page.context().storageState({path : "./LoginAuth.json"})


    
    


  })

})



