import type { ReactNode } from 'react'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import type { Account } from '~/types/account/account'
import { getUser } from '~/actions/account'

interface AuthInterface {
  user: Account
  error: any
}

const AuthContext = createContext<AuthInterface>({} as AuthInterface)

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Account>()

  useEffect(() => {
    getUser().then(res => setUser(res))
  }, [])

  const memoValue: any = useMemo(
    () => ({
      user,
    }),
    [user],
  )

  return (
        <AuthContext.Provider value={memoValue}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider
