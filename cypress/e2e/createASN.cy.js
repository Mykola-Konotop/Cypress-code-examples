/// <reference types="cypress" />

describe('Create ASN test cases', () => {

    it('Create ASN', () => {
        cy.apiLoginOMS().then(function() 
        {
            cy.visit('https://project-one.com/admin/dashboard',
            {
               onBeforeLoad: function(window)
               {
               window.localStorage.setItem('token', Cypress.env('token'));
               window.localStorage.setItem('userId', Cypress.env('userId'));
               }
            });
        });
        cy.fixture('example').then(function(data) {
            this.data = data
        cy.get('.MuiList-root > :nth-child(2)').click();
        cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(3)').click();
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
        cy.get('.tss-15ru8lw-panelWrapper > .MuiButtonBase-root').click();
        cy.get('#add-AsnProduct-step__items-autocomplete').type(this.data.productName[0]);
        cy.get('.tss-1fnecdy-wrapper:nth-child(1) > .MuiTypography-root').click();
        cy.get('#add-AsnProduct-step__items-autocomplete').clear();
        cy.get('#add-AsnProduct-step__items-autocomplete').type(this.data.productName[1]);
        cy.wait(2000);
        cy.get('.tss-1fnecdy-wrapper:nth-child(1) > .MuiTypography-root').click();
        cy.get('#add-AsnProduct-step__items-autocomplete').clear();
        cy.get('#add-AsnProduct-step__items-autocomplete').type(this.data.productName[2]);
        cy.wait(2000);
        cy.get('.tss-1fnecdy-wrapper:nth-child(1) > .MuiTypography-root').click();
        cy.get('#\\:rr\\:').should('have.value', this.data.productSKU[0]);
        cy.get('#\\:rv\\:').should('have.value', this.data.productSKU[1]);
        cy.get('#\\:r13\\:').should('have.value', this.data.productSKU[2]);
        cy.get('#\\:rs\\:').type('{selectall}').type(this.data.totalQuantity);
        cy.get('#\\:r10\\:').type('{selectall}').type(this.data.totalQuantity);
        cy.get('#\\:r14\\:').type('{selectall}').type(this.data.totalQuantity);
        cy.get('.tss-15ru8lw-panelWrapper > .MuiButtonBase-root').click();
        cy.get('.MuiPaper-root > .tss-at7zob-normal').eq(0).click();
        cy.get('.tss-15ru8lw-panelWrapper > .MuiButtonBase-root').click();
        cy.get('.tss-156a9tj-textWrapper > .MuiTypography-root').should('have.text', 'success!')
        cy.get('#asn-item-block__1__add-box').click();
        cy.get('#asn-item-block__2__add-box').click();
        cy.get('.MuiAlert-message').should('include.text', 'move to the next step until box configuration matches  total item quantity');
        cy.get('#asn-item-block__0\\.boxes\\.0\\.quantityPerBox').type('{selectall}').type(this.data.quantityPerBox[0]);
        cy.get('#asn-item-block__0\\.boxes\\.0\\.quantityOfBoxes').type('{selectall}').type(this.data.quantityOfBox);
        cy.get('#asn-item-block__1\\.boxes\\.0\\.quantityPerBox').type('{selectall}').type(this.data.quantityPerBox[1]);
        cy.get('#asn-item-block__1\\.boxes\\.1\\.quantityPerBox').type('{selectall}').type(this.data.quantityPerBox[2]);
        cy.get('#asn-item-block__2\\.boxes\\.0\\.quantityPerBox').type('{selectall}').type(this.data.quantityPerBox[1]);
        cy.get('#asn-item-block__2\\.boxes\\.1\\.quantityPerBox').type('{selectall}').type(this.data.quantityPerBox[2]);
        cy.get('#\\:r1m\\:').click();
        cy.contains('Create new LOT').click({force:true});
        cy.get('#lot-modal__LOTName').type(this.data.lotId[0]);
        cy.get('.MuiDialogActions-root > .tss-nomt74-primary').click();
        cy.get('.tss-1r41ndz-text').should('have.text', 'LOT added to product successfully');
        cy.get('#\\:r1m\\:').click();
        cy.contains(this.data.lotId[0]).click({force:true});
        cy.get('#\\:r1r\\:').click();
        cy.contains('Create new LOT').click({force:true});
        cy.get('#lot-modal__LOTName').type(this.data.lotId[0]);
        cy.get('.MuiDialogActions-root > .tss-nomt74-primary').click();
        cy.get('.tss-1r41ndz-text').should('have.text', 'LOT added to product successfully');
        cy.get('#\\:r1r\\:').click();
        cy.contains(this.data.lotId[0]).click({force:true});
        cy.get('.tss-15ru8lw-panelWrapper > .MuiButtonBase-root').click();
        cy.get('.tss-15ru8lw-panelWrapper > .MuiButtonBase-root').click();
        cy.get('#asn-summary__trackingNumber').type(this.data.trackingNumber);
        cy.get('.tss-15ru8lw-panelWrapper > .MuiButtonBase-root').click();
        cy.get('.tss-udtden-text').should('have.text', 'Are you sure you want to send this inventory?');
        cy.get('.MuiDialogActions-root > .tss-nomt74-primary').click();
        cy.get('.tss-lway6o-titleWrapper > p.MuiTypography-root').should('have.text', ' Waiting for receiving');
        });
    });
});