<template>
  <div class="flex h-screen">
    <AppBarComponent :items="menu" ref="appbar" />

    <div class="flex flex-col flex-1 h-full overflow-hidden">
      <NavBarComponent @open-menu="appbar?.toggleMenu" />

      <div class="flex justify-center h-full items-center">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import type AppBarComponent from '@/ui/components/AppBarComponent.vue'
import { useDashboard } from './composables/dashboard'
const appbar = useTemplateRef<ComponentExposed<typeof AppBarComponent>>('appbar')

const { menu } = useDashboard()
</script>
