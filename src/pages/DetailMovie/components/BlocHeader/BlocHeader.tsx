import React from 'react'
import { useNavigate } from 'react-router-dom'

interface BlocHeaderProps {
  title: string
  image: string
  overview: string
  companies: Companie[]
  date: string
}

interface Companie {
  id: number
  logo_path: string
  name: string
  original_country: string
}

const BlocHeader = ({ title, overview, companies, date, image }: BlocHeaderProps) => {
  const navigate = useNavigate()
  return (
        <div className='bg-[#01b4e4] h-[570px] max-[640px]:h-max flex flex-col  mb-20'>
            <div className='container mx-auto flex flex-col'>
                <div onClick={() => navigate(-1)} className='mb-10 mt-10 cursor-pointer'>
                    <p className='text-xl font-bold mb-3 underline text-white'><span></span> Back</p>
                </div>
                <div className='flex justify-around gap-10 max-[640px]:flex-col'>
                    <img src={`https://image.tmdb.org/t/p/w300${image}`} alt={title}/>
                    <div className='text-white'>
                        <h1 className='text-4xl font-bold mb-3'>{title}</h1>
                        <p className='text-lg mb-3'>{new Date(date).toLocaleDateString('fr-FR')}</p>
                        <p className='text-xl font-bold mb-3'>Synopsis</p>
                        <p className='text-lg mb-3'>{overview}</p>
                        <ul>
                            {companies.map(companie => <li className='text-lg font-bold'
                                                           key={companie.id}>{companie.name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BlocHeader
