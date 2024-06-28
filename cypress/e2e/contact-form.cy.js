/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})

describe('Adding a Client', function () {

    beforeEach(() => {
        cy.login('bacani.c@labrador-company.com');
    });
 
    it('Contact Form', ()=> {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/customers/');
        cy.get(':nth-child(4) > .menu-link > .menu-icon').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/reports/')
        });
        cy.get('[href="//atos-test-pascal-2023.fr.digital-report.net:8443?securityKey=528be0151b318e2062e692aef906174c"]').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://atos-test-pascal-2023.fr.digital-report.net:8443/?securityKey=528be0151b318e2062e692aef906174c');
        cy.get('#support-btn').click();
        cy.get('#form_submission_email').type('test@me.com');
        cy.get('#form_submission_lastname').type('Khalifa');
        cy.get('#form_submission_firstname').type('Bones');
        cy.get('#form_submission_company').type('Atos');
        cy.get('#form_submission_message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
        cy.get('.rgpd > .form-check > .form-check-label').click();
        cy.get('#form_submission_submit').click();
        cy.get('#support-confirmation-popin > .panel-wrap > .panel-content > .panel-title > .title').should('have.text', 'Mail envoyé');

    });

    it('Contact Form (without email)', ()=> {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/customers/');
        cy.get(':nth-child(4) > .menu-link > .menu-icon').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/reports/')
        });
        cy.get('[href="//atos-test-pascal-2023.fr.digital-report.net:8443?securityKey=528be0151b318e2062e692aef906174c"]').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://atos-test-pascal-2023.fr.digital-report.net:8443/?securityKey=528be0151b318e2062e692aef906174c');
        cy.get('#support-btn').click();
        // cy.get('#form_submission_email').type('test@me.com');
        cy.get('#form_submission_lastname').type('test');
        cy.get('#form_submission_firstname').type('test');
        cy.get('#form_submission_company').type('test');
        cy.get('#form_submission_message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
        cy.get('.rgpd > .form-check > .form-check-label').click();
        cy.get('#form_submission_submit').click();
        cy.get('.was-validated > :nth-child(3) > .invalid-feedback').should('exist');
       
        

    });

    it('Contact Form (terms unchecked)', ()=> {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/customers/');
        cy.get(':nth-child(4) > .menu-link > .menu-icon').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/reports/')
        });
        cy.get('[href="//atos-test-pascal-2023.fr.digital-report.net:8443?securityKey=528be0151b318e2062e692aef906174c"]').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://atos-test-pascal-2023.fr.digital-report.net:8443/?securityKey=528be0151b318e2062e692aef906174c');
        cy.get('#support-btn').click();
        cy.get('#form_submission_email').type('test@me.com');
        cy.get('#form_submission_lastname').type('test');
        cy.get('#form_submission_firstname').type('test');
        cy.get('#form_submission_company').type('test');
        cy.get('#form_submission_message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
        // cy.get('.rgpd > .form-check > .form-check-label').click();
        cy.get('#form_submission_submit').click();   
        cy.get('.invalid-feedback').should('exist');
        
    });

    
});