import _axios from 'axios'
import { useUserStore } from '~/stores/user'
export const SERVER_URI = 'http://localhost:8000'

const userStore = useUserStore()

const authorization = computed(() =>
  userStore.token ? `Bearer ${userStore.token}` : ''
)

export const axios = computed(() => {
  return _axios.create({
    baseURL: SERVER_URI,
    headers: {
      'Content-type': 'application/json',
      Authorization: authorization.value,
    },
  })
})
