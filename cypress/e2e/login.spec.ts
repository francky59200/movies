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

    cy.request({
      method: 'POST',
      url: 'http://localhost:3456/login',
      body: {
        email: 'john@doe.fr',
        password: 'MyAwe$omePa$$w0rD',
      },
    }).then((response)=> {
      expect(response.status).to.eq(200)
      cy.log(response.body)
    })

    cy.url().should('include', '/account')

    cy.contains('Trophées').should('exist')
  })
})
