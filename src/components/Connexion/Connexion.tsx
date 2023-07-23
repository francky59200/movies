import React, { Fragment } from 'react'
import sport from '../../public/images/sport.svg'
import PasswordInput from '~/elements/PasswordInput/PasswordInput'

const Connexion = () => {
  return (
        <Fragment>
           <div className="flex flex-col items-center bg-[url('~/public/images/loginImage.png')]">
              <img className="w-[7rem]" src={sport} alt=""/>
               <p className="text-white font-bold">No time to rest, Booya !</p>
           </div>
           <form>
               <PasswordInput />
           </form>
        </Fragment>
  )
}

export default Connexion
