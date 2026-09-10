import { expect, test } from "@playwright/test";


//how to deal with tabs

test('tabs', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/windows');
const [browserTabs]= await Promise.all
([
    page.waitForEvent('popup'), await page.locator('[href="/windows/new"]').click()
]

)
await browserTabs.waitForLoadState();
const pages= browserTabs.context().pages();
const defaultTab= pages[0];
await expect(defaultTab.locator('//h3')).toContainText('Opening a new window');
const nextTab=pages[pages.length-1];
await expect(nextTab.locator('//h3')).toContainText('New Window');

await page.close();

}
)

// already understood with serpate window 
