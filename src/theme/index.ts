import {
  createTheme,
  DEFAULT_THEME,
  MantineThemeOverride,
  mergeMantineTheme
} from '@mantine/core';
import { ThemeColors } from '@/theme/config/colors.ts';
import { themeComponents } from './components';

const themeOverride: MantineThemeOverride = createTheme({
  fontFamily: 'var(--base-font)',
  colors: ThemeColors,
  defaultRadius: 'lg',
  primaryColor: 'theme',
  primaryShade: 6,
  components: themeComponents // add your custom component overrides here
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
