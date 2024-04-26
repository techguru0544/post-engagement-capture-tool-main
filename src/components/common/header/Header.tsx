import {
  ActionIcon,
  Burger,
  Flex,
  Group,
  Image,
  Indicator
} from '@mantine/core';
import UserMenuTrigger from '@/components/common/header/UserMenuTrigger';
import { IconBell, IconLifebuoy, IconMoon } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const Header = ({
  drawerOpened,
  drawerToggle
}: {
  drawerOpened: boolean;
  drawerToggle: () => void;
}) => {
  return (
    <Group h="100%" px="md">
      <Flex
        align="center"
        gap={{ base: 'xs', xs: 'sm', sm: 'md' }}
        h="100%"
        w="100%"
      >
        <Burger
          opened={drawerOpened}
          onClick={drawerToggle}
          hiddenFrom="md"
          size="sm"
        />
        <Image
          height={'50%'}
          src={
            'https://cdn1.clepher.com/wp-content/uploads/2023/07/clepher-logo-black.png.webp'
          }
        />
        <Flex align="center" gap="5" ml={'auto'}>
          <ActionIcon component={NavLink} to={'/'}>
            <Indicator>
              <IconBell />
            </Indicator>
          </ActionIcon>
          <ActionIcon component={NavLink} to={'/'} visibleFrom="sm">
            <IconMoon />
          </ActionIcon>
          <ActionIcon component={NavLink} to={'/'} visibleFrom="sm">
            <IconLifebuoy />
          </ActionIcon>
          <Flex justify="flex-end" gap={{ base: 2, xs: 'xs' }}>
            <UserMenuTrigger />
          </Flex>
        </Flex>
      </Flex>
    </Group>
  );
};
export default Header;
