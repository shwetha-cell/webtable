class SelectByindex {
  public get indexValue() {
    return $('//div[@rel-title="Select Country"]//select');

  }

  public async Value() {
    let select1 = await this.indexValue;

    await select1.waitForClickable();
    await select1.click();
   
   // let textvalue =await  select1.selectByIndex(6);
 
 
//await select1.selectByVisibleText("Andorra")
  let   value5=await select1.selectByAttribute('value','DZA')
await browser.pause(3000);
  }

}
export default new SelectByindex();
