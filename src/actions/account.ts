import type { AccountToken } from '~/types/account/accountToken'
import fetchClient from '~/api'
import type { Account } from '~/types/account/account'
import type { Resume } from '~/types/account/resume'

export async function login(email: string, password: string): Promise<AccountToken> {
  try {
    const payload = {
      email,
      password,
    }
    const { data: token } = await fetchClient().post('/login', payload)
    localStorage.setItem('token', token)
    return token
  }
  catch (e) {
    throw e
  }
}

export function logout(): void {
  return localStorage.removeItem('token')
}

export async function update(account: Account): Promise<Account> {
  try {
    const { data } = await fetchClient().post('/user/profile', account)
    return data
  }
  catch (e) {
    throw e
  }
}

export async function getUserResume(): Promise<Resume> {
  try {
    const { data: user } = await fetchClient().get('/user/resume')
    return user
  }
  catch (e) {
    throw e
  }
}

export async function getUserProfile(): Promise<Account> {
  try {
    const { data: profile } = await fetchClient().get('/user/profile')
    return profile
  }
  catch (e) {
    throw e
  }
}
