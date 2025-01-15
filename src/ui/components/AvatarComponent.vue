<template>
  <div
    :style="{ width: aspect.size, height: aspect.size }"
    class="`w-10 h-10 rounded-full ring-custom-primary hover:ring-white ring-2 border-2 cursor-pointer relative group z-10"
  >
    <img
      :src="url || 'https://i.pravatar.cc/300'"
      alt="avatar of profile"
      class="w-full object-cover rounded-full aspect-[10/10]"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  size?: number
  url?: string
}>()

const aspect = computed(() => {
  const size = props.size || '2.5'
  return { size: `${size}rem` }
})
</script>
