import './index.css';

import { CityProvider } from '@libs/context';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CityProvider>
      <App />
    </CityProvider>
  </BrowserRouter>,
);
