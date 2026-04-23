const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      allureWriter(on, config);
      return config;
    },
    env: {
      stepDefinitions: "cypress/e2e/step-definitions/**/*.js",
      allure: true,
      allureResultsPath: "allure-results"
    }
  },
});