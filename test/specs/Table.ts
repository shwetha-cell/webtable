describe("validating table value", async () => {
  it("test1", async () => {
    await browser.url("https://cosmocode.io/automation-practice-webtable/");
    await browser.maximizeWindow();
    await browser.scroll(170, 60);
    let Bahrain = await $('//table[@id ="countries"]//tr//td//strong[contains(text(),"Bahrain")]'
    );

    await browser.pause(5000);
    Bahrain.click();

    let text = Bahrain.getText();
    await console.log("print the value of country:", +text);
    await browser.pause(4000);

    //checkbox
    let Checkbox = await $('(//input[@type="checkbox"])[13]');
    await Checkbox.click();
    await browser.pause(5000);
  });
});
