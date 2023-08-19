// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      login(email: string, password: string): typeof login
    }
  }
}

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.Commands.add('mount', mount)

function login(email: string, password: string): void {
  cy.visit('/')

  cy.get('[data-cy="input-login-email"]').should('be.visible')

  cy.get('[data-cy="input-login-email"]').type(email)

  cy.get('[data-cy="input-login-email"]').should('have.value', email)

  cy.get('[data-cy="input-login-password"]').should('be.visible')

  cy.get('[data-cy="input-login-password"]').type(password)

  cy.get('[data-cy="input-login-password"]').should('have.value', password)

  cy.get('#button-login').should('be.visible')
  cy.get('#button-login').click()
}
Cypress.Commands.add('login', login)

// Example use:
// cy.mount(<MyComponent />)
