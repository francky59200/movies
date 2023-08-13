import axios from 'axios'

interface DefaultOptions {
  baseURL: string | undefined
  headers?: { 'Content-Type'?: string; Authorization?: string }
}

export default function fetchClient() {
  const defaultOptions: DefaultOptions = {
    baseURL: import.meta.env.VITE_DEV,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const instance = axios.create(defaultOptions)

  instance.interceptors.request.use((config) => {
    const token: string | null = localStorage.getItem('token')
    console.log(token)
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  })

  return instance
}
