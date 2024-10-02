/// <reference types="cypress" />

describe('css checkboxes and radio buttons', () => {
    beforeEach(() => {
      cy.visit('https://artoftesting.com/samplesiteforselenium')
    })
  
    it('if else loop condition', () => {

        cy.get("input#male").invoke('val').then((sometext) => {
         if (sometext === 'female') {
             cy.get("input#male").check().should('be.checked')            
         } else {
             cy.get("input#female").should('not.be.checked')
         }
         
        })
     })

     it('if else loop condition', () => {
        cy.get('input#male').then(($input) => {
            const val = $input.val()
            if (val === 'male') {
                cy.get("input#male").check().should('be.checked')            
            } else {
                cy.get("input#female").should('not.be.checked')
            }  
        })
     })
})