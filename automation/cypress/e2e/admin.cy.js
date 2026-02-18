describe('User Management', () => {
    const uniqueID = Date.now();
    const username = `user_${uniqueID}`;

    before(() => {
    
    cy.login('Admin', 'admin123')
    
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

    it('should create and delete a new user', () => {
        // go Admin
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        cy.get('.orangehrm-header-container > .oxd-button').click();

        // Fill Form
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown > :nth-child(3)').click();
        cy.get('input[placeholder="Type for hints..."]').type('James');
        cy.get('.oxd-autocomplete-dropdown', { timeout: 10000 }).contains('James Butler').click();
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        
        // Status and Password
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown > :nth-child(2)').click();
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Easypeasy12345@');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Easypeasy12345@');
        
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-toast').should('contain', 'Successfully Saved');

        // Delete Logic
        cy.contains('label', 'Username').parents('.oxd-input-group').find('input').type(username);
        cy.get('button[type="submit"]').click({ force: true });
        cy.contains('.oxd-table-row', username).find('.bi-trash').click();
        cy.get('.oxd-button--label-danger').contains('Yes, Delete').click();
        cy.get('.oxd-toast').should('contain', 'Successfully Deleted');
    });
});