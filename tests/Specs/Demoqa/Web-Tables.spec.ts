import { test, expect } from '@playwright/test'
import { menusdemo, submenuslements } from '../../POM/DemoQA/menus-submenus';
import { Registro } from '../../POM/DemoQA/web-table-form';
import { usuarios } from '../../POM/DemoQA/web-tables';
import { formedit } from '../../POM/DemoQA/web-tables-edituser';


test('Luis-Web-Tables-Add', async ({ page }) => {
    await page.goto(process.env.URL2 || '')
    await page.setViewportSize({ width: 1920, height: 1080 });
    
     
    const menusdemoqa = new menusdemo(page);
    const submenusqa = new submenuslements(page);
    const userregister = new Registro(page);
    const  usuarioatabla = new usuarios(page);


    
    await menusdemoqa.linkelements();
    await submenusqa.linkwebtables();
    await usuarioatabla.clickadduser();
    await userregister.llenarformato();
   
    await page.pause()
  
  });

test('Luis-Web-Tables-find', async ({ page }) => {
    await page.goto(process.env.URL2 || '')
    await page.setViewportSize({ width: 1920, height: 1080 });

    const menusdemoqa = new menusdemo(page);
    const submenusqa = new submenuslements(page);
    const userregister = new Registro(page);
    const usuarioatabla = new usuarios(page);

    await menusdemoqa.linkelements();
    await submenusqa.linkwebtables();
    await usuarioatabla.clickadduser();
    await userregister.llenarformato();
    await usuarioatabla.finduser();

    await page.pause()
  
  });

test('Luis-Web-Tables-Edit', async ({ page }) => {
    await page.goto(process.env.URL2 || '')
    await page.setViewportSize({ width: 1920, height: 1080 });

    const menusdemoqa = new menusdemo(page);
    const submenusqa = new submenuslements(page);
    const userregister = new Registro(page);
    const usuarioatabla = new usuarios(page);
    const usereditar = new formedit(page);

    await menusdemoqa.linkelements();
    await submenusqa.linkwebtables();
    await usuarioatabla.clickadduser();
    await userregister.llenarformato();
    await usuarioatabla.finduser();
    await usuarioatabla.clickedituser();
    await usereditar.llenarformatoedicion();

    await page.pause()
  
  });

test('Luis-Web-Tables-Delet', async ({ page }) => {
    await page.goto(process.env.URL2 || '')
    await page.setViewportSize({ width: 1920, height: 1080 });

    const menusdemoqa = new menusdemo(page);
    const submenusqa = new submenuslements(page);
    const userregister = new Registro(page);
    const usuarioatabla = new usuarios(page);
    const usereditar = new formedit(page);

    await menusdemoqa.linkelements();
    await submenusqa.linkwebtables();
    await usuarioatabla.clickadduser();
    await userregister.llenarformato();
    await usuarioatabla.finduser();
    await usuarioatabla.clickedituser();
    await usereditar.llenarformatoedicion();
    await usuarioatabla.finduser();
    await usuarioatabla.clickdeleteuser();

    await page.pause()
  
  });
