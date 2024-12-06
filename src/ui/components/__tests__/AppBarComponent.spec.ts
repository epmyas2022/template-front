import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { MenuItem } from '../types'

import { IconDashboard } from '@tabler/icons-vue'
import AppBarComponent from '../AppBarComponent.vue'
import MenuItemComponent from '../MenuItemComponent.vue'

describe('AppBarComponent', () => {
  const items = [
    {
      title: 'Dashboard',
      link: '#',
      icon: IconDashboard,
      children: [
        {
          title: 'Students',
          icon: IconDashboard,
          link: '/students',
        },
      ],
    },
    {
      title: 'Certificados',
      link: '/certificates',
      icon: IconDashboard,
    },
  ] as MenuItem[]

  it('should render the AppBarComponent', () => {
    const wrapper = mount(AppBarComponent, {
      global: {
        components: {
          MenuItemComponent,
        },
      },
      props: {
        items,
      },
    })

    expect(wrapper.findComponent(AppBarComponent).exists()).toBe(true)
  })

  it('should render the AppBarComponent with the correct items', () => {
    const wrapper = mount(AppBarComponent, {
      global: {
        components: {
          MenuItemComponent,
        },
      },
      props: {
        items,
      },
    })

    expect(wrapper.findAll('li').length).toBe(items.length)
  })
})
