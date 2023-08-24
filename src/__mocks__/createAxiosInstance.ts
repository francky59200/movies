import { vi } from 'vitest'

const createAxiosInstance = vi.fn(() => {
  return Promise.resolve({
    data: { email: 'john@doe.fr', password: 'MyAwe$omePa$$w0rD' },
    status: 200,
  })
})

export default createAxiosInstance
