import type { ReactNode } from 'react'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import type { Account } from '~/types/account/account'
import { getUserProfile, getUserResume, isAuthenticated } from '~/actions/account'
import type { Resume } from '~/types/account/resume'
import type { Trophy } from '~/types/trophy/trophy'
import { getTrophies } from '~/actions/trophies'

interface AuthInterface {
  user: Resume
  error: any
  profile: Account
  trophies: Trophy[]
}

export const AuthContext = createContext<AuthInterface>({} as AuthInterface)

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Resume>()
  const [profile, setProfile] = useState<Account>()
  const [trophies, setTrophies] = useState<Trophy[]>()

  useEffect(() => {
    const autentificate = isAuthenticated()
    if (autentificate) {
      getUserResume().then(res => setUser(res))
      getUserProfile().then(res => setProfile(res))
      getTrophies().then(res => setTrophies(res))
    }
  }, [isAuthenticated()])

  const memoValue: any = useMemo(
    () => ({
      user,
      profile,
      trophies,
    }),
    [user, profile, trophies],
  )

  return (
        <AuthContext.Provider value={memoValue}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider
