import React, { useContext, useEffect } from 'react'
import { AuthContext } from '~/provider/AuthProvider'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'
import strophe from '~/public/images/trophee.svg'
import short from '~/public/images/short.svg'

const Dashboard = () => {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    document.body.style.backgroundColor = '#272832'
  }, [])
  return (
        <div className='text-white'>
            <div className="flex justify-around mt-3 mb-10 mr-[2rem]">
                <PictoSvg icon='informations' />
                <div className="rounded-full border-white py-1.5 px-2 border-2">
                    <img className="w-[1.5rem]" src={short} alt=""/>
                </div>
                <PictoSvg className="w-1.5" icon='profil' />
            </div>
            <div className="mt-10">
                <h2 className="text-[2rem] text-white font-bold px-10">Trophées</h2>
                <div className="text-center my-10 px-10 flex flex-col justify-center items-center">
                    <img src={strophe} alt=""/>
                    <a className="text-white mt-5 block text-[1rem] font-medium underline" href='account/trophies'>Voir mes trophées</a>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-[2rem] text-white font-bold px-10 mb-3.5">Entraînement</h2>
                <ul className="px-10 py-4 flex justify-between text-white text-[1.1rem] bg-buttonColor">
                    <li>
                        Date
                    </li>
                    <li>
                        Distance parcourue
                    </li>
                </ul>
            </div>
            {user.workoutNumber} {user.fastestKilometer} {user.totalTime}
        </div>
  )
}

export default Dashboard
