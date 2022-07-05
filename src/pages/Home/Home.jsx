import { useEffect, useLayoutEffect, useReducer } from 'react'
import { useCityContext } from '../../context/city'
import api, { excludes } from '../../services/api'
import { FooterAlert } from '../../components/MobileFooter'
import { AlertMessage, SetCityAlert } from '../../components/Alert'
import Skeleton from './components/Skeleton'
import { CurrentWeather } from './components'
import reducer, { initState, setData, setError } from './reducer'
import HourlyWeather from './components/HourlyWeather'

export default function Home() {
  const cityContext = useCityContext();
  const [state, dispatch] = useReducer(reducer, initState);

  useLayoutEffect(() => {
    if(!cityContext.name) {
      dispatch(setError('city-error'));
    };
  }, [cityContext]);

  useEffect(() => {
    updateWeather(cityContext);
  }, [cityContext]);

  function updateWeather(city) {
    if (!("lat" in city && "lon" in city)) return;
    const { lat, lon } = city;
    api
      .oneCall(lat, lon, [excludes.minutely, excludes.alerts])
      .then(({ data }) => {
        dispatch(setData(data));
      });
  }

  const { error, loading, current, hourly, timezone } = state;

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

      {error === 'city-error' && (
        <SetCityAlert />
      )}
    </>
  );
}
