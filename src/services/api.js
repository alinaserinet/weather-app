import http, { http2 } from './http'

export const excludes = {
  current: 'current',
  minutely: 'minutely',
  hourly: 'hourly',
  daily: 'daily',
  alerts: 'daily',
}

class API {
  async searchCity(query) {
    return http.get(`/find?q=${query}`)
  }
  async currentWeather(lat, lon) {
    return http.get(`/weather?lat=${lat}&lon=${lon}`)
  }

  async oneCall(lat, lon, exclude = []) {
    const excludeStr = exclude.filter((item) => item in excludes).join(',')
    return http.get(`/onecall?lat=${lat}&lon=${lon}&exclude=${excludeStr}`)
  }

  async getCity(lat, lon) {
    return http2.get(`/reverse?lat=${lat}&lon=${lon}`)
  }
}

const api = new API()
export default api
