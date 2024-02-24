import { createContext, useContext, useState } from 'react';

const CityContext = createContext();
const SetCityContext = createContext();

export function useCityContext() {
  const city = useContext(CityContext);

  if (!city) throw new Error('useCityContext most used by a provider!');
  return city;
}

export function useSetCityContext() {
  const setCity = useContext(SetCityContext);
  if (!setCity) throw new Error('useSetCityContext most used by a provider!');
  return setCity;
}

export const CityProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <CityContext.Provider value={state}>
      <SetCityContext.Provider value={setState}>
        {children}
      </SetCityContext.Provider>
    </CityContext.Provider>
  );
};
