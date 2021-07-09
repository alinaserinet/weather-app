import { Grid } from "@material-ui/core";

export default function GridItem({ children, wide, ...props }) {
    if (wide) {
        return (
            <Grid item md={8} sm={6} xs={12} lg={9} xl={10} {...props}>
                {children}
            </Grid>
        )
    }
    return (
        <Grid item md={4} sm={6} xs={12} lg={3} xl={2} {...props}>
            {children}
        </Grid>
    )
}
