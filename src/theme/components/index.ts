import { MantineThemeComponents } from '@mantine/core';
import { themeButton } from './button/themeButton';
import { themeGrid } from './grid/themeGrid';
import { themeCard } from './card/themeCard';

export const themeComponents: Partial<MantineThemeComponents> = {
  ...themeButton,
  ...themeGrid,
  ...themeCard
};
