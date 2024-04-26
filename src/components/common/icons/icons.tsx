import { JSX } from 'react';
import {
  IconCategory2,
  IconDashboard,
  IconMagnet,
  IconMessageCircle,
  IconSpeakerphone,
  IconUsers
} from '@tabler/icons-react';

export interface AppIcons<T> {
  [key: string]: T;
}

export const appIcon: AppIcons<JSX.Element> = {
  botList: <IconCategory2 />,
  botDetailsDashboard: <IconDashboard />,
  audience: <IconUsers />,
  liveChat: <IconMessageCircle />,
  capture: <IconMagnet />,
  broadcasts: <IconSpeakerphone />
};
