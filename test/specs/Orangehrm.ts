import calender from "../pageobjects/calender.js";

describe('validating the calender', async() => {
    it('Tesing current date',async() => {
        
       await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       await browser.maximizeWindow()
       await calender.Login()
       await browser.pause(3000)
    });
    
});