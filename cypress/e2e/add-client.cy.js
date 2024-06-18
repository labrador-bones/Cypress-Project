/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Adding a Client', function(){

beforeEach(()=>{
    cy.visit('https://www.fr.digital-report.net:8443/en/admin/login')
    cy.get('#inputEmail').type('bacani.c@labrador-company.com')
    cy.get('#inputPassword').type('Chichay.13')
    // cy.wait(10000)
    cy.get('.btn').click()
})

it('User Page', function(){
    cy.visit('https://www.fr.digital-report.net:8443/en/admin/users/')
    // cy.wait(10000)
    cy.get('.text-lg-right > .btn').click()
    cy.get('#user_add_lastname').type('Khalifa')
    cy.get('#user_add_firstname').type('Bones')
    cy.get('#user_add_email').type('test@labrador.com')
    cy.get('.col-12 > div > .select2 > .selection > .select2-selection').click()
    cy.get('#select2-user_add_customers-results').click()
    cy.get('#user_add_customers').select(['3', '118'], {force:true} ) //we used {force:true} because the dropdown is getting close automatically once a client is already selected 
    cy.get('.switch-custom').click()
    cy.wait(1000)
    cy.get('.btn-primary').click()

    
    })



})


