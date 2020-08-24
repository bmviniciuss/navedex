export const initialState:LoginState = {
  data: {
    email: '',
    password: ''
  },
  errors: {
    email: '',
    password: ''
  }
}

interface ErrorsType {
  email?: string,
  password?: string
}

interface LoginState {
  data: {
    email: string,
    password: string
  },
  errors: ErrorsType
}

export enum LoginReducerTypes {
  SET_FIELD = 'SET_FIELD',
  SET_FIELD_ERRORS = 'SET_FIELD_ERRORS',
  LOGIN = 'LOGIN'
}

type LoginActions =
  {type: LoginReducerTypes.SET_FIELD, name: string, value: string} |
  {type: LoginReducerTypes.SET_FIELD_ERRORS, errors: ErrorsType} |
  {type: LoginReducerTypes.LOGIN}

export function loginReducer (state: LoginState, action:LoginActions) {
  switch (action.type) {
    case LoginReducerTypes.SET_FIELD: {
      return { ...state, data: { ...state.data, [action.name]: action.value } }
    }
    case LoginReducerTypes.SET_FIELD_ERRORS: {
      return { ...state, errors: action.errors }
    }
    case LoginReducerTypes.LOGIN: {
      return { ...state, errors: {} }
    }
    default:
      return state
  }
}
