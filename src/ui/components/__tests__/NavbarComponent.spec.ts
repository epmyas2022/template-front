import { mount } from '@vue/test-utils'
import { it, expect, describe, beforeEach } from 'vitest'
import NavBarComponent from '../NavBarComponent.vue'
import { createPinia, setActivePinia } from 'pinia'
import ModalComponent from '../ModalComponent.vue'

describe('NavbarComponent', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should render the NavbarComponent', () => {
    const wrapper = mount(NavBarComponent, {
      global: {
        components: {
          ModalComponent,
        },
      },
    })

    expect(wrapper.findComponent(NavBarComponent).exists()).toBe(true)
  })
})
