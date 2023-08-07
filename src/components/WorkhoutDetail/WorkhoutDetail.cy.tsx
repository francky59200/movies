import { mount } from 'cypress/react18'
import WorkhoutDetail from './WorkhoutDetail'

describe('page workhout detail', () => {
  it('render', () => {
    mount(<WorkhoutDetail />)
  })
})
