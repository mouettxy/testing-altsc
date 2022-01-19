import _axios from 'axios'
import { useUserStore } from '~/stores/user'
export const SERVER_URI = 'http://localhost:8000'

export const axios = _axios.create({
  baseURL: SERVER_URI,
  headers: {
    'Content-type': 'application/json',
  },
})

axios.interceptors.request.use((config) => {
  const userStore = useUserStore()

  if (config.headers) {
    config.headers.Authorization = userStore.token
      ? `Bearer ${userStore.token}`
      : ''
  }

  return config
})
