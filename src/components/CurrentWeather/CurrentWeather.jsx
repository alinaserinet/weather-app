import { useSetCityState, useCityState } from "../../context/city";
import WeatherData from './WeatherData';
import Skeleton from "./Skeleton";
import http from "../../services/http";
import { Box, Typography, Button } from "@material-ui/core";
import { useState, useLayoutEffect} from "react";

export default function CurrentWeather() {
    const setCityState = useSetCityState();
    const city = useCityState();
    const [loading, setLoading] = useState(!('current' in city));

    function handleCurrentUpdate() {
        setLoading(true);
        http.get(`/weather?id=${city.id}`)
            .then((data) => {
                setCityState((prev) => {
                    return {
                        ...prev,
                        current: {
                            updatedAt: new Date().toLocaleString(),
                            ...data
                        }
                    }
                });
                setLoading(false);
            });
    }

    useLayoutEffect(() => {
        if (!('current' in city)) {
            handleCurrentUpdate();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city.id, city]);


    return (
        <Box border='1px solid #e1e1e1;' padding={3} borderRadius={4} >
            <Box borderBottom='1px solid #e1e1e1;' marginBottom={2} paddingBottom={1}>
                <Typography component="h1" variant='h6' display='inline'>
                    {city.name}, {city.sys.country}
                </Typography>
                <Button style={{ float: 'right' }} onClick={handleCurrentUpdate} disabled ={loading}>
                    update
                </Button>
            </Box>
            {!loading ? <WeatherData data={city.current} /> : <Skeleton />}
        </Box>
    )
}
