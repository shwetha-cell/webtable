class swagLogin_page {

    public get inputUsername() {
      return $("#user-name");
    }
    public get inputPassword() {
      return $("#password");
    }
    public get inputLogin() {
      return $("#login-button");
    }
  
   
    public async logInfo(userName: string, passWord: string) {
    await  this.inputUsername.setValue(userName);
    await   this.inputPassword.setValue(passWord);
    await   this.inputLogin.click();
      
    }
  }
  export default new swagLogin_page()