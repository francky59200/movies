import React from 'react'
import { mount } from 'cypress/react18'
import Connexion from './Connexion'

describe('<Connexion />', () => {
  it('test value input', ()=> {
    mount(<Connexion />)
    cy.get('[data-cy="input-login-email"]').should('be.visible')
    cy.get('[data-cy="input-login-email"]').type('monmail@mail.fr').should('have.value', 'monmail@mail.fr')
  })
})
