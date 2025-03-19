

export class DetailsOfProductPage{

    verifyProductDetailPage(){
        cy.get('.product-information').should('be.visible');
    }
    productQuantity(quantityCount){
        cy.get('#quantity').type(quantityCount);
    }

    addTOcart(){
        cy.get('.btn.btn-default.cart').click();
    }

    viewCart(){
        cy.contains('View Cart').click();
    }
}