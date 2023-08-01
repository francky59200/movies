import React, { useState } from 'react'
import style from './InputForm.module.scss'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'

export interface Props {
  name: string
  label: string
  type: string
  defaultValue?: string
  id?: string
  helperText?: string
  className?: string
  control?: any
  placeholder?: any
  data?: string
  isValid?: boolean
  isNotValid?: any
  messageError?: string
}

const classNames = (...classes: any) => {
  return classes.join(' ')
}

const InputForm = ({ name, type, label, placeholder, data, isValid, isNotValid, messageError }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
        <div className={style.form__group}>
          <input type={type} id={name} data-cy={data}
                  className={classNames(style.form__field, isValid && 'text-indigo-600', isNotValid && 'text-red-600')}
                  placeholder={placeholder} />
          {type === 'password' && <span className="absolute right-[1rem] top-[2rem]" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <PictoSvg className="text-white" icon="eye-show" /> : <PictoSvg icon="eye-hidden" />}
          </span>}
            <label htmlFor={name} className={style.form__label}>{label}</label>
          {isNotValid && <p className="text-red-600">{messageError}</p>}
        </div>
  )
}

export default InputForm
