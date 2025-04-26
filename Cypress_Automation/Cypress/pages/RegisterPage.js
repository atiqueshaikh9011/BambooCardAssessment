class RegisterPage {
  navigate() {
    cy.visit('/customer/account/create/');
  }

  fillRegistrationForm(firstName, lastName, email, password) {
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);
  }

  submit() {
    cy.get('button[title="Create an Account"]').click();
  }
}

export default new RegisterPage();
