import { Route, Routes } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { useSetCityContext } from './context/city'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SearchCity from './pages/SearchCity'
import Forecast from './pages/Forecast'

export default function App() {
  const setCityContext = useSetCityContext()

  useLayoutEffect(() => {
    const storageCity = localStorage.getItem('city')
    if (!storageCity) return
    setCityContext(JSON.parse(storageCity))
  }, [setCityContext])

  return (
    <Routes>
      <Route path="/search-city" element={<SearchCity />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forecast" element={<Forecast />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
