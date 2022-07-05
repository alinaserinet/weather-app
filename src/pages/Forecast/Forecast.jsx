import { useCityContext } from '../../context/city'
import { excludes } from '../../services/api'
import { DailyForecast } from './components'
import Skeleton from '../../components/Skeleton'
import useAllData from '../../hooks/useAllData'


export default function Forecast() {
  const cityContext = useCityContext()
  const {daily, hourly, loading, error} = useAllData(cityContext, [excludes.current])

  return (
    <div className="text-center mt-8 mb-20">
      {loading && <Skeleton className="w-full h-16 mb-5" count={7} />}
      {!error && !loading && <DailyForecast data={daily} />}
      {error && <div>{error.message}</div>}
    </div>
  );
}
