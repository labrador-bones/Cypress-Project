/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
 
    return false
})
// returning false here prevents Cypress from
// failing the test

describe('login on report page', function () {
 
it ('login page', function(){
    cy.visit('https://www.fr.digital-report.net:8443/en/admin/login');
    cy.get('#inputEmail').type('dhaouadi.s@labrador-company.com');
    cy.get('#inputPassword').type('Souzie@2016');
    cy.get('.btn').click();
    cy.visit('https://www.fr.digital-report.net:8443/en/admin/reports/')
    cy.get('.mb-0').should('have.text','Reports')
    cy.pause();
});
});