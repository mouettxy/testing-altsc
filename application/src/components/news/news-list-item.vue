<script setup lang="ts">
import { useUserStore } from '~/stores/user'

defineProps({
  newsId: {
    required: false,
    type: String,
    default: '',
  },
  title: {
    required: false,
    type: String,
    default: '',
  },
  description: {
    required: false,
    type: String,
    default: '',
  },
})

const userStore = useUserStore()
</script>

<template>
  <div class="w-full md:w-1/2 xl:w-1/3 px-4 py-4">
    <div
      class="
        bg-white
        rounded-lg
        overflow-hidden
        shadow
        mb-4
        p-4
        min-h-full
        flex flex-col
      "
    >
      <div v-if="userStore.isLoggedIn" class="ml-auto flex space-x-2">
        <router-link
          v-slot="{ href, navigate }"
          :to="{ name: 'newsItemEdit', params: { id: newsId } }"
          custom
        >
          <u-btn link :href="href" variant="icon" @click="navigate">
            <svg
              aria-hidden="true"
              class="block w-6 h-6 text-blue-600"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"
                fill="currentColor"
              />
            </svg>
          </u-btn>
        </router-link>

        <u-btn variant="icon">
          <svg
            aria-hidden="true"
            class="block w-6 h-6 text-red-400"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"
              fill="currentColor"
            />
          </svg>
        </u-btn>
      </div>
      <u-heading variant="h2" class="text-center" :title="title" />
      <p
        class="
          flex-grow
          leading-relaxed
          text-left
          max-h-20
          relative
          overflow-hidden
          after:content-['']
          after:absolute
          after:bottom-0
          after:right-0
          after:w-full
          after:h-4
          after:bg-gradient-to-b
          after:from-white/40
          after:to-white
        "
      >
        {{ description }}
      </p>
      <div class="text-center mt-auto">
        <router-link
          v-slot="{ href, navigate }"
          :to="{ name: 'newsItem', params: { id: newsId } }"
          custom
        >
          <u-btn
            variant="text"
            link
            :href="href"
            class="text-blue-600"
            @click="navigate"
          >
            Смотреть полностью
          </u-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>
