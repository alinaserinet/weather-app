import Container from '../components/Container'
import Header, { HeaderTitle } from '../components/Header'
import MobileFooter from '../components/MobileFooter'
import { useCityContext } from '../context/city'

export default function MainLayout({ children, bg }) {
  const backgroundImage = bg || 'https://i.ibb.co/zNwZxFq/bg.jpg'
  const cityContext = useCityContext()

  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <Header>
        <HeaderTitle city={cityContext}/>
      </Header>
      <Container>{children}</Container>
      <MobileFooter />
    </>
  )
}
