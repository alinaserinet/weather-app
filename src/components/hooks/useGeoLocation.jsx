import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function useGeoLocation() {
  const [coords, setCoords] = useState(null)
  const [city, setCity] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    updateCurrentPosition()
  }, [])

  useEffect(() => {
    updateCity(coords)
  }, [coords])

  function updateCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        setCoords(data.coords)
      },
      (error) => {
        setError(error)
      }
    )
  }

  function updateCity(coords) {
    if (!coords) return
    const { latitude, longitude } = coords
    api.getCity(latitude, longitude).then(({ data }) => {
      setCity(data[0])
    })
  }

  return [coords, city, error]
}
