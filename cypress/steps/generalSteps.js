import { Then } from "@badeball/cypress-cucumber-preprocessor";
import generalActions from "../pages/generalActions";

Then('deve ser apresentada a mensagem {string}', (message) => {
  generalActions.checkMessagem(message)
})