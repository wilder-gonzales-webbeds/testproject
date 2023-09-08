const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.dotwconnect.com'
  },
  screenshotOnRunFailure: false,
  video: false,
});
