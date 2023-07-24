import React from 'react'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'

export interface Props {
  text: string
  onClick?: () => void
  disabled?: boolean
  iconButton?: string
  className?: string
}
const Button = ({ text = 'mon text', onClick, disabled, iconButton, className }: Props) => {
  return (
        <button onClick={onClick} disabled={disabled} className="w-full px-[16px] py-[10px] rounded-[0.8rem] bg-buttonColor text-white flex justify-center font-bold">
          <span className="mr-4"><PictoSvg className={className} icon={iconButton} /></span>{text}
        </button>
  )
}

export default Button