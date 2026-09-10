import { expect,test } from "@playwright/test";

// هنا بيشوف الامنت موجود بس مش ظاهر 
test('to be hidden', async({page})=>
{
 await page.goto('https://the-internet.herokuapp.com/dynamic_loading');
 await expect(page.locator('//*[@id="content"]/div/a[1]')).toBeHidden();
 await page.close();
});


// هنا بيشوف الامنت موجود وظاهر للمستفيد 
test('to be visible', async({page})=>
{
 await page.goto('https://the-internet.herokuapp.com/dynamic_loading');
 await expect(page.locator('//*[@id="content"]/div/a[1]')).toBeVisible();
 await page.close();
});

// هنا بيشوف بيتأكد من عدد العناصر اللي الـ locator بيرجعهم (مش حالة عنصر واحد).
test('to be present', async({page})=>
{
 await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
 await expect(page.locator('[class="added-manually"]')).not.toHaveCount(1);
 await page.close();
});

 test('to have title', async({page})=>
{
 await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
 // search and assert to have title 
 await expect (page).toHaveTitle('https://the-internet.herokuapp.com/dynamic_controls')

 // search and assert to have partial title 
 await expect (page).toHaveTitle('/the-internet.herokuapp')
 await page.close();
});




test('to have screenshot', async({page})=>
{
 await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
 //takescreenshot then will assert on the page 
 await expect (page).toHaveScreenshot();

 await page.close();
});

