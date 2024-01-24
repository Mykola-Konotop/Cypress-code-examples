/// <reference types="cypress" />
import LoginPageOMS from '../support/pageObjects/OMS/LoginPage'
const loginPageOMS = new LoginPageOMS();

describe('Login OMS test cases', () => {

    it('pass Login OMS', () => {
        cy.visit(Cypress.env('urlOMS'));
        cy.fixture('example').then(function(data) {
            this.data = data
        loginPageOMS.getEmail().type(this.data.email[0]);
        loginPageOMS.getPassword().type(this.data.password);
        loginPageOMS.submitButton().click();
        cy.url().should('include','dashboard');
        });
    });

    it('fail Login OMS', () => {
        cy.visit(Cypress.env('urlOMS'));
        cy.fixture('example').then(function(data) {
            this.data = data
        loginPageOMS.getEmail().type(this.data.email[1]);
        loginPageOMS.getPassword().type(this.data.password);
        loginPageOMS.submitButton().click();
        cy.get('.MuiAlert-message').should('have.text', "Unauthorized");
        });
    });
});