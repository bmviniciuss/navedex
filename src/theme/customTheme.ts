import { theme as chakraTheme, DefaultTheme } from '@chakra-ui/core'

import tailwind from '../../tailwind'

const chakraColors = chakraTheme.colors

export const customTheme:DefaultTheme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    blue: { ...chakraColors.blue, ...tailwind.theme.colors.blue }
  }
}
