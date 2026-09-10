import { expect, test } from "@playwright/test";


//how to deal with drag & drop

test('DragDrop', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
const boxA= page.locator('[id="column-a"]');
const boxB= page.locator('id="column-b"');
await boxA.hover();
//هنا معناه دوس ضغطة كبيرة 
await page.mouse.down();
await boxB.hover();
await page.mouse.up();

await page.waitForTimeout(2000)

}
)