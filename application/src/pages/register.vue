<script setup lang="ts">
import { useMutation } from 'vue-query'
import type { UserRegisterPayload } from '~/api/auth'
import { userRegister } from '~/api/auth'
import { useHeading } from '~/composables/useHeading'

const heading = useHeading()

const model = reactive({
  email: '',
  credentials: '',
  password: '',
})

const { isLoading, isError, error, isSuccess, mutate } = useMutation(
  (payload: UserRegisterPayload) => userRegister(payload)
)

function handleRegister() {
  mutate(model)
}

watch([isSuccess], (value) => {
  if (value) {
    model.email = ''
    model.credentials = ''
    model.password = ''
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
        <p
          v-if="isSuccess"
          class="text-black bg-green-200 px-4 py-2 rounded-md mb-4"
        >
          Вы успешно зарегистрированы
        </p>

        <u-input v-model="model.credentials" label="ФИО" />
        <u-input v-model="model.email" label="Почта" />
        <u-input v-model="model.password" label="Пароль" type="password" />

        <u-btn
          variant="primary"
          :disabled="isLoading"
          class="w-full"
          @click="handleRegister"
        >
          Зарегистрироваться
        </u-btn>
      </div>

      <div class="p-4">
        <router-link v-slot="{ href, navigate }" :to="{ name: 'login' }" custom>
          <u-btn variant="text" link :href="href" @click="navigate">
            Авторизация
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
name: register
meta:
  heading: Регистрация
  layout: centered
</route>
