import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CityProvider } from './context/city'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <CityProvider>
      <App />
    </CityProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
