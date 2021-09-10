
  
// /**
//  * Created by shaanlashari on 09/07/2017.
//  */

// var Loginpage = function () {

//     var div_Container       = element(by.className('container')); //alternate xpath("//div[@class="container"]")
//     var login_form          = element(by.xpath("//form[@name='form']"));
//     var getPlaceHolder      = element(by.xpath("//form[@name='form']//child::h1"));
//     var getUsername         = element(by.id("username"));
//     var getPassword         = element(by.id("password")); 
//     var getRadioButton      = element(by.id("keepMeLogged"));
//     var getLoginButton       = element(by.id("login"));
//     var getUsernameWarning  = element(by.xpath("//input[@id='username']//following::div[1]"));
//     var getPasswordWarning  = element(by.xpath("//input[@id='password']//following::div[1]"));
//     var getNgDangerAlert    = element(by.xpath("//div[@class='alert alert-danger alert-custom ng-star-inserted']"));
//     var getForgotPassword_link  =  element(by.xpath("//a[@href='/app/reset']"));
//     var wrong_username_password =   element(by.css('.alert'));
//     var Register_link           =   element(by.xpath("//a[@href='/app/register']"));
//     //var noResponse_fromServer   =   element(by.css('.alert'));

//     var EC = protractor.ExpectedConditions;


//     this.get_div_container  =   function () {
//         return div_Container;
//     };
//     this.getLogin_form  =   function () {
//       return login_form;
//     };

//   this.getUsername_field  =   function () {
//       return getUsername;
//     };
//     this.getPasswordWarningText = function () {
//       return getPasswordWarning.getText();
//     };
//     this.getPassword_field  =   function () {
//         return getPassword;
//     };

//     this.getWrong_username_password_loc =   function () {
//         return wrong_username_password;
//     };

//     this.getRegisterlinkloc = function () {
//       return Register_link;
//     };

//     this.getPlaceHolderText =   function () {
//       browser.wait(EC.presenceOf(getPlaceHolder), 300000);
//       return  getPlaceHolder.getText();
//     };

//     this.getForgotPassword_link_loc = function () {
//         return getForgotPassword_link;
//     };

//     this.getLoggedIn = function (Username, Password) {
// console.log(Username);
// console.log(Password);
//         browser.wait(EC.presenceOf(getUsername), 300000);
//         browser.actions()
//           .mouseMove(getUsername)
//           .perform()
//           .then(function (value) {
//             browser.sleep(2000);
//           })
//           .catch(function (err) {
//             console.error(err);
//           });
//         browser.wait(EC.visibilityOf(getUsername), 300000);
//         getUsername.click()
//           .then(function (value) {
//             browser.sleep(1000);
//             getUsername.sendKeys(Username);
//         })
//           .catch(function (reason) {
//             console.error(reason);
//           });

//         browser.wait(EC.presenceOf(getPassword), 300000);
//         browser.actions()
//           .mouseMove(getPassword)
//           .perform()
//           .then(function (value) {
//             browser.sleep(2000);
//           })
//           .catch(function (err) {
//             console.error(err);
//           });
//         browser.wait(EC.visibilityOf(getPassword), 300000);
//         getPassword.click()
//           .then(function (value) {
//             browser.sleep(1000);
//             getPassword.sendKeys(Password);
//           })
//           .catch(function (reason) {
//             console.error(reason);
//           });

//         browser.wait(EC.presenceOf(getRadioButton), 300000);
//         browser.actions()
//           .mouseMove(getRadioButton)
//           .perform()
//           .then(function (value) {
//             browser.sleep(2000);
//           })
//           .catch(function (err) {
//             console.error(err);
//           });
//         getRadioButton.click();

//         browser.wait(EC.presenceOf(getLoginButton), 300000);
//         browser.actions()
//           .mouseMove(getLoginButton)
//           .perform()
//           .then(function (value) {
//             browser.sleep(2000);
//           })
//           .catch(function (err) {
//             console.error(err);
//           });
//         browser.wait(EC.visibilityOf(getLoginButton), 300000);
//         browser.executeScript('window.scrollTo(0,7500);')
//           .then(function (value) {
//             browser.sleep(1000);
//           })
//           .catch(function (err) {
//             console.error(err);
//           });
//         getLoginButton.click();

//     };
//     this.getLoginButtonText = function (/*cb*/) {
//         browser.wait(EC.visibilityOf(getLoginButton), 300000);
//         return getLoginButton.getText();
//         // .then(function(text){
//         //     return cb(null, text);
//         // }).catch(function(err){
//         //     return cb(Error("Could not find text for login button!"));
//         // });
//     };
//     this.getUsernameWarningText = function () {
//       browser.wait(EC.visibilityOf(getLoginButton), 300000);
//       return getUsernameWarning.getText();
//     };


