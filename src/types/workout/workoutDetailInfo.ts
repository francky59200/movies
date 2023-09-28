export interface Checkpoint {
  distance: number
  time: number
  coordinates: {
    lat: number
    lon: number
  }
}

export interface WorkoutDetailInfo {
  id: string
  totalKilometer: string
  totalTime: string
  timeKilometer: string
  date: number
  checkpoints: Checkpoint[]
}
