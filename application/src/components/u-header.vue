<script setup lang="ts">
import { useHeading } from '~/composables/useHeading'

const heading = useHeading()

const router = useRouter()
const route = useRoute()
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
      <u-btn
        v-if="route.name !== 'index'"
        class="mt-0.5 mr-2"
        variant="icon"
        @click="router.back()"
      >
        <svg
          class="w-6 h-6 block"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42z"
            fill="currentColor"
          />
        </svg>
      </u-btn>
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
