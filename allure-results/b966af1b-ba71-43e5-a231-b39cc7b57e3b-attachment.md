# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AssertionsType.spec.ts >> to have title
- Location: tests\AssertionsType.spec.ts:28:6

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "https://the-internet.herokuapp.com/dynamic_controls"
Received: "The Internet"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × locator resolved to <html lang="en" class="no-js">…</html>
       - unexpected value "The Internet"

```

```yaml
- link "Fork me on GitHub":
  - /url: https://github.com/tourdedave/the-internet
  - img "Fork me on GitHub"
- heading "Dynamic Controls" [level=4]
- paragraph: This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously.
- heading "Remove/add" [level=4]
- checkbox
- text: A checkbox
- button "Remove"
- separator
- heading "Enable/disable" [level=4]
- textbox [disabled]
- button "Enable"
- separator
- text: Powered by
- link "Elemental Selenium":
  - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import { expect,test } from "@playwright/test";
  2  | 
  3  | // هنا بيشوف الامنت موجود بس مش ظاهر 
  4  | test('to be hidden', async({page})=>
  5  | {
  6  |  await page.goto('https://the-internet.herokuapp.com/dynamic_loading');
  7  |  await expect(page.locator('//*[@id="content"]/div/a[1]')).toBeHidden();
  8  |  await page.close();
  9  | });
  10 | 
  11 | 
  12 | // هنا بيشوف الامنت موجود وظاهر للمستفيد 
  13 | test('to be visible', async({page})=>
  14 | {
  15 |  await page.goto('https://the-internet.herokuapp.com/dynamic_loading');
  16 |  await expect(page.locator('//*[@id="content"]/div/a[1]')).toBeVisible();
  17 |  await page.close();
  18 | });
  19 | 
  20 | // هنا بيشوف بيتأكد من عدد العناصر اللي الـ locator بيرجعهم (مش حالة عنصر واحد).
  21 | test('to be present', async({page})=>
  22 | {
  23 |  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
  24 |  await expect(page.locator('[class="added-manually"]')).not.toHaveCount(1);
  25 |  await page.close();
  26 | });
  27 | 
  28 |  test('to have title', async({page})=>
  29 | {
  30 |  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  31 |  // search and assert to have title 
> 32 |  await expect (page).toHaveTitle('https://the-internet.herokuapp.com/dynamic_controls')
     |                      ^ Error: expect(page).toHaveTitle(expected) failed
  33 | 
  34 |  // search and assert to have partial title 
  35 |  await expect (page).toHaveTitle('/the-internet.herokuapp')
  36 |  await page.close();
  37 | });
  38 | 
  39 | 
  40 | 
  41 | 
  42 | test('to have screenshot', async({page})=>
  43 | {
  44 |  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  45 |  //takescreenshot then will assert on the page 
  46 |  await expect (page).toHaveScreenshot();
  47 | 
  48 |  await page.close();
  49 | });
  50 | 
  51 | 
```