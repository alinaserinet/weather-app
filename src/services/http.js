import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    appid: process.env.REACT_APP_TOKEN,
    units: process.env.REACT_APP_UNITS,
  },
})

export const http2 = axios.create({
  baseURL: process.env.REACT_APP_GEO_URL,
  params: {
    appid: process.env.REACT_APP_TOKEN,
  },
})

export default http
