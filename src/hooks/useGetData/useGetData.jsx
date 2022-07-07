import { useEffect, useLayoutEffect, useReducer } from 'react'
import { useCityContext } from '../../context/city';
import api from '../../services/api'
import reducer, { initState, setData, setError, setLoading } from './reducer'

export default function useGetData(excludes = []) {
  const [data, dispatch] = useReducer(reducer, initState);
  const city = useCityContext();

  useLayoutEffect(() => {
    if(!('lat' in city && 'lon' in city)){
      dispatch(setError('set-city-error'));
    }
  }, [city]);

  useEffect(() => {
    if (!('lat' in city && 'lon' in city)) return
    const { lat, lon } = city
    dispatch(setLoading())
    api.oneCall(lat, lon, excludes)
    .then(({ data }) => {
      dispatch(setData(data))
    }).catch((error) => {
      dispatch(setError(error));
    });
  }, [city])

  return data;
}
