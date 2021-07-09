import { TableContainer, TableBody, Table, Box, Typography } from "@material-ui/core"
import ForecastTableRow from "./ForecastTableRow";

export default function ForecastTable({ list, updatedAt }) {
    return (
        <>
            <Box marginBottom={1} textAlign='right'>
                <Typography component='span' color='primary'>
                    <small>updated at : <strong>{updatedAt}</strong></small>
                </Typography>
            </Box>
            <TableContainer>
                <Table>
                    <TableBody>
                        {list.map((item) => <ForecastTableRow key={item.dt_txt} data={item} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
