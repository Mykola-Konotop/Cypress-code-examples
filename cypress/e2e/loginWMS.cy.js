/// <reference types="cypress" />
import LoginPageWMS from '../support/pageObjects/WMS/LoginPage'
const loginPageWMS = new LoginPageWMS();

describe('Login WMS test cases', () => {

    it('pass Login WMS', () => {
        cy.visit(Cypress.env('urlWMS'));
        cy.fixture('example').then(function(data) {
            this.data = data
        loginPageWMS.getEmail().type(this.data.email[1]);
        loginPageWMS.getPassword().type(this.data.password);
        loginPageWMS.submitButton().click();
        cy.url().should('include','dashboard');
        });
    });

    it('fail Login WMS', () => {
        cy.visit(Cypress.env('urlWMS'));
        cy.fixture('example').then(function(data) {
            this.data = data
        loginPageWMS.getEmail().type(this.data.email[0]);
        loginPageWMS.getPassword().type(this.data.password);
        loginPageWMS.submitButton().click();
        cy.get('.MuiAlert-message').should('have.text', "Email or password is incorrect");
        });
    });
});