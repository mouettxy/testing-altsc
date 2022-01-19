<script setup lang="ts">
defineProps({
  color: {
    required: false,
    type: String,
    default: 'bg-blue-200',
  },
})
</script>

<template>
  <p class="text-black px-4 py-2 rounded-md mb-4" :class="[color]">
    <slot />
  </p>
</template>
