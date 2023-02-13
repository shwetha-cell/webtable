describe("validating current date", async () => {
  it("test1", async () => {
    await browser.url("https://selectorshub.com/xpath-practice-page/");
    await browser.maximizeWindow();
    browser.pause(3000);
    browser.scroll(100,50)
    browser.pause(5000)
   let date =await $('//input[@name="the_date"]')
   date.click();
    browser.pause(7000);
  });
});
