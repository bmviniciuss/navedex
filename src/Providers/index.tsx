import { ThemeProvider, theme } from '@chakra-ui/core'
import React from 'react'

const Providers: React.FC = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  )
}

export default Providers
