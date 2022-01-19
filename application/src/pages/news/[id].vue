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
  layout: default
</route>
