class ProductPage {
  addMultipleProductsToCart() {
    cy.get('.product-item').first().click();
    cy.get('button[title="Add to Cart"]').click();
    cy.go('back');
    cy.get('.product-item').eq(1).click();
    cy.get('button[title="Add to Cart"]').click();
  }

  goToCart() {
    cy.get('.showcart').click();
    cy.contains('View and Edit Cart').click();
  }
}

export default new ProductPage();

