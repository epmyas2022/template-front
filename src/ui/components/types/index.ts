import type { Icon } from '@tabler/icons-vue'

export type MenuItem = {
  title: string
  link?: string
  icon: Icon
  children?: MenuItem[]
}
