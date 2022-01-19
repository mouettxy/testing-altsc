<script setup lang="ts">
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
