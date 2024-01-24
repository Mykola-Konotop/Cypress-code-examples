const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    urlOMS: 'https://project-one.com',
    urlWMS: 'https://project-two.com'
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.js'
  },
});