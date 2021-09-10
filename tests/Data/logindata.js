
var LoginPage       = require('../../tests/smoke/login.spec.js');
module.exports  =   {

    creditCard_credentials:   {
        'Card_accountName':  'TestUser',
      firstData:    {
          'cardNumber': '4111111111111111',
          'expirayDate':    '1218'
      },
        Barclay:    {
          'cardNumber': '370000000000002',
            'cvc':  '7373'
        },
        Converge:   {
          'cardNumber': '4124939999999990',
            'alternative_cardNumber':   '5123456789012346',
            'expirayDate':  '1218',
            'cvv':  '100'
        }
    },
    qa_10 : {
        'username'  :   'umair.aslam.ssa@techtronix.biz',
        'password'  :   'Test_12345',
        'greeting_msg'  :   'Welcome, InviteManager ',
        'FedEx_Shipping_Account'    :   'FedEx - UI Automater  - 369364979',
        'UPS_Shipping_Account'  :   'UPS - Shan Raza - 9EE366',
        'SSA_UPS_featureName'   :   'UPS integration',
        'First_Data_Account_Name':  'First Data QA',
        admin_user:{
        'username'  :   'tm.automator',
        'password'  :   'tmautomator123',
        'greeting_msg'  :   'Welcome, TMAutomator ',
        },
        csa_user:{
            'username'  :   'tmautomator.csa@techtronix.biz',
            'password'  :   'tmautomator123',
            'greeting_msg'  :   'Welcome, TMAutomator ',
        },
        standard_user:{
            'username'  :   'tmautomator.user',
            'password'  :   'tmautomator123',
            'greeting_msg'  :   'Welcome, TMAutomator ',
        }
    },
};