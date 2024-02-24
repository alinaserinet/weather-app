import { useCityContext } from '@libs/context';
import { Container } from '@libs/design';
import Header, { HeaderTitle } from '@libs/design/Header';
import MainBG from '@libs/design/MainBG';
import MainMenu from '@libs/design/MainMenu';
import type { ReactNode } from 'react';
import { lazy, Suspense } from 'react';

import { MainLoading } from './components';

const MobileFooter = lazy(() => import('@libs/design/MobileFooter'));

interface MainLayoutProps {
  children: ReactNode;
  bg?: string;
}

const MainLayout = ({ children, bg }: MainLayoutProps) => {
  const backgroundImage = bg ?? 'https://i.ibb.co/zNwZxFq/bg.jpg';
  const cityContext = useCityContext();

  return (
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
  );
};
export default MainLayout;
