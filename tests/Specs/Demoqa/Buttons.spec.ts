import { test, expect } from '@playwright/test';
import { Buttons } from '../../POM/DemoQA/Button';
import { menusdemo, submenuslements } from '../../POM/DemoQA/menus-submenus';

test('Luis-buttom', async ({ page }) => {
    await page.goto(process.env.URL2 || '')
    await page.setViewportSize({ width: 1920, height: 1080 });
  
    const botonesdemo = new Buttons(page);
    const menusdemo1 = new menusdemo(page);
    const submenus1 = new submenuslements(page);
  
    await menusdemo1.linkelements();
    await submenus1.linkbuttons();
    await botonesdemo.botonderecho();
    await botonesdemo.botondobleclick();
    await botonesdemo.unclick();
    await botonesdemo.botonderechook();
    await botonesdemo.botondobleclickok();
    await botonesdemo.unclickok();
   
    await page.pause()
  
  });