// <reference types="cypress" />

describe('css checkboxes and radio buttons', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')
    })
  
    it.skip('Automate select dropdowns', () => {
        cy.get("textarea[title='Search']").type('cypress automation')
        cy.contains('cypress automation tool tutorial').click()
    })

    it('Dynamic dropdowns', () => {
       cy.get("textarea[name='q']").type('cypress automation')

       cy.wait(1000)

       cy.get('').should('have.length', 13)

       cy.get('div.wM6W7d>span').each(($el, index, $list) => {
        if ($el.text() === 'cypress automation ppt') {
          cy.wrap($el).click()
           }
        })

        cy.get("textarea[name='q']").should('have.value', 'cypress automation ppt')
    })

})