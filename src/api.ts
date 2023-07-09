import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv')

dotenv.config()

interface DefaultOptions {
  baseURL: string | undefined
  headers?: { 'Content-Type'?: string; Authorization?: string }
}

export default function fetchClient() {
  const defaultOptions: DefaultOptions = {
    baseURL: process.env.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const instance = axios.create(defaultOptions)

  instance.interceptors.request.use((config) => {
    const token: string | null = localStorage.getItem('token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  })

  return instance
}
