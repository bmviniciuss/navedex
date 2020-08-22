export interface LoginParams {
  email: string
  password: string
}

export interface LoginReturnType {
  email: string
  id: string
  token: string
}
