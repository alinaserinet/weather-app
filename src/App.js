import { Route, Switch } from 'react-router-dom';
import CityRouter from './components/CityRoute';
import Forecast from './pages/Forecast';
import Home from './pages/Home';
import SetCity from './pages/SetCity';
import Weather from './pages/Weather';

export default function App() {
  return (
    <Switch>
      <CityRouter exact path='/'>
        <Home />
      </CityRouter>
      <Route path='/city/set'>
        <SetCity />
      </Route>
      <CityRouter path='/weather'>
        <Weather />
      </CityRouter>
      <CityRouter path='/forecast'>
        <Forecast />
      </CityRouter>
    </Switch>
  )
}
