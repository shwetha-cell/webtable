import swagLogin_Page from "../pageobjects/swagLogin_Page.js";

import swag_logo from "../pageobjects/swag_logo.js";

import swag_products from "../pageobjects/swag_products.js";
describe("login to the website ", () => {
    it("Validate Login Page", async () => {
      await browser.url("https://www.saucedemo.com/");
      await browser.maximizeWindow();
  
      await swagLogin_Page.logInfo("standard_user", "secret_sauce");
      console.log("sucessfully logged in");
      
      //await swag_logo.waitUntil();
     // await browser.pause(15000);
     expect (swag_logo.logo).toBeDisplayed();
     await swag_products.addproducts();
    });
    
})