<template>
  <div :class="`menu  flex gap-10 w-80 h-screen left-0 box-border overflow-hidden rounded-r-lg`">
    <div
      class="bg-gradient-to-br from-custom-primary to-custom-secondary/90 text-appbar-text-unselected w-full font-semibold flex flex-col justify-between"
    >
      <div>
        <div class="flex justify-between items-center p-4 my-2 text-white font-bold text-2xl h-20">
          <h1 v-show="isOpenMenu">Dashboard</h1>

          <button @click="toggleMenu">
            <IconMenu2 />
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
import { IconMenu2 } from '@tabler/icons-vue'

import { useAppBar } from './composables/appbar'
import { type MenuItem } from './types/index'

const { isOpenMenu, toggleMenu } = useAppBar()

defineProps<{
  items: MenuItem[]
}>()
</script>
