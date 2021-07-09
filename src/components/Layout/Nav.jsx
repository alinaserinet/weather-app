import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { useCityState } from '../../context/city';
import { Link } from 'react-router-dom';
import GridItem from '../GridItem';

export default function Nav() {
    const city= useCityState();
    const cityTitle = 'id' in city ? `city: ${city.name}, ${city.sys.country}` : 'set your city';
    return (
        <Box
            borderBottom="1px solid #e1e1e1"
            marginBottom="2rem"
            padding="1rem 0">
            <Container >
                <Grid container spacing={3} >
                    <GridItem wide>
                        <Typography variant='h6' component='h1'>
                            Weather App
                        </Typography>
                    </GridItem>
                    <GridItem style={{textAlign: 'right'}}>
                        <Link to='/city/set' style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" color="default">
                                <strong>{cityTitle}</strong>
                            </Button>
                        </Link>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}
