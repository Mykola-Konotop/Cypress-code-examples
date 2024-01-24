/// <reference types="cypress" />
import SideBarOMS from '../support/pageObjects/OMS/SideBar'
import ProductsListOMS from '../support/pageObjects/OMS/ProductsListPage'
const sideBarOMS = new SideBarOMS();
const productsListOMS = new ProductsListOMS();

describe('Create Product test cases', () => {
    beforeEach(() => {
        cy.apiLoginOMS().then(() => {
            window.localStorage.setItem('token', Cypress.env('token'));
            window.localStorage.setItem('userId', Cypress.env('userId'));
        });
        cy.visit('https://project-one.com/admin/dashboard');
    });

    it('pass Create Track LOT Product', () => {
        cy.fixture('example').then(function(data) {
                this.data = data
        sideBarOMS.getInventoryTab().click();
        sideBarOMS.getProductsSubTab().click();
        productsListOMS.getButtonNewProduct().should('have.text', ' New Product').click();
        cy.get('#new-product__name').type(this.data.productName[1]);
        cy.get('#new-product__sku').type(this.data.productSKU[1]);
        cy.get('#new-product__value').type('5');
        cy.get('#new-product__barCode').type('211354468');
        cy.get('#new-product__reOrderPoint').type('777');
        cy.get('#new-product__hasLots').as('hasLotsCheck').click();
        cy.get('@hasLotsCheck').should('be.checked');
        cy.get('#scrollable-auto-tab-1').click();
        cy.get('#new-product__weight').type('1');
        cy.get('#new-product__length').type('2');
        cy.get('#new-product__width').type('3');
        cy.get('#new-product__height').type('4');
        cy.get('.MuiDialogActions-root > .tss-nomt74-primary').should('have.text', ' Save product').click();
        cy.get('.tss-1r41ndz-text').should('have.text', 'product created successful');
        });
    });

    it('pass Create LOT for Product', () => {
        cy.fixture('example').then(function(data) {
            this.data = data
        sideBarOMS.getInventoryTab().click();
        sideBarOMS.getProductsSubTab().click();
        cy.get('.tss-1sss6u2-textWrapperHeader').click();
        cy.get('.tss-1oudyln-search > .MuiInputBase-root > .MuiInputBase-input').type(this.data.productName[1]);
        cy.wait(3000);
        cy.get('[data-field="sku"] > .MuiDataGrid-cellContent').should('have.text', this.data.productSKU[1]);
        cy.get('.tss-12s26d8-iconButton').click({force: true});
        });
    });
});