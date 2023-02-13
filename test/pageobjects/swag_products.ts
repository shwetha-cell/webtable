import swagLogin_Page from "./swagLogin_Page.js";

class swag_products {
  public get mutiAdd() {
    return $$("//button[text()='Add to cart']")
  }
  public  get carValue() {
    return $(".shopping_cart_badge")
  }
  public async addproducts() {
    let sizeofAddToCart = await this.mutiAdd.length;
    console.log("size of the cart", sizeofAddToCart);
    for (let index = 0; index < sizeofAddToCart; index++) {
      const element = await this.mutiAdd[index];
    await  browser.pause(5000)
      await element.waitForClickable();

      await element.click();
    }
      const addToCartelement = await this.carValue.getText();
      console.log("no of items", addToCartelement);
      console.log("addto cart element", sizeofAddToCart.toString);
     await browser.waitUntil(
        async () => (await addToCartelement) == sizeofAddToCart.toString(),
        { timeout: 8000, timeoutMsg: "Element is equal to six " }
      );
     expect(addToCartelement).toEqual(sizeofAddToCart.toString());
     } 
  
}
export default new swag_products();
