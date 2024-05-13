import bookStoreElements from "./bookStoreElements";

export default new (class bookStoreActions {
  accessBookstore() {
    cy.visit(`${Cypress.env("baseUrl")}books`);
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  }

  fillSearchField(search) {
    cy.get(bookStoreElements.searchInput()).type(`${search}{enter}`)
  }

  verifyTitleResult(title) {
    cy.get(bookStoreElements.titleColumnResult())
    .invoke('text')
    .then((text) => {
      expect(text).to.eq(title);
    });
  }

  verifyAuthorResult(author) {
    cy.get(bookStoreElements.authorColumnResult())
    .invoke('text')
    .then((text) => {
      expect(text).to.eq(author);
    });
  }

  verifyPublisherResult(publisher) {
    cy.get(bookStoreElements.publisherColumnResult())
    .invoke('text')
    .then((text) => {
      expect(text).to.eq(publisher);
    });
  }
})