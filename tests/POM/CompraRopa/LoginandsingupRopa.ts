import { Locator, Page, expect } from "@playwright/test";


export class singupropa{

    private readonly clicsinguplogin: Locator
 
    

        constructor(page:Page){
            this.clicsinguplogin = page.getByRole('link', { name: ' Signup / Login' });
           
        }
        async clicsinguploginbutton(){
            await this.clicsinguplogin.click()
        
        }

            

}