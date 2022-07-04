import WeatherIcon from "../../../components/WeatherIcon";

export default function CurrentWeather({data}) {
  return (
    <>
      <WeatherIcon
        className="mx-auto"
        size="4rem"
        color="#FFFFFF"
        icon={data.weather[0].icon}
      />
      <div className="text-sm mt-2 text-gray-100">
        {data.weather[0].description}
      </div>
      <div className="text-4xl mt-5 text-white">
        {data.temp}
        <small className="text-gray-100 text-2xl"> °C</small>
      </div>
      <div className="mt-1">
        <small className="mr-3 text-yellow-200">
          Feels like {data.feels_like} °
        </small>
      </div>
    </>
  );
}
