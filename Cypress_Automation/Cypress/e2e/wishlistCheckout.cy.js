import WishlistPage from '../pages/WishlistPage';

describe('Add to Wishlist and Checkout from Wishlist', () => {
  it('Add product to wishlist and checkout', () => {
    cy.visit('/');

    WishlistPage.addToWishlist();
    WishlistPage.goToWishlist();
    WishlistPage.addToCartFromWishlist();

    cy.contains('Proceed to Checkout').should('be.visible');
  });
});

