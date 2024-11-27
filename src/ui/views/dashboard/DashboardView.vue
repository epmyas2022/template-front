<template>
  <div class="flex h-screen">
    <AppBarComponent :items="menu" />

    <div class="flex flex-col flex-1 h-full overflow-hidden">
      <NavBarComponent />

      <div class="flex justify-center h-full items-center">
        <RouterView />
        <h1 class="text-3xl text-white">Example of section</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from '@/ui/components/types'
import {
  IconLayoutDashboard,
  IconCertificate,
  IconBrandSpotifyFilled,
  IconBrandNetflix,
  IconChartInfographic,
  IconSchool,
  IconSchoolBell,
  IconCloudComputing,
} from '@tabler/icons-vue'

const menu = [
  {
    title: 'Dashboard',
    link: '#',
    icon: IconLayoutDashboard,
    children: [
      {
        title: 'Students',
        icon: IconSchool,
        link: '/students',
      },

      {
        title: 'Teachers',
        icon: IconSchoolBell,
        link: '/teachers',
      },
      {
        title: 'Courses',
        icon: IconCloudComputing,
        link: '/courses',
      },
    ],
  },
  {
    title: 'Certificados',
    link: '/certificates',
    icon: IconCertificate,
  },
  {
    title: 'Music Player',
    link: '/spotify',
    icon: IconBrandSpotifyFilled,
  },
  {
    title: 'Movies',
    link: '/netflix',
    icon: IconBrandNetflix,
  },
  {
    title: 'Reportes',
    link: '/charts',
    icon: IconChartInfographic,
  },
] as MenuItem[]
</script>
