export default new (class practiceFormElements {
  firstNameInput = () => '#firstName'
  lastNameInput = () => '#lastName'
  emailInput = () => '#userEmail'
  maleRadio = () => '#gender-radio-1'
  femaleRadio = () => '#gender-radio-2'
  otherRadio = () => '#gender-radio-3'
  mobileInput = () => '#userNumber'
  birthDateInput = () => '#dateOfBirthInput'
  subjectsInput = () => '#subjectsInput'
  sportsCheckbox = () => '#hobbies-checkbox-1'
  readingCheckbox = () => '#hobbies-checkbox-2'
  musicCheckbox = () => '#hobbies-checkbox-3'
  inputPicture = () => '#uploadPicture'
  addressInput = () => '#currentAddress'
  stateCombo = () => '#state'
  cityCombo = () => '#city'
  submitButton = () => '#submit'
  dataTableValueCells = (index) => `tbody > tr:nth-child(${index}) > td:nth-child(2)`
})
 