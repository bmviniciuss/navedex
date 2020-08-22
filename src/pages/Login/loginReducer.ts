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
  LOGIN = 'LOGIN',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS'
}

type LoginActions =
{type: LoginReducerTypes.SET_FIELD, name: string, value: string} |
{type: LoginReducerTypes.SET_FIELD_ERRORS, errors: ErrorsType} |
{type: LoginReducerTypes.LOGIN} |
{type: LoginReducerTypes.LOGIN_ERROR, message: string}|
{type: LoginReducerTypes.LOGIN_SUCCESS }

export function loginReducer (state: LoginState, action:LoginActions) {
  switch (action.type) {
    case LoginReducerTypes.SET_FIELD: {
      return { ...state, data: { ...state.data, [action.name]: action.value } }
    }
    case LoginReducerTypes.SET_FIELD_ERRORS: {
      return { ...state, errors: action.errors }
    }
    case LoginReducerTypes.LOGIN: {
      return { ...state, loading: true, errors: { email: '', password: '' }, globalError: '' }
    }
    case LoginReducerTypes.LOGIN_ERROR: {
      return { ...state, globalError: action.message, loading: false }
    }
    case LoginReducerTypes.LOGIN_SUCCESS: {
      return { ...state, globalError: '', errors: { email: '', password: '' }, loading: false }
    }
    default:
      return state
  }
}
