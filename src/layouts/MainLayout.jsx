import { Fragment, lazy, Suspense } from 'react'
import Container from '../components/Container'
import Header, { HeaderTitle } from '../components/Header'
import MainBG from '../components/MainBG'
import MainMenu from '../components/MainMenu'
import { useCityContext } from '../context/city'
import { MainLoading } from './components'
const MobileFooter = lazy(() => import("../components/MobileFooter"));

export default function MainLayout({ children, bg }) {
  const backgroundImage = bg || 'https://i.ibb.co/zNwZxFq/bg.jpg'
  const cityContext = useCityContext()

  return (
    <>
      <Suspense fallback={<MainLoading />}>
        <MainBG bg={backgroundImage} />
        <Header>
          <HeaderTitle city={cityContext} />
        </Header>
        <div className="md:flex">
          <div className="hidden w-0 md:block md:w-1/6">
            <MainMenu />
          </div>
          <div className="w-full md:w-5/6">
            <Container>{children}</Container>
          </div>
        </div>
        <MobileFooter />
      </Suspense>
    </>
  );
}
