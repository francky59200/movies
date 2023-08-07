import React from 'react'
import { mount } from 'cypress/react18'
import Connexion from './Connexion'

describe('<Connexion />', () => {
  it('renders', () => {
    mount(<Connexion />)
    cy.get('input').should('have.attr', 'label', 'mot de passe')
  })
})
