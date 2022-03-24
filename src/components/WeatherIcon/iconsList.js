import {
  BsCloudSun,
  BsSun,
  BsClouds,
  BsCloud,
  BsCloudRainHeavy,
  BsCloudRain,
  BsCloudSnow,
  BsCloudFog2,
} from 'react-icons/bs'

import { RiThunderstormsLine } from 'react-icons/ri'

const icons = {
  'clear sky': {
    element: BsSun,
    color: '#FF7F6F',
  },
  'few clouds': {
    element: BsCloudSun,
    color: '#000000',
  },
  'scattered clouds': {
    element: BsCloud,
    color: '#000000',
  },
  'broken clouds': {
    element: BsClouds,
    color: '#000000',
  },
  'shower rain': {
    element: BsCloudRainHeavy,
    color: '#000000',
  },
  rain: {
    element: BsCloudRain,
    color: '#000000',
  },
  thunderstorm: {
    element: RiThunderstormsLine,
    color: '#000000',
  },
  snow: {
    element: BsCloudSnow,
    color: '#000000',
  },
  mist: {
    element: BsCloudFog2,
    color: '#000000',
  },
}

export default icons
