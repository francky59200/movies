import React from 'react'
import { mount } from 'cypress/react18'
import Connexion from './Connexion'

describe('<Connexion />', () => {
  it('test value input', () => {
    cy.visit('/')
    mount(<Connexion />)
    cy.contains('No time to rest, Booya !', { timeout: 10000 }).should('be.visible')
  })
})
