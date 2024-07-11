/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
});

describe('Adding a Client', function () {

    beforeEach(() => {
    
        // Visit the page
        cy.visit('https://sg-17-05.fr.digital-report.net:8443/rapport/871#title_199082');

        cy.get('#tarteaucitronRoot').then($banner => {
            $banner.remove();
          });

      });

    it('Add highlights / connected user', ()=> {
        
        cy.get('#login-btn > span').click();
        cy.get('#inputEmail').type('bacani.c@labrador-company.com');
        cy.pause(InputEvent);
        cy.get('.loggin-actions-container > .btn[type="submit"]').click();
        cy.contains('Christian Bernard Bacani').should('be.visible');
        cy.get('#tarteaucitronRoot').then($banner => {
            $banner.remove();
          });
        cy.get('#card3 > .card-content').scrollIntoView();
        cy.pause();
        cy.get('.js-add-note > .tiny').click();
        cy.get('#note_comment').type('test');
        cy.get('.modal-footer > .btn-primary-filled').click();
        cy.contains('Annotation ajoutée').should('be.visible');
        cy.pause();


    });

    it('Delete highlights / connected user', ()=> {
        
      cy.get('#login-btn > span').click();
      cy.get('#inputEmail').type('bacani.c@labrador-company.com');
      cy.pause(InputEvent);
      cy.get('.loggin-actions-container > .btn[type="submit"]').click();
      cy.contains('Christian Bernard Bacani').should('be.visible');
      cy.get('#tarteaucitronRoot').then($banner => {
          $banner.remove();
        });
      cy.get('[role="marker"] > .btn > :nth-child(1)').click();
      cy.get('.panel-element-footer').eq(0).find('.remove').click();
      cy.pause();
      cy.get('.active > .confirmation > .buttons > .delete').click();
      cy.contains('Annotation supprimée').should('be.visible');

      cy.pause();

  });

 it('Add highlights / non-connected user', ()=> {

        cy.get('.toc-title > .btn').click();
        cy.get('#card3 > .card-content').scrollIntoView();
        cy.pause();
        cy.get('.js-add-note > .tiny').click();
        cy.get('.message > .panel-element > .btn').click();
        cy.get('#login-btn > span').click();
        cy.get('#inputEmail').type('bacani.c@labrador-company.com');
        cy.pause(InputEvent);
        cy.get('.loggin-actions-container > .btn[type="submit"]').click();
        cy.contains('Christian Bernard Bacani').should('be.visible');
        cy.get('#tarteaucitronRoot').then($banner => {
            $banner.remove();
          });
        cy.get('#card3 > .card-content').scrollIntoView();
        cy.pause();
        cy.get('.js-add-note > .tiny').click();
        cy.get('#note_comment').type('test');
        cy.get('.modal-footer > .btn-primary-filled').click();
        cy.contains('Annotation ajoutée').should('be.visible');

        cy.pause();

    });
    it('Delete highlights / non-connected user', ()=> {
    
      cy.get('[role="marker"] > .btn > :nth-child(1)').click();
      cy.get('#annotations-panel-wrap > .panel-wrap > .panel-content > .panel-element > .btn').click();
      cy.get('#inputEmail').type('bacani.c@labrador-company.com');
      cy.pause(InputEvent);
      cy.get('.loggin-actions-container > .btn[type="submit"]').click();
      cy.contains('Christian Bernard Bacani').should('be.visible');
      cy.get('#tarteaucitronRoot').then($banner => {
          $banner.remove();
        });
      cy.get('[role="marker"] > .btn > :nth-child(1)').click();
      cy.get('.panel-element-footer').eq(0).find('.remove').click();
      cy.pause();
      cy.get('.active > .confirmation > .buttons > .delete').click();
      cy.contains('Annotation supprimée').should('be.visible');
     
      cy.pause();

  });


});