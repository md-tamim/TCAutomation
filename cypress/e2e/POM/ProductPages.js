
export class ProductPage{

    verifyProductPage(){
        cy.contains('All Products').should('be.visible');
    }

    searchProducts(productName){
        cy.get('#search_product').type(productName);
        cy.get('#submit_search').click();
    }

    verifySearchResults(){
        cy.contains('Searched').should('be.visible');

    }

}