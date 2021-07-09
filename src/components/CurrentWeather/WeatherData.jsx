import { Box, Chip, Avatar, Typography } from "@material-ui/core";

export default function WeatherData({ data }) {
    const { weather, main, updatedAt } = data;
    return (
        <>
            <Box marginBottom={1} textAlign='right'>
                <Typography component='span' color='primary'>
                    <small>updated at : <strong>{updatedAt}</strong></small>
                </Typography>
            </Box>
            <Box>
                <Chip variant='default' style={{ backgroundColor: '#00cc93' }}
                    avatar={<Avatar src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />}
                    label={<strong>{weather[0].description} , {main.temp}°С</strong>}
                />
            </Box>
            <Box marginTop={1}>
                <Typography component="p">
                    temp from <strong>{main.temp_min}°С</strong> to <strong>{main.temp_max}°С</strong>
                </Typography>
            </Box>
        </>
    )
}
