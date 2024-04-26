import { Card, MantineThemeComponents } from '@mantine/core';

export const themeCard: Partial<MantineThemeComponents> = {
  Card: Card.extend({
    defaultProps: {
      h: '100%',
      shadow: 'sm',
      radius: 'lg',
      p: 'xl'
    }
  })
};
