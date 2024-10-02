/// <reference types="cypress" />

describe('css checkboxes and radio buttons', () => {
    beforeEach(() => {
      cy.visit('https://artoftesting.com/samplesiteforselenium')
    })
  
    it('if else loop condition', () => {

        cy.get('input[type="checkbox"]').then(($input) => {
            const val = $input.val()
            if (val === 'Automation') {
                cy.get('.Automation[value="Automation"]').check()           
            } else {
                cy.get('.Performance[value="Performance"]').check() 
            }  
        })
    })

    it('checks all checkboxes with one command', () => {
        cy.get('input[type="checkbox"]')
          .as('checkboxes')
          .check()
    
        cy.get('@checkboxes')
          .each(checkbox => {
            expect(checkbox[0].checked).to.equal(true)
          })
      })

      it('checks all checkboxes with one command', () => {
        cy.get('input[type="checkbox"]').each(($check) => {
            cy.wrap($check).check()
          })
      })

      it('checks all checkboxes with one command', () => {
        cy.get('input[type="checkbox"]').then((checkbox) => {
           
            for(var i = 0; i < checkbox.length ; i ++){
                cy.get(checkbox[i]).check().should('be.checked')
            }
          })
      })

      
      it.only('checks all checkboxes with one command', () => {
        cy.get('input[type="checkbox"]').then((checkbox) => {
           
            for(var i = checkbox.length - 1; i >= 0 ; i --){
                cy.get(checkbox[i]).check().should('be.checked')
            }
          })
      })


})