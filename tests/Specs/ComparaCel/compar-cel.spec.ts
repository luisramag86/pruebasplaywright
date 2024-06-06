import { test, expect } from '@playwright/test';
import { Loginpage } from '../../POM/compra-cel/Loginpage';
import { Phones } from '../../POM/compra-cel/Phones';
import { Addproducts } from '../../POM/compra-cel/Phones';
import { Carrito } from '../../POM/compra-cel/Cart';


test('Luis-login', async ({ page }) => {
    await page.goto(process.env.URL1 || '')

    const logincel = new Loginpage (page)

    await logincel.clickloginlink()
    await logincel.fillusername()
    await logincel.fillpassword()
    await logincel.clickloginbutton()
    await logincel.successlogin()

    await page.pause()

  });

  test('Luis-selec-Phones', async ({ page }) => {
    await page.goto(process.env.URL1 || '')
    await page.setViewportSize({ width: 1920, height: 1080 });

    const logincel = new Loginpage (page)
    const clickphones = new Phones (page)
    const Addproductos = new Addproducts (page)
    const Gocart = new Carrito (page)

    await logincel.loginUandP()
    await logincel.successlogin()

    await clickphones.clicklumia()
    await Addproductos.Addproduct()
    await clickphones.clickgohome()

    await clickphones.clickNexus()
    await Addproductos.Addproduct()
    await clickphones.clickgohome()

    await clickphones.clickIphone()
    await Addproductos.Addproduct()
    await page.pause()

    await Gocart.prossescart()
    
    await page.pause()

  });

  test('Luis-selec-Laptops', async ({ page }) => {
    await page.goto(process.env.URL || '')

    const logiluis3 = new Loginpage (page)

    await logiluis3.loginUandP()
    await logiluis3.successlogin()
    await page.pause()

  });

  test('Luis-selec-Monitors', async ({ page }) => {
    await page.goto(process.env.URL || '')

    const logiluis4 = new Loginpage (page)

    await logiluis4.loginUandP()
    await logiluis4.successlogin()
    await page.pause()

  });
