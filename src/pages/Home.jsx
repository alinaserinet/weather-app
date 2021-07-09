import { Box, Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import HourlyForecast from "../components/HourlyForecast";
import CurrentWeather from "../components/CurrentWeather";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = 'Weather App';
    }, []);
    return (
        <Layout >
            <Box marginBottom={3}>
                <Typography component='span'>
                    Current Weather
                </Typography>
                <CurrentWeather />
            </Box>
            <Box>
                <Typography component='span'>
                    Hourly Forecast
                </Typography>
                <HourlyForecast />
            </Box>
        </Layout>
    )
}
