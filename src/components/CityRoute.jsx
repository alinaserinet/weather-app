import { Redirect, Route, useLocation } from "react-router-dom";
import { useCityState } from "../context/city"

export default function CityRoute({ children, ...props }) {

    const city = useCityState();
    const location = useLocation();

    return (
        <>
            {
                ('id' in city) ?
                    <Route {...props}>
                        {children}
                    </Route> :
                    <Redirect to={
                        {
                            pathname: '/city/set',
                            state: {
                                from: location
                            }
                        }
                    } />
            }
        </>
    )
}
