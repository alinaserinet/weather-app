import { lazy, Suspense } from 'react'
import Container from '../components/Container'
import Header, { HeaderTitle } from '../components/Header'
import MainBG from '../components/MainBG'
import { useCityContext } from '../context/city'
const MobileFooter = lazy(() => import('../components/MobileFooter'));

export default function MainLayout({ children, bg }) {
  const backgroundImage = bg || 'https://i.ibb.co/zNwZxFq/bg.jpg'
  const cityContext = useCityContext()

  return (
    <>
      <Suspense fallback={'loading...'}>
        <MainBG bg={backgroundImage} />
        <Header>
          <HeaderTitle city={cityContext} />
        </Header>
        <Container>{children}</Container>
        <MobileFooter />
      </Suspense>
    </>
  );
}
