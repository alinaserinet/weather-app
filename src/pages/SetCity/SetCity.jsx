import { TextField, Button, Box, CircularProgress } from "@material-ui/core";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import http from '../../services/http';
import CitiesList from "./CitiesList";

export default function SetCity() {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        document.title = 'Set City';
    }, []);

    function handleFindCity(e) {
        e.preventDefault();
        setIsLoading(true);
        if (!value) {
            return;
        }
        http.get(`/find?q=${value}`)
            .then(({ list }) => {
                setList(list);
                setIsLoading(false);
            });
    }

    return (
        <Layout>
            <Box borderBottom='1px solid #e1e1e1;' paddingBottom={4} marginBottom={4}>
                <form onSubmit={handleFindCity} method="POST">
                    <TextField value={value} onChange={(e) => setValue(e.target.value)} label="City Name" variant="outlined" fullWidth />
                    <Box marginTop={2}>
                        <Button variant="contained" size="large" color="primary" type="submit">
                            find City
                        </Button>
                    </Box>
                </form>
            </Box>
            {
                isLoading ? <Box textAlign='center'><CircularProgress /></Box> :

                    <CitiesList cities={list} />
            }
        </Layout>
    )
}
