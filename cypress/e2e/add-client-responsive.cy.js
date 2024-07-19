Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})


describe('Add Client Responsive', () => {

  beforeEach(() => {
    // cy.viewport(320, 480);
    cy.viewport('ipad-2', 'portrait');
    
    cy.visit('https://www.fr.digital-report.net:8443/en/admin/login');
    cy.login('bacani.c@labrador-company.com');
    cy.visit('https://www.fr.digital-report.net:8443/en/admin/customers/');

});
  it('Mobile View (Add Client)', () => {

    cy.url().should('include', '/en/admin/customers/');
    cy.get('.sidebar-toggle').click();
    cy.get(':nth-child(2) > .menu-link').click();
    cy.get('h1').should('have.text', 'Users');
    cy.get('.text-lg-right > .btn').click();
    cy.get('#user_add_lastname').type('Khalifa');
    cy.get('#user_add_firstname').type('Bones');
    cy.get('#user_add_email').type('test@labrador.com');
    cy.get('.switch-custom').click();
    cy.get('.col-12 > div > .select2 > .selection > .select2-selection').click();
    cy.get('#select2-user_add_customers-results').click();
    cy.get('#user_add_customers').select(['3', '118'], { force: true });
    cy.wait(1000);
    cy.get('.btn-primary').scrollIntoView().click(); //save button
    cy.location('href').should('contain', '/en/admin/users/');
    cy.get('.card-body').should('contain', 'test@labrador.com');

    cy.pause();
  })

  it('Mobile View (Add Client using existing email)', () => {
    
    cy.url().should('include', '/en/admin/customers/');
    cy.get('.sidebar-toggle').click();
    cy.get(':nth-child(2) > .menu-link').click();
    cy.get('h1').should('have.text', 'Users');
    cy.get('.text-lg-right > .btn').click();
    cy.get('#user_add_lastname').type('Pitt');
    cy.get('#user_add_firstname').type('Brad');
    cy.get('#user_add_email').type('test@labrador.com');
    cy.get('.switch-custom').click();
    cy.get('.col-12 > div > .select2 > .selection > .select2-selection').click();
    cy.get('#select2-user_add_customers-results').click();
    cy.get('#user_add_customers').select(['3', '118'], { force: true });
    cy.wait(1000);
    cy.get('.btn-primary').scrollIntoView().click(); //save button
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/en/admin/users/new')
  });
    cy.get('.form-error-message').scrollIntoView().should('be.visible');

    cy.pause();
    
  })

  it('Mobile view (Delete User Throgh Filter)', function () {
    
    cy.url().should('include', '/en/admin/customers/');
    cy.get('.sidebar-toggle').click();
    cy.get(':nth-child(2) > .menu-link').click();
    cy.get('h1').should('have.text', 'Users');
    cy.get('#filter-name').type('test@labrador.com{enter}');
    cy.get('.card-body').should('contain', 'test@labrador.com');
    cy.wait(10000);
    cy.get('.btn-danger').scrollIntoView().click();
    cy.get('.card-body').should('not.have.text', 'test@labrador.com');
    cy.pause();
});

it('Mobile View (Add Non-Client)', () => {
 
  cy.url().should('include', '/en/admin/customers/');
  cy.get('.sidebar-toggle').click();
  cy.get(':nth-child(2) > .menu-link').click();
  cy.get('h1').should('have.text', 'Users');
  cy.get('.text-lg-right > .btn').click();
  cy.get('#user_add_lastname').type('Khalifa');
  cy.get('#user_add_firstname').type('Bones');
  cy.get('#user_add_email').type('test@labrador.com');
  cy.get('.col-12 > div > .select2 > .selection > .select2-selection').click();
  cy.get('#select2-user_add_customers-results').click();
  cy.get('#user_add_customers').select(['3', '118'], { force: true });
  cy.wait(1000);
  cy.get('.btn-primary').scrollIntoView().click(); //save button
  cy.location('href').should('contain', '/en/admin/users/');
  cy.get('.card-body').should('contain', 'test@labrador.com');

  cy.pause();
});

it('Mobile view (Delete User Throgh Filter)', function () {
 
  cy.url().should('include', '/en/admin/customers/');
  cy.get('.sidebar-toggle').click();
  cy.get(':nth-child(2) > .menu-link').click();
  cy.get('h1').should('have.text', 'Users');
  cy.get('#filter-name').type('test@labrador.com{enter}');
  cy.get('.card-body').should('contain', 'test@labrador.com');
  cy.wait(10000);
  cy.get('.btn-danger').scrollIntoView().click();
  cy.get('.card-body').should('not.have.text', 'test@labrador.com');
  cy.pause();
});

it('Mobile View (User Without Active Reports)', () => {
 
  cy.url().should('include', '/en/admin/customers/');
  cy.get('.sidebar-toggle').click();
  cy.get(':nth-child(2) > .menu-link').click();
  cy.get('h1').should('have.text', 'Users');
  cy.get('.text-lg-right > .btn').click();
  cy.get('#user_add_lastname').type('Khalifa');
  cy.get('#user_add_firstname').type('Bones');
  cy.get('#user_add_email').type('test@labrador.com');
  cy.get('.switch-custom').click();
  cy.get('.col-12 > div > .select2 > .selection > .select2-selection').click();
  cy.get('#select2-user_add_customers-results').click();
  cy.get('#user_add_customers').select(['3'], { force: true });
  cy.wait(1000);
  cy.get('.btn-primary').scrollIntoView().click(); //save button
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq('/en/admin/users/new')
});
  cy.get('#display-error').scrollIntoView().should('be.visible');

  cy.pause();
});

it('Mobile View (User Without Active Reports)', () => {
 
  cy.url().should('include', '/en/admin/customers/');
  cy.get('.sidebar-toggle').click();
  cy.get(':nth-child(2) > .menu-link').click();
  cy.get('h1').should('have.text', 'Users');
  cy.get('.text-lg-right > .btn').click();
  cy.get('#user_add_lastname').type('Khalifa');
  cy.get('#user_add_firstname').type('Bones');
  cy.get('#user_add_email').type('test@labrador.com');
  cy.get('.col-12 > div > .select2 > .selection > .select2-selection').click();
  cy.get('#select2-user_add_customers-results').click();
  cy.get('#user_add_customers').select(['3'], { force: true });
  cy.wait(1000);
  cy.get('.btn-primary').scrollIntoView().click(); //save button
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq('/en/admin/users/new')
});
  cy.get('#display-error').scrollIntoView().should('be.visible');

  cy.pause();
});

afterEach(() => {
  cy.log('Test finished');
});

})