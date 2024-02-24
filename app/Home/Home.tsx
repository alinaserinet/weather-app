import { Skeleton } from '@libs/design';
import { AlertMessage } from '@libs/design/Alert';
import Error from '@libs/design/Error';
import { FooterAlert } from '@libs/design/MobileFooter';
import { useGetData } from '@libs/hooks';
import { excludes } from '@libs/services/api';

import { CurrentWeather } from './components';
import HourlyWeather from './components/HourlyWeather';

const Home = () => {
  const weatherData = useGetData([excludes.minutely, excludes.daily]);
  const { error, loading, current, hourly, timezone } = weatherData;

  return (
    <>
      <div className="mt-8 text-center">
        {loading ? <Skeleton /> : null}
        {!error && !loading && (
          <>
            <CurrentWeather data={current} />
            <HourlyWeather data={hourly} timezone={timezone} />
          </>
        )}
      </div>

      {loading ? (
        <FooterAlert iconColor="#d8ff00">
          <AlertMessage message="Getting Weather" />
        </FooterAlert>
      ) : null}

      <Error error={error} />
    </>
  );
};
export default Home;
