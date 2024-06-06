import { test, expect } from '@playwright/test'
import { menusdemo, submenusWidgets } from '../../POM/DemoQA/menus-submenus';
import { onlydate } from '../../POM/DemoQA/Date-Picker';

test('Luis-Selec-Date', async ({ page }) => {
    await page.goto(process.env.URL2 || '')
    await page.setViewportSize({ width: 1920, height: 1080 });
    
     
    const menusdemoqa = new menusdemo(page);
    const submenudatepicker = new submenusWidgets(page);
    const diaselecionado = new onlydate(page);
  


    await menusdemoqa.linkwidgets();
    await submenudatepicker.linkdatepicker();
    await diaselecionado.Selecmad();
    await page.pause()
    //await diaselecionado.Selecmonth();
    //await diaselecionado.Chosemonth();
    await diaselecionado.selectOptionFromCombo();
    await diaselecionado.Selecyear();

  
  });