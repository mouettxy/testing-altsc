import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Ref } from 'vue'
import type { User } from '~/api/auth'

export const useUserStore = defineStore('user', () => {
  const user: Ref<User | null> = ref(null)

  function loginUser(loggedUser: User) {
    user.value = loggedUser
  }

  function logoutUser() {
    user.value = null
  }

  const isLoggedIn = computed(() => {
    return user.value && user.value.token
  })

  const token = computed(() => {
    if (!user.value) {
      return ''
    }

    return user.value.token
  })

  return {
    loginUser,
    logoutUser,
    isLoggedIn,
    token,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
