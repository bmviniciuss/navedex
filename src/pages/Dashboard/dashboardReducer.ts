import { Naver } from '../../types'

interface DashboardState {
  navers: Naver[]
  globalError: string
  loading: boolean
}

export const initialState: DashboardState = {
  navers: [],
  globalError: '',
  loading: false
}

export enum DashboardActionsTypes {
  GET_NAVERS = 'GET_NAVERS',
  GET_NAVERS_ERROR = 'GET_NAVERS_ERROR',
  GET_NAVERS_SUCCESS = 'GET_NAVERS_SUCCESS'
}

export type DashboardActions =
{type: DashboardActionsTypes.GET_NAVERS } |
{type: DashboardActionsTypes.GET_NAVERS_ERROR, message: string } |
{type: DashboardActionsTypes.GET_NAVERS_SUCCESS, navers: Naver[] }

export function dashboardReducer (state: DashboardState, action: DashboardActions) {
  let newState: DashboardState

  switch (action.type) {
    case DashboardActionsTypes.GET_NAVERS: {
      newState = { ...state, globalError: '', loading: true }
      return newState
    }

    case DashboardActionsTypes.GET_NAVERS_ERROR: {
      newState = { ...state, globalError: action.message, loading: false }
      return newState
    }

    case DashboardActionsTypes.GET_NAVERS_SUCCESS: {
      newState = { ...state, loading: false, navers: action.navers }
      return newState
    }

    default:
      return state
  }
}
