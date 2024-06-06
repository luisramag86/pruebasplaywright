import { Locator, Page, expect } from "@playwright/test";


export class formedit{
    private readonly firstnameedit: Locator
    private readonly lastnameedit: Locator
    private readonly emailedit: Locator
    private readonly ageedit: Locator
    private readonly salaryedit: Locator
    private readonly departmentedit: Locator
    private readonly submitedit: Locator

    constructor(page:Page){
        this.firstnameedit = page.getByPlaceholder('First Name');
        this.lastnameedit = page.getByPlaceholder('Last Name');
        this.emailedit = page.getByPlaceholder('name@example.com');
        this.ageedit = page.getByPlaceholder('Age');
        this.salaryedit = page.getByPlaceholder('Salary');
        this.departmentedit = page.getByPlaceholder('Department');
        this.submitedit = page.locator('button[type="submit"]');

    }

    async llenarformatoedicion(){
        await this.firstnameedit.fill('luis');
        await this.lastnameedit.fill('RAMIREZ');
        await this.emailedit.fill('luis@pruebasluis.com');
        await this.ageedit.fill('35');
        await this.salaryedit.fill('3500');
        await this.departmentedit.fill('DevOps');
        await this.submitedit.click();
    }
}