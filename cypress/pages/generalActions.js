export default new (class generalActions {
  checkMessagem(message){
    cy.contains(message)
  }
})();