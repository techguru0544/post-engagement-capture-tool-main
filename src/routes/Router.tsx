import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { basicRoutes, botDashboardRoutes } from '@/routes/index.tsx';
import MainLayout from '@/layouts/MainLayout.tsx';
import BotDashboardLayout from '@/layouts/BotDashboardLayout';

const Router: FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {basicRoutes.map((route, i) => {
          return (
            <Route
              key={`${route.path}-${i}`}
              path={route.path}
              element={route.element}
            />
          );
        })}
        <Route element={<BotDashboardLayout />}>
          {botDashboardRoutes.map((route, i) => {
            return (
              <Route
                key={`${route.path}-${i}`}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Route>
      </Route>
      {/* Add the other category routes here (i.e., Auth, private, admin's, etc) */}
    </Routes>
  );
};

export default Router;
