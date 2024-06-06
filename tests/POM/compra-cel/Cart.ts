import { Locator, Page, expect } from "@playwright/test";

export class Carrito{

    private readonly Cart1: Locator
    private readonly placeorder: Locator
    private readonly placename: Locator
    private readonly placecountry: Locator
    private readonly placecity: Locator
    private readonly placecardnumber: Locator
    private readonly placecardmonth: Locator
    private readonly placecardyear: Locator
    private readonly purchase: Locator
    private readonly purchaseok: Locator

    constructor(page:Page){
        this.Cart1 = page.getByRole('link', { name: 'Cart',exact: true  })
        this.placeorder = page.getByRole('button', { name: 'Place Order' })
        this.placename = page.locator('//input[@id=\'name\']' )
        this.placecountry = page.getByRole('textbox', { name: 'Country' })
        this.placecity = page.getByRole('textbox', { name: 'City' })
        this.placecardnumber = page.getByRole('textbox', { name: 'Credit card' })
        this.placecardmonth = page.getByRole('textbox', { name: 'Month' })
        this.placecardyear = page.getByRole('textbox', { name: 'Year' })
        this.purchase = page.getByRole('button', { name: 'Purchase' })
        this.purchaseok = page.getByRole('button', { name: 'OK' })

    }

    async clicktoCart(){
       await this.Cart1.click()
    }
    async clickplaceorder(){
       await this.placeorder.click()
    }
    async placeordername(){
        await this.placename.fill('Luis Demo')
    }
    async placeordercountry(){
        await this.placecountry.fill('Mexico')
    }
    async placeordercity(){
        await this.placecity.fill('CDMX')
    }
    async placeordercardnumber(){
        await this.placecardnumber.fill('1234567891012131')
    }
    async placeordercardmonth(){
        await this.placecardmonth.fill('10')
    }
    async placeordercardyear(){
        await this.placecardyear.fill('2030')
    }
    async clickpurchase(){
        await this.purchase.click()
    }
    async clickpurchaseok(){
        await this.purchaseok.click()
    }

    async prossescart(){
        await this.clicktoCart()
        await this.clickplaceorder()
        await this.placeordername()
        await this.placeordercountry()
        await this.placeordercity()
        await this.placeordercardnumber()
        await this.placeordercardmonth()
        await this.placeordercardyear()
        await this.clickpurchase()
        await this.clickpurchaseok()
    }
 }