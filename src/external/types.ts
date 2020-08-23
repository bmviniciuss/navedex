export interface LoginParams {
  email: string
  password: string
}

export interface LoginReturnType {
  email: string
  id: string
  token: string
}

export interface CreateNaverType {
  name: string
  birthdate: string
  job_role: string
  project: string
  admission_date: string
  url: string
}
