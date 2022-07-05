import Card from "../../../components/Card";
import WeatherIcon from "../../../components/WeatherIcon";
import TempCard from "./TempCards";
import dateService from "../../../services/dateService";


export default function ForecastCard({ weather, min, max, timestamp}) {
  return (
    <Card className="mb-5 flex justify-between items-center h-16">
      <div className="w-1/6 text-left">
        <span className="text-xs text-gray-300">
          {dateService.getDayByTimestamp(timestamp)}
        </span>
      </div>

      <div className="w-7/12 text-center">
        <WeatherIcon icon={weather.icon} className="inline-block mr-3" />
        <small className="text-xs">{weather.description}</small>
      </div>

      <div className="w-1/4 text-right">
        <TempCard min={min} max={max} />
      </div>
    </Card>
  );
}
