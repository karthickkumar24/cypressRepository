/// <reference types="cypress" />

describe('samplesiteforselenium', () => {
    beforeEach(() => {
      cy.visit('https://artoftesting.com/samplesiteforselenium')
    })
  
    it('search Useful Resources', () => {
 
      cy.get('div h2+ul>li').length
      let linkslength = cy.get('div h2+ul>li').length
      cy.log(linkslength)
      cy.get('div h2+ul>li').each(($li, index) => {
        cy.log($li.text());
      })

        cy.get('div h2+ul>li a').each(($li, index) => {
        cy.get($li).should('have.attr', 'href')
        const herf = $li.attr('href');
        cy.log(herf);

      })

    })
})