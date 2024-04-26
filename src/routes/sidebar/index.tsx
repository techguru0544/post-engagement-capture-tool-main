import { appIcon } from '@/components/common/icons/icons';
import { SidebarRoutesInterface } from '@/types/SidebarRoutesInterface';
import {
  SIDE_NAVBAR_SUB_TABS_ROUTE_NAME,
  SIDE_NAVBAR_TABS_NAME,
  SIDE_NAVBAR_TABS_ROUTE_NAME
} from '@/utils/constants';

export const SIDEBAR_ROUTES: SidebarRoutesInterface[] = [
  // {
  //   name: SIDE_NAVBAR_TABS_NAME.BOT_LIST,
  //   path: MAIN_ROUTE.BOT_LIST,
  //   icon: appIcon.botList,
  //   children: []
  // },
  {
    name: SIDE_NAVBAR_TABS_NAME.BOT_DETAILS_DASHBOARD,
    path: SIDE_NAVBAR_TABS_ROUTE_NAME.DASHBOARD,
    icon: appIcon.botDetailsDashboard,
    children: []
  },
  {
    name: SIDE_NAVBAR_TABS_NAME.AUDIENCE,
    path: SIDE_NAVBAR_TABS_ROUTE_NAME.AUDIENCE,
    icon: appIcon.audience,
    children: []
  },
  {
    name: SIDE_NAVBAR_TABS_NAME.LIVE_CHAT,
    path: SIDE_NAVBAR_TABS_ROUTE_NAME.LIVE_CHAT,
    icon: appIcon.liveChat,
    children: []
  },
  {
    name: SIDE_NAVBAR_TABS_NAME.CAPTURE,
    path: `${SIDE_NAVBAR_TABS_ROUTE_NAME.CAPTURE_TOOLS}/${SIDE_NAVBAR_SUB_TABS_ROUTE_NAME.POST_ENGAGEMENT}`,
    icon: appIcon.capture,
    children: []
  },
  {
    name: SIDE_NAVBAR_TABS_NAME.BROADCASTS,
    path: SIDE_NAVBAR_TABS_ROUTE_NAME.BROADCASTS,
    icon: appIcon.broadcasts,
    children: []
  }
];
