<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getNewsEntry } from '~/api/news'

const route = useRoute()

const { isSuccess, isError, error, data } = useQuery(
  ['news', { _id: route.params.id }],
  () => getNewsEntry(route.params.id as string)
)

const newsEntry = computed(() => {
  return data.value?.data || { title: '', description: '' }
})
</script>

<template>
  <div class="w-full grid grid-cols-1 px-8 xl:grid-cols-2 xl:px-0">
    <u-alert v-if="isError" color="bg-orange-200">
      {{ error }}
    </u-alert>

    <template v-if="isSuccess">
      <u-heading variant="h2" :title="newsEntry.title" />
      <p class="py-0 xl:py-4 leading-relaxed">{{ newsEntry.description }}</p>
    </template>
  </div>
</template>

<route lang="yaml">
name: newsItem
meta:
  heading: Просмотр новости
  layout: default
</route>
