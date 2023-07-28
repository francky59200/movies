import React from 'react'
import style from './TextInput.module.scss'

export interface Props {
  name: string
  label: string
  type: string
  defaultValue?: string
  id?: string
  error?: boolean
  helperText?: string
  className?: string
  control?: any
  placeholder?: any
  data?: string
}

const TextInput = ({ name, type, label, placeholder, data }: Props) => {
  return (
        <div className={style.form__group}>
          <input type={type} id={name} data-cy={data} className={style.form__field} placeholder={placeholder} />
            <label htmlFor={name} className={style.form__label}>{label}</label>
        </div>
  )
}

export default TextInput
