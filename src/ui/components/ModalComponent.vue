<template>
  <VueFinalModal
    class="flex justify-center items-center w-full"
    :content-class="`w-full  md:w-fit ${isMobile() && fullScreen ? 'h-dvh' : 'p-2'}`"
    :content-transition="'bounce'"
    v-model="show"
  >
    <div
      class="bg-custom-background p-6 rounded-md"
      :style="{
        width: isMobile() ? '100%' : width || '30rem',
        height: fullScreen ? '100%' : 'auto',
      }"
    >
      <div class="flex justify-end text-gray-100">
        <button @click="close">
          <IconX />
        </button>
      </div>
      <h1 class="text-white font-bold text-xl mb-2">{{ title }}</h1>

      <slot />
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { IconX } from '@tabler/icons-vue'

import { useDevice } from './composables/device'

defineProps<{
  title?: string
  fullScreen?: boolean
  width?: string
  animation?:
    | 'vfm-slide-up'
    | 'vfm-slide-down'
    | 'vfm-fade'
    | 'vfm-slide-right'
    | 'vfm-slide-left'
    | 'bounce'
    | 'bounder'
}>()

const device = useDevice()

const { isMobile } = device
const show = defineModel<boolean>()

const open = () => {
  show.value = true
}

const close = () => {
  show.value = false
}

defineExpose({
  open,
  close,
})
</script>
