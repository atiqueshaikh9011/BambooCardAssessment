describe('Search and Validate Results', () => {
  beforeEach(() => {
    cy.fixture('userData').then(function(data) {
      this.data = data;
    });
  });

  it('Search for a product and validate search results', function() {
    cy.visit('/');
    cy.get('#search').type(this.data.searchItem + '{enter}');
    cy.get('.search.results').should('contain', this.data.searchItem);
  });
});

