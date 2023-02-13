class calender {
  public get UserName() {
    return $('//input[@name="username"]');
  }
  public get Password() {
    return $('//input[@name="password"]');
  }

  public get Submit() {
    return $('//button[@type="submit"]')
  }
  public get Time() {
    return $('//a[@href="/web/index.php/pim/viewPimModule"]')
  }

  public get Attendence() {
    return $('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]')
  }

  public get FirstNameText() {
    return $('//input[@name="firstName"]')
  }
  public get LastNameText(){
    return $('//input[@name="lastName"]')
  }
  public get ClickOn(){
    return $('//button[@type="submit"]')
  }

 public async Login() {
    await this.UserName.setValue("Admin");
    await this.Password.setValue("admin123");
    await this.Submit.click();
    await this.Time.click();
    await browser.pause(3000)
   await this.Attendence.click();
   await  this.FirstNameText.setValue("shwetha")
   await  this.LastNameText.setValue("shetty")
   await this.ClickOn.click()
  }
}
export default new calender();
