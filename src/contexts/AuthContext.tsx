import React, { createContext, useState, useEffect } from 'react'

import { apiLogin } from '../external/api'
import { LoginParams } from '../external/types'
import { saveAuthUser, saveAuthToken, getAuthUser, getAuthToken } from '../services/localStorage'
import { AuthUserData } from '../types'

interface AuthContextType {
  token: string
  user?: AuthUserData
  loading: boolean
  login(params: LoginParams): Promise<void>
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
    }
    setLoading(false)
  }, [])

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

  return (
    <AuthContext.Provider value={{ user, login, token, loading } }>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
