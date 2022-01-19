<script setup lang="ts">
const route = useRoute()

const model = reactive({
  title: '',
  description: '',
})
</script>

<template>
  <div class="px-8 xl:px-0">
    <u-input v-model="model.title" label="Заголовок" />
    <u-textarea v-model="model.description" rows="8" label="Контент" />
    <u-btn variant="primary" class="w-full">Создать новость</u-btn>
  </div>
</template>

<route lang="yaml">
name: newsItemCreate
meta:
  heading: Создание новости
  layout: default
</route>
