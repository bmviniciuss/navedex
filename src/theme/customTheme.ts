import { theme as chakraTheme, DefaultTheme } from '@chakra-ui/core'

import tailwind from '../../tailwind'

const chakraColors = chakraTheme.colors

export const customTheme:DefaultTheme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    blue: { ...chakraColors.blue, ...tailwind.theme.colors.blue },
    green: { ...chakraColors.green, ...tailwind.theme.colors.green },
    gray: { ...chakraColors.gray, ...tailwind.theme.colors.gray },
    red: { ...chakraColors.red, ...tailwind.theme.colors.red },
    orange: { ...chakraColors.orange, ...tailwind.theme.colors.orange }
  }
}
