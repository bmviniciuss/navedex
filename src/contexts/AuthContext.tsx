import React, { createContext, useState, useEffect } from 'react'

import { apiLogin, api } from '../external/api'
import { LoginParams } from '../external/types'
import {
  saveAuthUser,
  saveAuthToken,
  getAuthUser,
  getAuthToken,
  clearAuthUser, clearAuthToken
} from '../services/localStorage'
import { AuthUserData } from '../types'

interface AuthContextType {
  token: string
  user?: AuthUserData
  loading: boolean
  login(params: LoginParams): Promise<void>
  logout(): void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider:React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<AuthUserData | undefined>(undefined)
  const [token, setToken] = useState('')

  useEffect(() => {
    const storedUser = getAuthUser()
    const storedToken = getAuthToken()
    if (storedUser && storedToken) {
      setUser(storedUser)
      setToken(storedToken)
      api.defaults.headers.authorization = `Bearer ${storedToken}`
    }
    setLoading(false)
  }, [token])

  async function login (params: LoginParams) {
    try {
      const { token, id, email } = await apiLogin(params)
      setUser({ id, email })
      setToken(token)
      saveAuthUser({ id, email })
      saveAuthToken(token)
    } catch (error) {
      throw new Error(error)
    }
  }

  function logout () {
    setUser(undefined)
    clearAuthUser()
    setToken('')
    clearAuthToken()
  }

  return (
    <AuthContext.Provider value={{ user, login, token, loading, logout } }>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
