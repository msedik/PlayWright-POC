import { expect, Expect, test } from "@playwright/test";

// هنا بستخدم اكشن جديد press sequential عشان يبدأ يدخل الباسور كل حرف في 2 ملي ثنية 
test('textboxpress', async({page})=>
{
 await page.goto('https://the-internet.herokuapp.com/login');
 await page.locator('[id="username"]').fill('tomsmith');
 await page.locator('[id="password"]').pressSequentially('SuperSecretPassword!', {delay:200});
 await page.locator('[id="password"]').press('Enter');

 await page.close();


});


test('ClickAction', async({page})=>
{
 await page.goto('https://play1.automationcamp.ir/mouse_events.html');
 await page.locator('[id="click_area"]').click();
 await expect (page.locator('[id="click_type"]')).toHaveText('Click');

 await page.locator('[id="click_area"]').dblclick();
 await expect (page.locator('[id="click_type"]')).toHaveText('Double-Click');

  await page.locator('[id="click_area"]').click({button: 'right'});
 await expect (page.locator('[id="click_type"]')).toHaveText('Right-Click');

 await page.close();
});

// also you can make action on radio button by select or unselect 

//also you can use Checkbox actions using index by using locator.not.tobechecked(); or .check(); or .ischecked.tobetruthy

  //await page.locator('#checkboxes input').first().check();
  //await expect(page.locator('#checkboxes input').first()).toBeChecked();

  //**Also using drop downlist actions //
  
  //const dropdown = page.locator('#dropdown');

  // اختيار option بالـ value
 // await dropdown.selectOption('1');

  // تأكيد إن القيمة اتختارت صح
 // await expect(dropdown).toHaveValue('1'); 


 //--------------------------------------
