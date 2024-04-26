import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Text,
  Tooltip,
  Input,
  Select,
  Card,
  Flex,
  Grid
} from '@mantine/core';
import { Anchor } from '@mantine/core';
import { Tabs } from '@mantine/core';
import { Switch } from '@mantine/core';
import { IconCaretDownFilled } from '@tabler/icons-react';

const PostEngagementsEdit = () => {
  const breadCrumbItems = [
    { title: 'Capture Tools', href: '#' },
    { title: 'Post Engagement', href: '/356/capture-tools/post-engagement' },
    { title: 'Edit', href: '#' }
  ].map((item, index) => (
    <Anchor
      className={
        item?.href?.length > 2
          ? 'text-theme pointer-events-auto'
          : 'text-black pointer-events-none'
      }
      href={item.href}
      key={index}
    >
      {item.title}
    </Anchor>
  ));

  return (
    <div className="w-full">
      <Breadcrumb linksList={breadCrumbItems} />
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card
            p={0}
            pb={40}
            className="bg-white rounded-xl mt-5 min-h-[calc(100vh-150px)]"
          >
            <Tabs
              className="w-full"
              color="rgba(148, 148, 148, 1)"
              defaultValue="settings"
            >
              <Tabs.List>
                <Tabs.Tab value="settings" className="w-1/2 py-4">
                  Settings
                </Tabs.Tab>
                <Tabs.Tab value="auto-response" className="w-1/2 py-4">
                  Auto Response
                </Tabs.Tab>
              </Tabs.List>
              <div className="pt-5 px-5">
                <Tabs.Panel value="settings">
                  <Box>
                    <Box className="flex items-center justify-between pb-2">
                      <Text opacity={0.4}>
                        Enable To Privately Reply To First-Level Comments Only
                      </Text>
                      <Switch defaultChecked size="md" />
                    </Box>
                    <Box className="flex items-center justify-between">
                      <Text opacity={0.4}>
                        Send Message To The Same User Only Once Per Post
                      </Text>
                      <Switch defaultChecked size="md" />
                    </Box>
                    <Box>
                      <Box pt={20}>
                        <Text size="sm">Require a Post Reaction</Text>
                        <Divider />
                      </Box>
                      <Box className="pt-5 group">
                        <div className="transition-all ease-in duration-300  opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto flex justify-center gap-3 items-center pt-5 pb-5">
                          <Tooltip label="Like">
                            <Avatar
                              className="hover:scale-150 duration-300"
                              src={
                                'https://app.dev.clepher.com/plugins/meta/reactions/images/reactions_like.png'
                              }
                            />
                          </Tooltip>
                          <Tooltip
                            className="hover:scale-150 duration-300"
                            label="Love"
                          >
                            <Avatar
                              src={
                                'https://app.dev.clepher.com/plugins/meta/reactions/images/reactions_love.png'
                              }
                            />
                          </Tooltip>
                          <Tooltip
                            className="hover:scale-150 duration-300"
                            label="haha"
                          >
                            <Avatar
                              src={
                                'https://app.dev.clepher.com/plugins/meta/reactions/images/reactions_haha.png'
                              }
                            />
                          </Tooltip>
                          <Tooltip
                            className="hover:scale-150 duration-300"
                            label="Wow"
                          >
                            <Avatar
                              src={
                                'https://app.dev.clepher.com/plugins/meta/reactions/images/reactions_wow.png'
                              }
                            />
                          </Tooltip>
                          <Tooltip
                            className="hover:scale-150 duration-300"
                            label="Sad"
                          >
                            <Avatar
                              src={
                                'https://app.dev.clepher.com/plugins/meta/reactions/images/reactions_sad.png'
                              }
                            />
                          </Tooltip>
                          <Tooltip
                            className="hover:scale-150 duration-300"
                            label="Angry"
                          >
                            <Avatar
                              src={
                                'https://app.dev.clepher.com/plugins/meta/reactions/images/reactions_angry.png'
                              }
                            />
                          </Tooltip>
                        </div>

                        <Button radius={'md'} size="lg" fullWidth>
                          Require Reaction
                        </Button>
                      </Box>
                    </Box>
                    <Box>
                      <Box py={20}>
                        <Text>Exclude Comments With These Keywords</Text>
                        <Box className="relative mt-3">
                          <Input
                            size="lg"
                            radius={'md'}
                            className=""
                            placeholder="Specifiy Keyword"
                          />
                          <Button
                            className="absolute top-0 right-0 rounded-r-lg rounded-l-none text-sm"
                            size="lg"
                          >
                            Add Keyword
                          </Button>
                        </Box>
                      </Box>
                      <Box>
                        <Text>
                          Only Trigger For Comments With These Keywords
                        </Text>
                        <Box className="relative mt-3">
                          <Input
                            size="lg"
                            radius={'md'}
                            className=""
                            placeholder="Specifiy Keyword"
                          />
                          <Button
                            className="absolute top-0 right-0 rounded-r-lg rounded-l-none text-sm"
                            size="lg"
                          >
                            Add Keyword
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                    <Box pt={20}>
                      <Text size="sm" fw={500} c={'#48536A'}>
                        Private Reply After Post Engagement
                      </Text>
                      <Divider />
                    </Box>
                    <Box pt={10}>
                      <Text size="sm">Select Message Type</Text>
                      <Select
                        radius={'md'}
                        mt={'xs'}
                        size="md"
                        data={['Sigle Message', 'Flow']}
                        rightSection={<IconCaretDownFilled />}
                        placeholder="Flow"
                      />
                    </Box>
                    <Box pt={10}>
                      <Text size="sm">Select Message Type</Text>
                      <Select
                        radius={'md'}
                        mt={'xs'}
                        size="md"
                        data={['Sigle Message', 'Flow']}
                        rightSection={<IconCaretDownFilled />}
                        placeholder="Flow"
                      />
                    </Box>
                  </Box>
                </Tabs.Panel>
                <Tabs.Panel value="auto-response">
                  <Box className="flex items-center justify-between pb-2">
                    <Text opacity={0.4}>
                      Enable To Privately Reply To First-Level Comments Only
                    </Text>
                    <Switch defaultChecked size="md" />
                  </Box>
                  <Box pt={20}>
                    <Text size="sm">Reply In Comments</Text>
                    <Divider />
                  </Box>
                  <Box pt={20}>
                    <Text size="sm">Comment Type</Text>
                    <Select
                      radius={'md'}
                      mt={'xs'}
                      size="md"
                      data={['Static', 'Open AI']}
                      rightSection={<IconCaretDownFilled />}
                      placeholder="Static"
                    />
                  </Box>
                  <Flex justify={'center'} pt={30}>
                    <Button radius={'md'} size="md">
                      Add Comment
                    </Button>
                  </Flex>
                </Tabs.Panel>
              </div>
            </Tabs>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card
            p={0}
            pb={40}
            className="bg-white rounded-xl mt-5  min-h-[calc(100vh-150px)]"
          >
            <Tabs
              color="#0069FF"
              variant="pills"
              radius="xs"
              defaultValue="select-post"
              className="w-full"
            >
              <Tabs.List>
                <Tabs.Tab value="select-post" className="w-[49%] py-4">
                  Select Post
                </Tabs.Tab>
                <Tabs.Tab value="post-id" className="w-[49%] py-4">
                  Post ID / URL
                </Tabs.Tab>
              </Tabs.List>
              <div className="pt-5">
                <Tabs.Panel value="select-post">
                  <Box py={20}>
                    <Text ta="center" opacity={0.8}>
                      Select A Post
                    </Text>
                  </Box>
                </Tabs.Panel>
                <Tabs.Panel value="post-id">
                  <Box className="relative mt-3 mx-auto" maw={'500px'}>
                    <Input
                      size="lg"
                      radius={'md'}
                      placeholder="Specifiy Keyword"
                    />
                    <Button
                      className="absolute top-0 right-0 rounded-r-lg rounded-l-none text-sm"
                      size="lg"
                    >
                      Add Keyword
                    </Button>
                  </Box>
                </Tabs.Panel>
              </div>
            </Tabs>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default PostEngagementsEdit;
