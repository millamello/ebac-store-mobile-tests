export const config = {
    // runner: 'local',
     //port: 4723,
  
      
    user: 'oauth-mello.milla1-943fa', //usuário retirado do Saucelabs
    key: 'a7941cf8-1927-4aa8-87ec-50e20566dd1a', //senha estava errada, coloquei de forma correta
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
 
  
      specs: [
          './test/specs/**/*.js'
      ],
      maxInstances: 1,
      capabilities: [
         // {
        //  platformName: 'Android',
        //  'appium:deviceName': 'ebac-qe',
        //  'appium:platformVersion': '9.0',
        //  'appium:automationName': 'UiAutomator2',
        //  'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        //  'appium:appWaitActivity': '.MainActivity',
        //  'appium:disableIdLocatorAutocompletion': true
        //   }
  
          {
              platformName: 'Android',
              'appium:app': 'storage:filename=ebacshop (1).aab', 
              'appium:deviceName': 'Samsung.*',
              'appium:platformVersion': '10',
              'appium:automationName': 'UiAutomator2',
              'appium:disableIdLocatorAutocompletion': true,
              'sauce:options': {
                 build: 'appium-build-teste-ebacshop',
                 name: 'Ebac Shop teste',
                 deviceOrientation: 'PORTRAIT',
                 appiumVersion: 'latest'
              },
            }
      ],
      logLevel: 'info',
      waitforTimeout: 10000,
      connectionRetryTimeout: 120000,
      connectionRetryCount: 3,
      framework: 'mocha',
      reporters: ['spec'],
      mochaOpts: {
          ui: 'bdd',
          timeout: 60000
      },
  }