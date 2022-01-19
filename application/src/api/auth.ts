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
  axios.value.post('/auth/login', payload)

export const userRegister = (payload: UserRegisterPayload): Promise<User> =>
  axios.value.post('/auth/register', payload)

export const userCheck = (): Promise<User> => axios.value.get('/auth/me')
