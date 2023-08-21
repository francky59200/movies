import React, { useContext } from 'react'
import { AuthContext } from '~/provider/AuthProvider'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  if (user)
    console.log(user)
  return (
        <div>
            welcome to your dashboard
        </div>
  )
}

export default Dashboard
