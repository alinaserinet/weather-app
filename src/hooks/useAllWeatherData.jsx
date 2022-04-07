import { useEffect, useState } from 'react'
import api from '../services/api'

export default function useWeatherAllData(city, excludes = []) {
  const [weatherData, setWeatherData] = useState({
    current: null,
    daily: null,
    hourly: null,
    minutely: null,
  })

  useEffect(() => {
    if (!('lat' in city && 'lon' in city)) return
    const { lat, lon } = city
    api.oneCall(lat, lon, excludes).then(({ data }) => {
      setWeatherData({
        current: data.current || null,
        daily: data.daily || null,
        hourly: data.hourly || null,
        minutely: data.minutely || null,
      })
    })
  }, [city])

  return weatherData
}
