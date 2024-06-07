import { test, expect } from '@playwright/test';
import { singupropa } from '../POM/CompraRopa/LoginandsingupRopa';

test('Luis-loginropademo', async ({ page }) => {
    await page.goto(process.env.URL3 || '')
    await page.setViewportSize({ width: 1920, height: 1080 });

    const loginropa = new singupropa(page)


    await   loginropa.clicsinguploginbutton()

    await page.pause()

});