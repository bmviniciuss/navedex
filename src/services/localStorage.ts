import { LOCALSTORAGE_TOKEN_KEY } from '../config'

export function saveAuthToken (token: string) {
  localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token)
}

export function getAuthToken () {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)
}
