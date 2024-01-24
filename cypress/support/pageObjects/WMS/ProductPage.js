class ProductPageWMS {

    getProductName()
    {
        return cy.get('.jss459 > .jss452');
    }
    
    getSKU()
    {
        return cy.get('.jss463 > .jss452');
    }

    getStoredQuantity()
    {
        return cy.get('.jss480 > .jss452');
    }
    
    getExpectedQuantity()
    {
        return cy.get('.jss487 > .jss452');
    }
    
    getReservedQuantity()
    {
        return cy.get('.jss488 > .jss452');
    }
    
    getAvailableQuantity()
    {
        return cy.get('.jss485 > .jss452');
    }

    getAllocatedQuantity()
    {
        return cy.get('.jss486 > .jss452');
    }

    getDamagedQuantity()
    {
        return cy.get('.jss489 > .jss452');
    }

    getExpiredQuantity()
    {
        return cy.get('.jss491 > .jss452');

    }

    getUnavailableQuantity()
    {
        return cy.get('.jss490 > .jss452');
    }

}

export default ProductPageWMS;