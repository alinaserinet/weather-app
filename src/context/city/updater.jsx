import http from "../../services/http";
import { useSetCityState } from ".";
import { useCityState } from "./city-context";



function handleCurrentUpdate() {
    http.get(`/weather?id=${city.id}`)
        .then((data) => {
            const setCityState = useSetCityState();
            const { city } = useCityState();
            setCityState({
                ...city,
                current: {
                    updatedAt: new Date().toLocaleString(),
                    ...data
                }
            });
        });
}