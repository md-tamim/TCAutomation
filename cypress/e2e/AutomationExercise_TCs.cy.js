import {HomePage} from "../e2e/POM/HomePage";
import { ProductPage } from "./POM/ProductPages"; 
//import { ProductDetailsPage } from "./POM/ProductDetailsPage.JS";
import { DetailsOfProductPage } from "./POM/DetailsOfProductPages";
import { CartPage } from "./POM/CartPages";



const homePage = new HomePage();
const productPage = new ProductPage();
//const productDetailPage = new ProductDetailsPage();
const detailsOfProductPage = new DetailsOfProductPage();
const cartPage = new CartPage();

describe('AutomationExercise websites Test Cases Automation', function(){

    it('Test Case 1', ()=>{
        cy.visit('https://automationexercise.com');
        homePage.verifyHomePage();
        homePage.clickProducts();
        productPage.verifyProductPage();
        productPage.searchProducts('jeans');
        productPage.verifySearchResults();
    })

    it('Test Case 2', ()=>{       
        cy.visit('https://automationexercise.com');
        homePage.verifyHomePage();
        homePage.clickViewProduct();
        detailsOfProductPage.verifyProductDetailPage();
        detailsOfProductPage.productQuantity(4);
        detailsOfProductPage.addTOcart();
        detailsOfProductPage.viewCart();
        cartPage.verifyCartPage();
        cartPage.verifyProductQuantity(4);
    })
})
