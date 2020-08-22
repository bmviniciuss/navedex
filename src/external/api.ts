import axios from 'axios'

import { LoginParams, LoginReturnType } from './types'

const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1/'
})

export const apiLogin = (params: LoginParams) => api.post<LoginReturnType>('users/login', params).then(res => res.data)
