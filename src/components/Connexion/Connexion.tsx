import React, { useState } from 'react'
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

const gradiant = {
  background: 'linear-gradient(360deg, #282934 12.38%, rgba(40, 41, 52, 0.8) 23.41%, rgba(40, 41, 52, 0.9) 47.01%, rgba(40, 41, 52, 0) 100%)',
  content: '',
  bottom: 0,
  left: 0,
  right: 0,
  height: '7rem',
}

const Connexion = () => {
  const [showRegister, setShowRegister] = useState<boolean>(false)
  const { register, handleSubmit } = useForm<formInputs>({ mode: 'onSubmit' })
  const onSubmit = (data: formInputs) => {
    console.log(data)
  }
  return (
        <div className="bg-colorHome pb-12">
           <div className=" backdrop-contrast-200 bg-white/30 relative flex flex-col justify-between bg-[url('~/public/images/login.svg')] bg-cover bg-center h-[30rem]">
               <div className="flex flex-col items-center">
                   <img className="w-[7rem] mt-[4rem]" src={sport} alt=""/>
                   <p className="text-white font-bold text-[1.2rem] mt-4">No time to rest, Booya !</p>
               </div>
               <div className="absolute px-6" style={gradiant}>
                   <h1 className="text-white text-[1.8rem] font-bold">{showRegister ? 'Création de compte' : 'Bienvenue !'}</h1>
                   <p className="text-white text-[1rem] mt-2">{showRegister ? 'Veuillez remplir les champs suivant : ' : 'Vous pouvez vous connecter : '}</p>
               </div>
           </div>
            {showRegister
              ? <form className="bg-colorHome px-6" onSubmit={handleSubmit(onSubmit)}>
                <TextInput label="Nom du compte" {...register('name')} type="text" className="mb-5" />
                <TextInput label="Email" type="email" {...register('email')} className="mb-5" />
                <PasswordInput text="Mot de passe" {...register('password')} />
                <PasswordInput text="Retapez votre mot de passe" {...register('confirm')} />
                <Button text='Creer mon compte' className="text-white" />
            </form>
              : <form className="bg-colorHome px-6 relative">
                <TextInput label="Nom du compte" {...register('name')} type="text" className="mb-5" />
                <PasswordInput text="Mot de passe" {...register('password')} />
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
  )
}

export default Connexion
