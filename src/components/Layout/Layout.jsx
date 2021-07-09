import { Container, Grid } from "@material-ui/core";
import Nav from "./Nav";
import GridItem from "../GridItem";
import Menu from "./Menu";

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <Container>
                <Grid container spacing={3} >
                    <GridItem >
                        <Menu />
                    </GridItem>
                    <GridItem wide>
                        {children}
                    </GridItem >
                </Grid>
            </Container>
        </>
    )
}
