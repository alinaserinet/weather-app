import { useEffect } from 'react'
import Card from '../components/Card'
import WeatherIcon from '../components/WeatherIcon'
import { useCityContext } from '../context/city'
import useWeatherAllData from '../hooks/useAllWeatherData'
import { MainLayout } from '../layouts'
import api, { excludes } from '../services/api'

export default function Forecast() {
  const cityContext = useCityContext()

  const allWeatherData = useWeatherAllData(cityContext, [excludes.current])
  console.log(cityContext)
  console.log(allWeatherData)
  return (
    <MainLayout>
      <div className="text-center my-8">
        {allWeatherData.daily?.map((data) => {
          const weather = data.weather[0]
          const { min, max } = data.temp
          return (
            <Card className="mt-5 flex justify-between" key={data.dt}>
              <span>
                <WeatherIcon
                  icon={weather.icon}
                  className="inline-block mr-3"
                />
                <small className="text-xs">{weather.description}</small>
              </span>
            </Card>
          )
        })}
      </div>
    </MainLayout>
  )
}
