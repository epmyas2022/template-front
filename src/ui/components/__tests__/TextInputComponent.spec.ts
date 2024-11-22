import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TextInputComponent from '../TextInputComponent.vue'

describe('TextInputComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(TextInputComponent, {
      props: {
        value: 'Hello Vitest',
        name: 'text',
        placeholder: 'Test input',
        autocomplete: 'off',
        type: 'text',
      },
    })
    expect(wrapper.find('input').attributes('name')).toBe('text')
  })

  it('render input of type password', () => {
    const wrapper = mount(TextInputComponent, {
      props: {
        value: 'Hello Vitest',
        autocomplete: 'off',
        name: 'password',
        placeholder: 'Password',
        type: 'password',
      },
    })

    expect(wrapper.find('input').attributes('type')).toBe('password')
  })
})
