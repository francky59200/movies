import type { Trophy } from '~/types/trophy/trophy'
import fetchClient from '~/createAxiosInstance'

export async function getTrophies(): Promise<Trophy[]> {
  try {
    const { data: results } = await fetchClient().get('/user/trophies')
    return results
  }
  catch (e) {
    throw e
  }
}
