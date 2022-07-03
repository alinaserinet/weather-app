import {createRoot} from 'react-dom/client';
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CityProvider } from './context/city'
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <CityProvider>
      <App />
    </CityProvider>
  </BrowserRouter>
);
