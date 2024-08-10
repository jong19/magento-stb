import {expect, type Locator, type Page} from '@playwright/test'
import { ListingPage } from './listing-page'

export class ComparePage{
    readonly page : Page 


    constructor(page : Page)
    {
        page = this.page
    }

    async funcA(){
        await console.log("Commit2")
    }

}


