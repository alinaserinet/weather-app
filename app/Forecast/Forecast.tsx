import { Error, Skeleton } from '@libs/design';
import { useGetData } from '@libs/hooks';
import { excludes } from '@libs/services/api';

import { DailyForecast } from './components';

const Forecast = () => {
  const { daily, loading, error } = useGetData([excludes.current]);

  return (
    <div className="mb-20 mt-8 text-center">
      {loading ? <Skeleton className="mb-5 h-16 w-full" count={7} /> : null}
      {!error && !loading && <DailyForecast data={daily} />}
      <Error error={error} />
    </div>
  );
};

export default Forecast;
