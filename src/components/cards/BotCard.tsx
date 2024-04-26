import { BotListDataT } from '@/types/botlist';
import {
  Card,
  Text,
  Menu,
  ActionIcon,
  Flex,
  Avatar,
  Grid
} from '@mantine/core';
import { IconDashboard, IconSettings, IconTrash } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

interface BotCardPropsT {
  botData: BotListDataT;
}

const BotCard = ({ botData }: BotCardPropsT) => {
  return (
    <Card>
      <Flex align="center">
        <Flex mr="auto" gap={10}>
          <Avatar radius="xl" size="lg" src={botData.profile} />
          <Text p={4}>
            {botData.full_name}
            <Text c="dimmed" fz="xs">
              {botData.type}
            </Text>
          </Text>
        </Flex>
        <Menu withinPortal position="bottom-end" shadow="sm">
          <Menu.Target>
            <ActionIcon color="gray" size={'md'}>
              <IconSettings size={'20'} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown className="rounded-2xl p-2">
            <Menu.Item
              component={NavLink}
              to={`/${botData.id}/dashboard`}
              leftSection={<IconDashboard size="20" />}
              className="hover:rounded-xl items-start"
            >
              Dashboard
            </Menu.Item>
            <Menu.Item
              leftSection={<IconTrash size="20" />}
              color="red"
              className="hover:rounded-xl items-start"
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>

      <Grid pt={'lg'}>
        <Grid.Col span={6}>
          <Text c="#394e6a" fw="300" fz={13}>
            Total Subscribers
            <Text c="theme" fz="sm">
              {botData.total_subscribers}
            </Text>
          </Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text c="#394e6a" fw="300" fz={13}>
            Active Subscribers
            <Text c="theme" fz="sm">
              {botData.active_subscribers}
            </Text>
          </Text>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default BotCard;
