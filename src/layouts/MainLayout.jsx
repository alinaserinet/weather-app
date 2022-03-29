import Container from '../components/Container'
import Header, { HeaderTitle } from '../components/Header'
import MainBG from '../components/MainBG'
import MobileFooter from '../components/MobileFooter'
import { useCityContext } from '../context/city'

export default function MainLayout({ children, bg }) {
  const backgroundImage = bg || 'https://i.ibb.co/zNwZxFq/bg.jpg'
  const cityContext = useCityContext()

  return (
    <>
      <MainBG bg={backgroundImage} />
      <Header>
        <HeaderTitle city={cityContext} />
      </Header>
      <Container>{children}</Container>
      <MobileFooter />
    </>
  )
}
