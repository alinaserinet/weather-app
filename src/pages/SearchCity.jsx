import { useEffect, useState, useRef } from 'react'
import Card from '../components/Card'
import SearchBox from '../components/SearchBox'
import { MainLayout } from '../layouts'
import api from '../services/api'
import WeatherIcon from '../components/WeatherIcon'
import { useSetCityContext } from '../context/city'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import useGeoLocation from '../hooks/useGeoLocation'
import { FooterAlert } from '../components/MobileFooter'
import { AlertMessage } from '../components/Alert'

export default function SearchCity() {
  const [query, setQuery] = useState('')
  const [searchLoader, setSearchLoader] = useState(false)
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
    if (!query || query.length < 3) {
      setCitiesList([])
      return
    }
    searchTimer.current = setTimeout(() => {
      setSearchLoader(true)
      setCitiesList([])
      api.searchCity(query).then(({ data }) => {
        setCitiesList(data.list)
        setSearchLoader(false)
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
          isLoading={searchLoader}
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
      {searchLoader && (
        <FooterAlert iconColor="#d8ff00">
          <AlertMessage message="Finding Cities" />
        </FooterAlert>
      )}
      {!searchLoader && geoData.loading && !geoData.city && (
        <FooterAlert iconColor="#00ffad">
          <AlertMessage message="Finding Your Location" />
        </FooterAlert>
      )}
      {!searchLoader && geoData.error && (
        <FooterAlert iconColor="#ff4545">
          <AlertMessage
            message={geoData.error.message}
            className="text-red-200"
          />
        </FooterAlert>
      )}
    </MainLayout>
  )
}
