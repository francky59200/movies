import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import { getMovieDetail } from '~/actions/movies'
import BlocHeader from '~/pages/DetailMovie/components/BlocHeader/BlocHeader'

const DetailMovie = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState<any>()

  useEffect(() => {
    getMovieDetail(id).then(res => setDetail(res))
  }, [id])
  console.log('detail', detail)
  if (!detail)
    return <div>Loading...</div>

  return (
        <>
            <Header />
            <div>
                <BlocHeader title={detail?.original_title} date={detail.release_date} image={detail.backdrop_path} overview={detail.overview} companies={detail.production_companies} />
            </div>
            <Footer />
        </>
  )
}

export default DetailMovie
