import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import login from "../fixtures/login.json";
import loginActions from "../pages/login/loginActions";

Given('que acesso o sistema', () => {
  loginActions.accessSystem();
});

Given('que acesso o menu login', () => {
  loginActions.accessLoginMenu();
});

Given('que preencho o campo nome com o meu nome', () => {
  loginActions.fillUsernameField(login.userName);
});

Given('que preencho o campo senha com a minha senha', () => {
  loginActions.fillPasswordField(login.password);
})

When('clico para realizar o login', () => {
  loginActions.clickLoginButton();
})

When('que preencho o campo senha com uma senha incorreta', () => {
  loginActions.fillPasswordField('123456')
})

Then('devo ser direcionado para a minha página de usuário', () => {
  loginActions.verifyIfIsLogged();
})
