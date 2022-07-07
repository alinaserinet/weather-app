import { excludes } from '../../services/api'
import { DailyForecast } from './components'
import Skeleton from '../../components/Skeleton'
import useGetData from '../../hooks/useGetData'
import Error from '../../components/Error'


export default function Forecast() {
  const {daily, hourly, loading, error} = useGetData([excludes.current])

  return (
    <div className="text-center mt-8 mb-20">
      {loading && <Skeleton className="w-full h-16 mb-5" count={7} />}
      {!error && !loading && <DailyForecast data={daily} />}
      <Error error={error} />
    </div>
  );
}
