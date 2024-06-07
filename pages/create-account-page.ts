import {test, Page, expect, Locator} from '@playwright/test'
import {faker} from '@faker-js/faker'
import { Console } from 'console'

const fs = require('fs')



export class CreateAccountPage{

    readonly createAccountPage : Page

    readonly firstNameInput : Locator
    readonly lastNameInput : Locator
    readonly emailInput : Locator
    readonly passwordInput : Locator
    readonly passwordConfirmInput : Locator
    readonly createAccountBtn : Locator


    constructor(createAccountPage : Page){
        this.createAccountPage = createAccountPage

        this.firstNameInput = createAccountPage.getByLabel('First Name')
        this.lastNameInput = createAccountPage.getByLabel('Last Name')
        this.emailInput = createAccountPage.getByLabel('Email', {exact : true})
        // this.passwordInput = createAccountPage.getByLabel('Password', {exact : true})
        // this.passwordConfirmInput = createAccountPage.getByLabel('Confirm Password', {exact : true})
        this.passwordInput = createAccountPage.locator('#password')
        this.passwordConfirmInput = createAccountPage.locator('#password-confirmation')

        this.createAccountBtn = createAccountPage.getByRole('button', {name : 'Create an Account'})

    }

    async createAccount() {

        const fname = faker.person.firstName()
        const lname = faker.person.lastName()
        const pword = faker.internet.password()

    
        const emailJson = JSON.parse(fs.readFileSync('../magento-stb/testdata/email.json', 'utf8'));
        const count = emailJson.count + 1;
        const email : string = emailJson.username + count + emailJson.domain
        emailJson.count = count

        fs.writeFileSync('../magento-stb/testdata/email.json', JSON.stringify(emailJson, null, 2))


        
        await expect(this.createAccountPage
            .getByRole('heading',{name :'Create New Customer Account'} ))
            .toBeVisible()

        await this.firstNameInput.fill(fname)
        await this.lastNameInput.fill(lname)
        console.log(fname + " " + lname);
        
        
        await this.emailInput.fill(email)
        console.log("Email is " + email)
        console.log("Count is " + count)

        await this.passwordInput.fill(pword)
        await this.passwordConfirmInput.fill(pword)
        console.log(pword);
        

        await expect(this.passwordConfirmInput).toHaveValue(pword)

        await this.createAccountBtn.click()


     

        const usersArray = JSON.parse(fs.readFileSync('../magento-stb/testdata/user.json', 'utf8'));

       
        // usersArray.users.push({
            
        //      firstname : fname,
        //      lastname : lname,
        //      email : email,
        //      password : pword
                        
        // })

        const newUser = {
            "firstname" : fname,
            "lastname" : lname,
            "email" : email,
            "password" : pword,
            "street" : "600 N 1st Ave",
            "city" : "Minneapolis",
            "state" : "Minnesota",
            "zip" : "55403",
            "country" : "United States",
            "phone" : "(555) 555-1234"

        }

        usersArray.users.push(newUser)

        fs.writeFileSync('../magento-stb/testdata/user.json', JSON.stringify(usersArray, null, 2))


    }

    async isAccountSuccessfullyCreated() {
        await expect(this.createAccountPage).toHaveTitle('My Account')
    }

}