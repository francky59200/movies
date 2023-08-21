context('test values register fixtures', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('register').then(function (data) {
      this.data = data
    })
  })

  it('test form register', function () {
    expect(this.data.email).to.equal('franc@mail.fr')

    cy.get('#change-form').should('be.visible')
    cy.get('#change-form').click()

    cy.get('[data-cy="input-register-name"]').type(this.data.name)
    cy.get('[data-cy="input-register-name"]').should('have.value', this.data.name)

    cy.get('[data-cy="input-register-email"]').type(this.data.email)
    cy.get('[data-cy="input-register-email"]').should('have.value', this.data.email)

    cy.get('[data-cy="input-register-password"]').type(this.data.password)
    cy.get('[data-cy="input-register-password"]').should('have.value', this.data.password)

    cy.get('[data-cy="input-register-confirm"]').type(this.data.confirm)
    cy.get('[data-cy="input-register-confirm"]').should('have.value', this.data.confirm)
  })
})
