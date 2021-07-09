import Layout from "../../components/Layout";
import { Route, useRouteMatch } from "react-router-dom";
import HourlyForecast from "./HourlyForecast";

export default function Forecast() {
    const match = useRouteMatch();
    return (
        <Layout>
            <Route path={`${match.path}/hourly`}>
                <HourlyForecast />
            </Route>
        </Layout>
    )
}
