// <reference types="cypress" />

describe('Fixtures', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
  
    it('Fixtures Direct Access ', () => {

        cy.fixture('login.json').then( (data) => {

            cy.get('input[placeholder="Username"]').type(data.username);
            cy.get('input[placeholder="Password"]').type(data.password);
            cy.get('button[type="submit"]').click();
        })   
    })

    let userdata;
    before('Access through Hook for multiple it blocks ', () => {
        cy.fixture('login.json').then( (data) => {
        userdata = data;

        })
    })

    it.only('Access through Hook for multiple it blocks ', () => {

            cy.get('input[placeholder="Username"]').type(userdata.username);
            cy.get('input[placeholder="Password"]').type(userdata.password);
            cy.get('button[type="submit"]').click();
        })
        
})