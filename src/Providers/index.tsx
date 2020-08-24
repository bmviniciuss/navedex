import { ThemeProvider, theme } from '@chakra-ui/core'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '../contexts/AuthContext'

const Providers: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ToastContainer
            position="top-right"
            autoClose={false}
            hideProgressBar
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
          />
          {children}
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Providers
