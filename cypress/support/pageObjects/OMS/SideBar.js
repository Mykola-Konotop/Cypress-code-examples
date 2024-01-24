class SideBarOMS {

    getInventoryTab()
    {
        return cy.get('.MuiList-root > :nth-child(2)');
    }
    
    getProductsSubTab()
    {
        return cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1)');
    }

    getAsnSubTab()
    {
        return cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1)');
    }

}

export default SideBarOMS;