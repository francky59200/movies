import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { isAuthenticated } from '~/actions/account'

const ProtectedRoutes = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated())
      return navigate('/')
  }, [isAuthenticated()])

  return <Outlet />
}

export default ProtectedRoutes
