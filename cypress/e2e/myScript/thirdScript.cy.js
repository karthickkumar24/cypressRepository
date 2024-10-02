/// <reference types="cypress" />

describe('css checkboxes and radio buttons', () => {

    before(() => {
      cy.log('Launch the Application')
    })

    beforeEach(() => {
      cy.visit('https://artoftesting.com/samplesiteforselenium')
    })
  
    it.skip('checking radio buttons', () => {
      cy.get("input#male").should('be.visible')
      cy.get("input#female").should('be.visible')
      cy.get("input#male").check().should('be.checked')
      cy.get("input#female").should('not.be.checked')
    })

    it('checking checkboxes', () => {
        cy.get('.Automation[value="Automation"]').should('be.visible')
        cy.get('.Automation[value="Automation"]').check().should('be.checked')
        cy.get('.Performance[value="Performance"]').check().should('be.checked')
        cy.get('.Performance[value="Performance"]').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check()

        cy.get('input[type="checkbox"]').first().check()
        cy.get('input[type="checkbox"]').last().check()
      })
  
      afterEach(() => {
        cy.log('application launched successfully')
      })

      after(() => {
        cy.log('scripted executed')
      })

    })
  