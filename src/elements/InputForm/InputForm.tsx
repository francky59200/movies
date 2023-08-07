import React from 'react'
import style from './InputForm.module.scss'

export interface Props {
  name?: string
  label?: string
  type?: string
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

const InputForm: React.FC<Props> = React.forwardRef(({
  id, type, placeholder,
  data, isValid, isNotValid, ...params
}, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
          <input type={type} id={id} data-cy={data} {...params} ref={ref}
                  className={classNames(style.form__field, isValid && 'text-primary-1', isNotValid && 'text-red-light')}
                  placeholder={placeholder} />
  )
},
)

export default InputForm
