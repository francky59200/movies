import React from 'react'
import { mount } from 'cypress/react18'
import TropheeBloc from '~/pages/Dashboard/partials/TropheeBloc/TropheeBloc'

test('trophee test', () => {
  mount(<TropheeBloc />)
  cy.contains('Trophées')
})
