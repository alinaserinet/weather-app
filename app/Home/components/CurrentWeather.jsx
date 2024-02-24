import WeatherIcon from '@libs/design/WeatherIcon';

const CurrentWeather = ({ data }) => {
  return (
    <>
      <WeatherIcon
        className="mx-auto"
        size="4rem"
        color="#FFFFFF"
        icon={data.weather[0].icon}
      />
      <div className="mt-2 text-sm text-gray-100">
        {data.weather[0].description}
      </div>
      <div className="mt-5 text-4xl text-white">
        {data.temp}
        <small className="text-2xl text-gray-100"> °C</small>
      </div>
      <div className="mt-1">
        <small className="mr-3 text-yellow-200">
          Feels like {data.feels_like} °
        </small>
      </div>
    </>
  );
};

export default CurrentWeather;
