<template>
  <div class="bg-gradient-to-tr from-appbar-background to-custom-background h-dvh">
    <div class="flex gap-2 flex-wrap items-center justify-center h-fit sm:h-full p-8">
      <div class="max-w-2xl">
        <img
          src="../../assets/notfound.svg"
          alt="404 not found"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col gap-3 justify-center text-white">
        <h2 class="text-5xl font-bold">404</h2>
        <h1 class="text-4xl">Something's missing</h1>

        <p class="text-gray-300">This page is missing or you assembled the link incorrectly</p>

        <a href="/" class="flex gap-2 items-center text-custom-primary text-lg">
          Go Home
          <IconArrowRight />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconArrowRight } from '@tabler/icons-vue'
</script>
