import { ThemeProvider, theme } from '@chakra-ui/core'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '../contexts/AuthContext'
import { NaverModalProvider } from '../contexts/NaverModalContext'

const Providers: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NaverModalProvider>
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
        </NaverModalProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Providers
