/// <reference types="cypress" />

describe('Create ASN test cases', () => {

    it('Create ASN', () => {
        cy.apiLoginOMS().then(function() 
        {
            cy.visit('https://project-one.com/admin/dashboard',
            {
               onBeforeLoad: function(window)
               {
               window.localStorage.setItem('token', Cypress.env('token'));
               window.localStorage.setItem('userId', Cypress.env('userId'));
               }
            });
        });
        cy.fixture('example').then(function(data) {
            this.data = data
        });
        
        // //cy.intercept('POST', 'https://project-one.com/customerscompany/asn/UpdateAsn').as('updateASN');
        // //cy.wait('@updateASN');

        // cy.get('#\\:r31\\:').invoke('text').then(actualDateText => {
        //     const dayjs = require('dayjs');
        //     const todaysDate = new Date();
        //     const actualDate = dayjs(actualDateText, 'MM/DD/YYYY').toDate();
    
        //     expect(actualDate).to.be.lte(todaysDate);
        //     });

    });
});