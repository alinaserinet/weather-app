import { TableRow, TableCell, Chip, Avatar, Typography } from "@material-ui/core"

export default function ForecastItem({ data }) {
    const { main, weather } = data;
    return (
        <TableRow >
            <TableCell component="th" scope="row">
                <Chip variant='default' style={{ backgroundColor: '#00cc93' }}
                    avatar={<Avatar src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />}
                    label={<strong>{weather[0].description} , {main.temp}°С</strong>}
                />
            </TableCell>
            <TableCell>
                <Typography component='span'>
                    min: <strong>{main.temp_min}°С</strong> , 
                    max: <strong>{main.temp_max}°С</strong>
                </Typography>
            </TableCell>
            <TableCell align="right">
                <Typography color='primary'>
                    {data.dt_txt}
                </Typography>
            </TableCell>
        </TableRow>
    )
}