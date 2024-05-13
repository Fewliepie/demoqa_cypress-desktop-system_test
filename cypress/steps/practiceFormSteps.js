import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import practiceFormData from '../fixtures/practiceFormData.json'
import practiceFormActions from '../pages/practiceForm/practiceFormActions'

Given('que eu acesse o o menu Practice Form', () => {
  practiceFormActions.accessPracticeFormMenu()
})

Given('que preencho todos os campos com dados válidos', () => {
  practiceFormActions.fillAllFields(practiceFormData)
})

Given('clico para enviar o formulário', () => {
  practiceFormActions.clickSubmit()
})


Then('os dados que submeti devem ser apresentados', () => {
  practiceFormActions.verifySubmittedData(practiceFormData)
})