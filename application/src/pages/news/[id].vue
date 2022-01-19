<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    {{ route.params.id }}
  </div>
</template>

<route lang="yaml">
name: newsItem
meta:
  heading: Просмотр новости
  layout: default
</route>
