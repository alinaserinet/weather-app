import { useEffect } from 'react';
import HourlyForecastComponent from '../../components/HourlyForecast';

export default function HourlyForecast() {
    useEffect(() => {
        document.title = 'Hourly Forecast';
    }, []);

    return (
        <HourlyForecastComponent />
    )
}
