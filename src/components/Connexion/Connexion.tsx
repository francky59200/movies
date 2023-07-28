import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import sport from '../../public/images/sport.svg'
import PasswordInput from '~/elements/PasswordInput/PasswordInput'
import Button from '~/elements/Button/Button'
import TextInput from '~/elements/TextInput/TextInput'

interface formInputs {
  name: string
  email: string
  password: string
  confirm: string
}

const Connexion = () => {
  const [showRegister, setShowRegister] = useState<boolean>(false)
  const { handleSubmit, control } = useForm<formInputs>({ mode: 'onSubmit' })
  const onSubmit = (data: formInputs) => {
    console.log(data)
  }
  return (
        <Fragment>
           <div className=" relative flex flex-col justify-between  bg-hero-pattern bg-cover bg-center h-[30rem]">
               <div className="flex flex-col items-center">
                   <img className="w-[7rem] mt-[4rem]" src={sport} alt=""/>
                   <p className="text-white font-bold text-[1.2rem] mt-4">No time to rest, Booya !</p>
               </div>
               <div className="px-6 -mt-8">
                   <h1 className="text-white font-bold">{showRegister ? <span className="text-[1.8rem]">Création de compte</span> : <span className="text-[2.8rem]">Bienvenue !</span>}</h1>
                   <p className="text-white text-[1rem] mt-2">{showRegister ? 'Veuillez remplir les champs suivant : ' : 'Vous pouvez vous connecter : '}</p>
               </div>
           </div>
            <div className="bg-colorHome pb-4 h-full pt-6">
                {showRegister
                  ? <form className=" px-6" onSubmit={handleSubmit(onSubmit)}>
                        <TextInput name="name" label="Nom du compte" type="text" data="input-name-register" placeholder="Nom du compte" />
                        <TextInput name="Email" type="email" label="email" className="mb-5" />
                        <PasswordInput control={control} label="Mot de passe" name="password" />
                        <PasswordInput control={control} label="Retapez votre mot de passe" name="confirm" />
                        <Button text='Creer mon compte' className="text-white" />
                    </form>
                  : <form className=" px-6 relative">
                        <TextInput name="name" type="text" data="input-name-login" label="Nom du compte" className="mb-5" placeholder="Nom du compte" />
                        <PasswordInput control={control} label="Mot de passe" name="password" />
                        <a className='no-underline text-primary-1 font-bold -mt-6 mb-9 block text-[0.9rem]'>Mot de passe oublié</a>
                        <Button text='Me connecter' className="text-white" />
                        <p className="relative w-full my-9 text-center text-white before:absolute before:content-[''] before:w-[45%] before:h-[0.1rem] before:top-[50%] before:left-0 before:bg-line after:absolute after:content-[''] after:w-[45%] after:h-[0.1rem] after:top-[50%] after:right-0 after:bg-line">Ou</p>
                    </form>}
                {!showRegister
                  ? <div className="px-6">
                        <Button onClick={() => setShowRegister(true)} text='Creer mon compte' className="text-white" />
                    </div>
                  : <></> }
            </div>
        </Fragment>
  )
}

export default Connexion
