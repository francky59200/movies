import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '~/provider/AuthProvider'
import Card from '~/pages/HomePage/components/Card/Card'
import BlocTitle from '~/pages/HomePage/components/BlocTitle/BlocTitle'
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'

const HomePage = () => {
  const { movies } = useContext(AuthContext)
  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies])
  const handleSearch = (term: string) => {
    const filtered = movies?.filter(movie => movie.title.toLowerCase().includes(term.toLowerCase()))
    setFilteredMovies(filtered)
  }
  return (
      <div>
          <div>
              <Header />
          </div>
          <div className='container mx-auto'>
              <BlocTitle onSearch={handleSearch}/>
              <div className='mx-auto'>
                  <p className='font-semibold text-2xl text-primary-2 mb-5'>Tendances</p>
                  <div className="flex flex-wrap gap-10 mx-auto">
                      {filteredMovies?.map(movie => <Card key={movie.id} id={movie.id} image={movie.backdrop_path} title={movie.title}
                                                  date={movie.release_date}/>)}
                  </div>
              </div>
          </div>
          <Footer />
      </div>

  )
}

export default HomePage
