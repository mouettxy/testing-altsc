<script setup lang="ts"></script>

<template>
  <div class="container px-8 xl:px-0">
    <router-link
      v-slot="{ href, navigate }"
      :to="{ name: 'newsItemCreate' }"
      custom
    >
      <u-btn
        link
        :href="href"
        variant="primary"
        class="w-full block text-center"
        @click="navigate"
      >
        Создать новость
      </u-btn>
    </router-link>

    <news-list />
  </div>
</template>

<route lang="yaml">
name: index
meta:
  heading: Новости
  layout: default
</route>
