import { Locator, Page, expect } from "@playwright/test";


export class usuarios{

    private readonly adduser: Locator
    private readonly findtuser: Locator
    private readonly edituser: Locator
    private readonly deleteuser: Locator
 
    

        constructor(page:Page){
            this.adduser = page.getByRole('button', { name: 'Add' });
            this.findtuser = page.getByRole('textbox', { name: 'Type to search' });
            this.edituser = page.locator('//*[@id="edit-record-4"]' );
            this.deleteuser = page.locator('//*[@id="delete-record-4"]' );
          

        }
        async clickadduser(){
           await this.adduser.click()

        }

        async finduser(){
            await this.findtuser.fill('@pruebasluis.com')
        }

        async clickedituser(){   
            await this.edituser.click();
        }

        async clickdeleteuser(){
            await this.deleteuser.click();
        }

        


}