/// <reference types="cypress" />

describe('css checkboxes and radio buttons', () => {
    beforeEach(() => {
      cy.visit('https://artoftesting.com/samplesiteforselenium')
    })
  
    it('switch case', ()  => {
            let radiobutton = 'Male'
        switch (radiobutton) { 
            case 'Male': 
              cy.get("input#male").check()
                .should('be.checked')
              break; 
            case 'Female':  
              cy.get("input#female")
                .should('be.checked')
              break; 
            default:
              cy.log("invalid radiobutton option");
                break; 
            } 
        })
   })
  