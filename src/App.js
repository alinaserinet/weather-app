import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useLayoutEffect } from 'react'
import { useSetCityContext } from './context/city'
import { MainLayout } from './layouts'
import { MainLoading } from './layouts/components'
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))
const SearchCity = lazy(() => import('./pages/SearchCity'))
const Forecast = lazy(() => import('./pages/Forecast'))

export default function App() {
  const setCityContext = useSetCityContext()

  useLayoutEffect(() => {
    const storageCity = localStorage.getItem('city')
    if (!storageCity) return
    setCityContext(JSON.parse(storageCity))
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
}
