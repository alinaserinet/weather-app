import {
  BsCloudSun,
  BsSun,
  BsClouds,
  BsCloud,
  BsCloudRainHeavy,
  BsCloudRain,
  BsCloudSnow,
  BsCloudFog2,
  BsMoon,
  BsCloudMoon,
} from 'react-icons/bs'

import { RiThunderstormsLine } from 'react-icons/ri'

const icons = {
  '01d': {
    element: BsSun,
    description: 'clear sky',
    color: '#FF7F6F',
  },
  '01n': {
    element: BsMoon,
    description: 'clear sky',
    color: '#000000',
  },
  '02d': {
    element: BsCloudSun,
    description: 'few clouds',
    color: '#000000',
  },
  '02n': {
    element: BsCloudMoon,
    description: 'few clouds',
    color: '#000000',
  },
  '03d': {
    element: BsCloud,
    description: 'scattered clouds',
    color: '#000000',
  },
  '03n': {
    element: BsCloud,
    description: 'scattered clouds',
    color: '#000000',
  },
  '04d': {
    element: BsClouds,
    description: 'broken clouds',
    color: '#000000',
  },
  '04n': {
    element: BsClouds,
    description: 'broken clouds',
    color: '#000000',
  },
  '09d': {
    element: BsCloudRainHeavy,
    description: 'shower rain',
    color: '#000000',
  },
  '09n': {
    element: BsCloudRainHeavy,
    description: 'shower rain',
    color: '#000000',
  },
  '10d': {
    element: BsCloudRain,
    description: 'rain',
    color: '#000000',
  },
  '10n': {
    element: BsCloudRain,
    description: 'rain',
    color: '#000000',
  },
  '11d': {
    element: RiThunderstormsLine,
    description: 'thunderstorm',
    color: '#000000',
  },
  '11n': {
    element: RiThunderstormsLine,
    description: 'thunderstorm',
    color: '#000000',
  },
  '13d': {
    element: BsCloudSnow,
    description: 'snow',
    color: '#000000',
  },
  '13n': {
    element: BsCloudSnow,
    description: 'snow',
    color: '#000000',
  },
  '50d': {
    element: BsCloudFog2,
    description: 'mist',
    color: '#000000',
  },
  '50n': {
    element: BsCloudFog2,
    description: 'mist',
    color: '#000000',
  },
}

export default icons
