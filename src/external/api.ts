import axios from 'axios'

import { Naver } from '../types'
import { LoginParams, LoginReturnType } from './types'

export const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1/'
})

export const apiLogin = (params: LoginParams) => api.post<LoginReturnType>('users/login', params).then(res => res.data)

export const getNavers = () => api.get<Naver[]>('navers').then(res => res.data)
