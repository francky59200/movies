import React from 'react'
import { useForm } from 'react-hook-form'
import InputForm from '~/elements/InputForm/InputForm'

interface BlocTitleProps {
  onSearch: (searchTerm: string) => void
}

const BlocTitle = ({ onSearch }: BlocTitleProps) => {
  const { register } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
      <div className="bg-hero-pattern bg-cover bg-center h-[25rem] flex flex-col mb-10 p-14 max-[640px]:p-5 max-[640px]:justify-center">
          <h2 className='text-5xl font-bold pb-3 text-white max-[640px]:text-2xl'>Bienvenue,</h2>
          <h3 className='font-semibold text-3xl pb-5 text-white max-[640px]:text-lg'>Des millions de films, émissions télévisées et
              artistes...</h3>
              <InputForm {...register('search')}
                         id="search" placeholder="Rechercher un film, une émission télévisée..."
                         data="input-register-search"
                         onChange={handleInputChange}
              />
      </div>
  )
}

export default BlocTitle
