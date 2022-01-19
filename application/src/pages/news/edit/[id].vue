<script setup lang="ts">
import { useMutation, useQuery, useQueryClient } from 'vue-query'
import type { NewsEntryUpdate } from '~/api/news'
import { getNewsEntry, updateNewsEntry } from '~/api/news'

const router = useRouter()
const route = useRoute()

const model = reactive({
  title: '',
  description: '',
})

const queryClient = useQueryClient()

useQuery(
  ['news', { _id: route.params.id }],
  () => getNewsEntry(route.params.id as string),
  {
    onSuccess(response) {
      if (response.data) {
        model.title = response.data.title
        model.description = response.data.description
      }
    },
  }
)

const { isLoading, mutate } = useMutation(
  (payload: NewsEntryUpdate) =>
    updateNewsEntry(route.params.id as string, payload),
  {
    onSuccess(response) {
      queryClient.setQueryData(
        ['news', { _id: response.data._id }],
        response.data
      )

      router.push({ name: 'index' })
    },
  }
)

const handleUpdate = () => {
  mutate(model)
}
</script>

<template>
  <div class="px-8 xl:px-0">
    <u-input v-model="model.title" label="Заголовок" />
    <u-textarea v-model="model.description" rows="8" label="Контент" />

    <u-btn
      variant="primary"
      :disabled="isLoading"
      class="w-full"
      @click="handleUpdate"
    >
      Создать новость
    </u-btn>
  </div>
</template>

<route lang="yaml">
name: newsItemEdit
meta:
  heading: Редактирование новости
  layout: default
</route>
