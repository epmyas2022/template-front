<template>
  <div class="flex gap-10">
    <div class="bg-appbar-background h-dvh w-72 text-gray-400 font-semibold rounded-lg">
      <h1 class="text-white font-bold text-2xl p-4 my-4">Dashboard</h1>

      <nav class="p-4">
        <ul class="flex flex-col gap-7">
          <li class="flex gap-2 text-white">
            <IconLayoutDashboard />
            <a href="#">Dashboard</a>
          </li>
          <li class="flex gap-2">
            <IconCertificate />
            <a href="#">Courses</a>
          </li>
          <li class="flex gap-2">
            <IconSchool />
            <a href="#">Students</a>
          </li>
          <li class="flex gap-2">
            <IconSettings />
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconLayoutDashboard, IconCertificate, IconSchool, IconSettings } from '@tabler/icons-vue'
</script>
