
export class CartPage{
    verifyCartPage() {
        cy.url().should('include', '/view_cart');
        //cy.get('.cart_info_table').should('be.visible');
    }

    verifyProductQuantity(quantityCount) {
        //cy.get('.cart_quantity_input').should('have.value', quantityCount); 
        cy.get('.cart_quantity').should('be.visible');
    }
}