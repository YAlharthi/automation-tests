describe('Job Titles Management', () => {
    before(() => {
   
    cy.login('Admin', 'admin123')
    
   
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

    it('should add and remove a job title', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click(); // Job Tab
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click(); // Job Titles
        
        cy.get('.oxd-button').click(); // Add button
        cy.get(':nth-child(2) > .oxd-input').type('training user');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Description here');
        
        // File Upload
        cy.get('input[type="file"]').selectFile('cypress/fixtures/lap3sc4.png', { force: true });
        
        cy.get('.oxd-button--secondary').click(); // Save
        cy.contains('training user').should('be.visible');

        //  Delete
        cy.contains('training user').parents('.oxd-table-row').find('input[type="checkbox"]').click({force: true});
        cy.get('.oxd-button--label-danger').click();
        cy.get('.oxd-button--label-danger').contains('Yes, Delete').click();
        cy.contains('training user').should('not.exist');
    });
});