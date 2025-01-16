<template>
  <div
    :class="`menu flex gap-10 md:w-64 w-4/5 h-screen left-0 box-border overflow-hidden rounded-r-lg sm:static fixed z-50`"
  >
    <div
      class="bg-gradient-to-br from-custom-primary to-purple-light text-appbar-text-unselected w-full font-semibold flex flex-col justify-between"
    >
      <div>
        <div class="flex justify-between items-center p-4 my-2 text-white font-bold text-2xl h-20">
          <h1 v-show="isOpenMenu">Dashboard</h1>

          <button @click="toggleMenu">
            <IconX v-if="device.xs" />
            <IconMenu2 v-else />
          </button>
        </div>

        <nav class="overflow-hidden">
          <MenuItemComponent :items="items" :is-open-menu="isOpenMenu" />
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconMenu2, IconX } from '@tabler/icons-vue'
import { useAppBar } from './composables/appbar'
import type { PrimitivePath } from '@/domain/user/entities/path.entity'

const { isOpenMenu, toggleMenu, device } = useAppBar()

defineProps<{
  items: PrimitivePath[]
}>()

defineExpose({
  toggleMenu,
})
</script>
