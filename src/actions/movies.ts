import type { Trophy } from '~/types/trophy/trophy'
import createAxiosInstance from '~/createAxiosInstance'

export async function getTrophies(): Promise<Trophy[]> {
  try {
    const { data: results } = await createAxiosInstance({ method: 'GET', url: '/user/trophies' })
    return results
  }
  catch (e) {
    throw e
  }
}

export async function getMovies() {
  try {
    const { data: list } = await createAxiosInstance({ method: 'GET', url: 'movie/top_rated' })
    console.log('list', list.results)
    return list.results
  }
  catch (e) {
    throw e
  }
}

export async function getMovieDetail(id: string | undefined) {
  try {
    const { data: detail } = await createAxiosInstance({ method: 'GET', url: `movie/${id}` })
    return detail
  }
  catch (e) {
    throw e
  }
}

export async function searchMovie(payload: string) {
  try {
    const { data: detail } = await createAxiosInstance({ method: 'GET', url: `search/movie/?query=${payload}` })
    return detail
  }
  catch (e) {
    throw e
  }
}
