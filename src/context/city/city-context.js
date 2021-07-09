import { createContext, useContext } from "react";
import { useState } from "react";

const CityContext = createContext();

export function useCityState() {
    const { state } = useContext(CityContext);
    
    if (!state)
        throw new Error('useCityState most used by a provider!');
    return state;
}

export function useSetCityState() {
    const { setState } = useContext(CityContext);

    if (!setState)
        throw new Error('useCityDispatch most used by a provider!');
    return setState;
}


export function Provider({ children }) {
    const [state, setState] = useState({});

    return (
        <CityContext.Provider value={{state, setState}}>
            {children}
        </CityContext.Provider>
    )
}