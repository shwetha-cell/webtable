describe("validating dragdrop", () => {
  it("demo1", async () => {
    await browser.url("https://www.globalsqa.com/demo-site/draganddrop/");
    await browser.maximizeWindow();
    await browser.switchToFrame(
      await $('//iframe[@class="demo-frame lazyloaded"][1]')
    );

    let src = await $('//*[contains(text(),"High Tatras 2")]');
    let tar = await $('//div[@id="trash"]');
    await src.dragAndDrop(tar);
    await browser.switchToParentFrame();

    let calender = await $('//table[@id="wp-calendar"]');

    await calender.scrollIntoView();
   


    
  });
});
