import { Locator, Page, expect } from "@playwright/test";


export class demoCB{

    private readonly Togglehome: Locator
    private readonly toggledocuments: Locator
    private readonly toggleoffice: Locator
    private readonly checkprivate: Locator
    private readonly textprivate: Locator
    
   
    

        constructor(page:Page){
            this.Togglehome = page.locator('//*[@id="tree-node"]/ol/li/span/button');
            this.toggledocuments = page.locator('//*[@id="tree-node"]/ol/li/ol/li[2]/span/button');
            this.toggleoffice = page.locator('//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[2]/span/button');
            this.checkprivate = page.locator('//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[2]/ol/li[2]/span/label');
            this.textprivate = page.locator('///*[@id="result"]/span[2]');
        }
        
        async clicktoggle(){
            await this.Togglehome.click()
        }

        async clickdocuments(){
            await this.toggledocuments.click()
        }

        async clickoffice(){
            await this.toggleoffice.click()
        }

        async clickprivate(){
            await this.checkprivate.click()
        }

        async validateText(expectedText: string){
        const actualText = await this.textprivate.innerText();
        expect(actualText).toBe(expectedText);
        }
}
