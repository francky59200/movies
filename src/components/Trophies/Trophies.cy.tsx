import { mount } from 'cypress/react18'
import Trophies from './Trophies'

describe('page trophies', () => {
  it('render', () => {
    mount(<Trophies />)
  })
})
