import { ActionIcon, Button, MantineThemeComponents } from '@mantine/core';

export const themeButton: Partial<MantineThemeComponents> = {
  Button: Button.extend({
    defaultProps: {
      size: 'md',
      variant: 'filled'
    }
  }),
  ActionIcon: ActionIcon.extend({
    defaultProps: {
      variant: 'subtle',
      color: 'black',
      size: '50',
      radius: 'xl'
    }
  })
};
