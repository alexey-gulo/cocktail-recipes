<template>
  <svg
    aria-hidden="true"
    :width="size || width"
    :height="size || height"
    :class="componentClass">
    <use :href="fullUrl" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import iconUrl from '@/assets/icons.svg'
import type { Props } from '@/types/icon'

const props = withDefaults(defineProps<Props>(), {
  width: '24',
  height: '24',
  class: ''
})

// Hooks
const componentClass = computed((): string[] => {
  return [
    'icon',
    props.class
  ]
})
const fullUrl = computed((): string => `${iconUrl}#${props.name}Icon`)
</script>
