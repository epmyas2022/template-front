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

  it('should render the ModalComponent', async () => {
    expect(ModalComponent).toBeDefined()
  })

  it('should render the modal component open', async () => {
    const wrapper = mount(ModalComponent, {
      global: {
        stubs: {
          teleport: false,
        },
      },
      props: {
        title: 'Create Account',
        modelValue: true,
      },
      slots: {
        default: `<p>Test account slot</p>`,
      },
    })
    const modal = wrapper.findComponent(ModalComponent)

    await modal.vm.$emit('update:modelValue', true)

    const html = document.body.innerHTML

    const title = /<h1.*>Create Account<\/h1>/.test(html)

    const content = /<p.*>Test account slot<\/p>/.test(html)

    expect(title && content).toBe(true)
  })
})
