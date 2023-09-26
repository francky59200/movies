import React, { useEffect } from 'react'
import HeaderAccount from '~/elements/HeaderAccount/HeaderAccount'
import TropheeBloc from '~/components/Dashboard/partials/TropheeBloc/TropheeBloc'
import WorkoutBloc from '~/components/Dashboard/partials/WorkoutBloc/WorkoutBloc'

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
