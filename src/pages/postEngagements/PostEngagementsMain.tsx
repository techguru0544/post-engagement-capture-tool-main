import MantineTable from '@/components/mantineTable/MantineTable';
import { Avatar, Flex, Text } from '@mantine/core';

const PostEngagementsMain = () => {
  const tableRowsData = [
    {
      id: 2057,
      engaged: '50 / 25',
      acquried: '66',
      conversion: '10%',
      name: (
        <Flex align="center" gap="md">
          <Avatar
            size={'xs'}
            src={'https://app.dev.clepher.com/images/platform/instagram.svg'}
          />
          Application
        </Flex>
      )
    },
    {
      id: 6576,
      engaged: '50 / 25',
      acquried: '66',
      conversion: '10%',
      name: (
        <Flex align="center" gap="md">
          <Avatar
            size={'xs'}
            src={
              'https://app.dev.clepher.com/images/platform/messenger-blurple.svg'
            }
          />
          Interactions
        </Flex>
      )
    },
    {
      id: 2789,
      engaged: '50 / 25',
      acquried: '66',
      conversion: '10%',
      name: (
        <Flex align="center" gap="md">
          <Avatar
            size={'xs'}
            src={'https://app.dev.clepher.com/images/platform/instagram.svg'}
          />
          Optimization
        </Flex>
      )
    },
    {
      id: 2635,
      engaged: '50 / 25',
      acquried: '66',
      conversion: '10%',
      name: (
        <Flex align="center" gap="md">
          <Avatar
            size={'xs'}
            src={
              'https://app.dev.clepher.com/images/platform/messenger-blurple.svg'
            }
          />
          Paradigm
        </Flex>
      )
    },
    {
      id: 1886,
      engaged: '50 / 25',
      acquried: '66',
      conversion: '10%',
      name: (
        <Flex align="center" gap="md">
          <Avatar
            size={'xs'}
            src={
              'https://app.dev.clepher.com/images/platform/messenger-blurple.svg'
            }
          />
          Application
        </Flex>
      )
    },
    {
      id: 4056,
      engaged: '50 / 25',
      acquried: '66',
      conversion: '10%',
      name: (
        <Flex align="center" gap="md">
          <Avatar
            size={'xs'}
            src={'https://app.dev.clepher.com/images/platform/instagram.svg'}
          />
          Interactions
        </Flex>
      )
    },
    {
      id: 7575,
      engaged: '50 / 25',
      acquried: '66',
      conversion: '10%',
      name: (
        <Flex align="center" gap="md">
          <Avatar
            size={'xs'}
            src={
              'https://app.dev.clepher.com/images/platform/messenger-blurple.svg'
            }
          />
          Paradigm
        </Flex>
      )
    },
    {
      id: 6589,
      engaged: '50 / 25',
      acquried: '66',
      conversion: '10%',
      name: (
        <Flex align="center" gap="md">
          <Avatar
            size={'xs'}
            src={'https://app.dev.clepher.com/images/platform/instagram.svg'}
          />
          Application
        </Flex>
      )
    },
    {
      id: 7532,
      engaged: '50 / 25',
      acquried: '66',
      conversion: '10%',
      name: (
        <Flex align="center" gap="md">
          <Avatar
            size={'xs'}
            src={
              'https://app.dev.clepher.com/images/platform/messenger-blurple.svg'
            }
          />
          Optimization
        </Flex>
      )
    },
    {
      id: 12546,
      engaged: '50 / 25',
      acquried: '66',
      conversion: '10%',
      name: (
        <Flex align="center" gap="md">
          <Avatar
            size={'xs'}
            src={
              'https://app.dev.clepher.com/images/platform/messenger-blurple.svg'
            }
          />
          Paradigm
        </Flex>
      )
    }
  ];
  return (
    <>
      <Text fz="h4" fw="500" mb="8">
        Post Engagements
      </Text>
      <MantineTable tableRowsData={tableRowsData} />
    </>
  );
};

export default PostEngagementsMain;
