import { ThemeProvider, theme } from '@chakra-ui/core'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from '../contexts/AuthContext'
import { NaverModalProvider } from '../contexts/NaverModalContext'

const Providers: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NaverModalProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </NaverModalProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Providers
