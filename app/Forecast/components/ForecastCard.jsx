import { Card, WeatherIcon } from '@libs/design';
import { dateService } from '@libs/services';

import TempCard from './TempCards';

const ForecastCard = ({ weather, min, max, timestamp }) => {
  return (
    <Card className="mb-5 flex h-16 items-center justify-between">
      <div className="w-1/6 text-left">
        <span className="text-xs text-gray-300">
          {dateService.getDayByTimestamp(timestamp)}
        </span>
      </div>

      <div className="w-7/12 text-center">
        <WeatherIcon icon={weather.icon} className="mr-3 inline-block" />
        <small className="text-xs">{weather.description}</small>
      </div>

      <div className="w-1/4 text-right">
        <TempCard min={min} max={max} />
      </div>
    </Card>
  );
};

export default ForecastCard;
