import React, { Fragment, useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast/headless'
import { useNavigate } from 'react-router'
import sport from '../../public/images/sport.svg'
import Button from '~/elements/Button/Button'
import { rules } from '~/utils/formRules'
import InputForm from '~/elements/InputForm/InputForm'
import style from '~/elements/InputForm/InputForm.module.scss'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'
import { login } from '~/actions/account'

interface formInputs {
  name?: string
  firstName: string
  lastName: string
  email?: string
  password?: string
  confirm?: string
  nameAccount?: string
}

const Connexion = () => {
  const navigate = useNavigate()
  const [showRegister, setShowRegister] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { handleSubmit, register, formState: { errors, touchedFields } } = useForm<formInputs>({ mode: 'onSubmit', reValidateMode: 'onChange' })
  const onSubmit: SubmitHandler<formInputs> = (data) => {
    if (Object.keys(errors).length)
      return
    login(data.email, data.password).then(() => {
      toast.success('votre compte est crée', { duration: 8000 })
      navigate('/account')
      console.log(data)
    }).catch(() => {
      toast.error('une erreur s est prouit', { duration: Infinity })
    })
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
                  ? <form className=" px-6">
                        <div className={style.form__group}>
                        <InputForm {...register('name', rules.name)}
                                   id="name" isValid={touchedFields.name && !errors.name} isNotValid={errors.name} data="input-name-register"
                                   placeholder="Nom du compte" />
                            <label htmlFor="name" className={style.form__label}>Nom du compte</label>
                            {errors && <p className="text-red-light mt-2">{errors.name?.message}</p>}
                        </div>
                        <div className={style.form__group}>
                        <InputForm {...register('email', rules.email)}
                                   id="email" isValid={touchedFields.name && !errors.email} placeholder="Email" isNotValid={errors.email} type="email" />
                            <label htmlFor="email" className={style.form__label}>Email</label>
                            {errors && <p className="text-red-light mt-2">{errors.email?.message}</p>}
                        </div>
                        <div className={style.form__group}>
                        <InputForm {...register('password', rules.password)}
                                    id="password" placeholder="Mot de passe" isValid={touchedFields.password && !errors.password} isNotValid={errors.password} type="password" />
                            <span className="absolute right-[1rem] top-[2rem]" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <PictoSvg className="text-white" icon="eye-show" /> : <PictoSvg icon="eye-hidden" />}
                            </span>
                            <label htmlFor="password" className={style.form__label}>Mot de passe</label>
                            {errors && <p className="text-red-light mt-2">{errors.password?.message}</p>}
                        </div>
                        <div className={style.form__group}>
                        <InputForm {...register('confirm', rules.confirm)}
                                    id="confirm" placeholder="Confirmer votre mot de passe" isValid={touchedFields.confirm && !errors.confirm} isNotValid={errors.confirm} type="password" />
                            <span className="absolute right-[1rem] top-[2rem]" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <PictoSvg className="text-white" icon="eye-show" /> : <PictoSvg icon="eye-hidden" />}
                            </span>
                            <label htmlFor="confirm" className={style.form__label}>Confirmez votre mot de passe</label>
                            {errors && <p className="text-red-light mt-2">{errors.confirm?.message}</p>}
                        </div>
                        <Button type="submit" text='Creer mon compte' className="text-white" />
                    </form>
                  : <form className=" px-6 relative" onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.form__group}>
                        <InputForm {...register('email', rules.email)} id="email" isValid={touchedFields.email && !errors.email} isNotValid={errors.email}
                                   data="input-email-register" placeholder="Email" />
                        <label htmlFor="Email" className={style.form__label}>Email</label>
                        {errors && <p className="text-red-light mt-3">{errors.email?.message}</p>}
                        </div>
                        <div className={style.form__group}>
                        <InputForm {...register('password', rules.password)} id="password" placeholder="Mot de passe" isValid={touchedFields.password && !errors.password} isNotValid={errors.password} type={showPassword ? 'text' : 'password'} />
                        <span className="absolute right-[1rem] top-[2rem]" onClick={() => setShowPassword(!showPassword)}>
                                   {showPassword ? <PictoSvg icon="eye-show" /> : <PictoSvg icon="eye-hidden" />}
                        </span>
                        <label htmlFor="password" className={style.form__label}>Mot de passe</label>
                        {errors && <p className="text-red-light mt-3">{errors.password?.message}</p>}
                        </div>
                        <a className='no-underline text-primary-1 font-bold -mt-6 mb-9 block text-[0.9rem]'>Mot de passe oublié</a>
                        <Button type="submit" text='Me connecter' className="text-white" />
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
