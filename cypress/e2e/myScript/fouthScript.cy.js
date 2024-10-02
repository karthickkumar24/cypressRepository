/// <reference types="cypress" />

describe('assertions', () => {
    beforeEach(() => {
      cy.visit('https://artoftesting.com/samplesiteforselenium')
    })
  
    it('checking assertions', () => {
     //should
      cy.url().should('contain','samplesiteforselenium')
      cy.url().should('include','artoftesting.com')
      cy.url().should('eq','https://artoftesting.com/samplesiteforselenium')
    })

    it('checking assertions', () => {
        cy.url().should('contain', 'samplesiteforselenium')
        .should('include','artoftesting.com')
        .should('eq','https://artoftesting.com/samplesiteforselenium')  
    })

    it('checking assertions', () => {

        cy.url().should('contain','samplesiteforselenium')
        .and('include','artoftesting.com')
        .and('eq','https://artoftesting.com/samplesiteforselenium')
        .and('not.contain','samplesiteforsfnium')
        cy.title().should('include','Sample Webpage for Selenium Automation Practice | ArtOfTesting')
        cy.get('.main-title > a').should('be.visible')
        cy.get('.main-title > a').should('exist')

      })  
     
      it.only('checking assertions', () => {

        cy.get('input#fname').type('firstname')
        cy.get('input#fname').should('have.value','firstname')
      })  

    })
  