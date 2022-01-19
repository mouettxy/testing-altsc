<script setup lang="ts">
const props = defineProps({
  value: {
    required: false,
    type: [String, Number],
    default: '',
  },
  label: {
    required: false,
    type: String,
    default: '',
  },
  type: {
    required: false,
    type: String,
    default: 'text',
    validator: (v: string) => ['text', 'password'].includes(v),
  },
})

const emits = defineEmits(['update:modelValue'])

const model = useVModel(props, 'value', emits)
</script>

<template>
  <label v-if="label" class="font-semibold text-sm text-gray-600 pb-1 block">
    {{ label }}
  </label>
  <input
    v-model="model"
    :type="type"
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
