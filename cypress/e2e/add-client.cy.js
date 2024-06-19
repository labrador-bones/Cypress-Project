/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})
// returning false here prevents Cypress from
// failing the test

describe('Adding a Client', function () {

    beforeEach(() => {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/login');
        cy.get('#inputEmail').type('bacani.c@labrador-company.com');
        cy.get('#inputPassword').type('Chichay.13');
        cy.get('.btn').click();
    })
    // client user
    it('Create Client User', function () {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/users/');
        cy.get('.text-lg-right > .btn').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/users/new')
        });
        cy.get('#user_add_lastname').type('Khalifa');
        cy.get('#user_add_firstname').type('Bones');
        // cy.get('#user_add_email').type('test@labrador.com');
        cy.get('#user_add_email')
            .then($input => {
                const inputValue = $input.val();
                if (inputValue) {
                    cy.log('Input alread has a value:', inputValue);
                    cy.get('#user_add_email').clear();
                } else {
                    cy.log('Enter Email Address');
                    cy.get('#user_add_email').type('test@labrador.com');
                }
            }); //validate if there is an email 
        cy.get('.col-12 > div > .select2 > .selection > .select2-selection').click(); //customer list
        cy.get('#select2-user_add_customers-results').click();
        cy.get('#user_add_customers').select(['3', '118'], { force: true }); //we used {force:true} because the dropdown is getting close automatically once a client is already selected 
        cy.get('.switch-custom').click(); //client account toggle button
        cy.wait(1000);
        cy.get('.btn-primary').click(); //save button
        cy.location().should((loc) => {
            expect(loc.href).to.eq('https://www.fr.digital-report.net:8443/en/admin/users/')
        }); //validate the you are in the user list
        cy.get('.card-body').should('contain', 'test@labrador.com') //validate the name of the new user in the list
        //validate if there is an email 



        cy.pause();
    })

    // Existing Email Error Message should be shown
    it('Creating Client Using Existing Email', function (){
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/users/');
        cy.get('.text-lg-right > .btn').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/users/new')
        });
        cy.get('#user_add_lastname').type('Bacani');
        cy.get('#user_add_firstname').type('Zenobia');
        cy.get('#user_add_email').type('test@labrador.com');
        cy.get('.col-12 > div > .select2 > .selection > .select2-selection').click();
        cy.get('#select2-user_add_customers-results').click();
        cy.get('#user_add_customers').select(['3', '118'], { force: true });
        cy.get('.switch-custom').click();
        cy.wait(1000);
        cy.get('.btn-primary').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/users/new')
        });
        cy.get('.form-error-message').should('be.visible');
       
        cy.pause();
    });
    
    
    
    // delete user through filter
    it('Delete User Throgh Filter', function () {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/users/');
        cy.get('#filter-name').type('test@labrador.com{enter}');
        cy.get('.card-body').should('contain', 'test@labrador.com');
        cy.wait(10000);
        cy.get('.btn-danger').click();
        cy.get('.card-body').should('not.have.text', 'test@labrador.com');
        cy.pause();
    });

    // non-client user
    it('Create Non-Client User', function () {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/users/');
        cy.get('.text-lg-right > .btn').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/users/new')
        });
        cy.get('#user_add_lastname').type('Khalifa');
        cy.get('#user_add_firstname').type('Bones');
        cy.get('#user_add_email')
            .then($input => {
                const inputValue = $input.val();
                if (inputValue) {
                    cy.log('Input already has a value:', inputValue);
                    cy.get('#user_add_email').clear();
                } else {
                    cy.log('Enter Email Address');
                    cy.get('#user_add_email').type('test@labrador.com');
                }
            }); //validate if there is an email 
        cy.get('.col-12 > div > .select2 > .selection > .select2-selection').click(); //customer list
        cy.get('#select2-user_add_customers-results').click();
        cy.get('#user_add_customers').select(['3','118'], { force: true }); //we used {force:true} because the dropdown is getting close automatically once a client is already selected 
        // cy.get('.switch-custom').click(); //client account toggle button
        cy.wait(1000);
        cy.get('.btn-primary').click(); //save button
        cy.location().should((loc) => {
            expect(loc.href).to.eq('https://www.fr.digital-report.net:8443/en/admin/users/')
        }); //validate the you are in the user list
        cy.get('.card-body').should('contain', 'test@labrador.com') //validate the name of the new user in the list
        //validate if there is an email 

        cy.pause();
    });

     // delete user
     it('Delete User', function () {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/users/');
        cy.get('#filter-name').type('test@labrador.com{enter}');
        cy.get('.card-body').should('contain', 'test@labrador.com');
        cy.wait(10000);
        cy.get('.btn-danger').click();
        cy.get('.card-body').should('not.have.text', 'test@labrador.com');
        cy.pause();
    });
    
      //Client without active reports (error message should appear)
    it('User Without Active Reports', function () {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/users/');
        cy.get('.text-lg-right > .btn').click();
        cy.get('#user_add_lastname').type('Khalifa');
        cy.get('#user_add_firstname').type('Bones');
        cy.get('#user_add_email').type('test@labrador.com');
        cy.get('.col-12 > div > .select2 > .selection > .select2-selection').click(); //customer list
        cy.get('#select2-user_add_customers-results').click();
        cy.get('#user_add_customers').select(['3'], { force: true }); 
        cy.get('.switch-custom').click(); //client account toggle button
        cy.wait(1000);
        cy.get('.btn-primary').click(); //save button
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/users/new')
        });
        cy.get('#display-error').should('be.visible');

        cy.pause();

    });
        //User Without Active Reports (Non-Client
    it('User Without Active Reports (Non-Client)', function () {
        cy.visit('https://www.fr.digital-report.net:8443/en/admin/users/');
        cy.get('.text-lg-right > .btn').click();
        cy.get('#user_add_lastname').type('Khalifa');
        cy.get('#user_add_firstname').type('Bones');
        cy.get('#user_add_email').type('test@labrador.com');
        cy.get('.col-12 > div > .select2 > .selection > .select2-selection').click(); //customer list
        cy.get('#select2-user_add_customers-results').click();
        cy.get('#user_add_customers').select(['3'], { force: true }); 
        cy.get('.switch-custom').click(); //client account toggle button
        cy.wait(1000);
        cy.get('.btn-primary').click(); //save button
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/en/admin/users/new')
        });
        cy.get('#display-error').should('be.visible');

        cy.pause();

    });
    afterEach(() => {
        cy.log('Test finished');
      }); // Runs after each test in the block


})
