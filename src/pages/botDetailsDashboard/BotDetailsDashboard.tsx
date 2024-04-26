import { Anchor, Avatar, Card, Divider, Flex, Grid, Text } from '@mantine/core';

const socialUsersStats = [
  { item: 'Subscribers', value: '2.6M' },
  { item: 'Active', value: '25.6K' },
  { item: 'Unsubscribed', value: '0' }
];

const BotDetailsDashboard = () => {
  return (
    <Flex direction={'column'} gap="lg">
      <Card p={{ md: 'xl' }}>
        <Grid justify="center" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Flex
              gap="lg"
              align="center"
              direction={{ base: 'column', xs: 'row' }}
            >
              <Avatar
                src={
                  'https://graph.facebook.com/237352949662793/picture?type=normal'
                }
                size={'100'}
              />
              <Divider orientation={'vertical'} visibleFrom="xs" />
              <Text fw={'600'} fz={'lg'}>
                Hitunez - The No.1 online music community
                <br />
                <Anchor
                  className="inline-block"
                  href="https://m.me/hitunezofficial"
                  target="_blank"
                >
                  https://m.me/hitunezofficial
                </Anchor>
                <br />
                <Text component="span" c="dimmed">
                  Are you an artiste or a music lover? Then hitunez.com is the
                  place you should be.
                </Text>
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Grid gutter={'md'}>
              {socialUsersStats.map((stats, index) => (
                <Grid.Col span={{ base: 12, xs: 4 }}>
                  <Card shadow="none" bg="theme.0" key={index} px="54" py="md">
                    <Flex direction="column" align="center" justify="center">
                      <Text fz="xl" fw="bold">
                        {stats.value}
                      </Text>
                      <div className="text-gray-400">{stats.item}</div>
                    </Flex>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </Card>
      <Card>
        <Text fw={'600'} fz={'lg'} mb="sm">
          Subscriber Statistics
        </Text>
        <Text fw={'400'}>Analytics Here</Text>
      </Card>
    </Flex>
  );
};

export default BotDetailsDashboard;
