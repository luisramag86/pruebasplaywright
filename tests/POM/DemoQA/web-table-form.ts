import { Locator, Page, expect } from "@playwright/test";
import * as faker from 'faker';

export class Registro{
    private readonly firstname: Locator
    private readonly lastname: Locator
    private readonly email: Locator
    private readonly age: Locator
    private readonly salary: Locator
    private readonly department: Locator
    private readonly submit: Locator
    

    constructor(page:Page){
        this.firstname = page.locator('//input[contains(@id,\'firstName\')]' );
        this.lastname = page.locator('//input[contains(@id,\'lastName\')]' );
        this.email = page.locator('//input[contains(@id,\'userEmail\')]' );
        this.age = page.locator('//input[contains(@id,\'age\')]' );
        this.salary = page.locator('//input[contains(@id,\'salary\')]' );
        this.department = page.locator('//input[contains(@id,\'department\')]' );
        this.submit = page.locator('//button[contains(@id,\'submit\')]' );

    }

    async fillform(firstname:string, lastname:string, email:string, age:string, salary:string, department:string){
        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.email.fill(email)
        await this.age.fill(age)
        await this.salary.fill(salary)
        await this.department.fill(department)
    }


    async fillForm(){
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = `${firstName}@pruebasluis.com`;
    
        await this.firstname.fill(firstName);
        await this.lastname.fill(lastName);
        await this.email.fill(email);
        await this.age.fill('25')
        await this.salary.fill('15000')
        await this.department.fill('TI')
    }

    async clicksubmit(){
        await this.submit.click()
    }

    
    async llenarformato(){
        await this.fillForm()
        await this.clicksubmit()
    }
}