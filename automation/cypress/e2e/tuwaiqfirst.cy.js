
// describe('OrangeHRM Dynamic User Test', () => {

//     before(() => {
//         cy.clearCookies();
//         cy.clearLocalStorage();
//     });

//     it('waterll org', function () {
//         //  Generate  username based on the current time
//         const uniqueID = Date.now();
//         const username = `user_${uniqueID}`; 

//         // VISIT LOGIN PAGE
//         n
//         cy.get('input[name="username"]').type('Admin')
//         cy.get('input[name="password"]').type('admin123')
//         cy.get('button[type="submit"]').click()

//         // NAVIGATE TO ADMIN & ADD
//         cy.get(':nth-child(1) > .oxd-main-menu-item').click()
//         cy.get('.orangehrm-header-container > .oxd-button').click()

//         // SELECT USER ROLE
//         cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
//         cy.get('.oxd-select-dropdown > :nth-child(3)').click()

//         // EMPLOYEE NAME HINT
//         cy.get('input[placeholder="Type for hints..."]').type('James');
//         cy.get('.oxd-autocomplete-dropdown', { timeout: 10000 })
//             .should('be.visible')
//             .contains('James Butler')
//             .click();

//         // USERNAME 
//         cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)

//         // SELECT STATUS
//         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
//         cy.get('.oxd-select-dropdown > :nth-child(2)').click()

//         // PASSWORDS
//         cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Easypeasy12345@')
//         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Easypeasy12345@')
        
//         // SAVE
//         cy.get('button[type="submit"]').click()

//         // ASSERTION: 
//         cy.get('.oxd-toast', { timeout: 10000 }).should('be.visible').and('contain', 'Successfully Saved')
//         cy.get('.oxd-toast').should('not.exist') // Wait for it to disappear before moving on

//         //DELETE

        
//         cy.contains('label', 'Username')
//             .parents('.oxd-input-group')
//             .find('input')
//             .type(username)

//         cy.get('button[type="submit"]').click({ force: true })
        
        
//         cy.wait(2000)

        
//         cy.contains('.oxd-table-row', username)
//             .find('.bi-trash')
//             .click()

//         // ASSERTION: Confirm Delete Modal
//         cy.get('.orangehrm-modal-header').should('be.visible').and('contain', 'Are you Sure?')
//         cy.get('.oxd-button--label-danger').click()

//         // ASSERTION: Success Message for Delete
//         cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Deleted')

//         // FINAL ASSERTION: Check that the user is actually gone
//         cy.contains(username).should('not.exist')

//         //Job
//         cy.wait(2000)
//         cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()

//         //Job title
//         cy.wait(2000)
//         cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()

//         //add button job title
//         cy.wait(2000)
//         cy.get('.oxd-button').click()

//         //typing job title
//         cy.wait(2000)
//         cy.get(':nth-child(2) > .oxd-input').type('trainig user')

//         //typing description
//         cy.wait(2000)
//         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('a')

//         //browse button
//         cy.wait(2000)
//         cy.get('.oxd-file-button').click()

//         //uploding icon
//         cy.wait(2000)
//         cy.get('.oxd-file-div > .oxd-icon').click();
        
//         //uploding file
//         cy.log('uploading file');
//         cy.get('input[type="file"]').selectFile('cypress/fixtures/lap3sc4.png', { force: true });

//         //adding note
//         cy.wait(2000);
//         cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('a')

//         //save
//         cy.wait(2000)
//         cy.get('.oxd-button--secondary').click()

//         //cancel
//         cy.wait(2000)
//         cy.get('.oxd-button--ghost').click()

//        //assertion: verify job title is added
// cy.wait(5000)
// cy.contains('training user').should('be.visible')

// //select job title from table
// cy.wait(5000)
// cy.contains('training user')
//   .parents('.oxd-table-row')
//   .find('input[type="checkbox"]')
//   .click()

// //delete job title
// cy.wait(5000)
// cy.get('.oxd-button--label-danger').click()

// //confirm delete
// cy.wait(5000)
// cy.get('.oxd-button--label-danger').contains('Yes, Delete').click()

// //assertion: verify job title is deleted
// cy.wait(5000)
// cy.contains('training user').should('not.exist')





// //info 
// cy.get(':nth-child(6) > .oxd-main-menu-item').click()
// cy.wait(2000)
// cy.get('[name="firstName"]').clear().type('yousef')
// cy.get('[name="middleName"]').clear().type('Mohammed')
// cy.get('[name="lastName"]').clear().type('al7arthi')
// cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('1234567890')
// cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('678645678')
// cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('35672890')
// cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2026-09-09')
// cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()

//     })
// })
