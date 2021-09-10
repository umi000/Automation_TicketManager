  
// /**
//  * Created by shaanlashari on 09/07/2017.
//  */

//  var LoginPage       = require('../../../pages/login.page.js');
//  var selectCustomerPage  = require('../../../pages/selectCustomer.page.js');
//  var homePage            = require('../../../pages/homePage.js');
//  var UserData    =   require('../../../resources/userData');
//  var pageUrl;
//  var Username;
//  var Password;
//  var Greeting_msg;
//  var admin_username;
//  var admin_password;
//  var admin_greeting;
//  var is_ssa = false;
//  var today = new Date(),
//  timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';
 
//  describe('Login Tests will begin. Current Time: '+timeStamp, function () {
 
//      var Loginpage = new LoginPage();
//      var selectCustomer = new selectCustomerPage();
//      var home = new homePage();
 
//      beforeAll(function (done) {
//          browser.waitForAngularEnabled(false);
//          browser.get(browser.baseUrl);
//          browser.sleep(5000);
//          browser.getCurrentUrl()
//              .then(function (value) {
//                  pageUrl =   value;
//                  if (pageUrl === 'https://app01-qa10.spotlighttms.com/app/login'){
//                      console.log("Qa_10 env detected, Url is: " + pageUrl);
//                      Username        =   UserData.qa_10.username.toString();
//                      Password        =   UserData.qa_10.password.toString();
//                      Greeting_msg    =   UserData.qa_10.greeting_msg.toString();
//                      admin_username  =   UserData.qa_10.admin_user.username.toString();
//                      admin_password  =   UserData.qa_10.admin_user.password.toString();
//                      admin_greeting  =   UserData.qa_10.admin_user.greeting_msg.toString();
//                  }else if (pageUrl === 'https://app1.spotlighttms.com/app/login'){
//                      console.log("App1 env detected, Url is: " + pageUrl);
//                      Username    =   UserData.app_1.username.toString();
//                      Password    =   UserData.app_1.password.toString();
//                      Greeting_msg    =   UserData.app_1.greeting_msg.toString();
//                  }else if (pageUrl === 'https://app01-qa11.spotlighttms.com/app/login'){
//                      console.log("Qa_11 env detected, Url is: " + pageUrl);
//                      Username    =   UserData.qa_11.username.toString();
//                      Password    =   UserData.qa_11.password.toString();
//                      Greeting_msg    =   UserData.qa_11.greeting_msg.toString();
//                  }else if (pageUrl === 'https://app01-qa12.spotlighttms.com/app/login'){
//                      console.log("Qa_12 env detected, Url is: " + pageUrl);
//                      Username    =   UserData.qa_12.username.toString();
//                      Password    =   UserData.qa_12.password.toString();
//                      Greeting_msg    =   UserData.qa_12.greeting_msg.toString();
 
//                  }else if (pageUrl === 'https://app01-qa13.spotlighttms.com/app/login'){
//                      console.log("Qa_13 env detected, Url is: " + pageUrl);
//                      Username    =   UserData.qa_13.username.toString();
//                      Password    =   UserData.qa_13.password.toString();
//                      Greeting_msg    =   UserData.qa_13.greeting_msg.toString();
//                  }
//                  else if (pageUrl === 'https://app01-qa14.spotlighttms.com/app/login'){
//                      console.log("Qa_14 env detected, Url is: " + pageUrl);
//                      Username    =   UserData.qa_14.username.toString();
//                      Password    =   UserData.qa_14.password.toString();
//                      Greeting_msg    =   UserData.qa_14.greeting_msg.toString();
//                  }
//                  else if (pageUrl    === 'https://app01-dev10.spotlighttms.com/app/login'){
//                      console.log("Dev_10 env detected, Url is: " + pageUrl);
//                      Username    =   UserData.dev_10.username.toString();
//                      Password    =   UserData.dev_10.password.toString();
//                      Greeting_msg    =   UserData.dev_10.greeting_msg.toString();
//                  }
//                  else if (pageUrl    === 'https://app01-dev11.spotlighttms.com/app/login'){
//                      console.log("Dev_11 env detected, Url is: " + pageUrl);
//                      Username    =   UserData.dev_11.username.toString();
//                      Password    =   UserData.dev_11.password.toString();
//                      Greeting_msg    =   UserData.dev_11.greeting_msg.toString();
//                  }
//                  else if (pageUrl    === 'https://app01-dev12.spotlighttms.com/app/login'){
//                      console.log("Dev_12 env detected, Url is: " + pageUrl);
//                      Username    =   UserData.dev_12.username.toString();
//                      Password    =   UserData.dev_12.password.toString();
//                      Greeting_msg    =   UserData.dev_12.greeting_msg.toString();
//                  }
//                  else if (pageUrl    === 'https://app01-dev13.spotlighttms.com/app/login'){
//                      console.log("Dev_13 env detected, Url is: " + pageUrl);
//                      Username    =   UserData.dev_13.username.toString();
//                      Password    =   UserData.dev_13.password.toString();
//                      Greeting_msg    =   UserData.dev_13.greeting_msg.toString();
//                  }
//                  else if (pageUrl    === 'https://app01-dev14.spotlighttms.com/app/login'){
//                      console.log("Dev_14 env detected, Url is: " + pageUrl);
//                      Username    =   UserData.dev_14.username.toString();
//                      Password    =   UserData.dev_14.password.toString();
//                      Greeting_msg    =   UserData.dev_14.greeting_msg.toString();
//                  }
//              })
//              .catch(function (reason) {
//                  console.log(reason);
//              });
//          process.nextTick(done);
//      });
 
