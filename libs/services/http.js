import axios from 'axios';

const baseURL =
  import.meta.env.VITE_BASE_URL || 'https://api.openweathermap.org/data/2.5/';

const geoURL =
  import.meta.env.VITE_GEO_URL || 'https://api.openweathermap.org/geo/1.0/';

const http = axios.create({
  baseURL,
  params: {
    appid: import.meta.env.VITE_TOKEN || null,
    units: import.meta.env.VITE_UNITS || null,
  },
});

export const http2 = axios.create({
  baseURL: geoURL,
  params: {
    appid: import.meta.env.VITE_TOKEN,
  },
});

export default http;
