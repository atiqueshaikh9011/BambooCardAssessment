import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

describe('Registration and Login Validation', () => {
  beforeEach(() => {
    cy.fixture('userData').then(function(data) {
      this.data = data;
    });
  });

  it('Register a new user and validate login', function() {
    RegisterPage.navigate();
    RegisterPage.fillRegistrationForm(this.data.firstName, this.data.lastName, this.data.email, this.data.password);
    RegisterPage.submit();

    cy.contains('Thank you for registering').should('be.visible');

    cy.get('.account > .action').click(); // logout
    LoginPage.navigate();
    LoginPage.login(this.data.email, this.data.password);

    cy.contains('Welcome, ' + this.data.firstName).should('be.visible');
  });
});

