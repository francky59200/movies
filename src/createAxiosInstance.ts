import axios from 'axios'
import type { Account } from '~/types/account/account'

interface DefaultOptions {
  baseURL: string | undefined
  maxBodyLength: any
  headers?: Record<string, string>
}

interface FetchAgrs {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  url: string
  data?: Record<string, unknown> | string | Account | {}
}

export default function createAxiosInstance({ method, url, data = {} }: FetchAgrs) {
  const token: string | null = localStorage.getItem('token')
  const defaultOptions: DefaultOptions = {
    baseURL: import.meta.env.VITE_URL,
    maxBodyLength: Infinity,
    headers: {
      'Content-Type': 'application/json',
      'token': token || '',
    },
  }
  const instance = axios.create(defaultOptions)

  return instance({
    method,
    url,
    data,
  })
}
