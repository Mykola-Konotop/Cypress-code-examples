class LoginPageOMS {

    getEmail()
    {
        return cy.get('#login__email');
    }

    getPassword()
    {
        return cy.get('#login__password');
    }

    submitButton()
    {
        return cy.get('#login__submit-btn');
    }

}

export default LoginPageOMS;