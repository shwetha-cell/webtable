import SelectByindex from "../pageobjects/SelectByindex.js";


describe('Validating dropdown ',async () => {
    it('Testing dropdown', async() => {

        await browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
        await browser.maximizeWindow()
        await SelectByindex.Value()
    
     
    });
});


