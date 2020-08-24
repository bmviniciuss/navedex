import axios from 'axios'

import { Naver } from '../types'
import { LoginParams, LoginReturnType, CreateNaverType } from './types'

export const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1/'
})

export const apiLogin = (params: LoginParams) => api.post<LoginReturnType>('users/login', params).then(res => res.data)

export const getNavers = () => api.get<Naver[]>('navers').then(res => res.data)

export const getNaver = (id: string) => api.get<Naver>(`navers/${id}`).then(res => res.data)

export const deleteNaver = (id: string) => api.delete(`navers/${id}`).then(res => res.data)

export const updateNaver = (id: string, body: CreateNaverType) => api.put<Naver>(`navers/${id}`, body).then(res => res.data)

export const createNaver = (params: CreateNaverType) => api.post<Naver>('navers', params).then(res => res.data)
