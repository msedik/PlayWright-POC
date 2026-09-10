import   {test, expect}  from '@playwright/test';
test ('my First TestCase', async({page})=>
{
   await page.goto('https://mutasil.cst.gov.sa/');
   await expect (page).toHaveTitle('Mutasil');
});