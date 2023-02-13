import swagLogin_Page from "./swagLogin_Page.js";
class swag_logo {
  public get  logo() {
    return $('//div[@class="app_logo"]');
  }

  public async waitUntil() {
    await (await this.logo).waitForDisplayed();
  }
}
export default new swag_logo();
