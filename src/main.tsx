import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CityProvider } from './context/city'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <CityProvider>
            <App />
        </CityProvider>
    </BrowserRouter>
)
