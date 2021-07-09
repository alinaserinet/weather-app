import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        color: '#000'
    }
}));

export default function Menu() {
    const classes = useStyles();

    return (
        <Box border='1px solid #e1e1e1;' borderRadius={4}>
            <List component="nav">
                <Link to='/' className={classes.link} >
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>

                <Link to='/weather/current' className={classes.link} >
                    <ListItem button>
                        <ListItemText primary="Current Weather" />
                    </ListItem>
                </Link>
                <Link to='/forecast/hourly' className={classes.link} >
                    <ListItem button>
                        <ListItemText primary="Hourly Forecast" />
                    </ListItem>
                </Link>
            </List>
        </Box>
    );
}
