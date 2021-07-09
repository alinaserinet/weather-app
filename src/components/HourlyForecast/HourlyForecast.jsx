import { Box, Typography, CircularProgress, Button } from "@material-ui/core"
import { useCityState, useSetCityState } from "../../context/city";
import { useState, useEffect } from "react";
import http from "../../services/http";
import ForecastTable from "./ForecastTable";

export default function ForecastHourly() {
    const city = useCityState();
    const setCityState = useSetCityState();
    const [loading, setLoading] = useState(!('hourlyForcast' in city));

    useEffect(() => {
        if (!('hourlyForcast' in city)) {
            handleForecastUpdate();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city.id]);

    function handleForecastUpdate() {
        setLoading(true);
        http.get(`/forecast?id=${city.id}`)
            .then((data) => {
                setCityState((prev) => {
                    return {
                        ...prev,
                        hourlyForcast: {
                            updatedAt: new Date().toLocaleString(),
                            ...data
                        }
                    }
                });
                setLoading(false);
            });
    }

    return (
        <>
            <Box border='1px solid #e1e1e1;' borderRadius={4} padding={3} >
                <Box borderBottom='1px solid #e1e1e1;' marginBottom={2} paddingBottom={1}>
                    <Typography component="h1" variant='h6' display='inline'>
                        {city.name}, {city.sys.country}
                    </Typography>
                    <Button style={{ float: 'right' }} onClick={handleForecastUpdate} disabled={loading}>
                        update
                    </Button>
                </Box>
                {loading ? <Box textAlign='center'><CircularProgress /></Box> :
                    <>
                        <ForecastTable
                            list={city.hourlyForcast.list}
                            updatedAt={city.hourlyForcast.updatedAt}
                        />
                    </>
                }
            </Box>
        </>
    )
}
