import { Grid, MantineThemeComponents } from '@mantine/core';

export const themeGrid: Partial<MantineThemeComponents> = {
  Grid: Grid.extend({
    defaultProps: {
      gutter: 'xl'
    }
  })
};
