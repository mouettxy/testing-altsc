<script setup lang="ts">
import { useMutation } from 'vue-query'
import { useHeading } from '~/composables/useHeading'
import type { UserLoginPayload } from '~/api/auth'
import { userLogin } from '~/api/auth'
import { useUserStore } from '~/stores/user'

const heading = useHeading()
const userStore = useUserStore()
const router = useRouter()

const { isLoading, isError, error, isSuccess, data, mutate } = useMutation(
  (payload: UserLoginPayload) => userLogin(payload)
)

const model = reactive({
  email: '',
  password: '',
})

function handleLogin() {
  mutate(model)
}

watch([isSuccess], (value) => {
  if (value) {
    model.email = ''
    model.password = ''

    userStore.loginUser(data.value?.data)

    router.push({ name: 'index' })
  }
})
</script>

<template>
  <div class="p-8 xs:p-0 mx-auto md:w-full md:max-w-md">
    <u-heading variant="h1" class="text-center mb-4" :title="heading" />
    <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <div class="px-5 py-7">
        <p
          v-if="isError"
          class="text-black bg-orange-200 px-4 py-2 rounded-md mb-4"
        >
          {{ error }}
        </p>

        <u-input v-model="model.email" label="Почта" />
        <u-input v-model="model.password" label="Пароль" type="password" />

        <u-btn
          variant="primary"
          :disabled="isLoading"
          class="w-full"
          @click="handleLogin"
        >
          Войти
        </u-btn>
      </div>

      <div class="p-4">
        <router-link
          v-slot="{ href, navigate }"
          :to="{ name: 'register' }"
          custom
        >
          <u-btn variant="text" link :href="href" @click="navigate">
            Регистрация
          </u-btn>
        </router-link>
      </div>
    </div>
    <div class="p-4">
      <div class="flex justify-center">
        <router-link v-slot="{ href, navigate }" :to="{ name: 'index' }" custom>
          <u-btn variant="text" link :href="href" @click="navigate">
            К новостям
          </u-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
name: login
meta:
  heading: Авторизация
  layout: centered
</route>
