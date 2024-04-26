import { Card, Tabs, Text } from '@mantine/core';
import {
  IconBrandMessenger,
  IconFilePlus,
  IconJson,
  IconLink,
  IconPlug,
  IconQrcode
} from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';
import PostEngagementsMain from '../postEngagements/PostEngagementsMain';

const CaptureTools = () => {
  const navigate = useNavigate();
  const params = useParams();

  const subTabsList = [
    {
      linkValue: 'links-library',
      icon: <IconLink size={20} />,
      name: 'Links Library',
      panelContent: <>Links Library</>
    },
    {
      linkValue: 'json-generator',
      icon: <IconJson size={20} />,
      name: 'JSON Generator',
      panelContent: <>JSON Generator</>
    },
    {
      linkValue: 'checkbox-plugin',
      icon: <IconPlug size={20} />,
      name: 'Checbox Plugin',
      panelContent: <>Checbox Plugin</>
    },
    {
      linkValue: 'messenger-code',
      icon: <IconQrcode size={20} />,
      name: 'Messenger Code',
      panelContent: <>Messenger Code</>
    },
    {
      linkValue: 'post-engagement',
      icon: <IconFilePlus size={20} />,
      name: 'Post Engagement',
      panelContent: <PostEngagementsMain />
    },
    {
      linkValue: 'send-to-messenger',
      icon: <IconBrandMessenger size={20} />,
      name: 'Send To Messenger',
      panelContent: <>Send To Messenger</>
    }
  ];

  return (
    <Tabs
      color="black"
      variant="pills"
      defaultValue="post-engagement"
      orientation="vertical"
      radius="lg"
      onChange={value => {
        navigate(`/${params?.botId}/${params?.navTab}/${value}`);
      }}
    >
      <Card mr="50" p="16">
        <Text c="dimmed" pb="16" fz="md" fw="600">
          Capture Tools
        </Text>
        <Tabs.List grow>
          {subTabsList.map((tab, index) => (
            <Tabs.Tab
              pr="25"
              value={tab.linkValue}
              leftSection={tab.icon}
              key={index}
            >
              {tab.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Card>
      {subTabsList.map((tab, index) => (
        <Tabs.Panel value={tab.linkValue} key={index}>
          {tab.panelContent}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default CaptureTools;
