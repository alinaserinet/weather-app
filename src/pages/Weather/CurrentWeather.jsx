import { useEffect } from "react";
import CurrentWeatherComponent from "../../components/CurrentWeather"

export default function CurrentWeather() {
    useEffect(() => {
        document.title = 'Current Weather';
    }, []);
    return (
        <CurrentWeatherComponent />
    )
}
