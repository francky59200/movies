import type { WorkoutInfo } from '~/types/workout/workoutInfo'
import fetchClient from '~/api'
import type { WorkoutDetailInfo } from '~/types/workout/workoutDetailInfo'

export async function addWorkout(workout: WorkoutInfo): Promise<WorkoutInfo> {
  try {
    const { data: info } = await fetchClient().post('/workout', workout)
    return info
  }
  catch (e) {
    throw e
  }
}

export async function workoutListOfMonth(): Promise<{ results: [string] }> {
  try {
    const { data: list } = await fetchClient().get('/workout')
    return list
  }
  catch (e) {
    throw e
  }
}

export async function workoutDetail(workoutId: number): Promise<WorkoutDetailInfo> {
  try {
    const { data: detail } = await fetchClient().get(`/workout/detail/${workoutId}`)
    return detail
  }
  catch (e) {
    throw e
  }
}
