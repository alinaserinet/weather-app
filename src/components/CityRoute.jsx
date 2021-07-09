import { Redirect, Route } from "react-router-dom";
import { useCityState } from "../context/city"

export default function CityRoute({ children, ...props }) {

    const  city = useCityState();

    return (
        <>
            {
                !('id' in city) ? <Redirect to='/city/set' /> :
                    <Route {...props}>
                        {children}
                    </Route>
            }
        </>
    )
}
