// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("apiLoginOMS", () => {

    cy.request("POST", "https://api-project-one.com/identity/login",
    {Email: "user1@test.com", Password: "_aA1234567"}).
    then(function(response)
    {
        expect(response.status).to.eq(200);
        Cypress.env('token', response.body.data.token);
        Cypress.env('userId', response.body.data.id);
    });
});

Cypress.Commands.add("apiLoginWMS", () => {

    cy.request("POST", "https://api-project-two.com/identity/v2/login",
    {Email: "user2@test.com", Password: "_aA1234567"}).
    then(function(response)
    {
        expect(response.status).to.eq(200);
        Cypress.env('token', response.body.data.token);
        Cypress.env('userId', response.body.data.id);
    });
});