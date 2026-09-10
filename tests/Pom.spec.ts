import { test, Expect } from "@playwright/test";
import {LoginPage} from "./Pages/LoginPage/LoginPage";
console.log(LoginPage); // debug line
import {ProductPage} from "./Pages/productPage";
console.log("=====> DEBUG LoginPage:", LoginPage);
console.log("=====> DEBUG typeof:", typeof LoginPage);
import * as testData from "./testData/testData.json";

//قبل تست كل ال سيناريو
//let page;
//let loginPage;
//let productPage;
test.beforeAll(async({browser})=>{
    console.log('hello our run will start')
    //loginPage=new LoginPage(page);
    
})

// قبل  تست 
//test.beforeEach(async()=>{
  //  console.log('before each test')
//})
// بعد التست 
//test.afterEach(async()=>{
  //  console.log('after each test')
//})

// بعد كل التست
//test.afterAll(async()=>{
  //  console.log('Thanks for running test')
//})




test('E2E', async({page})=>{
    
    await page.goto('https://www.saucedemo.com/');
    const login=new LoginPage(page);

    const productPage = new ProductPage(page);
    await login.enterUsername(testData.username);
    await login.enterPassword(testData.password);
    await login.ClickOnLoginButton();
    await productPage.clickonAddToCartBtn();
    await productPage.ClickonCartCotainer();
    await page.waitForTimeout(3000);
    await page.close();


})

