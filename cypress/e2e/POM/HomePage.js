
export class HomePage {
    
    verifyHomePage(){
        cy.get('a > img').should('be.visible');
    }

    clickProducts(){
        //cy.contains('products').click();
        cy.get('a[href="/products"]').click();
    }

    clickViewProduct(){
        cy.get('.features_items .col-sm-4:first').within(() => {
            //cy.get('a[href*="/product_details"]').click();
            cy.contains('View Product').click();
        });
    }

}
