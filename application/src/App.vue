<script setup lang="ts">
import { useQueryProvider } from 'vue-query'

useHead({
  title: 'Новостной портал',
  meta: [{ name: 'description', content: 'Описание новостного портала' }],
})

useQueryProvider()
</script>

<template>
  <router-view />
</template>
