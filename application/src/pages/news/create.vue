<script setup lang="ts">
import { useMutation, useQueryClient } from 'vue-query'
import type { NewsEntryCreate } from '~/api/news'
import { createNewsEntry } from '~/api/news'

const model = reactive({
  title: '',
  description: '',
})

const queryClient = useQueryClient()

const { isLoading, isError, error, isSuccess, mutate } = useMutation(
  (payload: NewsEntryCreate) => createNewsEntry(payload),
  {
    onSuccess(response) {
      model.title = ''
      model.description = ''

      queryClient.setQueryData(
        ['news', { _id: response.data._id }],
        response.data
      )
    },
  }
)

function handleCreate() {
  mutate(model)
}
</script>

<template>
  <div class="px-8 xl:px-0">
    <u-alert v-if="isError" color="bg-orange-200">
      {{ error }}
    </u-alert>
    <u-alert v-if="isSuccess" color="bg-green-200">
      Новость успешно создана
    </u-alert>

    <u-input v-model="model.title" label="Заголовок" />
    <u-textarea v-model="model.description" rows="8" label="Контент" />

    <u-btn
      variant="primary"
      :disabled="isLoading"
      class="w-full"
      @click="handleCreate"
    >
      Создать новость
    </u-btn>
  </div>
</template>

<route lang="yaml">
name: newsItemCreate
meta:
  heading: Создание новости
  layout: default
</route>
