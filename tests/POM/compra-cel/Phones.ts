import { Locator, Page, expect } from "@playwright/test";

export class Phones{

    private readonly gohome: Locator
    private readonly luimia1520: Locator
    private readonly Nexus: Locator
    private readonly iphone: Locator

    constructor(page:Page){
        this.gohome = page.getByRole('link', { name: 'Home' })
        this.luimia1520 = page.getByRole('link', { name: 'Nokia lumia 1520' })
        this.Nexus = page.getByRole('link', { name: 'Nexus 6' })
        this.iphone = page.getByRole('link', { name: 'Iphone 6 32gb' })
    }

    async clickgohome(){
       await this.gohome.click()
    }

    async clicklumia(){
       await this.luimia1520.click()
    }
    async clickNexus(){
        await this.Nexus.click()
    }
    async clickIphone(){
        await this.iphone.click()
    }
  
    

}

export class Addproducts{
    private readonly AddCart: Locator
    private readonly Addok: Locator

    constructor(page:Page){
        this.AddCart = page.getByRole('link', { name: 'Add to cart' })
        this.Addok = page.getByRole('link', { name: 'Add to cart' })
        
    }

    async clickAddCart(){
       await this.AddCart.click()
    }
    async clickAddok(){
        await this.Addok.press('Enter')

    }
    async Addproduct(){
        await this.clickAddCart()
        await this.clickAddok()
    
    }
}