class ProductPageOMS {

    getProductName()
    {
        return cy.get('#product-info__name');
    }
    
    getSKU()
    {
        return cy.get('#product-info__sku');
    }

    getStoredQuantity()
    {
        return cy.get('#product-info__quantity');
    }
    
    getExpectedQuantity()
    {
        return cy.get('#product-info__expectedQuantity');
    }
    
    getReservedQuantity()
    {
        return cy.get('#product-info__reservedQuantity');
    }
    
    getAvailableQuantity()
    {
        return cy.get('#product-info__availableQuantity');
    }

    getAllocatedQuantity()
    {
        return cy.get('#product-info__allocatedQuantity');
    }

    getDamagedQuantity()
    {
        return cy.get('#product-info__damagedQuantity');
    }

    getExpiredQuantity()
    {
        return cy.get('#product-info__expiredQuantity');

    }

    getUnavailableQuantity()
    {
        return cy.get('#product-info__unavailableQuantity');
    }

}

export default ProductPageOMS;