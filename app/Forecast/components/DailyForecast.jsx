import ForecastCard from './ForecastCard';

const DailyForecast = ({ data }) => {
  const list = data.map(item => (
    <ForecastCard
      key={item?.dt}
      weather={item?.weather}
      max={item?.temp.max}
      min={item?.temp.min}
      timestamp={item?.dt}
    />
  ));

  return list;
};
export default DailyForecast;
