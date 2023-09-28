import type { ReactNode } from 'react'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import type { Account } from '~/types/account/account'
import { getUserProfile, isAuthenticated } from '~/actions/account'
import type { Trophy } from '~/types/trophy/trophy'
import { getTrophies } from '~/actions/trophies'
import { getWorkouts } from '~/actions/workout'
import type { WorkoutDetailInfo } from '~/types/workout/workoutDetailInfo'

interface AuthInterface {
  user: WorkoutDetailInfo[]
  error: any
  profile: Account
  trophies: Trophy[]
}

export const AuthContext = createContext<AuthInterface>({} as AuthInterface)

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<WorkoutDetailInfo[] | []>([])
  const [profile, setProfile] = useState<Account | {}>({})
  const [trophies, setTrophies] = useState<Trophy[] | []>([])

  useEffect(() => {
    const autentificate = isAuthenticated()
    if (autentificate) {
      getWorkouts().then(res => setUser(res))
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
