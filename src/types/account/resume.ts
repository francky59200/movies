import type { Trophy } from '~/types/trophy/trophy'

export interface Resume {
  workoutNumber: number
  totalKilometer: string
  totalTime: string
  fastestKilometer: string
  lastTrophy: Trophy
}
