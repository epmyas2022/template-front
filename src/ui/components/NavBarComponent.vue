<template>
  <nav class="bg-appbar-background text-white p-2 h-16 flex justify-between sm:block">
    <button @click="$emit('openMenu')" :class="{ 'sm:hidden': true }">
      <IconMenu2 />
    </button>
    <div class="flex justify-end px-4">
      <div class="flex gap-10 items-center">
        <div class="flex gap-4">
          <button
            class="bg-slate-400/30 text-sm w-10 h-10 flex justify-center items-center rounded-full hover:bg-custom-secondary"
          >
            <IconBell size="20" />
          </button>

          <button
            class="bg-slate-400/30 text-sm w-10 h-10 flex justify-center items-center rounded-full hover:bg-custom-secondary"
          >
            <IconCategory2 />
          </button>

          <button
            class="bg-slate-400/30 text-sm w-10 h-10 flex justify-center items-center rounded-full hover:bg-custom-secondary"
          >
            <IconAdjustments />
          </button>
        </div>
        <div
          class="w-10 h-10 rounded-full ring-custom-primary hover:ring-white ring-2 border-2 cursor-pointer"
        >
          <img
            src="https://i.pravatar.cc/300"
            alt="avatar"
            class="w-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { IconBell, IconCategory2, IconAdjustments, IconMenu2 } from '@tabler/icons-vue'
</script>
