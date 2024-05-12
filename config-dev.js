const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config.js')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, './.env.dev') })

const e2e = {
  ...baseConfig.e2e,
  env: {
    baseUrl: process.env.BASE_URL
  }
}

module.exports = defineConfig({
  ...baseConfig,
  e2e
})
