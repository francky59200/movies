import { vi } from 'vitest'

const createAxiosInstance = vi.fn(() => {
  return Promise.resolve({
    data: { token: '12345' },
    status: 200,
  })
})

export default createAxiosInstance
