import React from 'react'
import { Link } from 'react-router-dom'

interface CardsProps {
  image: string
  title: string
  date: string
  id: string
}

const Card = ({ id, image, date, title }: CardsProps) => {
  return (
        <Link to={`detail/${id}`} className='max-w-[275px]'>
            <img className='rounded-[10%]' src={`https://image.tmdb.org/t/p/w300${image}`} alt={title}/>
            <div className='text-base font-bold break-words my-3'>{title}</div>
            <div>{new Date(date).toLocaleDateString('fr-FR')}</div>
        </Link>
  )
}

export default Card
