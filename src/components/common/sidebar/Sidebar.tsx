import botListJsonData from '@/data/bot-list-data.json';
import { MAIN_ROUTE } from '@/routes/baseRoutes';
import { SIDEBAR_ROUTES } from '@/routes/sidebar';
import { BotListDataT } from '@/types/botlist';
import { isEmpty } from '@/utils/customFunctions';
import { ActionIcon, Box, Menu, ScrollArea, Text } from '@mantine/core';
import { Suspense, useMemo, useState } from 'react';
import { NavLink, Navigate, useParams } from 'react-router-dom';
import SkeSideMenu from './skeleton/SkeSideMenu';
import { SIDE_NAVBAR_TABS_ROUTE_NAME } from '@/utils/constants';

const Sidebar = () => {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<string>(
    params?.navTab ?? SIDE_NAVBAR_TABS_ROUTE_NAME.DASHBOARD
  );

  const isBotDataFound = useMemo(
    () =>
      botListJsonData?.find(
        (botData: BotListDataT) => String(botData?.id) === params?.botId
      ),
    [botListJsonData, params]
  );

  if (isEmpty(isBotDataFound)) {
    return <Navigate to={MAIN_ROUTE.BOT_LIST} />;
  }

  return (
    <ScrollArea
      style={{ height: 'calc(100vh - var(--app-shell-header-height))' }}
      scrollbarSize={5}
      scrollHideDelay={100}
      offsetScrollbars={false}
      ta={'center'}
    >
      <Suspense fallback={<SkeSideMenu />}>
        {SIDEBAR_ROUTES.map((sidebarTab, index) => (
          <Menu
            key={index}
            position="right"
            shadow="xs"
            trigger="hover"
            transitionProps={{ transition: 'pop-bottom-right' }}
            withArrow
            arrowSize={15}
            arrowOffset={20}
            styles={{ dropdown: { padding: 0 }, item: { padding: 0 } }}
          >
            <Menu.Target>
              <ActionIcon
                className={`${activeTab === sidebarTab.path ? 'bg-black text-white' : ''}`}
                component={NavLink}
                to={`/${params?.botId}/${sidebarTab.path}`}
                radius={'md'}
                onClick={() => setActiveTab(sidebarTab.path)}
              >
                {sidebarTab.icon}
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Box px="sm" py={7}>
                <Text className="capitalize" fw={400}>
                  {sidebarTab.name}
                </Text>
              </Box>
            </Menu.Dropdown>
          </Menu>
        ))}
      </Suspense>
    </ScrollArea>
  );
};
export default Sidebar;
