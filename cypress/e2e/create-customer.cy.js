/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
});



    beforeEach(() => {
        cy.login('bacani.c@labrador-company.com');
    });
    
it('Create Customer', ()=> {

    cy.visit('https://www.fr.digital-report.net:8443/en/admin/customers/');
    cy.get('.btn-primary').click();
    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/en/admin/customers/new')
    });
    cy.get('#customer_name').type('Bones Bacani');
    cy.get('#customer_dataPolicyLink').type('https://google.com');
    cy.get('#customer_globalMail').type('test@me.com');
    cy.get('.btn').click();
});



