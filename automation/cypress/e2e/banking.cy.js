// describe('ParaBank Account Management', () => {
//     // // new user name
    // const username = `user_${Date.now()}`;
    // const password = 'TestPassword123';

    // before(() => {
    //     cy.clearCookies();
    //     cy.clearLocalStorage();
    // });

    // afterEach(() => {
    //     cy.log('Sub-module test complete');
    // });

    // //reg
    // it('should register a new user using custom command', () => {
    //     cy.registerUser(username, password);
        
    //     //reh works
    //     cy.contains('Your account was created successfully').should('be.visible');
        
    //     // Logout 
    //     cy.contains('Log Out').click();
    // });

    // //  LOGIN
    // it('login', () => {
    //     cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    //     // Login 
    //     cy.get('input[name="username"]').type(username);
    //     cy.get('input[name="password"]').type(password);
    //     cy.get('input[value="Log In"]').click();

    //     // check login 
    //     cy.contains('Accounts Overview').should('be.visible');
    //     cy.url().should('include', '/overview.htm');
    // });

    // it('pay bills', () => {
    //     //give all the indo n stuff
    //     cy.payBill('my bank account hehe', '500');

    //     // ver
    //     cy.contains('Bill Payment Complete').should('be.visible');
    // });
    // }); 
    describe('ParaBank Account Management', () => {
    
    // Helper function to generate unique data for every test
    const getFreshUser = () => ({
        username: `user_${Math.random().toString(36).substring(2, 9)}`,
        password: 'TestPassword123'
    });

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    

    it('should register a new user', () => {
        const user = getFreshUser();
        
        cy.registerUser(user.username, user.password);
        cy.contains('Your account was created successfully').should('be.visible');
        
        // No need to log out if the next test creates a fresh session
    });

    it('should allow login with valid credentials', () => {
        const user = getFreshUser();
        
        // SETUP: We must register the user first so they exist for this specific test
        cy.registerUser(user.username, user.password);
        cy.contains('Log Out').click();

        // ACT: Perform Login
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('input[name="username"]').type(user.username);
        cy.get('input[name="password"]').type(user.password);
        cy.get('input[value="Log In"]').click();

        // ASSERT
        cy.contains('Accounts Overview').should('be.visible');
        cy.url().should('include', '/overview.htm');
    });

    it('should pay bills successfully', () => {
        const user = getFreshUser();
        
        // SETUP: Register and ensure we are logged in
        cy.registerUser(user.username, user.password);

        // ACT: Pay Bill
        // Assuming your custom command handles navigation to the bill pay page
        cy.payBill('Company ABC', '500');

        // ASSERT
        cy.contains('Bill Payment Complete').should('be.visible');
    });
});


