import { excludes } from '../../services/api'
import { FooterAlert } from '../../components/MobileFooter'
import { AlertMessage } from '../../components/Alert'
import Skeleton from './components/Skeleton'
import { CurrentWeather } from './components'
import HourlyWeather from './components/HourlyWeather'
import useGetData from '../../hooks/useGetData'
import Error from '../../components/Error'

export default function Home() {
  
  const weatherData = useGetData([excludes.minutely, excludes.daily]);
  const { error, loading, current, hourly, timezone } = weatherData;
  
  return (
    <>
      <div className="text-center mt-8">
        {loading && <Skeleton />}
        {!error && !loading && (
          <>
            <CurrentWeather data={current} />
            <HourlyWeather data={hourly} timezone={timezone} />
          </>
        )}
      </div>

      {loading && (
        <FooterAlert iconColor="#d8ff00">
          <AlertMessage message="Getting Weather" />
        </FooterAlert>
      )}

      <Error error={error} />
    </>
  );
}
