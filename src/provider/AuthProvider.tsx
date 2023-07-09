import type { ReactNode } from 'react'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import type { Account } from '~/types/account/account'
import { getUser } from '~/actions/account'

interface AuthInterface {
  user: Account
  error: any
}

const AuthContext = createContext<AuthInterface>({} as AuthInterface)

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Account>()
  const [error, setError] = useState<any>()
  const location = useLocation()

  useEffect(() => {
    if (error)
      setError(undefined)
  }, [location.pathname])

  useEffect(() => {
    getUser().then(res => setUser(res))
  }, [])

  const memoValue: any = useMemo(
    () => ({
      user,
      error,
    }),
    [user, error],
  )

  return (
        <AuthContext.Provider value={memoValue}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider
