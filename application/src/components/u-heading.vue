<script setup lang="ts">
import type { PropType } from 'vue'

type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4'

const props = defineProps({
  title: {
    required: false,
    type: String,
    default: 'Заголовок',
  },

  variant: {
    required: false,
    type: String as PropType<HeadingVariants>,
    default: 'h1',
    validator: (v: string) => ['h1', 'h2', 'h3', 'h4'].includes(v),
  },
})

const headingVariants = {
  h1: ['font-bold', 'tracking-wide', 'text-2xl'],
  h2: ['font-bold', 'tracking-wide', 'text-xl'],
  h3: ['font-bold', 'tracking-wide', 'text-lg'],
  h4: ['font-bold', 'tracking-wide', 'text-base'],
}

const headingVariant = computed(() => {
  return {
    class: headingVariants[props.variant],
  }
})

const styledTitle = computed(() => {
  const firstLetter = props.title.substring(0, 1)
  const rest = props.title.substring(1)

  return [
    {
      id: 1,
      styles: ['text-blue-700'],
      text: firstLetter,
    },
    {
      id: 2,
      styles: [],
      text: rest,
    },
  ]
})
</script>

<template>
  <component :is="variant" v-bind="headingVariant">
    <span
      v-for="styledTitleEntry in styledTitle"
      :key="styledTitleEntry.id"
      :class="styledTitleEntry.styles"
    >
      {{ styledTitleEntry.text }}
    </span>
  </component>
</template>
