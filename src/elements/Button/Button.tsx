import React from 'react'

export interface Props {
  text: string
  onClick?: () => void
  disabled?: boolean
  iconButton?: string
  className?: string
  id?: string
  type?: 'button' | 'submit' | 'reset' | undefined

}
const Button = ({ text = 'mon text', onClick, disabled, type, id }: Props) => {
  return (
        <button id={id} type={type} onClick={onClick} disabled={disabled} className=" p-5 px-[16px] py-[10px] w-full rounded-[0.8rem] bg-white text-lg text-[#01B4E4] flex justify-center font-bold">
          {text}
        </button>
  )
}

export default Button
