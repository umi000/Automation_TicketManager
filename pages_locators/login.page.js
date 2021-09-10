const { password } = require("../tests/smoke/login.spec");

module.exports =  {
  locators : {
    'username'  :   'input[name="username"]',
    'password'  :   'input[name="password"]',
    'loginButton':  'xpath=/html/body/app-root/div/app-login/div/div/div/form/div[4]',
    'CustomerName': 'input[name="customerName"]',
    'keepMeLoggedin':'input[name="keepMeLogged"]',
    'passwordError' : 'body > app-root > div > app-login > div > div > div > form > div.input-group.has-danger > div',
    'UsernameError' : 'body > app-root > div > app-login > div > div > div > form > div.input-group.has-danger > div',
    'ContinueButton':'input[name="commit"]',
    'LogOutHover' :   '#dropdownMenuProfile > div > div > img',
    'logoutClick' :   '#header > nav > div > div > div > div > div.col-6.col-md-3.col-lg-3.pl-0.pr-3.admin-sec.mt-2.d-block.ng-star-inserted > ul > li:nth-child(4) > div > div > div > button',
    'logoutClick_SU' :  '#header > nav > div > div > div > div > div.col-6.col-md-3.col-lg-3.pl-0.pr-3.admin-sec.mt-2.d-block.ng-star-inserted > ul > li:nth-child(3) > div > div > div > button',
    'DismisscardButton': 'body > ngb-modal-window > div > div > app-company-policy > div > div > div.text-center > button',
    'DismisscardButton2': 'xpath=/html/body/ngb-modal-window/div/div/app-company-policy/div/div/div[2]/button'
  }

    // this.div_container    =   element(by.css('.container'));
    // this.div_form         =   element(by.css('.form'));
    // this.Reset_Password_title =   element(by.css('.mb-0'));
    // this.Reset_Password_instruction   =   element(by.css('.msgBox > p:nth-child(1)'));
    // this.Email_reset_instruction_btn      =   element(by.css('.btn'));
    // this.Forgot_Username_link         =   element(by.css('.message > a:nth-child(1)'));
    // this.SuccessBox                   =   element(by.css('.notify'));
    // this.System_verification          =   element(by.css('.msgBox > p:nth-child(2)'));
    // this.Back_to_login_btn            =   element(by.css('.btn'));
  
  };