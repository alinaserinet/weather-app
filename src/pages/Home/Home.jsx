import { useEffect, useState } from 'react'
import WeatherIcon from '../../components/WeatherIcon'
import { useCityContext } from '../../context/city'
import api, { excludes } from '../../services/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import date from '../../services/date'
import { FooterAlert } from '../../components/MobileFooter'
import { AlertMessage } from '../../components/Alert'
import { Link } from 'react-router-dom'
import 'swiper/css'
import Skeleton from './components/Skeleton'

export default function Home() {
  const cityContext = useCityContext()
  const [currentWeather, setCurrentWeather] = useState(null)
  const [hourly, setHourly] = useState([])
  const [timeZone, setTimeZone] = useState('UTC')

  useEffect(() => {
    updateWeather(cityContext)
  }, [cityContext])

  function updateWeather(city) {
    if (!('lat' in city && 'lon' in city)) return

    const { lat, lon } = city
    api
      .oneCall(lat, lon, [excludes.minutely, excludes.alerts])
      .then(({ data }) => {
        setTimeZone(data.timezone)
        setHourly(data.hourly)
        setCurrentWeather(data.current)
      })
  }

  return (
    <>
      <div className="text-center mt-8">
        {!currentWeather && <Skeleton />}
        {currentWeather && (
          <>
            <WeatherIcon
              className="mx-auto"
              size="4rem"
              color="#FFFFFF"
              icon={currentWeather.weather[0].icon}
            />
            <div className="text-sm mt-2 text-gray-100">
              {currentWeather.weather[0].description}
            </div>
            <div className="text-4xl mt-5 text-white">
              {currentWeather.temp}
              <small className="text-gray-100 text-2xl"> °C</small>
            </div>
            <div className="mt-1">
              <small className="mr-3 text-yellow-200">
                Feels like {currentWeather.feels_like} °
              </small>
            </div>
            <div className="mt-16">
              <Swiper
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
              >
                {hourly.map((data) => (
                  <SwiperSlide>
                    <div className="bg-gray-900 bg-opacity-40 rounded-xl p-3 text-white">
                      <div className="text-xs">
                        <span className="pr-2">
                          {date.getDayByTimestamp(data.dt)}
                        </span>
                        <span>
                          {date.getTimeByTimestamp(data.dt, timeZone)}
                        </span>
                      </div>
                      <WeatherIcon
                        className="mx-auto mt-2"
                        size="2rem"
                        icon={data.weather[0].icon}
                      />
                      <div className="mt-2">
                        <span className="text-md">{data.temp}</span>
                        <small className="text-gray-100 text-xs"> °C</small>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        )}
      </div>
      {!currentWeather && "name" in cityContext && (
        <FooterAlert iconColor="#d8ff00">
          <AlertMessage message="Getting Weather" />
        </FooterAlert>
      )}
      {!("name" in cityContext) && (
        <div className="bg-gray-900 bg-opacity-40 max-w-md p-5 text-white w-11/12 rounded-xl absolute-center">
          <div className="text-center">
            <h2 className="mb-10">Please Set Your City</h2>
            <Link
              to="/search-city"
              className="bg-oragge text-black p-3 px-4 inline-block rounded-xl"
            >
              Set City
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
