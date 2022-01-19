<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  variant: {
    required: false,
    type: String as PropType<'primary' | 'text'>,
    default: 'primary',
    validator: (v: string) => ['primary', 'text'].includes(v),
  },

  link: {
    required: false,
    type: Boolean,
  },
})

const btnVariants = {
  primary: [
    'px-6',
    'py-2',
    'bg-blue-500',
    'hover:bg-blue-600',
    'focus:bg-blue-700',
    'focus:shadow-sm',
    'focus:ring',
    'focus:ring-blue-500',
    'focus:ring-opacity-50',
    'text-white',
    'shadow-sm',
    'hover:shadow-md',
    'font-semibold',
  ],
  text: [
    'px-6',
    'py-2',
    'text-gray-500',
    'hover:bg-gray-100',
    'focus:outline-none',
    'focus:bg-gray-200',
    'focus:ring',
    'focus:ring-gray-400',
    'focus:ring-opacity-50',
  ],
  icon: [
    'p-2',
    'text-gray-500',
    'hover:bg-gray-100',
    'focus:outline-none',
    'focus:bg-gray-200',
    'focus:ring',
    'focus:ring-gray-400',
    'focus:ring-opacity-50',
  ],
}

const btnAttrs = computed(() => {
  return {
    class: btnVariants[props.variant],
  }
})

const btnComponent = computed(() => {
  return props.link ? 'a' : 'button'
})
</script>

<template>
  <component
    :is="btnComponent"
    class="
      transition
      duration-150
      cursor-pointer
      font-normal
      text-sm
      rounded-lg
    "
    v-bind="btnAttrs"
  >
    <slot />
  </component>
</template>
