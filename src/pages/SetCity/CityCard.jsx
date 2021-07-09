import { Button, TableRow, TableCell } from "@material-ui/core";
import { useSetCityState } from "../../context/city";

export default function CityCard({ city }) {

    const setCity = useSetCityState();

    function handleChangeCity() {
        setCity(city);
    }

    return (
        <TableRow >
            <TableCell component="th" scope="row">
                <strong>{city.name}</strong>, {city.sys.country}
            </TableCell>
            <TableCell>
                <small color='default'>{city.coord.lat}, {city.coord.lon}</small>
            </TableCell>
            <TableCell align="right">
                <Button
                    onClick={handleChangeCity}
                    size='small'
                    color='secondary'
                    variant='contained'>select</Button>
            </TableCell>
        </TableRow>
    )
}
