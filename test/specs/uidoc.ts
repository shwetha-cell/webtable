describe("validating diff dropdown", async () => {
  it("dropdown 1", async () => {
    await browser.url("https://semantic-ui.com/modules/dropdown.html");

    await browser.maximizeWindow();

    let click = await $('//div[@class="ui dropdown"]');
    await browser.pause(5000);
    await click.click();
    await browser.pause(5000);

    await $('(//i[@class="dropdown icon"])[6]').click();
  });
  it("selections", async () => {
    let gender = await $('(//div[@class="ui selection dropdown"])[1]');
    await gender.click();
  });
});
