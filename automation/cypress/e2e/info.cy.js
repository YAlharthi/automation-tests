// before(() => {
//         cy.clearCookies();
//         cy.clearLocalStorage();
//     });

// describe('My Info Management', () => {
//     beforeEach(() => {
    
//     cy.login('Admin', 'admin123')
    
    
//    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
// })

//     it('should update personal information', () => {
        
//         cy.get(':nth-child(6) > .oxd-main-menu-item').click(); // My Info
        
//         cy.get('[name="firstName"]').clear().type('yousef');
//         cy.get('[name="middleName"]').clear().type('Mohammed');
//         cy.get('[name="lastName"]').clear().type('al7arthi');
        
//         // Employee ID
//         cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('1234567890');
        
//         // Date Picker
//         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
//           .clear()
//           .type('2026-09-09');
          
//         cy.get('button[type="submit"]').first().click();
//         cy.get('.oxd-toast').should('be.visible');
//     });
// });