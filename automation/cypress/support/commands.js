
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//

Cypress.Commands.add('login', (user, pass) => {
  cy.session([user, pass], () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type(user)
    cy.get('input[name="password"]').type(pass)
    cy.get('button[type="submit"]').click()
    // login 
    cy.url().should('include', '/dashboard')
  })
})

Cypress.Commands.add('registerUser', (username, password) => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    
    
    cy.get('input[id="customer.firstName"]').type('Yousef');
    cy.get('input[id="customer.lastName"]').type('Alharthi');
    cy.get('input[id="customer.address.street"]').type('123 Testing Lane');
    cy.get('input[id="customer.address.city"]').type('Riyadh');
    cy.get('input[id="customer.address.state"]').type('Central');
    cy.get('input[id="customer.address.zipCode"]').type('12345');
    cy.get('input[id="customer.phoneNumber"]').type('0500000000');
    cy.get('input[id="customer.ssn"]').type('999-00-9999');

    cy.get('input[id="customer.username"]').type(username);
    cy.get('input[id="customer.password"]').type(password);
    cy.get('input[id="repeatedPassword"]').type(password);

    cy.get('input[value="Register"]').click();
});

Cypress.Commands.add('payBill', (payeeName, amount) => {
    
    cy.contains('Bill Pay').click();

    // form
    cy.get('[name="payee.name"]').type(payeeName);
    cy.get('[name="payee.address.street"]').type('123 Test St');
    cy.get('[name="payee.address.city"]').type('Riyadh');
    cy.get('[name="payee.address.state"]').type('Central');
    cy.get('[name="payee.address.zipCode"]').type('12345');
    cy.get('[name="payee.phoneNumber"]').type('0500000000');
    cy.get('[name="payee.accountNumber"]').type('1234567890');
    cy.get('[name="verifyAccount"]').type('1234567890');
    
    // $$$$$$$$$
    cy.get('[name="amount"]').type(amount); 
    cy.get('[name="fromAccountId"]').select(0);

   
    cy.get('input[value="Send Payment"]').click();
});
 