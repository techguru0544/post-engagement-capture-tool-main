import { MAIN_ROUTE } from '@/routes/baseRoutes';
import { ActionIcon, Avatar, Menu } from '@mantine/core';
import {
  IconHome,
  IconLogout,
  IconUser,
  IconWallet
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const userDummyData = {
  name: 'Dev Test',
  email: 'devtest@clepher.com',
  image:
    'https://avatars.githubusercontent.com/u/21959017?s=400&u=1c2711bcd2713d682bf553835a6dce998c6fd49b&v=4'
};

const UserMenuTrigger = () => {
  return (
    <Menu
      width={220}
      shadow="xs"
      transitionProps={{ transition: 'pop', duration: 200 }}
      withArrow
      arrowSize={10}
      arrowOffset={20}
      position="bottom-end"
    >
      <Menu.Target>
        <ActionIcon color="brown" size={50}>
          <Avatar
            className="text-black capitalize"
            size={42}
            src={userDummyData?.image}
          >
            {`${userDummyData?.name?.charAt(0)}`}
          </Avatar>
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown className="rounded-2xl p-2">
        <Menu.Item
          component={NavLink}
          to={MAIN_ROUTE.BOT_LIST}
          leftSection={<IconHome size="20" />}
          className="hover:rounded-xl items-start"
        >
          Home
        </Menu.Item>
        <Menu.Item
          component={NavLink}
          to={'#'}
          leftSection={<IconWallet size="20" />}
          className="hover:rounded-xl items-start"
        >
          Billing
        </Menu.Item>
        <Menu.Item
          component={NavLink}
          to={'#'}
          leftSection={<IconUser size="20" />}
          className="hover:rounded-xl items-start"
        >
          Account
        </Menu.Item>
        <Menu.Item
          component={NavLink}
          to={'#'}
          leftSection={<IconLogout size="20" />}
          className="hover:rounded-xl items-start"
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenuTrigger;
