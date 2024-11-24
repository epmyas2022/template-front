<template>
  <div class="flex gap-10 absolute top-0 left-0 bottom-0 w-72 box-border overflow-hidden">
    <div
      class="bg-appbar-background/95 text-gray-400 font-semibold flex flex-col justify-between"
    >
      <div>
        <div class="flex justify-between">
          <h1 class="text-white font-bold text-2xl p-4 my-4">Dashboard</h1>

          <button class="mr-4">
            <IconMenu2 />
          </button>
        </div>

        <div
          class="flex mx-4 p-4 items-center gap-2 rounded-lg shadow-md ring-black/20 ring-2 bg-gradient-to-r from-custom-primary bg-custom-secondary"
        >
          <img
            src="https://avatar.iran.liara.run/public"
            alt="avatar"
            class="w-10 h-10 rounded-full object-cover"
          />

          <div class="text-sm">
            <h1 class="text-white">John Doe</h1>
            <p class="text-gray-200">correo@example.com</p>
          </div>
        </div>
        <br />
        <nav class="p-4">
          <ul class="flex flex-col gap-7">
            <li class="flex gap-2 text-white">
              <IconLayoutDashboard />
              <a href="#">Discover</a>
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
      <div class="p-4">
        <button class="flex gap-2 text-white text-base">
          <IconLogout2 />
          Cerrar sesión
        </button>
        <br />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  IconLayoutDashboard,
  IconCertificate,
  IconSchool,
  IconSettings,
  IconMenu2,
  IconLogout2,
} from '@tabler/icons-vue'
</script>
