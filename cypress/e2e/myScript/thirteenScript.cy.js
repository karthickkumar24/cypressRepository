// <reference types="cypress" />

describe('Fixtures data driven', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
  
    it('Fixtures using data driven', () => {

        cy.fixture("profile").then( (data) => {

          data.forEach ((userdata) => {
            cy.get('input[placeholder="Username"]').type(userdata.username);
            cy.get('input[placeholder="Password"]').type(userdata.password);
            cy.get('button[type="submit"]').click();

            if(userdata.username == 'Admin' && userdata.password=='admin123')
            {
                cy.get('p.oxd-userdropdown-name').click();
                cy.get(':nth-child(4) > a.oxd-userdropdown-link').click();
            } else 
            {
                cy.get('div.oxd-alert-content.oxd-alert-content--error').should('have.text', userdata.expected);
            }

          })
        })   
    })

})