//      beforeEach(function () {
 
//          browser.waitForAngularEnabled(false);
//          browser.get(browser.baseUrl);
//          browser.manage().deleteAllCookies();
 
//      }); 
//          it('Login page is Running live', function () {
//              expect(Loginpage.getLoginButtonText()).toEqual('LOGIN');
//          });
 
//          it('SSA cannot login without username', function () {
//              Loginpage.getLoggedIn('', Password);
//              expect(Loginpage.getUsernameWarningText()).toEqual("Username is required");
 
//          });
//          it('SSA cannot login without Password', function () {
//              Loginpage.getLoggedIn(Username, '');
//              expect(Loginpage.getPasswordWarningText()).toEqual("Password is required");
//          });
      
//          it('Successful SSA Login', function () {
//              is_ssa= true;
//              login(Username, Password, is_ssa);
//              home.getGreetedUsername
//              .isPresent()
//              .then(function (value) {
//                  if (value){
//                      home.getGreetedUsername
//                          .isDisplayed()
//                          .then(function (value) {
//                              if (value){
//                                  expect(home.getGreetedUsername.getText()).toEqual(Greeting_msg);
//                                  browser.waitForAngularEnabled(false);
//                                  browser.sleep(2000);
//                              }
//                              else{
//                                  expect(true).toBe(false, "Greeting message is not visible on landing page");
//                              }
//                          })
//                          .catch(function () {
//                              expect(true).toBe(false, "Greeting message is not visible on landing page");
//                          });
//                  }
//                  else{
//                      expect(true).toBe(false, "Greeting message is not present");
//                      }
//              })
//              .catch(function () {
//                  expect(true).toBe(false, "Greeting message is not present");
//              });
//          });
//          it('Successful Non-SSA Login', function () {
//              browser.get(browser.baseUrl + 'logout');
//              browser.waitForAngularEnabled(false);
//              browser.sleep(1000);
//              is_ssa=false;
//              login(admin_username, admin_password,is_ssa);
//              browser.sleep(2000);
//              home.getGreetedUsername
//              .isPresent()
//              .then(function (value) {
//                  if (value){
//                      home.getGreetedUsername
//                          .isDisplayed()
//                          .then(function (value) {
//                              if (value){
//                                  expect(home.getGreetedUsername.getText()).toEqual(admin_greeting);
//                                  browser.waitForAngularEnabled(false);
//                                  browser.sleep(2000);
//                              }
//                              else{
//                                  expect(true).toBe(false, "Greeting message is not visible on landing page");
//                              }
//                          })
//                          .catch(function () {
//                              expect(true).toBe(false, "Greeting message is not visible on landing page");
//                          });
//                  }
//                  else{
//                      expect(true).toBe(false, "Greeting message is not present");
//                      }
//              })
//              .catch(function () {
//                  expect(true).toBe(false, "Greeting message is not present");
//              });       
//          });
 
//      function login(user, pass,role){
//              Loginpage.getLoggedIn(user, pass);
//              browser.waitForAngularEnabled(false);
//              browser.sleep(12000);
//              var getCustomerTextField    =   element(by.id('customerName'));
//              if(role==true)
//              {
//                  getCustomerTextField
//                  .isPresent()
//                  .then(function (value) {
//                      if (value){
//                          browser.actions()
//                              .mouseMove(getCustomerTextField)
//                              .perform()
//                              .then(function (value2) {
//                                  browser.sleep(1000);
//                              })
//                              .catch(function (err) {
//                                  console.error(err);
//                              });
//                              getCustomerTextField
//                              .isDisplayed()
//                              .then(function (value) {
//                                  if (value){
//                                      selectCustomer.SelectCustomerByType('uia');
//                                      browser.waitForAngularEnabled(false);
//                                      browser.sleep(8000);
//                                  }
//                                  else{
//                                      expect(true).toBe(false, "Select customer page is not visible");
//                                  }
//                              })
//                              .catch(function () {
//                                  expect(true).toBe(false, "Select customer page is not visible");
//                              });
//                      }
//                      else{
//                          expect(true).toBe(false, "Select customer page is not present");
//                          }
//                  })
//                  .catch(function () {
//                      expect(true).toBe(false, "Select customer page is not present");
//                  });
//              }     
//                  //check for modal  
//                  home.startupModal
//                      .isPresent()
//                      .then(function (value) {
//                          if (value){ 
//                                  home.startupModal
//                                  .isDisplayed()
//                                  .then(function (value) {
//                                      if (value){
//                                          console.log("going to dismiss modal");
//                                          browser.sleep(5000);
//                                          home.modalDismissBtn.click();
//                                      }
//                                      else{
//                                          console.log("modal is not visible");
//                                      }
//                                  })
//                                  .catch(function (err) {
//                                      console.log(err);
//                                  });
//                          }
//                          else{
//                              console.log("Welcome modal is not present");
//                          }
//                      })
//                      .catch(function (err) {
//                          console.log(err);
//                      });
//      }
 
//      afterAll(function(done) {
//          process.nextTick(done);
//          browser.manage().deleteAllCookies();
//      });
 
//  });
 
 
 
 
 
//  // ----------------- Helping functions --------------------------
//  //Wait function for elements to appear on page
//  //Setting can be changed for different timeouts
//  function waitForElement(locator){
//      var EC = protractor.ExpectedConditions;
//      browser.wait(EC.visibilityOf(locator), 300000);
 
 
//  }