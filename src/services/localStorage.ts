import { LOCAL_STORAGE_TOKEN_KEY, LOCAL_STORAGE_USER_KEY } from '../config'
import { AuthUserData } from '../types'

export function saveAuthToken (token: string) {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token)
}

export function saveAuthUser (data: AuthUserData) {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data))
}

export function getAuthToken () {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  return token || undefined
}

export function getAuthUser (): AuthUserData | undefined {
  const data = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
  return data ? JSON.parse(data) : undefined
}
