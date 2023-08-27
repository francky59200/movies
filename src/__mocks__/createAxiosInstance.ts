import { vi } from 'vitest'

const createAxiosInstance = vi.fn(() => {
  return Promise.resolve()
})

export default createAxiosInstance
