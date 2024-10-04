import type { ReactNode } from 'react'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import { getMovies } from '~/actions/movies'

interface AuthInterface {
  movies: any[]
}

export const AuthContext = createContext<AuthInterface>({} as AuthInterface)

function AuthProvider({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
    getMovies().then((res) => {
      setMovies(res)
    })
  }, [])

  const memoValue: any = useMemo(
    () => ({
      movies,
    }),
    [movies],
  )

  return (
        <AuthContext.Provider value={memoValue}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider
