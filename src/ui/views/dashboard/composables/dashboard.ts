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
import type { MenuItem } from '@/ui/components/types'

export function useDashboard() {
  const menu = [
    {
      title: 'Dashboard',
      icon: IconLayoutDashboard,
      children: [
        {
          title: 'Students',
          icon: IconSchool,
          link: '#',
        },

        {
          title: 'Teachers',
          icon: IconSchoolBell,
          link: '#',
        },
        {
          title: 'Courses',
          icon: IconCloudComputing,
          link: '#',
        },
      ],
    },
    {
      title: 'Certificados',
      link: '/welcome',
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

  return {
    menu,
  }
}
