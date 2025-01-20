import { it, describe, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { Path, type PrimitivePath } from '@/domain/user/entities/path.entity'

import AppBarComponent from '../AppBarComponent.vue'
import MenuItemComponent from '../MenuItemComponent.vue'

describe('AppBarComponent', () => {
  vi.mock('vue-router', () => ({
    useRouter: () => ({
      push: vi.fn(),
    }),
  }))

  const items = [
    Path.create({
      title: 'Dashboard',
      icon: 'ti ti-layout-dashboard',
      path: '#',
      name: 'Dashboard',
      description: 'Dashboard from local',
    }).toValue(),
  ] as PrimitivePath[]

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
