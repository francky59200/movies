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
