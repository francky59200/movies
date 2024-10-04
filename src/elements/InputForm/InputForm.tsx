import React from 'react'

export interface Props {
  type?: string
  id?: string
  placeholder?: string
  data?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<Props> = React.forwardRef(({
  id, type, placeholder,
  data, onChange, ...params
}, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
          <input type={type} id={id} data-cy={data} {...params} ref={ref} onChange={onChange}
                 className='p-5 relative border border-r-2 text-[1rem] bg-white h-[3.5rem] text-grey-scale-3 w-[70%] mr-3 mb-5 focus:outline-none outline-offset-0 outline-grey-scale-2 rounded'
                 placeholder={placeholder}
                   />
  )
},
)

export default InputForm
