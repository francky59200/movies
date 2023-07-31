import React from 'react'
import style from './TextInput.module.scss'

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

const TextInput = ({ name, type, label, placeholder, data, isValid, isNotValid, messageError }: Props) => {
  return (
        <div className={style.form__group}>
          <input type={type} id={name} data-cy={data}
                  className={classNames(style.form__field, isValid && 'text-indigo-600', isNotValid && 'text-red-600')}
                  placeholder={placeholder} />
            <label htmlFor={name} className={style.form__label}>{label}</label>
          {isNotValid && <p className="text-red-600">{messageError}</p>}
        </div>
  )
}

export default TextInput
