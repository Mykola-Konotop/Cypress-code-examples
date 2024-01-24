class LoginPageWMS {

    getEmail()
    {
        return cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input');
    }

    getPassword()
    {
        return cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input');
    }

    submitButton()
    {
        return cy.get('.jss25 > .MuiButtonBase-root');
    }

}

export default LoginPageWMS;