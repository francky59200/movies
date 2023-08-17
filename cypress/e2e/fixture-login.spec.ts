context('Automation success login Fixtures', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('userSuccess').then(function (data) {
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      this.data = data
    })
  })
  it('user successfull', function () {
    expect(this.data.email).to.equal('john@doe.fr')

    cy.get('[data-cy="input-login-email"]').should('be.visible')

    cy.get('[data-cy="input-login-email"]').type(this.data.email)

    cy.get('[data-cy="input-login-email"]').should('have.value', this.data.email)

    cy.get('[data-cy="input-login-password"]').should('be.visible')

    cy.get('[data-cy="input-login-password"]').type(this.data.password)

    cy.get('[data-cy="input-login-password"]').should('have.value', this.data.password)

    cy.get('#button-login').should('be.visible')
    cy.get('#button-login').click()

    cy.url().should('include', '/account')

    cy.contains('welcome to your dashboard').should('exist')
  })
})

context('Automation failed login Fixtures', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('userFailed').then(function (data) {
      this.data = data
    })
  })

  it('failed login user', function () {
    expect(this.data.email).to.equal('falseemail@mail.fr')
    cy.get('[data-cy="input-login-email"]').type(this.data.email)
    cy.get('[data-cy="input-login-email"]').should('have.value', this.data.email)

    cy.get('[data-cy="input-login-password"]').type(this.data.password)
    cy.get('[data-cy="input-login-password"]').should('have.value', this.data.password)

    cy.get('#button-login').should('be.visible')
    cy.get('#button-login').click()

    cy.contains('une erreur s est prouit').should('exist')
  })
})
