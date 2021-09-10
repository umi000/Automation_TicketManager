const { test, expect } = require('@playwright/test');
var LoginPage       = require('../../pages_locators/login.page');
var logindata = require('../Data/logindata');


///function to sleep
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
} 
var username;
var password;
var usernamelocator;
this.url = 'https://app01-qa10.spotlighttms.com/app/login';

// fetch creds  data from logindata
this.username = logindata.qa_10.username.toString();
this.Password = logindata.qa_10.password.toString();

test('Is Portal live', async ({ page }) => {
  await page.goto(this.url);
  await expect(page).toHaveTitle(/TicketManager: Login/);
  
});

  test('Password_only', async ({ page }) => {

    await page.goto(this.url);
    await page.fill(LoginPage.locators.password.toString(), this.Password);
    await page.click(LoginPage.locators.loginButton.toString());
    sleep(10000);
    var error = await page.$eval(LoginPage.locators.UsernameError.toString(), el => el.innerText);
    expect(error).toBe('Username is required');
    
  });
  test('Username_Only', async ({ page }) => {

    await page.goto(this.url);
    await page.fill(LoginPage.locators.username.toString(), this.username);
    await page.click(LoginPage.locators.loginButton.toString());
    
    var error = await page.$eval(LoginPage.locators.passwordError.toString(), el => el.innerText);
    expect(error).toBe('Password is required');
  });
  
test('Login CSA', async ({ page }) => {

  await page.goto(this.url);
  // sleep(5000);
  await page.fill(LoginPage.locators.username.toString(), logindata.qa_10.csa_user.username.toString());
  await page.fill(LoginPage.locators.password.toString(), logindata.qa_10.csa_user.password.toString());
  await page.click(LoginPage.locators.keepMeLoggedin.toString());
  await page.click(LoginPage.locators.loginButton.toString());
  // sleep(50000);
  sleep(5000);
  await page.click(LoginPage.locators.DismisscardButton.toString() || LoginPage.locators.DismisscardButton2.toString() );
  sleep(5000);
  await page.click(LoginPage.locators.LogOutHover.toString());
  // sleep(5000);
  await page.click(LoginPage.locators.logoutClick.toString());
  // sleep(10000);
  
  await page.close();
  
});
test('Login SSA', async ({ page }) => {

  await page.goto(this.url);
  await page.fill(LoginPage.locators.username.toString(), this.username);
  await page.fill(LoginPage.locators.password.toString(), this.Password);
  await page.click(LoginPage.locators.keepMeLoggedin.toString());
  await page.click(LoginPage.locators.loginButton.toString());
  sleep(1000);

  

  // await page.fill(LoginPage.locators.CustomerName.toString(), 'UIAutomator');

  // await page.click(LoginPage.locators.ContinueButton.toString());
  // sleep(100000);
  
  // await expect(page).toHaveTitle(/Ticket Management System/);
  await page.close();
    
  });

  test('Login Admin', async ({ page }) => {

    await page.goto(this.url);
    await page.fill(LoginPage.locators.username.toString(), logindata.qa_10.admin_user.username.toString());
    await page.fill(LoginPage.locators.password.toString(), logindata.qa_10.admin_user.password.toString());
    await page.click(LoginPage.locators.keepMeLoggedin.toString());
    await page.click(LoginPage.locators.loginButton.toString());
    sleep(5000);
    await page.click(LoginPage.locators.DismisscardButton.toString() || LoginPage.locators.DismisscardButton2.toString());
    // sleep(1000);
    await page.click(LoginPage.locators.LogOutHover.toString());
    // sleep(5000);
    await page.click(LoginPage.locators.logoutClick.toString());
    await page.close();
    
  });

  test('Login standard_user', async ({ page }) => {

    await page.goto(this.url);
    await page.fill(LoginPage.locators.username.toString(), logindata.qa_10.standard_user.username.toString());
    await page.fill(LoginPage.locators.password.toString(), logindata.qa_10.standard_user.password.toString());
    await page.click(LoginPage.locators.keepMeLoggedin.toString());
    await page.click(LoginPage.locators.loginButton.toString());
    sleep(10000);
    await page.click(LoginPage.locators.DismisscardButton.toString() || LoginPage.locators.DismisscardButton2.toString());
    await page.click(LoginPage.locators.LogOutHover.toString());
    await page.click(LoginPage.locators.logoutClick_SU.toString());
    
    
  });