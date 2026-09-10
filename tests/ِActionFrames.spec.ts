import { expect, test } from "@playwright/test";


//how to deal with frames

test('alert', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/nested_frames');
let framesCount = page.frames().length;
console.log('frame count is ${framesCount}');
let bottomFrame= page.frameLocator('[src="/frame_bottom"]').locator('//body[contains(text(),"BOTTOM")]');


await expect (bottomFrame).toHaveText('BOTTOM');
await page.close();

}
)