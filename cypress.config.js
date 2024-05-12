const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild')


module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  reporter: 'junit',

  reporterOptions: {
    mochaFile: 'cypress/reports/junit/test-results-[hash].xml',
    toConsole: true
  },

  e2e: {
    specPattern: '**/*.feature',
    async setupNodeEvents(on, config) {
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      )

      await addCucumberPreprocessorPlugin(on, config)

      return config
    }
  }
})
