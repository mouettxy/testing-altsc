<script setup lang="ts">
import { useHeading } from '~/composables/useHeading'

const heading = useHeading()
</script>

<template>
  <div class="p-8 xs:p-0 mx-auto md:w-full md:max-w-md">
    <u-heading variant="h1" class="text-center mb-4" :title="heading" />
    <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <div class="px-5 py-7">
        <u-input label="Почта" />
        <u-input label="Пароль" type="password" />
        <u-btn variant="primary" class="w-full">Войти</u-btn>
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
