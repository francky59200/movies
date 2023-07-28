import React from 'react'
import { mount } from 'cypress/react18'
import Profil from './Profil'

describe('<Profil />', () => {
  it('renders', () => {
    mount(<Profil />)
  })
})
