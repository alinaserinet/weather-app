import { useEffect } from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import MobileFooter from '../components/MobileFooter'
import { useCityContext } from '../context/city'

export default function MainLayout({ children, bg }) {
  const backgroundImage = bg || '/images/bg.jpg'
  const cityContext = useCityContext()
  const cityName =
    'name' in cityContext
      ? `${cityContext.name} - ${cityContext.sys.country}`
      : ''
  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <Header cityName={cityName} />
      <Container>{children}</Container>
      <MobileFooter />
    </>
  )
}