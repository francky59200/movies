import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv')

dotenv.config()

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
})
