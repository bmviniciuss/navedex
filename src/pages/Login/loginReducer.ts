export const initialState:LoginState = {
  data: {
    email: '',
    password: ''
  },
  errors: {
    email: '',
    password: ''
  },
  loading: false,
  globalError: ''
}

interface ErrorsType {
  email: string,
  password: string
}

interface LoginState {
  data: {
    email: string,
    password: string
  },
  errors: {
    email: string,
    password: string
  },
  loading: boolean,
  globalError: string
}

export enum LoginReducerTypes {
  SET_FIELD = 'SET_FIELD',
  SET_FIELD_ERRORS = 'SET_FIELD_ERRORS',
  LOGIN = 'LOGIN'
}

type LoginActions = {type: LoginReducerTypes.SET_FIELD, name: string, value: string} |
{type: LoginReducerTypes.LOGIN} |
{type: LoginReducerTypes.SET_FIELD_ERRORS, errors: ErrorsType}

export function loginReducer (state: LoginState, action:LoginActions) {
  switch (action.type) {
    case LoginReducerTypes.SET_FIELD: {
      return { ...state, data: { ...state.data, [action.name]: action.value } }
    }
    case LoginReducerTypes.LOGIN: {
      return { ...state, errors: { email: '', password: '' } }
    }
    case LoginReducerTypes.SET_FIELD_ERRORS: {
      return { ...state, errors: action.errors }
    }
    default:
      return state
  }
}
