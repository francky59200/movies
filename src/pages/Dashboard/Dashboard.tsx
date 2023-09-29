import React, { useEffect } from 'react'
import HeaderAccount from '~/components/HeaderAccount/HeaderAccount'
import TropheeBloc from '~/pages/Dashboard/partials/TropheeBloc/TropheeBloc'
import WorkoutBloc from '~/pages/Dashboard/partials/WorkoutBloc/WorkoutBloc'

const Dashboard = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#272832'
  }, [])
  return (
        <div className='text-white'>
           <HeaderAccount />
            <TropheeBloc />
            <WorkoutBloc />
        </div>
  )
}

export default Dashboard
