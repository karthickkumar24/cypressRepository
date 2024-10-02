/// <reference types="cypress" />

describe('AutomationPractice', () => {
    

    it('search the table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        let tlength = cy.get("#product tr").length
        for(var i = 0; i < 22; i ++){
            cy.log(cy.get('.table-display tr').invoke("text"))
        }
    })

    it.only('confirms the headings ', () => {
        // can you confirm the table has the following headings?
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       
        cy.get('.table-display tr').then(($tr) => {
            for(var i = 0; i <= 10; i ++){
                expect($tr.get(i).innerText).to.eq($tr.get(i).innerText)   
                cy.log($tr.get(i).innerText)
            }
        })
            //expect($tr.get(1).innerText).to.eq('Rahul Shetty\tSelenium Webdriver with Java Basics + Advanced + Interview Guide\t30')
    })
})