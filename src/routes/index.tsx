import { ReactNode } from 'react';
import ErrorPage from '@/pages/error/ErrorPage.tsx';
import BotList from '@/pages/botList/BotList';
import {
  BOT_DASHBOARD_ROUTE,
  CAPTURE_TOOLS_ROUTE,
  MAIN_ROUTE
} from './baseRoutes';
import PostEngagementsEdit from '@/pages/postEngagements/PostEngagementsEdit';
import BotDetailsNavTabs from '@/pages/botDetailsNavTabs/BotDetailsNavTabs';

export interface RoutesPropsT {
  path: string;
  element: ReactNode;
}

export const basicRoutes: RoutesPropsT[] = [
  {
    path: MAIN_ROUTE.BOT_LIST,
    element: <BotList />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
];

export const botDashboardRoutes: RoutesPropsT[] = [
  {
    path: BOT_DASHBOARD_ROUTE.BOT_DETAILS,
    element: <BotDetailsNavTabs />
  },
  {
    path: CAPTURE_TOOLS_ROUTE.SUB_TABS,
    element: <BotDetailsNavTabs />
  },
  {
    path: CAPTURE_TOOLS_ROUTE.POST_ENGAGEMENTS_EDIT,
    element: <PostEngagementsEdit />
  }
];
