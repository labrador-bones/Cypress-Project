/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})
// returning false here prevents Cypress from
// failing the test

describe('Adding a Client', function () {

beforeEach(() => {
    cy.login('bacani.c@labrador-company.com');
    cy.visit('https://www.fr.digital-report.net:8443/en/admin/collaborators/');
});

it('Collaborator / Admin', () => {
    cy.get('h1').should('have.text', 'Collaborators');
    cy.get('.text-lg-right > .btn').click();
    cy.get('#user_lastname').type('Pitt');
    cy.get('#user_firstname').type('Brad');
    cy.get('#user_email').type('test@me.com');
});

it('Collaborator / PM', () => {
    cy.get('h1').should('have.text', 'Collaborators');
    cy.get('.text-lg-right > .btn').click();
    cy.get('#user_lastname').type('Pitt');
    cy.get('#user_firstname').type('Brad');
    cy.get('#user_email').type('test@me.com');
    cy.get('b').click(); 


});




});