import { mount } from '@vue/test-utils'
import { it, expect, describe } from 'vitest'
import NavBarComponent from '../NavBarComponent.vue'

describe('NavbarComponent', () => {
  it('should render the NavbarComponent', () => {
    const wrapper = mount(NavBarComponent, {})

    expect(wrapper.findComponent(NavBarComponent).exists()).toBe(true)
  })
})
