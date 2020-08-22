import axios from 'axios'

import { LoginReducerTypes } from '../pages/Login/loginReducer'
import { LoginParams } from './types'

const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1/'
})

export const apiLogin = (params: LoginParams) => api.post<LoginReducerTypes>('users/login', params).then(res => res.data)
