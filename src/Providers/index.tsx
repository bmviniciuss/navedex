import { ThemeProvider, theme } from '@chakra-ui/core'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from '../contexts/AuthContext'

const Providers: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Providers
