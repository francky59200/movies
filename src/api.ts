import axios from 'axios'

interface DefaultOptions {
  baseURL: string | undefined
  maxBodyLength: any
  headers?: { 'Content-Type'?: string; token?: string }
}

export default function fetchClient() {
  const token: string | null = localStorage.getItem('token')
  const defaultOptions: DefaultOptions = {
    baseURL: import.meta.env.VITE_URL,
    maxBodyLength: Infinity,
    headers: {
      'Content-Type': 'application/json',
      'token': token || '',
    },
  }
  return axios.create(defaultOptions)
}
