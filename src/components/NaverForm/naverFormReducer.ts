export const initialState = {
  data: {
    name: '',
    birthdate: '',
    job_role: '',
    project: '',
    admission_date: '',
    url: ''
  },
  loading: false,
  errors: {
    name: '',
    birthdate: '',
    job_role: '',
    project: '',
    admission_date: '',
    url: ''
  }
}

export interface ErrorsType {
  name?: string,
  birthdate?: string,
  job_role?: string,
  project?: string,
  admission_date?: string,
  url?: string
}

export interface NaverFormState {
  data: {
    name: string,
    birthdate: string,
    job_role: string,
    project: string,
    admission_date: string,
    url: string
  },
  loading: boolean,
  errors: ErrorsType
}

export enum NaverFormReducerTypes {
  SET_FIELD = 'SET_FIELD',
  SET_FIELD_ERRORS = 'SET_FIELD_ERRORS',
  ACTION = 'ACTION',
  ACTION_ERROR = 'ACTION_ERROR',
  ACTION_SUCCESS = 'ACTION_SUCCESS'
}

type ReducerActionsTypes =
{type: NaverFormReducerTypes.SET_FIELD, name: string, value: string} |
{type: NaverFormReducerTypes.SET_FIELD_ERRORS, errors: ErrorsType} |
{type: NaverFormReducerTypes.ACTION} |
{type: NaverFormReducerTypes.ACTION_ERROR }|
{type: NaverFormReducerTypes.ACTION_SUCCESS }

export function naverFormReducer (state:NaverFormState, action:ReducerActionsTypes) {
  let newState:NaverFormState
  switch (action.type) {
    case NaverFormReducerTypes.SET_FIELD: {
      newState = { ...state, data: { ...state.data, [action.name]: action.value } }
      return newState
    }

    case NaverFormReducerTypes.SET_FIELD_ERRORS: {
      newState = { ...state, errors: action.errors }
      return newState
    }

    case NaverFormReducerTypes.ACTION: {
      newState = { ...state, loading: true, errors: {} }
      return newState
    }

    case NaverFormReducerTypes.ACTION_ERROR: {
      newState = { ...state, loading: false }
      return newState
    }

    case NaverFormReducerTypes.ACTION_SUCCESS: {
      newState = { ...state, loading: false, errors: {} }
      return newState
    }

    default:
      return state
  }
}
