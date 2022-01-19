<script setup lang="ts">
import { useHeading } from '~/composables/useHeading'

const heading = useHeading()
</script>

<template>
  <header class="sticky top-0 bg-gray-50/80 backdrop-filter backdrop-blur-sm">
    <div
      class="
        mx-auto
        max-w-screen-xl
        px-8
        xl:px-0
        flex flex-col
        md:flex-row md:items-center
      "
    >
      <u-heading
        varaint="h1"
        class="text-center md:text-left"
        :title="heading"
      />
      <div class="mx-auto space-x-2 md:ml-auto md:mr-0">
        <router-link v-slot="{ href, navigate }" :to="{ name: 'login' }" custom>
          <u-btn variant="primary" link :href="href" @click="navigate">
            Вход
          </u-btn>
        </router-link>
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
  </header>
</template>
