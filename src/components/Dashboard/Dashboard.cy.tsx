import { mount } from 'cypress/react18'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
  it('renders', () => {
    mount(<Dashboard />)
  })
})
