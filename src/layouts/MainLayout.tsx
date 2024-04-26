import { MAIN_ROUTE } from '@/routes/baseRoutes';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { lazy, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Header = lazy(() => import('@/components/common/header/Header'));

// Layer to navigate to only public routes
const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // to handle the navbar drawer and collapse
  const [opened, { toggle }] = useDisclosure();

  useEffect(() => {
    if (location.pathname == '/') {
      navigate('/home');
    }
  }, [location]);

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={
        location.pathname === MAIN_ROUTE.BOT_LIST
          ? undefined
          : { width: 70, breakpoint: 'md', collapsed: { mobile: !opened } }
      }
      padding="md"
    >
      <AppShell.Header>
        <Header drawerOpened={opened} drawerToggle={toggle} />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default MainLayout;
