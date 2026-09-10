import {BasePage} from "./basePage";

export  class ProductPage extends  BasePage
{
    private readonly SauceLabsBackpackAddToCardBtn= this.page.locator('[id="add-to-cart-sauce-labs-backpack"]');

    private readonly CartContainer= this.page.locator('[id="shopping_cart_container"]');


    async clickonAddToCartBtn()
    {
        await this.clickOnElement(this.SauceLabsBackpackAddToCardBtn);

    }

    async ClickonCartCotainer()
    {
        await this.clickOnElement(this.CartContainer);
    }
}

