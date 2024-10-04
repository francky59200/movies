import React from 'react'
import tmb from '~/public/images/tmb.png'

const Header = () => {
  return (
        <header className='bg-[#032541] py-5 w-full'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    <img className='w-[50px]' src={tmb} alt='logo films'/>
                    <p className='text-white text-lg font-bold'>Films</p>
                </div>
                <ul className='text-white text-lg font-bold'>
                    <li>
                        Connexion
                    </li>
                </ul>
            </div>
        </header>
  )
}

export default Header
