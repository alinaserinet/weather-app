import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import Card from '../../components/Card'
import WeatherIcon from '../../components/WeatherIcon'
import { useCityContext } from '../../context/city'
import useWeatherAllData from '../../hooks/useAllWeatherData'
import { excludes } from '../../services/api'
import { TempCard } from './components'
import date from '../../services/date';
import Skeleton from '../../components/Skeleton'

export default function Forecast() {
  const cityContext = useCityContext()
  const allWeatherData = useWeatherAllData(cityContext, [excludes.current])
  return (
      <div className="text-center mt-8 mb-20">
        {!allWeatherData.daily && <Skeleton className='w-full h-16 mb-5' count={7} />}
        {allWeatherData.daily?.map((data) => {
          const weather = data.weather[0]
          const { min, max } = data.temp
          return (
            <Card className="mb-5 flex justify-between items-center h-16" key={data.dt}>
              <div className='w-1/6 text-left'>
                <span className='text-xs text-gray-300'>
                {date.getDayByTimestamp(data.dt)}
                </span>
              </div>
              
              <div className='w-7/12 text-center'>
                <WeatherIcon
                  icon={weather.icon}
                  className="inline-block mr-3"
                />
                <small className="text-xs">{weather.description}</small>
              </div>
              
              <div className='w-1/4 text-right'>
                <TempCard min={min} max={max} />
              </div>
            </Card>
          );
        })}
      </div>
  )
}
