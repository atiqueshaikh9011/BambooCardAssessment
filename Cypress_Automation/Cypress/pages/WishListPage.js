class WishlistPage {
  addToWishlist() {
    cy.get('.product-item').first().trigger('mouseover');
    cy.get('[data-action="add-to-wishlist"]').first().click();
  }

  goToWishlist() {
    cy.get('.wishlist.block').click();
  }

  addToCartFromWishlist() {
    cy.get('.tocart').click();
  }
}

export default new WishlistPage();
