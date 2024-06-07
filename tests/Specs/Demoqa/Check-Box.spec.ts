import { test, expect } from '@playwright/test'
import { menusdemo, submenuslements } from '../../POM/DemoQA/menus-submenus';
import { demoCB } from '../../POM/DemoQA/Check-Box';


test('Luis-Checksboxs', async ({ page }) => {
    await page.goto(process.env.URL2 || '')
    await page.setViewportSize({ width: 1920, height: 1080 });
    
     
    const menusdemoqa = new menusdemo(page);
    const submenusqa = new submenuslements(page);
    const demotoggle = new demoCB(page);

    await menusdemoqa.linkelements();
    await submenusqa.linkcheckbox();
    await demotoggle.clicktoggle();
    await demotoggle.clickdocuments();
    await demotoggle.clickoffice();
    await demotoggle.clickprivate();
    await demotoggle.validateText('private')
    await page.pause()
  
});