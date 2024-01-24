class ProductsListOMS {

    getButtonNewProduct()
    {
        return cy.get('.tss-wpchn7-mainButton > .MuiButton-label');
    }
    
    // getProductsSubTab()
    // {
    //     return cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1)');
    // }

    // getAsnSubTab()
    // {
    //     return cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1)');
    // }

}

export default ProductsListOMS;