context('test page connexion', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('button login', () => {
    cy.get('button').contains('Me connecter').click()
  })
  it('button register', () => {
    cy.get('button').contains('Creer mon compte')
  })
  it('test value input', () => {
    cy.get('[data-cy="input-name-login"]').should('be.visible')
    cy.get('[data-cy="input-name-login"]').type('francky')
    cy.get('[data-cy="input-name-login"]').should('have.value', 'francky')
  })
})
