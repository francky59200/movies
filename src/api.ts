import axios from 'axios'

import * as dotenv from 'dotenv'

dotenv.config()

interface DefaultOptions {
  baseURL: string | undefined
  headers?: { 'Content-Type'?: string; Authorization?: string }
}

const API_URL = import.meta.env.VITE_URL

export default function fetchClient() {
  const defaultOptions: DefaultOptions = {
    baseURL: API_URL,
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
