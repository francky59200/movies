import type { WorkoutDetailInfo } from '~/types/workout/workoutDetailInfo'
import createAxiosInstance from '~/createAxiosInstance'

export async function addWorkout(workout: WorkoutDetailInfo): Promise<WorkoutDetailInfo> {
  try {
    const { data: info } = await createAxiosInstance({ method: 'POST', url: '/workout', data: workout })
    return info
  }
  catch (e) {
    throw e
  }
}

export async function getWorkouts(): Promise<WorkoutDetailInfo[]> {
  try {
    const { data: works } = await createAxiosInstance({ method: 'GET', url: '/workout' })
    return works
  }
  catch (e) {
    throw e
  }
}

export async function workoutDetail(workoutId: number): Promise<WorkoutDetailInfo> {
  try {
    const { data: detail } = await createAxiosInstance({ method: 'GET', url: `/workout/detail/${workoutId}` })
    return detail
  }
  catch (e) {
    throw e
  }
}
