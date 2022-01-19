<script setup lang="ts">
const props = defineProps({
  modelValue: {
    required: false,
    type: [String, Number],
    default: '',
  },
  label: {
    required: false,
    type: String,
    default: '',
  },
  rows: {
    required: false,
    type: String,
    default: '4',
  },
})

const emits = defineEmits(['update:modelValue'])

const model = useVModel(props, 'modelValue', emits)
</script>

<template>
  <label v-if="label" class="font-semibold text-sm text-gray-600 pb-1 block">
    {{ label }}
  </label>
  <textarea
    v-model="model"
    :rows="rows"
    class="
      border
      rounded-lg
      outline-none
      focus:ring
      transition-shadow
      duration-150
      px-3
      py-2
      mt-1
      mb-5
      text-sm
      w-full
    "
  />
</template>
