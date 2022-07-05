import { useEffect, useReducer } from 'react'
import api from '../../services/api'
import reducer, { initState, setData, setError, setLoading } from './reducer'

export default function useAllData(city, excludes = []) {
  const [data, dispatch] = useReducer(reducer, initState);

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
