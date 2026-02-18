describe('OrangeHRM - Suite Level Hooks (Before/After)', () => {

    before(() => {
        // SETUP: Run once before the entire suite
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
    });

    after(() => {
        // CLEANUP: Run once after everything is finished
        cy.log('Suite execution complete.');
    });

    it('Dynamic User, Job Management, and Personal Info', function () {
        const uniqueID = Date.now();
        const username = `user_${uniqueID}`; 

        // --- SECTION 1: CREATE USER ---
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown > :nth-child(3)').click();
        cy.get('input[placeholder="Type for hints..."]').type('James');
        cy.contains('.oxd-autocomplete-dropdown', 'James Butler', { timeout: 10000 }).click();
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown > :nth-child(2)').click();
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Easypeasy12345@');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Easypeasy12345@');
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-toast').should('contain', 'Successfully Saved');

        // --- SECTION 2: DELETE USER ---
        cy.get('.oxd-toast').should('not.exist');
        cy.contains('label', 'Username').parents('.oxd-input-group').find('input').type(username);
        cy.get('button[type="submit"]').click({ force: true });
        cy.contains('.oxd-table-row', username).find('.bi-trash').click();
        cy.get('.oxd-button--label-danger').contains('Yes, Delete').click();
        cy.get('.oxd-toast').should('contain', 'Successfully Deleted');

        // --- SECTION 3: JOB TITLE MANAGEMENT ---
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click(); // Job Tab
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click(); // Job Titles
        cy.get('.oxd-button').click(); // Add Button
        cy.get(':nth-child(2) > .oxd-input').type('training user');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Description content');
        cy.get('input[type="file"]').selectFile('cypress/fixtures/lap3sc4.png', { force: true });
        cy.get('.oxd-button--secondary').click(); // Save

        // --- SECTION 4: DELETE JOB TITLE ---
        cy.contains('training user').parents('.oxd-table-row').find('input[type="checkbox"]').click({force: true});
        cy.get('.oxd-button--label-danger').click();
        cy.get('.oxd-button--label-danger').contains('Yes, Delete').click();

        // --- SECTION 5: MY INFO UPDATE ---
        cy.get(':nth-child(6) > .oxd-main-menu-item').click();
        cy.get('[name="firstName"]').clear().type('yousef');
        cy.get('[name="middleName"]').clear().type('Mohammed');
        cy.get('[name="lastName"]').clear().type('al7arthi');
        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('1234567890');
    });
});