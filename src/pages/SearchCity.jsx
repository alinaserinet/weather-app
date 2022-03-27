import { useEffect, useState, useRef } from 'react'
import Card from '../components/Card'
import SearchBox from '../components/SearchBox'
import { MainLayout } from '../layouts'
import api from '../services/api'
import WeatherIcon from '../components/WeatherIcon'
import { useSetCityContext } from '../context/city'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import useGeoLocation from '../components/hooks/useGeoLocation'
import { PingLoader } from '../components/Loader'

export default function SearchCity() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [citiesList, setCitiesList] = useState([])
  const setCityContext = useSetCityContext()
  const geoData = useGeoLocation()

  function updateCityFromGeo() {
    if (!geoData.city) return
    setCityContext(geoData.city)
  }

  useEffect(() => {
    searchCity(query)
  }, [query])

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
      <div className="flex items-center mb-2 mt-6">
        <SearchBox
          placeholder="Search City"
          isLoading={loading}
          className="w-5/6 sm:w-11/12"
          city={query}
          setCity={setQuery}
        />
        <div className="w-1/6 sm:w-1/12 text-right">
          <button
            className="bg-gray-50 inline-block p-2 rounded-full"
            onClick={updateCityFromGeo}
          >
            <HiOutlineLocationMarker size="2rem" color="#8d8d8d" />
          </button>
        </div>
      </div>
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
      {geoData.loading && !geoData.city && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-14">
          <PingLoader size=".5rem" className="bg-sky-300" />
          <span className="pl-2 text-gray-200 text-xs">
            Finding Your Location
          </span>
        </div>
      )}
    </MainLayout>
  )
}
