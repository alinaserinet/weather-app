import { useSetCityContext } from '@libs/context';
import { MainLayout } from '@libs/layouts';
import { MainLoading } from '@libs/layouts/components';
import { Suspense, useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Forecast from './Forecast';
import Home from './Home';
import NotFound from './NotFound';
import SearchCity from './SearchCity';

const App = () => {
  const setCityContext = useSetCityContext();

  useLayoutEffect(() => {
    const storageCity = localStorage.getItem('city');
    if (!storageCity) return;
    setCityContext(JSON.parse(storageCity));
  }, [setCityContext]);

  return (
    <MainLayout>
      <Suspense fallback={<MainLoading />}>
        <Routes>
          <Route path="/search-city" element={<SearchCity />} />
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};
export default App;
