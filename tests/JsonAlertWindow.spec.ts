import { expect, test } from "@playwright/test";


// ديه بتشرح ازاي اتعامل مع alert pop window 
// وايضا ازاي ادوس ok & Cancel 

test('alert', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
await page.locator('[onclick="jsAlert()"]').click();
await page.pause();
await expect(page.locator('[id="result"]')).toHaveText('You successfully clicked an alert');
await page.close();

}
)


test('alertConfirm', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
await page.locator('[onclick="jsConfirm()"]').click();
page.on ("dialog", async(alert)=>{
    const alertmessage = alert.message();
    expect(alertmessage).toEqual('I am a JS Confirm');
    await alert.accept();
    await expect(page.locator('[id="result"]')).toHaveText('You clicked: Ok');
})
await page.close();

})

test('alertCancel', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
await page.locator('[onclick="jsConfirm()"]').click();
page.on ("dialog", async(alert)=>{
    const alertmessage = alert.message();
    expect(alertmessage).toEqual('I am a JS Confirm');
    await alert.dismiss();
    await expect(page.locator('[id="result"]')).toHaveText('You clicked: Cancel');
})
await page.close();

})


/*
Downloading Files
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.locator('#download-button').click(),
]);
const downloadFile=download[0];
const downloadFilePath = await downloadedFile.path();
const downloadFileName = downloadedFile.suggestedFilename();

await downloadedFileName.saveAs(downloaedFilename);
 consol.log('the file download path is $ {downloadedfilepath}');
8.13 Uploading Files
// single file
await page.locator('input[type="file"]').setInputFiles('./files/sample.pdf');

// multiple files
await page.locator('input[type="file"]').setInputFiles([
  './files/file1.pdf',
  './files/file2.png',
]);

// clear the selected file(s)
await page.locator('input[type="file"]').setInputFiles([]);

/*/