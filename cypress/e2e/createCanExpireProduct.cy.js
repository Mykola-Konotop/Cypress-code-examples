/// <reference types="cypress" />

describe('Create Product test cases', () => {

    it('pass Create Can Expire Product', () => {
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
            cy.get('.MuiList-root > :nth-child(2)').click();
            cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1)').click();
            cy.get('.tss-wpchn7-mainButton > .MuiButton-label').should('have.text', ' New Product').click();
            cy.get('#new-product__name').type(this.data.productName[2]);
            cy.get('#new-product__sku').type(this.data.productSKU[2]);
            cy.get('#new-product__value').type('5');
            cy.get('#new-product__barCode').type('2113544680');
            cy.get('#new-product__reOrderPoint').type('777');
            cy.get('#new-product__hasLots').as('hasLotsCheck').click();
            cy.get('@hasLotsCheck').should('be.checked');
            cy.get('#new-product__canExpire').as('canExpireCheck').click();
            cy.get('@canExpireCheck').should('be.checked');
            cy.get('#scrollable-auto-tab-1').click();
            cy.get('#new-product__weight').type('1');
            cy.get('#new-product__length').type('2');
            cy.get('#new-product__width').type('3');
            cy.get('#new-product__height').type('4');
            cy.get('.MuiDialogActions-root > .tss-nomt74-primary').should('have.text', ' Save product').click();
            cy.get('.tss-1r41ndz-text').should('have.text', 'product created successful');
        });
    });
});