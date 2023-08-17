context('test page connexion', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('user successful logged', () => {
    cy.get('[data-cy="input-login-email"]').should('be.visible')
    cy.get('[data-cy="input-login-email"]').type('john@doe.fr')
    cy.get('[data-cy="input-login-email"]').should('have.value', 'john@doe.fr')

    cy.get('[data-cy="input-login-password"]').should('be.visible')
    cy.get('[data-cy="input-login-password"]').type('MyAwe$omePa$$w0rD')
    cy.get('[data-cy="input-login-password"]').should('have.value', 'MyAwe$omePa$$w0rD')

    cy.get('#button-login').should('be.visible')
    cy.get('#button-login').click()

    cy.url().should('include', '/account')

    cy.contains('welcome to your dashboard').should('exist')
  })
})

