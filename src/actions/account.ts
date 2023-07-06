import type { AccountToken } from '~/types/account/accountToken'
import { axiosInstance } from '~/api'
import type { Account } from '~/types/account/account'

export const login = async (email: string, password: string): Promise<AccountToken> => {
  const payload = {
    email,
    password,
  }
  return await axiosInstance.post('/login', payload)
}

export const update = async (account: Account): Promise<Account> => {
  return await axiosInstance.post('/user/profile', account)
}
