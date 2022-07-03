import axios from 'axios'

const baseURL =
  process.env.REACT_APP_BASE_URL || 'https://api.openweathermap.org/data/2.5/'

const geoURL =
  process.env.REACT_APP_GEO_URL || 'https://api.openweathermap.org/geo/1.0/'

const http = axios.create({
  baseURL,
  params: {
    appid: process.env.REACT_APP_TOKEN || null,
    units: process.env.REACT_APP_UNITS || null,
  },
})

export const http2 = axios.create({
  baseURL: geoURL,
  params: {
    appid: process.env.REACT_APP_TOKEN,
  },
})

export default http
