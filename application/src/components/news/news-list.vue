<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getAllNews } from '~/api/news'

const { isSuccess, data } = useQuery('news', () => getAllNews())

const news = computed(() => {
  if (!isSuccess.value) {
    return []
  }

  return data.value?.data || []
})
</script>

<template>
  <div class="flex flex-wrap -mx-4">
    <news-list-item
      v-for="newsEntry in news"
      :key="newsEntry._id"
      :news-id="newsEntry._id"
      :title="newsEntry.title"
      :description="newsEntry.description"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
