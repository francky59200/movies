import React from 'react'
import TropheeBloc from './TropheeBloc'

describe('<TropheeBloc />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TropheeBloc />)
  })
})