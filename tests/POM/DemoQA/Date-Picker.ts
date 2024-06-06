import { Locator, Page, expect } from "@playwright/test";


export class onlydate{

    private readonly selectdate: Locator
    private readonly selectmonth: Locator
    private readonly chosemonth: Locator
    private readonly Selectyear: Locator
   
    

        constructor(page:Page){
            this.selectdate = page.locator('//*[@id="datePickerMonthYearInput"]');
            this.selectmonth = page.locator('//*[@id="datePickerMonthYear"]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[1]/select');
            this.chosemonth = page.locator( '//*[@id="datePickerMonthYear"]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[1]/select/option[8]' );
            this.Selectyear = page.locator('//*[@id="datePickerMonthYear"]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[2]/select');
        
        }
        async Selecmad(){
           await this.selectdate.dblclick()

        };
        /*async Selecmonth(){
            await this.selectmonth.click()
        }
        async Chosemonth(){
            await this.chosemonth.click()
        }*/
        async Selecyear(){
            await this.Selectyear.click()
        };

        async selectOptionFromCombo(){
            await this.selectmonth.click(); // Abre el combo
            await this.chosemonth.selectOption(''); // Selecciona la opción
        }
    }