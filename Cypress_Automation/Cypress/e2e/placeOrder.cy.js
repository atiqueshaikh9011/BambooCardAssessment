import ProductPage from '../pages/ProductPage';

describe('Place Order with Multiple Products', () => {
  it('Add products to cart and validate price calculation', () => {
    cy.visit('/');

    ProductPage.addMultipleProductsToCart();
    ProductPage.goToCart();

    cy.get('.cart-totals').within(() => {
      cy.get('.grand.totals > .price').should('exist');
    });

    cy.contains('Proceed to Checkout').should('be.visible');
  });
});

