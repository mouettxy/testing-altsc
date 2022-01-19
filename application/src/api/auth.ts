import { axios } from '~/config/api'

export interface User {
  id: string
  email: string
  credentials: string
  token: string
}

export interface UserLoginPayload {
  email: string
  password: string
}

export interface UserRegisterPayload {
  email: string
  credentials: string
  password: string
}

export const userLogin = (payload: UserLoginPayload) =>
  axios.post('/auth/login', payload)

export const userRegister = (payload: UserRegisterPayload) =>
  axios.post<User>('/auth/register', payload)

export const userCheck = (): Promise<User> => axios.get('/auth/me')
