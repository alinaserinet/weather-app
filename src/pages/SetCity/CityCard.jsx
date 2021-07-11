import { Button, TableRow, TableCell } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { useSetCityState } from "../../context/city";

export default function CityCard({ city }) {

    const setCity = useSetCityState();
    const location = useLocation();
    const history = useHistory();
    const {from} = location.state || { from: { pathname: '/' } };

    function handleChangeCity() {
        setCity(city);
        history.replace(from);
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
