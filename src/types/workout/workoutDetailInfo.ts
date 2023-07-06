interface Checkpoint {
  distance: number
  time: number
  coordinates: {
    lat: number
    lon: number
  }
}

export interface WorkoutDetailInfo {
  id: string
  date: number
  distance: number
  time: number
  checkpoints?: Checkpoint[]
  records?: [string]
}
