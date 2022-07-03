import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import Card from '../../components/Card'
import WeatherIcon from '../../components/WeatherIcon'
import { useCityContext } from '../../context/city'
import useWeatherAllData from '../../hooks/useAllWeatherData'
import { excludes } from '../../services/api'
import { TempCard } from './components'
import date from '../../services/date';

export default function Forecast() {
  const cityContext = useCityContext()

  const allWeatherData = useWeatherAllData(cityContext, [excludes.current])

  console.log(allWeatherData, cityContext);
  return (
      <div className="text-center my-8">
        {allWeatherData.daily?.map((data) => {
          const weather = data.weather[0]
          const { min, max } = data.temp
          return (
            <Card className="mt-5 flex justify-between items-center py-2" key={data.dt}>
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
