import { useEffect, useState, useRef } from 'react'
import Card from '../components/Card'
import SearchBox from '../components/SearchBox'
import { MainLayout } from '../layouts'
import api from '../services/api'
import WeatherIcon from '../components/WeatherIcon'
import { useSetCityContext } from '../context/city'

export default function SearchCity() {
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [citiesList, setCitiesList] = useState([])
  const setCityContext = useSetCityContext()

  useEffect(() => {
    searchCity(city)
  }, [city])

  const searchTimer = useRef()

  function searchCity(query) {
    clearTimeout(searchTimer.current)
    if (!query || query.length < 3) return
    searchTimer.current = setTimeout(() => {
      setLoading(true)
      api.searchCity(query).then(({ data }) => {
        setCitiesList(data.list)
        setLoading(false)
      })
    }, 1000)
  }


  function updateCityContext(city) {
      setCityContext({
        name: city.name,
        lat: city.coord.lat,
        lon: city.coord.lon,
        country: city.sys.country,
      })
  }

  return (
    <MainLayout>
      <SearchBox
        placeholder="Search City"
        isLoading={loading}
        className="mb-2 mt-6"
        city={city}
        setCity={setCity}
      />
      {citiesList.map((city) => (
        <button
          className="block w-full"
          onClick={() => updateCityContext(city)}
          key={city.id}
        >
          <Card className="mt-4 text-left">
            {city.name} -<small> {city.sys.country}</small>
            <span className="text-primary-darker float-right text-xs">
              <WeatherIcon
                className="text-secondaru"
                icon={city.weather[0].icon}
                color="auto"
              />
            </span>
          </Card>
        </button>
      ))}
    </MainLayout>
  )
}
