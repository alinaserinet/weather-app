import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SearchCity from './pages/SearchCity'

export default function App() {
  return (
    <Routes>
      <Route path="/search-city" element={<SearchCity />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
