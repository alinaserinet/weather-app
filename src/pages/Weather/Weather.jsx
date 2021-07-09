import Layout from "../../components/Layout";
import { useRouteMatch, Route } from "react-router";
import CurrentWeather from "./CurrentWeather";

export default function Weather() {

    const match = useRouteMatch();

    return (
        <Layout>
            <Route path={`${match.path}/current`}>
                <CurrentWeather />
            </Route>
        </Layout>
    )
}
