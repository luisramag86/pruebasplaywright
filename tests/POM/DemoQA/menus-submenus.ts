import { Locator, Page, expect } from "@playwright/test";

export class menusdemo{

    private readonly elementslink: Locator
    private readonly formslink: Locator
    private readonly alertslink: Locator
    private readonly widgetslink: Locator
    private readonly interactionslink: Locator
    private readonly bookstorelink: Locator
    private readonly checkboxlink: Locator
    
    

        constructor(page:Page){
            this.elementslink = page.getByRole('heading', { name: 'Elements' });
            this.formslink = page.getByRole('heading', { name: 'Forms' });
            this.alertslink = page.getByRole('heading', { name: 'Alerts, Frame & Windows' });
            this.widgetslink = page.getByRole('heading', { name: 'Widgets' });
            this.interactionslink = page.getByRole('heading', { name: 'Interactions' });
            this.bookstorelink = page.getByRole('heading', { name: 'Book Store Application' });
            this.checkboxlink = page.locator('//li[contains(.,\'Check Box\')]');
            

        }
        async linkelements(){
           await this.elementslink.click()

        }
    async linkcheckbox(){
        await this.checkboxlink.click()
    }
        async linkforms(){
        await this.formslink.click()
        }
        async linkalerts(){
        await this.alertslink.click()
        }
        async linkwidgets(){
        await this.widgetslink.click()
        }
        async linkinteractions(){
        await this.interactionslink.click()
        }
        async linkbookstore(){
        await this.bookstorelink.click()
        }

}
    
export class submenuslements{
    private readonly textboxes: Locator
    private readonly checkbox: Locator
    private readonly radiobuttons: Locator
    private readonly webtables: Locator
    private readonly buttons: Locator
    private readonly links: Locator
    private readonly brokenlinks: Locator
    private readonly uploadanddownload: Locator
    private readonly dynamicproperties: Locator

    constructor(page:Page){
        this.textboxes = page.locator('//li[contains(.,\'Text Box\')]');
        this.checkbox = page.locator('//li[contains(.,\'Check Box\')]');
        this.radiobuttons = page.locator('//li[contains(.,\'Radio Button\')]');
        this.webtables = page.locator('//li[contains(.,\'Web Tables\')]');
        this.buttons = page.locator('//li[contains(.,\'Buttons\')]');
        this.links = page.locator('//li[contains(.,\'Links\')]');
        this.brokenlinks = page.locator('//li[contains(.,\'Broken Links - Images\')]');
        this.uploadanddownload = page.locator('//li[contains(.,\'Upload and Download\')]');
        this.dynamicproperties = page.locator('//li[contains(.,\'Dynamic Properties\')]');
    }
    async linktextboxes(){
        await this.textboxes.click()
    }
    async linkcheckbox(){
        await this.checkbox.click()
    }
    async linkradiobuttons(){
        await this.radiobuttons.click()
    }
    async linkwebtables(){
        await this.webtables.click()
    }
    async linkbuttons(){
        await this.buttons.click()
    }
    async linklinks(){
        await this.links.click()
    }
    async linkbrokenlinks(){
        await this.brokenlinks.click()
    }
    async linkuploadanddownload(){
        await this.uploadanddownload.click()
    }
    async linkdynamicproperties(){
        await this.dynamicproperties.click()
    }
}

export class submenusWidgets{
    private readonly accordian: Locator
    private readonly auto: Locator
    private readonly datepicker: Locator
    private readonly slider: Locator
    private readonly progressbar: Locator
    private readonly tabs: Locator
    private readonly toolTips: Locator
    private readonly menu: Locator
    private readonly selectmenu: Locator

    constructor(page:Page){
        this.accordian = page.locator('//li[contains(.,\'Accordian\')]');
        this.auto = page.locator('//li[contains(.,\'Auto Complete\')]');
        this.datepicker = page.locator('//li[contains(.,\'Date Picker\')]');
        this.slider = page.locator('//li[contains(.,\'Slider\')]');
        this.progressbar = page.locator('//li[contains(.,\'Progress Bar\')]');
        this.tabs = page.locator('//li[contains(.,\'Tabs\')]');
        this.toolTips = page.locator('//li[contains(.,\'Tool Tips\')]');
        this.menu = page.locator('//li[contains(.,\'Menu\')]');
        this.selectmenu = page.locator('//li[contains(.,\'Select Menu\')]');
    }
    async linkaccordian(){
        await this.accordian.click()
    }
    async linkauto(){
        await this.auto.click()
    }
    async linkdatepicker(){
        await this.datepicker.click()
    }
    async linkslider(){
        await this.slider.click()
    }
    async linkprogressbar(){
        await this.progressbar.click()
    }
    async linktabs(){
        await this.tabs.click()
    }
    async linktoolTips(){
        await this.toolTips.click()
    }
    async linkmenu(){
        await this.menu.click()
    }
    async linkselectmenu(){
        await this.selectmenu.click()
    }
}
