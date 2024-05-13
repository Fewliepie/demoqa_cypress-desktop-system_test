import practiceFormElements from "./practiceFormElements";

export default new (class practiceFormActions {
  accessPracticeFormMenu() {
    cy.visit(`${Cypress.env("baseUrl")}automation-practice-form`);
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  }


  fillFirstName(firstName) {
    cy.get(practiceFormElements.firstNameInput()).type(firstName);
  }

  fillLastName(lastName) {
    cy.get(practiceFormElements.lastNameInput()).type(lastName);
  }

  fillEmail(email) {
    cy.get(practiceFormElements.emailInput()).type(email);
  }

  selectGender(gender) {
    const genders = {
      Male: practiceFormElements.maleRadio(),
      Female: practiceFormElements.femaleRadio(),
      Other: practiceFormElements.otherRadio()
    };
    cy.get(genders[gender]).check({ force: true });
  }

  fillMobile(mobileNumber) {
    cy.get(practiceFormElements.mobileInput()).type(mobileNumber);
  }
 
/*@bug
  setBirthDate(date) {
    cy.get(practiceFormElements.birthDateInput()).type('{selectall}{backspace}').type(date).blur();
  } */

  fillSubject(subject) {
    cy.get(practiceFormElements.subjectsInput()).type(`${subject}{enter}`);
  }

  toggleHobby(hobby) {
    const hobbies = {
      Sports: practiceFormElements.sportsCheckbox(),
      Reading: practiceFormElements.readingCheckbox(),
      Music: practiceFormElements.musicCheckbox()
    };
    cy.get(hobbies[hobby]).check({ force: true });
  }

  fillAddress(address) {
    cy.get(practiceFormElements.addressInput()).type(address);
  }

  selectState(state) {
    cy.get(practiceFormElements.stateCombo()).type(`${state}{enter}`);
  }

  selectCity(city) {
    cy.get(practiceFormElements.cityCombo()).type(`${city}{enter}`);
  }

  clickSubmit() {
    cy.get(practiceFormElements.submitButton()).click();
  }



  verifyColumnData(lineIndex, data) {
    cy.get(practiceFormElements.dataTableValueCells(lineIndex))
    .invoke('text')
    .then((text) => {
      expect(text).to.eq(data);
    });
  }

  verifySubmittedData(data) {
    this.verifyColumnData(1, `${data.firstName} ${data.lastName}`)
    this.verifyColumnData(3, `${data.gender}`)
    this.verifyColumnData(4, `${data.mobileNumber}`)
    this.verifyColumnData(6, `${data.subject}`)
    this.verifyColumnData(7, `${data.hobbies}`)
    this.verifyColumnData(9, `${data.address}`)
    this.verifyColumnData(10, `${data.state} ${data.city}`)
  }

  fillAllFields(data) {
    this.fillFirstName(data.firstName);
    this.fillLastName(data.lastName);
    this.fillEmail(data.email);
    this.selectGender(data.gender);
    this.fillMobile(data.mobileNumber);
    //this.setBirthDate(data.birthDate);
    this.fillSubject(data.subject);
    data.hobbies.forEach(hobby => this.toggleHobby(hobby));
    this.fillAddress(data.address);
    this.selectState(data.state);
    this.selectCity(data.city);
  }
})();
