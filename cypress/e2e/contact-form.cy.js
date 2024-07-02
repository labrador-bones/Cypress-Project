/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})

describe('Contact Form', function () {

    beforeEach(() => {
        cy.login('bacani.c@labrador-company.com');
    });
 
    it('Create Contact Form', ()=> {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/customers/');
        cy.get(':nth-child(4) > .menu-link > .menu-icon').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/reports/')
        });
        cy.get('#filter-name').type('PasCall Test{enter}');
        cy.get('[href="//pas.fr.digital-report.net:8443?securityKey=cb0b2efa815d59d95343ec5b0be716a6"]').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://pas.fr.digital-report.net:8443/en/');
        cy.get('#support-btn').click();
        cy.get('#form_submission_email').type('test@me.com');
        cy.get('#form_submission_lastname').type('Khalifa');
        cy.get('#form_submission_firstname').type('Bones');
        cy.get('#form_submission_company').type('Atos');
        cy.get('#form_submission_message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
        cy.get('.rgpd > .form-check > .form-check-label').click();
        cy.get('#form_submission_submit').click();
        cy.get('#support-confirmation-popin > .panel-wrap > .panel-content > .panel-title > .title').should('have.text', 'Mail sent');

        cy.pause();

    });

    it('Create Contact Form (without email)', ()=> {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/customers/');
        cy.get(':nth-child(4) > .menu-link > .menu-icon').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/reports/')
        });
        cy.get('#filter-name').type('PasCall Test{enter}');
        cy.get('[href="//pas.fr.digital-report.net:8443?securityKey=cb0b2efa815d59d95343ec5b0be716a6"]').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://pas.fr.digital-report.net:8443/en/');
        cy.get('#support-btn').click();
        // cy.get('#form_submission_email').type('test@me.com');
        cy.get('#form_submission_lastname').type('test');
        cy.get('#form_submission_firstname').type('test');
        cy.get('#form_submission_company').type('test');
        cy.get('#form_submission_message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
        cy.get('.rgpd > .form-check > .form-check-label').click();
        cy.get('#form_submission_submit').click();
        cy.get('.was-validated > :nth-child(3) > .invalid-feedback').should('exist');
       
        cy.pause();

    });

    it('Create Contact Form / terms unchecked)', ()=> {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/customers/');
        cy.get(':nth-child(4) > .menu-link > .menu-icon').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/reports/')
        });
        cy.get('#filter-name').type('PasCall Test{enter}');
        cy.get('[href="//pas.fr.digital-report.net:8443?securityKey=cb0b2efa815d59d95343ec5b0be716a6"]').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://pas.fr.digital-report.net:8443/en/');
        cy.get('#support-btn').click();
        cy.get('#form_submission_email').type('test@me.com');
        cy.get('#form_submission_lastname').type('test');
        cy.get('#form_submission_firstname').type('test');
        cy.get('#form_submission_company').type('test');
        cy.get('#form_submission_message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
        // cy.get('.rgpd > .form-check > .form-check-label').click();
        cy.get('#form_submission_submit').click();   
        cy.get('.invalid-feedback').should('exist');
        
        cy.pause();
    });

    it('Clear session in this block / create form with client account', () => {
        // Clear cookies, local storage, and session storage
        // cy.clearCookies();
        // cy.clearLocalStorage();
        // cy.window().then((win) => {
        //   win.sessionStorage.clear();
        // });
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/customers/');
        // cy.get('#inputEmail').type('bacani.c@labrador-company.com')
        // cy.get('#inputPassword').type('Chichay.0713')
        // // cy.pause(InputEvent)
        // cy.get('.btn').click()
        cy.get(':nth-child(4) > .menu-link > .menu-icon').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/reports/')
        });
        cy.get('#filter-name').type('PasCall Test{enter}');
        cy.get('[href="//pas.fr.digital-report.net:8443?securityKey=cb0b2efa815d59d95343ec5b0be716a6"]').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://pas.fr.digital-report.net:8443/en/');
       
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((win) => {
          win.sessionStorage.clear()
        });

        cy.visit('https://pas.fr.digital-report.net:8443?securityKey=cb0b2efa815d59d95343ec5b0be716a6');
        cy.get('.login-btn-wrap > #login-btn').click();
        cy.get('#inputEmail').type('bacani.c@labrador-company.com');
        cy.get('#inputPassword').type('Chichay.0713');
        cy.get('.loggin-actions-container > .btn[type="submit"]').click();
        cy.contains('Christian Bernard Bacani').should('be.visible');
        cy.get('#support-btn').click();
        cy.get('#form_submission_message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
        cy.get('.form-check > .form-check-label').click();
        cy.get('#form_submission_submit').click();
        cy.get('#support-confirmation-popin > .panel-wrap > .panel-content > .panel-title > .title').should('have.text', 'Mail sent');
        cy.pause();
        cy.get('#support-confirmation-popin > .top-bar > .btn').click();
   
        
    });
});