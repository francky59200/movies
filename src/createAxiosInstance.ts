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
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjJkNjNjZGRjMDY2ZDk5ZWQzZTgwNmQzMjY3MThjYSIsInN1YiI6IjYyNGVhNTRhYjc2Y2JiMDA2ODIzODc4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zuuBq1c63XpADl8SQ_c62hezeus7VibE1w5Da5UdYyo'
  const defaultOptions: DefaultOptions = {
    baseURL: 'https://api.themoviedb.org/3/',
    maxBodyLength: Infinity,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }
  const instance = axios.create(defaultOptions)

  return instance({
    method,
    url,
    data,
  })
}
