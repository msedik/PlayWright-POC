# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: herokuappWebsite.spec.ts >> HerokuFormAuthincationUsing Record Scrpt
- Location: tests\herokuappWebsite.spec.ts:3:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1')
Expected substring: "Welcome to the-internet111"
Received string:    "Welcome to the-internet"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('h1') with timeout 5000ms
  - waiting for locator('h1')
    14 × locator resolved to <h1 class="heading">Welcome to the-internet</h1>
       - unexpected value "Welcome to the-internet"

```

```yaml
- heading "Welcome to the-internet" [level=1]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('HerokuFormAuthincationUsing Record Scrpt', async ({ page }) => {
  4  |   await page.goto('https://the-internet.herokuapp.com/');
> 5  |   await expect(page.locator('h1')).toContainText('Welcome to the-internet111');
     |                                    ^ Error: expect(locator).toContainText(expected) failed
  6  |   await page.getByRole('link', { name: 'Form Authentication' }).click();
  7  |   await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
  8  |   await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  9  |   await page.getByRole('textbox', { name: 'Username' }).click({
  10 |     modifiers: ['ControlOrMeta']
  11 |   });
  12 |   await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  13 |   await expect(page.getByText('Password', { exact: true })).toBeVisible();
  14 |   await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  15 |   await page.getByRole('textbox', { name: 'Password' }).click({
  16 |     modifiers: ['ControlOrMeta']
  17 |   });
  18 |   await expect(page.getByRole('button', { name: ' Login' })).toBeVisible();
  19 |   await page.getByRole('button', { name: ' Login' }).click();
  20 |   await expect(page.getByText('You logged into a secure area')).toBeVisible();
  21 |   await expect(page.locator('#flash')).toContainText('You logged into a secure area! ×');
  22 |   await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  23 |   await page.getByRole('link', { name: 'Logout' }).click();
  24 | });
```