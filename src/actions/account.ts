import type { AccountToken } from '~/types/account/accountToken'
import type { Account } from '~/types/account/account'
import type { Resume } from '~/types/account/resume'
import createAxiosInstance from '~/createAxiosInstance'

export async function login(email: string | undefined, password: string | undefined): Promise<AccountToken> {
  try {
    const payload: Record<string, unknown> | string = JSON.stringify({
      email,
      password,
    })
    const { data: token } = await createAxiosInstance({ method: 'POST', url: '/login', data: payload })
    console.log(token)
    localStorage.setItem('token', token)
    return token
  }
  catch (e) {
    throw e
  }
}
export function isAuthenticated() {
  const logged = localStorage.getItem('token')
  if (!logged)
    return null

  return logged
}
export function logout(): void {
  return localStorage.removeItem('token')
}

export async function update(account: Account): Promise<Account> {
  try {
    const { data } = await createAxiosInstance({ method: 'POST', url: '/user/profile', data: account })
    return data
  }
  catch (e) {
    throw e
  }
}

export async function getUserResume(): Promise<Resume> {
  try {
    const { data: user } = await createAxiosInstance({ method: 'GET', url: '/user/resume' })
    return user
  }
  catch (e) {
    throw e
  }
}

export async function getUserProfile(): Promise<Account> {
  try {
    const { data: profile } = await createAxiosInstance({ method: 'GET', url: '/user/profile' })
    return profile
  }
  catch (e) {
    throw e
  }
}
