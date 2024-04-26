import { AppShell } from '@mantine/core';
import Sidebar from '@/components/common/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const BotDashboard = () => {
  return (
    <>
      <AppShell.Navbar p="8" className="items-center w-[70px]">
        <Sidebar />
      </AppShell.Navbar>
      <Outlet />
    </>
  );
};

export default BotDashboard;
