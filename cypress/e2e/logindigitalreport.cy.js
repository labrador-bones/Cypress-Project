///reference types = "cypress"/>

describe('Login Test explanation in cypress',()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Login Scenario', ()=> {

        cy.visit('https://www.fr.digital-report.net:8443/en/admin/login')
        cy.get('#inputEmail').type("deleon.j@labrador-company.com")
        cy.get('#inputPassword').type('DigitalReport123!')
        cy.get('.btn').click()
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/customers/')
        cy.get('h1').should('have.text', 'Customers')

    });
});