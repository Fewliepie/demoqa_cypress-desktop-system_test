import loginElements from "./loginElements";

export default new (class loginActions {

  accessSystem() {
    cy.visit(`${Cypress.env("baseUrl")}`);
  }
  
  accessLoginMenu() {
    cy.visit(`${Cypress.env("baseUrl")}login`);
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  }

  verifyIfIsLogged() {
    cy.get(loginElements.userNameLabel()).should('be.visible')
  }
  
  fillUsernameField(name) {
    cy.get(loginElements.userNameInput()).type(name, { force:true });
  }
  
  fillPasswordField(password) {
    cy.get(loginElements.passwordInput()).type(password, { force:true })
  }
  
  clickLoginButton() {
    cy.get(loginElements.loginButton()).click()
  }

})();
