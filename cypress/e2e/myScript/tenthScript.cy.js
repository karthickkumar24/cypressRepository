// <reference types="cypress" />

describe('css checkboxes and radio buttons', () => {
    beforeEach(() => {
      cy.visit('https://artoftesting.com/samplesiteforselenium')
    })
  
    it('dropdown with select', () => {

        cy.get('#testingDropdown')
          .select('Database')
          .should('have.value', 'Database')
    })

    
    it('Force select a hidden', () => {
        cy.get('select>option').should('have.length', 4)
        cy.get('select#testingDropdown')
        .select('Database', { force: true })
        .invoke('val')
        .should('eq', 'Database')
        
    })

    /*it('Dynamic dropdowns', () => {
        cy.get('#testingDropdown').click().find('select>option').click({ multiple: true })
    })*/

}) 