//     // this.getNoResponse_fromServer = function () {
//     //     return noResponse_fromServer;
//     // };

//     this.getPasswordWarningText = function () {
//         return getPasswordWarning.getText();
//     };
//     this.getNgDangerAlert = function () {
//       browser.wait(EC.visibilityOf(getNgDangerAlert), 300000);
//       return getNgDangerAlert.getText();
//   };
//     this.tryLogInWithEmptyPassword =function (Username, Password) {
//       browser.wait(EC.presenceOf(getUsername), 300000);
//       browser.actions()
//         .mouseMove(getUsername)
//         .perform()
//         .then(function (value) {
//           browser.sleep(2000);
//         })
//         .catch(function (err) {
//           console.error(err);
//         });
//       browser.wait(EC.visibilityOf(getUsername), 300000);
//       getUsername.click()
//         .then(function (value) {
//           browser.sleep(1000);
//           getUsername.sendKeys(Username);
//         })
//         .catch(function (reason) {
//           console.error(reason);
//         });

//       browser.wait(EC.presenceOf(getPassword), 300000);
//       browser.actions()
//         .mouseMove(getPassword)
//         .perform()
//         .then(function (value) {
//           browser.sleep(2000);
//         })
//         .catch(function (err) {
//           console.error(err);
//         });
//       browser.wait(EC.visibilityOf(getPassword), 300000);
//       getPassword.click()
//         .then(function (value) {
//           browser.sleep(1000);
//           getPassword.sendKeys(Password);
//         })
//         .catch(function (reason) {
//           console.error(reason);
//         });

//       browser.wait(EC.presenceOf(getRadioButton), 300000);
//       browser.actions()
//         .mouseMove(getRadioButton)
//         .perform()
//         .then(function (value) {
//           browser.sleep(2000);
//         })
//         .catch(function (err) {
//           console.error(err);
//         });
//       getRadioButton.click();

//       browser.wait(EC.presenceOf(getLoginButton), 300000);
//       browser.actions()
//         .mouseMove(getLoginButton)
//         .perform()
//         .then(function (value) {
//           browser.sleep(2000);
//         })
//         .catch(function (err) {
//           console.error(err);
//         });
//       browser.wait(EC.visibilityOf(getLoginButton), 300000);
//       browser.executeScript('window.scrollTo(0,7500);')
//         .then(function (value) {
//           browser.sleep(1000);
//         })
//         .catch(function (err) {
//           console.error(err);
//         });
//       getLoginButton.click();
//     };
//     this.tryLogInWithEmptyUserName = function (Username, Password) {
//       browser.wait(EC.presenceOf(getUsername), 300000);
//       browser.actions()
//         .mouseMove(getUsername)
//         .perform()
//         .then(function (value) {
//           browser.sleep(2000);
//         })
//         .catch(function (err) {
//           console.error(err);
//         });
//       browser.wait(EC.visibilityOf(getUsername), 300000);
//       getUsername.click()
//         .then(function (value) {
//           browser.sleep(1000);
//           getUsername.sendKeys(Username);
//         })
//         .catch(function (reason) {
//           console.error(reason);
//         });

//       browser.wait(EC.presenceOf(getPassword), 300000);
//       browser.actions()
//         .mouseMove(getPassword)
//         .perform()
//         .then(function (value) {
//           browser.sleep(2000);
//         })
//         .catch(function (err) {
//           console.error(err);
//         });
//       browser.wait(EC.visibilityOf(getPassword), 300000);
//       getPassword.click()
//         .then(function (value) {
//           browser.sleep(1000);
//           getPassword.sendKeys(Password);
//         })
//         .catch(function (reason) {
//           console.error(reason);
//         });

//       browser.wait(EC.presenceOf(getRadioButton), 300000);
//       browser.actions()
//         .mouseMove(getRadioButton)
//         .perform()
//         .then(function (value) {
//           browser.sleep(2000);
//         })
//         .catch(function (err) {
//           console.error(err);
//         });
//       getRadioButton.click();
//       browser.sleep(1000);

//       browser.wait(EC.presenceOf(getLoginButton), 300000);
//       browser.actions()
//           .mouseMove(getLoginButton)
//           .perform()
//           .then(function (value) {
//             browser.sleep(2000);
//           })
//           .catch(function (err) {
//             console.error(err);
//           });
//       browser.wait(EC.visibilityOf(getLoginButton), 300000);
//       browser.executeScript('window.scrollTo(0,7500);')
//           .then(function (value) {
//             browser.sleep(1000);
//           })
//           .catch(function (err) {
//             console.error(err);
//           });
//       getLoginButton.click();
//     };
// };

// module.exports = Loginpage;
