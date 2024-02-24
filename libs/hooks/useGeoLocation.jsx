import { api } from '@libs/services';
import { useEffect, useState } from 'react';

export default function useGeoLocation() {
  const [coords, setCoords] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateCurrentPosition();
  }, []);

  useEffect(() => {
    updateCity(coords);
  }, [coords]);

  function updateCurrentPosition() {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      data => {
        setCoords(data.coords);
        setLoading(false);
      },
      error => {
        setError(error);
        setLoading(false);
      },
    );
  }

  function updateCity(coords) {
    if (!coords) return;
    const { latitude, longitude } = coords;
    setLoading(true);
    api.getCity(latitude, longitude).then(({ data }) => {
      setCity(data[0]);
      setLoading(false);
    });
  }

  return { coords, city, error, loading };
}
