import { useEffect, useState } from 'react'

export default function useGeoLocation() {
  const [coords, setCoords] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    updateCurrentPosition()
  }, [])

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

  return [coords, error]
}
