import { Locator, Page, expect } from "@playwright/test";

export class Loginpage{

    private readonly loginlink: Locator
    private readonly usernameid: Locator
    private readonly passwordid: Locator
    private readonly loginbutton: Locator
    private readonly loginwelcome: Locator

    constructor(page:Page){
        this.loginlink = page.getByRole('Link', { name: 'Log in' })
        this.usernameid = page.locator('//input[@id=\'loginusername\']')
        this.passwordid = page.locator('//input[@id=\'loginpassword\']')
        this.loginbutton = page.getByRole('button', { name: 'Log in' })
        this.loginwelcome = page.getByRole('link',{ name: 'Welcome demoluis'})

    }

    async clickloginlink(){
       await this.loginlink.click()
    }
    async fillusername(){
       await this.usernameid.fill('demoluis')
    }
    async fillpassword(){
       await this.passwordid.fill('demo')
    }
    async clickloginbutton(){
       await this.loginbutton.click()
    }

    async successlogin(){
        await expect (this.loginwelcome).toBeVisible()
    }

    async loginUandP(){
        await this.clickloginlink()
        await this.fillusername()
        await this.fillpassword()
        await this.clickloginbutton()
    }

}