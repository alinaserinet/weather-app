import { useCityContext } from '@libs/context';
import { api } from '@libs/services';
import { useEffect, useLayoutEffect, useReducer } from 'react';

import reducer, { initState, setData, setError, setLoading } from './reducer';

export default function useGetData(excludes = []) {
  const [data, dispatch] = useReducer(reducer, initState);
  const city = useCityContext();

  useLayoutEffect(() => {
    if (!('lat' in city && 'lon' in city)) {
      dispatch(setError('set-city-error'));
    }
  }, [city]);

  useEffect(() => {
    if (!('lat' in city && 'lon' in city)) return;
    const { lat, lon } = city;
    dispatch(setLoading());
    api
      .oneCall(lat, lon, excludes)
      .then(({ data }) => {
        dispatch(setData(data));
      })
      .catch(error => {
        dispatch(setError(error));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return data;
}
