import React from 'react'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'

export interface Props {
  text: string
  onClick?: () => void
  disabled?: boolean
  iconButton?: string
  className?: string
  id?: string
  type?: 'button' | 'submit' | 'reset' | undefined

}
const Button = ({ text = 'mon text', onClick, disabled, iconButton, className, type, id }: Props) => {
  return (
        <button id={id} type={type} onClick={onClick} disabled={disabled} className="w-full px-[16px] py-[10px] rounded-[0.8rem] bg-buttonColor text-white flex justify-center font-bold">
          <span className="mr-4"><PictoSvg className={className} icon={iconButton} /></span>{text}
        </button>
  )
}

export default Button
