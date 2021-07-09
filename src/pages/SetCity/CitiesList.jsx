import { Table, TableBody, TableContainer, Typography } from "@material-ui/core"
import CityCard from "./CityCard";

export default function CitiesList({ cities }) {
    if (!cities.length)
        return (
            <>
                <Typography>not found!</Typography>
            </>
        )

    return (

        <TableContainer>
            <Table>
                <TableBody>
                    {cities.map((city) => <CityCard key={city.id} city={city} />)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
