import { Locator, Page, expect } from "@playwright/test";


export class Buttons{

    private readonly doubleclick: Locator
    private readonly doubleclickok: Locator
    private readonly rightclick: Locator
    private readonly rightclickok: Locator
    private readonly singleclic: Locator
    private readonly singleclicok: Locator
    

        constructor(page:Page){
            this.doubleclick = page.getByRole('button', { name: 'Double Click Me' });
            this.rightclick = page.getByRole('button', { name: 'Right Click Me' });
            this.singleclic = page.getByRole('button', { name: 'Click Me', exact: true });
            this.singleclicok = page.locator('//p[contains(@id,\'dynamicClickMessage\')]');
            this.doubleclickok = page.locator('//p[contains(@id,\'doubleClickMessage\')]' );
            this.rightclickok = page.locator('//p[contains(@id,\'rightClickMessage\')]');

        }
        async botondobleclick(){
           await this.doubleclick.dblclick()

        }

        async unclick(){
            await this.singleclic.click()
        }

        async botonderecho(){
            await this.rightclick.click({ button: 'right' })
         } 

       

        async botondobleclickok(){
            await expect(this.doubleclickok).toHaveText('You have done a double click')
        }
        
        async botonderechook(){
            await expect(this.rightclickok).toHaveText('You have done a right click')
        }
        
        async unclickok(){
            await expect(this.singleclicok).toHaveText('You have done a dynamic click')
        }
    


    

}